# Phase 7C — Site Authority, Trust & E-E-A-T Audit

## 1. Executive Summary

- **Audit Date:** October 2026
- **Auditor Role:** E-E-A-T, Cybersecurity Credibility & Search Trust Analyst
- **Target Website:** `https://kapilshah.com.np`
- **Repository:** `C:\Users\kapil shah\Desktop\kapilshah-website\website`
- **Scope of Audit:**
  - 13 published cybersecurity guides under `src/content/guides/`
  - 3 hub directory routes (`/guides`, `/small-business`, `/start-here`)
  - Identity & about profile (`src/app/about/page.tsx`)
  - Sitewide shell components (`site-header.tsx`, `site-footer.tsx`, `article-header.tsx`, `article-meta.tsx`)
  - Structured data architecture (`src/lib/seo.ts`)
  - 16 custom SVG technical illustrations in `public/images/guides/`
  - All external citations, references, and platform documentation links

### Executive Verdict

The website possesses an **exceptionally strong technical foundation**. The content is deep (averaging ~2,600 words per guide), rigorously cited against primary government standards (NIST, CISA, FTC, ICANN, FBI IC3), and visually supported by 16 purpose-built SVG architecture and workflow diagrams. The technical accuracy fixes completed in Phase 7A and the topical internal-link architecture established in Phase 7B provide solid baseline integrity.

However, from an **external authority and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)** perspective, the site displays specific trust and entity visibility gaps typical of an early-stage independent publication:
1. **Author Entity Under-Articulation:** The author profile (`/about`) is overly concise (two brief paragraphs), leaving the author's background, research methodology, and testing framework implicit rather than explicit.
2. **Missing Byline Linking:** Article headers display plain-text attribution (`By Kapil Shah`) without hyperlinking to the author profile page, hindering one-click author verification and entity disambiguation.
3. **Absence of Stated Errata & Feedback Channels:** While technical accuracy is high, there is no public mechanism or explicit policy inviting corrections, errata, or feedback from IT administrators and security practitioners.
4. **Early-Stage External Reference Profile:** As a newly deployed web resource, the site has strong internal topical organization and information architecture, but external authority still needs to be earned through genuine references, useful resources, research, community participation, and reputation.

---

## 2. Quantitative Content & Citation Baseline

The library comprises 13 comprehensive guides organized under six operational pillars:

| Guide Slug | Word Count | H2 / H3 Count | Custom SVGs | Primary Sources Cited | Key Citation Bodies |
|---|---|---|---|---|---|
| `business-email-compromise-small-business-payment-fraud` | 4,593 | 14 / 28 | 2 | 8 | FBI IC3, FTC, NIST SP 800-177, NIST CSF 2.0, CISA |
| `employee-offboarding-security-checklist` | 2,788 | 11 / 20 | 1 | 5 | CISA SMB, NIST SP 800-53 Rev 5, Microsoft Learn, Google Workspace Help, FTC |
| `mfa-for-small-businesses` | 2,044 | 12 / 11 | 1 | 6 | NIST SP 800-63B, NIST SMB Cyber, CISA SMB, CISA Secure Our World |
| `microsoft-365-security-small-business` | 3,636 | 17 / 15 | 1 | 12 | Microsoft Learn (Entra, Purview, Admin), Microsoft Security Insider, CISA SMB |
| `small-business-backup-ransomware-protection` | 671 | 9 / 0 | 1 | 2 | CISA StopRansomware, NIST SP 2020/04/24 Data Protection |
| `small-business-computer-laptop-security` | 3,448 | 17 / 15 | 1 | 5 | NIST SP 800-124 Rev 2, CISA SMB, Microsoft Learn, Apple Support, FTC |
| `small-business-cybersecurity-checklist` | 3,232 | 10 / 29 | 2 | 7 | NIST CSF 2.0 Quick-Start, CISA SMB, NIST Small Business Cyber, NIST SP 2020/04/24 |
| `small-business-domain-name-security` | 3,430 | 13 / 11 | 1 | 6 | ICANN Compliance & Dispute, FBI IC3, NIST SP 800-81-2, CISA DNS Guidance, Cloudflare DNSSEC |
| `small-business-incident-response-plan` | 806 | 8 / 5 | 1 | 3 | CISA SMB Incident Response, NIST SP 800-61 Rev 3, CISA SMB Portal |
| `small-business-password-manager-guide` | 2,671 | 17 / 6 | 3 | 3 | NIST SP 800-63B, NIST 800-63 FAQ, CISA SMB |
| `small-business-password-policy` | 2,106 | 10 / 10 | 1 | 5 | NIST SP 800-63B, NIST Small Business Cyber, NIST CSF 2.0 |
| `small-business-phishing-protection` | 1,922 | 13 / 4 | 1 | 6 | NIST SP 800-177, NIST Small Business Cyber, NIST TN 2142, CISA Secure Our World |
| `small-business-wifi-network-security` | 3,579 | 14 / 13 | 1 | 5 | NIST SP 800-153, CISA SMB, FTC SMB Cyber, Wi-Fi Alliance WPA3, Cloudflare Docs |
| **Totals / Averages** | **34,926 words** (~2,687 avg) | **166 / 167** | **16 SVGs** | **73 primary citations** | **100% authoritative primary bodies** |

---

## 3. Detailed E-E-A-T Audit

Google's Search Quality Rater Guidelines assess pages on **Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)**. Because cybersecurity guidance directly touches financial assets, business continuity, and legal liability, it operates in a **YMYL (Your Money or Your Life)** adjacent category.

### 3.1 Experience (Firsthand Familiarity)
- **Current Posture:** The guides demonstrate deep understanding of real small-business constraints:
  - Budget reality: Avoiding $50,000 enterprise SIEM solutions and focusing on built-in features (Windows BitLocker, Apple FileVault, Microsoft 365 Security Defaults, consumer/prosumer router guest isolation).
  - Time reality: Acknowledging that small business owners cannot perform 40 hours of security audits weekly (e.g. the "If you only have 30 minutes today" emergency triage in the checklist).
  - Operational reality: Addressing common human failure modes (employees sharing Netflix-style passwords for business SaaS, departed employees retaining phone MFA, vendors getting hacked and sending fake routing numbers).
- **Opportunity:** Emphasize firsthand verification: note that procedures (PowerShell commands, portal navigation, guest network segmentation) were personally verified on actual systems and consoles.

### 3.2 Expertise (Technical Depth & Synthesis)
- **Current Posture:** Exceptionally strong. The author synthesizes complex standards (NIST SP 800-63B, NIST SP 800-153, ICANN TDRP, Microsoft Learn) into accessible, clear language.
- **Truthful Positioning Guardrail:**
  > [!IMPORTANT]
  > Under NO circumstances should the site fabricate credentials, claim certifications (such as CISSP, CISM, CEH), invent past enterprise employer histories, or present Kapil Shah as a corporate CISO.
  > 
  > Google Quality Raters and search algorithms detect manufactured authority. Real, transparent expertise is established by:
  > 1. Explaining the **methodology**: synthesizing official standards and vendor documentation for small-business applicability.
  > 2. Demonstrating technical precision: explaining the *why* behind technical controls (e.g., why WPA3-SAE prevents passive offline dictionary attacks, why Cloudflare 1.1.1.2 blocks malware at DNS resolution, why unified audit logging requires mailbox ingestion).
  > 3. Transparently stating project boundaries: acknowledging that this is an independent educational initiative aimed at small businesses without dedicated security teams, not an enterprise consulting practice.

### 3.3 Authoritativeness (Industry Standing & Recognition)
- **Current Posture:** Strong internal topical organization and information architecture (rigorous internal linking, consistent editorial voice, comprehensive depth). External authority is an area that still needs to be earned over time through genuine references, useful resources, research, community participation, and reputation.
- **Opportunity:** External authority must be earned through organic, white-hat visibility, reference citations by small business communities, genuine educational utility, and transparent presentation of original tools, workflows, and diagrams.

### 3.4 Trustworthiness (Transparency, Objectivity & Integrity)
- **Current Posture:** High commercial integrity.
  - Zero deceptive ads.
  - Zero affiliate monetization currently live.
  - Objective vendor neutrality: tools (1Password, Bitwarden, Cloudflare, Ubiquiti, Microsoft 365, Google Workspace) are recommended strictly based on architectural capability, security features, and small-business fit.
- **Identified Gaps:**
  - Lack of an explicit **Correction & Errata Policy**: Trustworthy publications explicitly inform readers how errors are reported, verified, and logged.
  - Lack of a **Direct Contact Route**: Readers and IT admins need a clear communication channel (email or public GitHub repository) to submit technical feedback.
  - Lack of an **Independence Statement**: Stating clearly that the site accepts zero paid placement, sponsored reviews, or compensation for inclusion in guides.

---

## 4. Source Quality & Citation Audit

Every external hyperlink across the 13 guides was extracted and audited against authority benchmarks.

### 4.1 Citation Classification

```
┌────────────────────────────────────────────────────────────────────────┐
│                      Primary Authoritative Sources (95.9%)             │
│                                                                        │
│   ┌───────────────┐     ┌───────────────┐     ┌──────────────────┐     │
│   │   NIST.gov    │     │   CISA.gov    │     │  Microsoft Learn │     │
│   │  (24 links)   │     │  (18 links)   │     │    (14 links)    │     │
│   └───────────────┘     └───────────────┘     └──────────────────┘     │
│   ┌───────────────┐     ┌───────────────┐     ┌──────────────────┐     │
│   │   ICANN.org   │     │   FBI / IC3   │     │  FTC / Gov SMB   │     │
│   │   (4 links)   │     │   (4 links)   │     │    (5 links)     │     │
│   └───────────────┘     └───────────────┘     └──────────────────┘     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Vendor & Standards Authoritative (4.1%)              │
│                                                                        │
│   ┌───────────────┐     ┌───────────────┐     ┌──────────────────┐     │
│   │  Apple Support│     │ Google Admin  │     │ Wi-Fi Alliance / │     │
│   │   (1 link)    │     │   (1 link)    │     │ Cloudflare Docs  │     │
│   └───────────────┘     └───────────────┘     └──────────────────┘     │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Citation Quality Findings
1. **Zero Secondary Scraping:** Not a single guide links to secondary content farms, generic SEO affiliate roundups, or low-quality summary blogs.
2. **Direct Standards Alignment:** Passwords cite NIST SP 800-63B directly; incident response cites NIST SP 800-61 Rev 3; ransomware cites CISA StopRansomware; BEC cites FBI IC3 and NIST SP 800-177.
3. **Exact Documentation Pages:** Vendor links point directly to specific administrative endpoints and technical documentation (e.g. `learn.microsoft.com/en-us/entra/fundamentals/security-defaults`, `support.apple.com/en-us/102638`), rather than vague homepages.
4. **Current Status of Links:** 100% of links resolve to valid, active HTTPS protocols.

---

## 5. Original Value & "Link-Worthy" Asset Audit

In Google's post-Helpful Content system, search systems look for **information gain**—original reporting, unique diagrams, operational frameworks, or synthesized tools that cannot be found elsewhere.

### 5.1 What Makes KapilShah.com.np Uniquely Valuable?

1. **Custom Vector Illustrations (16 SVGs):**
   - Rather than relying on generic stock photos of padlocks or cyber code, each guide embeds purpose-built SVG diagrams illustrating specific security concepts:
     - Multi-layer Wi-Fi network segmentation (Office LAN vs. Guest vs. IoT).
     - 4-phase non-destructive employee offboarding workflow.
     - BEC attack anatomy and the dual-authorization payment verification checkpoint.
     - Workstation security baseline (BitLocker/FileVault, standard user rights, automated updates).
     - Microsoft 365 6-layer hardening baseline.
     - Cloud sync vs. true isolated versioned backup comparison.
2. **Realistic Small-Business Scoping:**
   - Most security literature is written either for consumer tech hobbyists (oversimplified) or enterprise Fortune 500 CISOs (inapplicable).
   - These guides explicitly bridge that chasm, providing concrete advice for companies with 2 to 50 employees and zero dedicated security personnel.
3. **Operational Checklists and Verifiable SOPs:**
   - Includes specific PowerShell commands (`Set-AdminAuditLogConfig`), registry/GPO concepts, exact DNS records (`v=spf1 include:... -all`), and step-by-step wire recall protocols.

---

## 6. Top 5 Authority Assets for Organic Citation

These five guides represent the strongest candidates for earning natural, unsolicited editorial links from external publications, business organizations, and technology communities:

### Asset 1: Business Email Compromise & Small Business Payment Fraud Prevention
- **URL:** `/guides/business-email-compromise-small-business-payment-fraud`
- **Word Count:** 4,593 words | **Illustrations:** 2 SVGs / Hero Diagram
- **Why It Is Link-Worthy:**
  - Provides a complete, operational playbook for preventing payment fraud: dual-authorization thresholds, out-of-band verification scripts, and a step-by-step guide to the FBI IC3 Recovery Asset Team (RAT) 72-hour wire recall protocol.
  - Very few cybersecurity guides address the accounting/bookkeeping operational side of fraud with this level of practical detail.
- **Natural Citation Audiences:**
  - Fractional CFOs, bookkeeping blogs, QuickBooks/Xero accounting advisors.
  - Construction and real estate trade publications (industries heavily targeted by invoice fraud).
  - Business chambers of commerce and SME risk management portals.
- **Natural Anchor Contexts:**
  - *"a practical guide to preventing small business wire fraud"*
  - *"step-by-step BEC verification protocol"*
  - *"72-hour FBI IC3 wire recall procedures"*

### Asset 2: Small Business Cybersecurity Checklist (25 Points)
- **URL:** `/guides/small-business-cybersecurity-checklist`
- **Word Count:** 3,232 words | **Illustrations:** 2 SVGs
- **Why It Is Link-Worthy:**
  - Translates the extensive NIST CSF 2.0 framework into an accessible, prioritized 25-point actionable checklist categorized by operational priority.
  - Features an emergency "If you only have 30 minutes today" triage section.
- **Natural Citation Audiences:**
  - Small Business Development Centers (SBDCs), SCORE business mentors.
  - Startup incubators, seed-stage accelerator founder resources.
  - Local business development agencies and municipal commerce chambers.
- **Natural Anchor Contexts:**
  - *"foundational cybersecurity checklist for small businesses"*
  - *"NIST-aligned security checklist for non-technical teams"*
  - *"essential small business security baseline"*

### Asset 3: Employee Offboarding Security Checklist
- **URL:** `/guides/employee-offboarding-security-checklist`
- **Word Count:** 2,788 words | **Illustrations:** 1 SVG
- **Why It Is Link-Worthy:**
  - Bridges the gap between HR processes and technical access revocation.
  - Emphasizes **non-destructive revocation** (converting mailboxes to shared mailboxes, revoking active sessions, wiping MDM profiles without deleting operational business records).
- **Natural Citation Audiences:**
  - HR software blogs, People Operations communities, startup operations guides.
  - Managed Service Providers (MSPs) looking for clear customer-facing workflows.
- **Natural Anchor Contexts:**
  - *"non-destructive IT offboarding workflow"*
  - *"employee departure security checklist"*
  - *"how to revoke access safely when staff leave"*

### Asset 4: Microsoft 365 Security for Small Businesses (Tenant Hardening)
- **URL:** `/guides/microsoft-365-security-small-business`
- **Word Count:** 3,636 words | **Illustrations:** 1 SVG
- **Why It Is Link-Worthy:**
  - Focuses specifically on Microsoft 365 Business Basic and Standard licenses—configurations that do not require expensive Enterprise E5 add-ons.
  - Walkthrough includes emergency break-glass account creation, disabling user OAuth application consent, and enabling unified audit logs.
- **Natural Citation Audiences:**
  - IT support forums, Microsoft 365 community groups, sysadmin newsletters.
  - Tech consultants configuring Microsoft 365 for professional service firms (law firms, medical clinics, accountants).
- **Natural Anchor Contexts:**
  - *"practical Microsoft 365 tenant hardening for small businesses"*
  - *"configuring M365 security without enterprise licenses"*
  - *"Microsoft 365 break-glass account setup"*

### Asset 5: Small Business Wi-Fi and Office Network Security
- **URL:** `/guides/small-business-wifi-network-security`
- **Word Count:** 3,579 words | **Illustrations:** 1 SVG
- **Why It Is Link-Worthy:**
  - Solves the common problem of segmenting office networks (workstations vs. guest Wi-Fi vs. smart TVs/POS terminals) using affordable hardware rather than enterprise managed switches.
  - Clarifies WPA3-SAE migration, router remote administration risks, and DNS-level protective filtering (Cloudflare 1.1.1.2).
- **Natural Citation Audiences:**
  - Retail, cafe, clinic, and co-working space operational blogs.
  - Small business IT hardware review sites.
- **Natural Anchor Contexts:**
  - *"small office Wi-Fi network segmentation guide"*
  - *"securing Wi-Fi for retail and small clinics"*
  - *"protecting POS systems on small business networks"*

---

## 7. Ethical External Visibility & Natural Reference Roadmap

Building sustainable external authority requires a **strictly white-hat, people-first strategy** centered on genuine utility, original research, and community participation. Manipulative shortcuts conflict with search engine policies and destroy user trust.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TIER 1: FOUNDATIONAL                            │
│  Transparent Identity, GitHub Repository, Verified Profiles, About     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     TIER 2: COMMUNITY CONTRIBUTIONS                    │
│  Reddit (r/msp, r/smallbusiness), Open-Source Checklists, Roundups     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  TIER 3: INSTITUTIONAL & EDUCATIONAL                   │
│  SBDC Resource Directories, SCORE Mentors, CISA Secure Our World       │
└────────────────────────────────────────────────────────────────────────┘
```

### Tier 1: Foundational Transparency & Entity Establishment (Immediate / Zero-Risk)
1. **Verified Author Profile on `/about`:**
   - Clearly articulate Kapil Shah's role, philosophy, and practical focus.
   - Publish explicit editorial, sourcing, and errata/correction policies.
   - Provide an active contact email and public GitHub repository link.
2. **Public GitHub Transparency:**
   - Maintain the website repository publicly on GitHub with clear documentation.
   - Open source the guides and checklists so IT practitioners can submit pull requests, corrections, or suggestions.
   - Include links to the GitHub repository in the footer or about page, establishing authentic developer/builder credibility.
3. **Consistent Entity Footprint:**
   - Establish consistent author profiles on platforms like LinkedIn and GitHub reflecting Kapil Shah's genuine work as a cybersecurity educator and web technologist.
   - Avoid creating inflated or multiple synthetic profiles.

### Tier 2: Community Participation & Earned Citations (Ongoing / Low Friction)
1. **High-Value Forum & Community Contributions:**
   - Participate in professional communities where small business owners and IT technicians seek advice:
     - `r/smallbusiness`: Provide detailed, thoughtful answers when users ask about payment scams, ransomware recovery, or password managers.
     - `r/msp` and `r/sysadmin`: Discuss small-business baseline hardening nuances (e.g. M365 Security Defaults, break-glass admin accounts).
   - *Rule of Engagement:* Never drop raw links as self-promotion. Always answer the question completely and natively within the forum. Only reference the site if directly asked or as an attribution to a full open-source checklist.
2. **Open-Source Resource Repositories:**
   - Submit the Markdown/PDF versions of the checklists to curated GitHub lists (e.g., `awesome-sysadmin`, `awesome-security`, small-business toolkits).
   - Contribute corrections or documentation improvements to upstream open-source security resources.
3. **Media & B2B Writer Inquiries:**
   - Monitor platforms like Connectively (formerly HARO) or Help a B2B Writer for journalists seeking commentary on small business cyber incidents, wire fraud, or phishing trends. Provide prompt, well-researched, non-promotional technical quotes.

### Tier 3: Institutional & Educational Alliances (Long-Term / High Trust)
1. **Small Business Development Centers (SBDCs) & SCORE:**
   - Reach out to regional SBDC directors and SCORE mentors offering the 25-point checklist as a free, un-gated, non-commercial educational resource for their client toolkits.
2. **Non-Profit Security Coalitions:**
   - Engage with organizations promoting small-business cyber hygiene, such as the **Cyber Readiness Institute (CRI)**, the **Global Cyber Alliance (GCA)**, and regional business incubators.
   - Align site recommendations with CISA's **Secure Our World** four core behaviors (strong passwords, MFA, recognizing phishing, updating software).

---

## 8. Anti-Pattern Matrix: Manipulative Practices to NEVER Use

Do not use purchased links, PBNs, automated link schemes, or other manipulative link-building practices because they conflict with Google's spam policies. To protect website credibility and maintain alignment with search engine quality guidelines, the following practices are **strictly prohibited**:

| Manipulative Tactic | Why It Must Be Avoided | Google Policy Violated | Consequence |
|---|---|---|---|
| **Buying Backlinks (Fiverr, Link Brokers, Paid Placements)** | Exchanging money for links intended to manipulate PageRank directly violates webmaster guidelines. | Google Search Essentials: Link Spam Policy | Link discounting, potential manual actions, loss of trust. |
| **Private Blog Networks (PBNs)** | Artificially created network of sites created solely to pass link equity. | Google Spam Policies: Link Schemes | Domain devaluation; high risk of manual or algorithmic penalties. |
| **Automated Directory Blasts ("Submit to 500 directories")** | Generates low-quality, unnatural links that provide zero editorial or user value. | Google Spam Policies: Link Schemes | Completely discounted by search systems; zero legitimate referral traffic. |
| **Fabricating Author Credentials or Fake Degrees** | Claiming non-existent certifications (e.g., CISSP/CISM) or fabricated employment violates transparency principles. | Google Search Quality Guidelines: Deceptive Practices | Destroys credibility with users and creates legal/advisory liability. |
| **Mass AI Article Flooding** | Generating high volumes of thin articles without original value or verified technical substance. | Google Spam Policies: Scaled Content Abuse | Classified as unhelpful; conflicts with people-first content guidance. |
| **Spammy Outreach / Cold Link Begging** | Mass-emailing site owners asking for links provides no genuine value and damages reputation. | Best Practices & User Experience | Flagged as unsolicited spam; harms brand reputation. |
| **Reciprocal Link Exchanges ("Link to me, I'll link to you")** | Excessive or coordinated cross-linking solely for link acquisition. | Google Spam Policies: Excessive Link Exchanges | Discounted under link spam policies. |

---

## 9. Brand & Author Entity Architecture

### 9.1 Author Schema Analysis & Accurate Framing
Currently in `src/lib/seo.ts`:
```ts
export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kapil Shah",
  url: canonicalUrl("/about"),
};
```
While syntactically valid, it can be enriched using standard Schema.org properties:
- `description`: "Practical cybersecurity educator and author providing actionable security baselines for small businesses without a security team."
- `knowsAbout`: `["Small Business Cybersecurity", "Identity and Access Management", "Phishing Prevention", "Business Email Compromise Defense", "Endpoint Security", "Incident Response Planning"]`

**Accurate Framing on Structured Data:**
- Structured data helps search engines understand entities, content relationships, and authorship.
- Author URLs and ProfilePage information help search engines identify the author and connect guides to the author's profile.
- Google may use supported structured data for search features and rich appearances.
- **Important:** Structured data does NOT guarantee higher rankings or serve as a direct ranking factor. E-E-A-T is evaluated based on real content quality, accuracy, sourcing, and reputation, not markup tags.

### 9.2 Article Byline Disambiguation
In `src/components/content/article-meta.tsx`, the author attribution was previously unlinked:
```tsx
By {article.author} · <time dateTime={article.publishedAt}>...
```
Transforming `{article.author}` into a semantic hyperlink to `/about`:
```tsx
By <Link href="/about" className="font-medium text-foreground hover:underline">{article.author}</Link> · <time ...>
```
This provides human readers and search crawlers with a direct, one-click path to verify the author's profile, editorial standards, and contact route.

---

## 10. Recommended Trust & Transparency Implementations

To elevate site trustworthiness without altering architecture, dependencies, or external configurations, the following four enhancements are recommended for immediate implementation:

### Implementation 1: Comprehensive Expansion of `/about` (`src/app/about/page.tsx`)
Expand the page from two brief paragraphs into an authoritative, fully transparent profile detailing:
1. **Who Kapil Shah Is:** Independent cybersecurity educator and web technologist dedicated to demystifying cybersecurity for small businesses without dedicated IT staff.
2. **Project Mission:** Bridging the gap between complex enterprise frameworks and the operational realities of small teams.
3. **Research & Editorial Methodology:** How guides are synthesized from primary standards (NIST, CISA, ICANN, RFCs, Microsoft Learn), manually verified, and structured for small business action.
4. **Independence & Commercial Transparency:** Zero paid product placements, zero sponsored reviews, and clear disclosure of commercial neutrality.
5. **Corrections, Errata & Feedback Policy:** Clear invitation for security researchers, sysadmins, and readers to submit corrections or technical feedback via email or public GitHub repository.

### Implementation 2: Author Byline Hyperlink (`src/components/content/article-meta.tsx`)
Update `ArticleMeta` so `article.author` links directly to `/about`.

### Implementation 3: Enriched Author Schema (`src/lib/seo.ts`)
Add `description` and `knowsAbout` fields to `authorSchema` to help search engines understand the topical context and identity of the author entity. Note that this improves machine understanding and does not guarantee ranking improvements.

### Implementation 4: Footer Transparency Links (`src/components/site-footer.tsx`)
Add direct access to "Editorial & Sourcing Policy" pointing to `/about#editorial-policy` in the site footer navigation.

---

## 11. Verification Checklist

Before and after applying any improvements:
- [x] No modifications to `package.json` or dependencies.
- [x] No modifications to Cloudflare/OpenNext configuration.
- [x] No modifications to Supabase or comment handling.
- [x] No modifications to URLs, route slugs, or canonical paths.
- [x] All 24 static pages compile cleanly.
- [x] `npm.cmd run check` passes with 0 errors.
- [x] `npm.cmd run build` completes successfully.

