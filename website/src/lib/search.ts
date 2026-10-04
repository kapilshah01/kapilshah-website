import { searchIndex, type SearchItem } from "@/data/search-index";

export interface SearchResult {
  item: SearchItem;
  score: number;
  matchedField: "title" | "tag" | "category" | "description" | "content" | "none";
  snippet?: string;
}

/**
 * Searches published guides and resources using a client-side weighted ranking index.
 * - Empty query returns all items in default editorial order.
 * - Multi-word queries enforce AND matching across all resource fields.
 * - Ranking priority: Exact title > Partial title > Tags/Category > Description > Body text.
 */
export function searchContent(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();

  // Initial state: empty query returns all published resources
  if (!q) {
    return searchIndex.map((item) => ({
      item,
      score: 1,
      matchedField: "none",
    }));
  }

  const terms = q.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const item of searchIndex) {
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const catLower = item.categoryLabel.toLowerCase();
    const tagsLower = item.tags.map((t) => t.toLowerCase()).join(" ");
    const contentLower = item.content.toLowerCase();

    // Multi-word matching: all terms must match somewhere in this resource
    const matchesAll = terms.every(
      (term) =>
        titleLower.includes(term) ||
        descLower.includes(term) ||
        catLower.includes(term) ||
        tagsLower.includes(term) ||
        contentLower.includes(term)
    );

    if (!matchesAll) continue;

    let score = 0;
    let matchedField: SearchResult["matchedField"] = "content";

    // 1. Exact or partial title match
    if (titleLower === q) {
      score += 1000;
      matchedField = "title";
    } else if (titleLower.startsWith(q)) {
      score += 600;
      matchedField = "title";
    } else if (titleLower.includes(q)) {
      score += 400;
      matchedField = "title";
    }

    for (const t of terms) {
      if (titleLower.includes(t)) {
        score += 150;
        if (matchedField === "content") matchedField = "title";
      }
    }

    // 2. Tags exact or partial match
    if (item.tags.some((t) => t.toLowerCase() === q)) {
      score += 300;
      matchedField = "tag";
    }
    for (const t of terms) {
      if (item.tags.some((tag) => tag.toLowerCase().includes(t))) {
        score += 80;
        if (matchedField === "content") matchedField = "tag";
      }
    }

    // 3. Category match
    if (catLower.includes(q)) {
      score += 100;
      if (matchedField === "content") matchedField = "category";
    }
    for (const t of terms) {
      if (catLower.includes(t)) {
        score += 50;
        if (matchedField === "content") matchedField = "category";
      }
    }

    // 4. Description match
    if (descLower.includes(q)) {
      score += 120;
      if (matchedField === "content") matchedField = "description";
    }
    for (const t of terms) {
      if (descLower.includes(t)) {
        score += 40;
        if (matchedField === "content") matchedField = "description";
      }
    }

    // 5. Body text match
    if (contentLower.includes(q)) {
      score += 50;
    }
    let contentHits = 0;
    for (const t of terms) {
      if (contentLower.includes(t)) {
        contentHits += 10;
      }
    }
    score += Math.min(contentHits, 50);

    // Deep excerpt snippet extraction when matched in body content
    let snippet: string | undefined;
    if (matchedField === "content" || !descLower.includes(q)) {
      const firstMatchedTerm = terms.find((t) => contentLower.includes(t)) || terms[0];
      const matchIndex = contentLower.indexOf(firstMatchedTerm);
      if (matchIndex !== -1) {
        const start = Math.max(0, matchIndex - 50);
        const end = Math.min(item.content.length, matchIndex + firstMatchedTerm.length + 80);
        let excerpt = item.content.slice(start, end).trim();
        if (start > 0) excerpt = "..." + excerpt;
        if (end < item.content.length) excerpt = excerpt + "...";
        snippet = excerpt;
      }
    }

    results.push({ item, score, matchedField, snippet });
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);
  return results;
}

