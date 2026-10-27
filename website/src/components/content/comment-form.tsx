"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Loader2 } from "lucide-react";

interface CommentFormProps {
  articleSlug: string;
  onSubmitted: () => void;
}

export function CommentForm({ articleSlug, onSubmitted }: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [fallbackEmail, setFallbackEmail] = useState("");
  const [pending, setPending] = useState(false);

  const maxBodyLength = 2000;
  const minBodyLength = 10;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setFallbackEmail("");

    const trimmedName = name.trim();
    const trimmedBody = body.trim();

    if (trimmedName.length < 2) {
      setError("Please provide a name of at least 2 characters.");
      return;
    }
    if (trimmedBody.length < minBodyLength) {
      setError(`Comment must be at least ${minBodyLength} characters long.`);
      return;
    }

    setPending(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleSlug,
          comment: {
            name: trimmedName,
            email: email.trim() || undefined,
            body: trimmedBody,
          },
          companyWebsite: (event.currentTarget.elements.namedItem("companyWebsite") as HTMLInputElement)?.value || "",
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
        fallbackEmail?: string;
      };

      if (!response.ok) {
        setError(
          result.message ||
            "We could not submit your comment right now. Please try emailing it directly to our editorial inbox."
        );
        if (result.fallbackEmail) {
          setFallbackEmail(result.fallbackEmail);
        }
        return;
      }

      setName("");
      setEmail("");
      setBody("");
      setMessage(result.message || "Your comment has been submitted for review.");
      onSubmitted();
    } catch {
      setError(
        "A network error occurred while submitting your comment. You can send it directly to kapilshahsonar@gmail.com."
      );
      setFallbackEmail("kapilshahsonar@gmail.com");
    } finally {
      setPending(false);
    }
  }

  const mailtoUrl = `mailto:kapilshahsonar@gmail.com?subject=${encodeURIComponent(
    `Comment on guide: ${articleSlug}`
  )}&body=${encodeURIComponent(
    `Name: ${name.trim() || "Visitor"}\n\nComment:\n${body.trim()}`
  )}`;

  return (
    <div className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2">
        <Send className="h-4 w-4 text-primary" aria-hidden="true" />
        <h3 className="text-base font-bold text-foreground">Leave a Comment</h3>
      </div>
      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
        Share your real-world perspective, question, or correction. Submissions are reviewed for editorial relevance before publishing.
      </p>

      {message ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success flex items-start gap-3"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-success" />
          <div>
            <p className="font-semibold">{message}</p>
            <p className="mt-1 text-xs text-success/90">
              Thank you for contributing! Your submission is in the moderation queue.
            </p>
          </div>
        </div>
      ) : null}

      {error ? (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-destructive" />
            <div className="space-y-2 flex-1">
              <p className="font-medium">{error}</p>
              {fallbackEmail ? (
                <div className="pt-1">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-destructive/15 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/25 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email this comment to {fallbackEmail}</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="comment-company-website">Leave this field empty</label>
          <input
            id="comment-company-website"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="new-password"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="comment-name"
              className="block text-xs font-semibold text-foreground uppercase tracking-wider"
            >
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="comment-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Alex Chen"
              className="mt-1.5 min-h-10 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="comment-email"
              className="block text-xs font-semibold text-foreground uppercase tracking-wider"
            >
              Email <span className="font-normal text-muted-foreground lowercase">(optional)</span>
            </label>
            <input
              id="comment-email"
              name="email"
              type="email"
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="mt-1.5 min-h-10 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="mt-1 text-[11px] text-muted-foreground">
              Used only if we need clarification. Never displayed publicly.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="comment-body"
              className="block text-xs font-semibold text-foreground uppercase tracking-wider"
            >
              Comment <span className="text-destructive">*</span>
            </label>
            <span
              className={`text-[11px] font-mono ${
                body.length > maxBodyLength
                  ? "text-destructive font-bold"
                  : "text-muted-foreground"
              }`}
            >
              {body.length} / {maxBodyLength}
            </span>
          </div>
          <textarea
            id="comment-body"
            name="body"
            required
            minLength={minBodyLength}
            maxLength={maxBodyLength}
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts, implementation observations, or questions about this security control..."
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all leading-relaxed"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <button
            type="submit"
            disabled={pending || body.trim().length < minBodyLength || name.trim().length < 2}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
          >
            {pending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Submitting comment…</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Submit Comment</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-muted-foreground">
            Constructive, vendor-neutral discussion only. Markdown supported.
          </p>
        </div>
      </form>
    </div>
  );
}
