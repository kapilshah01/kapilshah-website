# Phase 7B — Topical Internal-Link Architecture Audit

## 1. Executive Summary

- **Total Published Guides Audited:** 13 static guides under `src/content/guides/`.
- **Hub Pages Audited:** 3 primary directory routes (`/guides`, `/small-business`, `/start-here`).
- **Overall Link Health:** Strong baseline. 100% of existing internal links resolve to valid, active 200 OK routes (0 broken links, 0 404s). Zero generic "click here" or "read more" anchor texts exist across the entire library.
- **Identified Architectural Opportunities:**
  1. *Hub Pathway Modernization:* `/small-business` and `/start-here` previously linked to generic `/guides` for device security because dedicated device guides did not exist when those hub pages were authored. With `small-business-computer-laptop-security` now published, these hubs should link directly to the guide.
  2. *Topical Silo Integration:* Certain technical pairs were asymmetrical (e.g., Wi-Fi network DNS vs. authoritative domain DNS; full-disk encryption on laptops vs. endpoint backup scope; MFA recovery codes vs. password manager vaults). Connecting these logical complements strengthens topical clustering and user journeys.
  3. *Under-linked Spoke Guides:* Prior to this audit, `small-business-wifi-network-security` had only 2 incoming links, `small-business-domain-name-security` had 3, and `small-business-computer-laptop-security` had 3.

---

## 2. Current Link Graph Matrix

| Guide Slug | Outgoing Guides | Incoming Guides | Inbound Sources |
|---|---|---|---|
| `business-email-compromise-small-business-payment-fraud` | 10 | 6 | `employee-offboarding`, `microsoft-365`, `cybersecurity-checklist`, `domain-name`, `incident-response`, `phishing-protection` |
| `employee-offboarding-security-checklist` | 6 | 7 | `bec`, `microsoft-365`, `cybersecurity-checklist`, `domain-name`, `password-manager`, `password-policy`, `wifi-network` |
| `mfa-for-small-businesses` | 3 | 11 | `bec`, `employee-offboarding`, `microsoft-365`, `computer-laptop`, `cybersecurity-checklist`, `domain-name`, `incident-response`, `password-manager`, `password-policy`, `phishing-protection`, `wifi-network` |
| `microsoft-365-security-small-business` | 8 | 5 | `bec`, `employee-offboarding`, `mfa`, `cybersecurity-checklist`, `domain-name` |
| `small-business-backup-ransomware-protection` | 2 | 4 | `bec`, `computer-laptop`, `cybersecurity-checklist`, `incident-response` |
| `small-business-computer-laptop-security` | 6 | 3 | `employee-offboarding`, `cybersecurity-checklist`, `wifi-network` |
| `small-business-cybersecurity-checklist` | 12 | 12 | *All 12 other guides link to the checklist hub* |
| `small-business-domain-name-security` | 8 | 3 | `bec`, `microsoft-365`, `cybersecurity-checklist` |
| `small-business-incident-response-plan` | 4 | 7 | `bec`, `microsoft-365`, `backup-ransomware`, `computer-laptop`, `cybersecurity-checklist`, `domain-name`, `wifi-network` |
| `small-business-password-manager-guide` | 4 | 7 | `bec`, `employee-offboarding`, `computer-laptop`, `cybersecurity-checklist`, `domain-name`, `password-policy`, `wifi-network` |
| `small-business-password-policy` | 5 | 5 | `bec`, `microsoft-365`, `cybersecurity-checklist`, `password-manager`, `wifi-network` |
| `small-business-phishing-protection` | 3 | 7 | `bec`, `mfa`, `microsoft-365`, `cybersecurity-checklist`, `domain-name`, `password-policy`, `wifi-network` |
| `small-business-wifi-network-security` | 8 | 2 | `computer-laptop`, `cybersecurity-checklist` |

---

## 3. Topical Clusters

The 13 guides organize cleanly into four logical topical clusters, connected by the central hub guide (`small-business-cybersecurity-checklist`):

```
                                 ┌──────────────────────────────────────────────┐
                                 │   small-business-cybersecurity-checklist     │
                                 │             (Foundational Hub)               │
                                 └──────────────────────┬───────────────────────┘
                                                        │
         ┌─────────────────────────┬────────────────────┴────────────────┬────────────────────────┐
         ▼                         ▼                                     ▼                        ▼
┌──────────────────┐     ┌──────────────────┐                  ┌──────────────────┐     ┌──────────────────┐
│ Cluster 1: IAM   │     │ Cluster 2: Device│                  │ Cluster 3: Threat│     │ Cluster 4: Ops & │
│ & Authentication │     │ & Network Infra  │                  │ & Domain Defense │     │ Incident Recovery│
├──────────────────┤     ├──────────────────┤                  ├──────────────────┤     ├──────────────────┤
│ - MFA Guide      │     │ - Laptop/Work-   │                  │ - Phishing       │     │ - Backup &       │
│ - Password Policy│     │   station Sec    │                  │   Protection     │     │   Ransomware     │
│ - Password Vault │     │ - Wi-Fi Network  │                  │ - BEC & Payment  │     │ - Incident       │
│ - Microsoft 365  │     │   Security       │                  │   Fraud          │     │   Response Plan  │
│   Tenant Sec     │     │                  │                  │ - Domain & DNS   │     │ - Employee       │
│                  │     │                  │                  │   Security       │     │   Offboarding    │
└──────────────────┘     └──────────────────┘                  └──────────────────┘     └──────────────────┘
```

1. **Cluster 1: Identity & Access Management (IAM):**
   - Core Guides: `mfa-for-small-businesses`, `small-business-password-policy`, `small-business-password-manager-guide`, `microsoft-365-security-small-business`.
   - Theme: User authentication factors, credential vaulting, credential lifecycle, and cloud tenant identity boundaries.
2. **Cluster 2: Workplace, Device & Network Infrastructure:**
   - Core Guides: `small-business-computer-laptop-security`, `small-business-wifi-network-security`.
   - Theme: Physical hardware encryption, OS patching, endpoint defense, router hardening, network segmentation, and wireless encryption.
3. **Cluster 3: Communication, Email & Domain Defense:**
   - Core Guides: `small-business-phishing-protection`, `business-email-compromise-small-business-payment-fraud`, `small-business-domain-name-security`.
   - Theme: Social engineering defenses, email authentication (SPF/DKIM/DMARC), payment verification procedures, and domain/DNS infrastructure.
4. **Cluster 4: Operations, Governance & Incident Recovery:**
   - Core Guides: `small-business-cybersecurity-checklist`, `small-business-backup-ransomware-protection`, `small-business-incident-response-plan`, `employee-offboarding-security-checklist`.
   - Theme: Multi-system baselines, disaster recovery, data immutability, out-of-band crisis coordination, and access de-provisioning.

---

## 4. Hub Page Pathway Analysis

| Hub Route | File | Current Status | Assessment & Recommended Improvement |
|---|---|---|---|
| `/guides` | `src/app/guides/page.tsx` | Excellent | Renders all 13 published guides by pillar using dynamic `getAllArticles()` query. Every guide is 1 click away. |
| `/small-business` | `src/app/small-business/page.tsx` | Needs Enhancement | Area 4 ("Website and device security") links generically to `/guides`. Update copy to "Workstation and device security" and link directly to `/guides/small-business-computer-laptop-security`. |
| `/start-here` | `src/app/start-here/page.tsx` | Needs Enhancement | Step 3 ("Secure devices and websites") links generically to `/guides`. Update copy to "Secure work computers" and link directly to `/guides/small-business-computer-laptop-security`. |

---

## 5. Missing High-Value & Medium Links (Proposed Implementation)

| Priority | Source File | Location | Target Guide | Proposed Anchor Text | Justification |
|---|---|---|---|---|---|
| **HIGH** | `src/app/small-business/page.tsx` | Area 4 Card | `/guides/small-business-computer-laptop-security` | `Explore guidance` (Card: Workstation and device security) | Eliminates generic bounce to `/guides`; guides user directly to device protection. |
| **HIGH** | `src/app/start-here/page.tsx` | Step 3 Card | `/guides/small-business-computer-laptop-security` | `Explore related guides` (Step: Secure work computers) | Connects Step 3 of the beginner progression directly to the workstation security guide. |
| **HIGH** | `src/content/guides/mfa-for-small-businesses.mdx` | Line 75 | `/guides/small-business-password-manager-guide` | `password manager` | Users saving MFA recovery codes need a secure business vault to store them. |
| **HIGH** | `src/content/guides/mfa-for-small-businesses.mdx` | Line 95 | `/guides/employee-offboarding-security-checklist` | `employee offboarding` | Warning against leaving former staff enrolled in MFA directly requires an offboarding checklist. |
| **HIGH** | `src/content/guides/small-business-backup-ransomware-protection.mdx` | Line 21 | `/guides/small-business-computer-laptop-security` | `work laptops and computers` | Specifying backup coverage across physical devices directly connects to endpoint hygiene. |
| **HIGH** | `src/content/guides/small-business-backup-ransomware-protection.mdx` | Line 24 | `/guides/mfa-for-small-businesses` | `multi-factor authentication (MFA)` | Protecting backup administrative accounts requires MFA to prevent ransomware operators from deleting backups. |
| **HIGH** | `src/content/guides/small-business-phishing-protection.mdx` | Line 71 | `/guides/small-business-domain-name-security` | `domain name and DNS records` | Explaining SPF, DKIM, and DMARC naturally directs the reader to domain and DNS management. |
| **HIGH** | `src/content/guides/small-business-phishing-protection.mdx` | Line 77 | `/guides/small-business-password-manager-guide` | `business password manager` | In the section discussing password managers and MFA, links directly to the password manager guide. |
| **MEDIUM** | `src/content/guides/small-business-wifi-network-security.mdx` | Line 178 | `/guides/small-business-domain-name-security` | `small business domain name and DNS security` | Distinguishes outbound protective recursive DNS from authoritative domain DNS protection. |
| **MEDIUM** | `src/content/guides/small-business-domain-name-security.mdx` | Line 119 | `/guides/small-business-wifi-network-security` | `small business office Wi-Fi security guide` | Connects local network / router cache poisoning risks to Wi-Fi router hardening. |
| **MEDIUM** | `src/content/guides/small-business-incident-response-plan.mdx` | Line 40 | `/guides/small-business-computer-laptop-security` | `work computer and laptop security guide` | Lost/stolen device response step links to workstation encryption and remote wipe protocols. |
| **MEDIUM** | `src/content/guides/small-business-computer-laptop-security.mdx` | Line 60 | `/guides/microsoft-365-security-small-business` | `Microsoft 365 security guide` | Mentions backing up BitLocker keys to Entra ID, connecting device security to cloud tenant administration. |

---

## 6. Proposed Anchor-Text Improvements

| Source File | Approximate Location | Current Anchor | Proposed Anchor | Justification |
|---|---|---|---|---|
| `src/content/guides/small-business-incident-response-plan.mdx` | Line 62 | `MFA rollout` | `multi-factor authentication rollout` | Expands acronym for clearer standalone clarity without changing destination or intent. |

---

## 7. Links Intentionally NOT Recommended (Anti-Link-Stuffing)

1. **Forcing Cross-Cluster Links in Every Article:**  
   Avoid linking from Wi-Fi security to Payment Fraud (BEC) or Password Policy to Ransomware Backups where there is no direct conceptual need. Cross-cluster navigation is already handled cleanly by the foundational checklist and related articles widget.
2. **Repetitive In-Page Duplicate Links:**  
   Avoid repeating the same link multiple times in adjacent sections of an article. A single high-intent link placed in the most relevant section is clearer for users and cleaner for search crawlers.

---

## 8. Phase 7B Implementation Status

### Links Added
1. **`/small-business` → `/guides/small-business-computer-laptop-security`:**
   - Updated the generic "Website and device security" card to "Workstation and device security", directing users directly to laptop encryption and endpoint hygiene.
2. **`/start-here` → `/guides/small-business-computer-laptop-security`:**
   - Updated Step 3 from generic `/guides` to "Secure work computers" linking directly to workstation and laptop security.
3. **`mfa-for-small-businesses.mdx` → `/guides/small-business-password-manager-guide`:**
   - Linked recovery code storage guidance to the password manager guide (`password manager`).
4. **`mfa-for-small-businesses.mdx` → `/guides/employee-offboarding-security-checklist`:**
   - Linked MFA mistake regarding unrevoked former employee factors to the offboarding checklist (`employee offboarding`).
5. **`small-business-backup-ransomware-protection.mdx` → `/guides/small-business-computer-laptop-security`:**
   - Linked backup coverage scope to the workstation security guide (`work laptops and computers`).
6. **`small-business-backup-ransomware-protection.mdx` → `/guides/mfa-for-small-businesses`:**
   - Linked backup administrator credential protection to the MFA guide (`multi-factor authentication (MFA)`).
7. **`small-business-phishing-protection.mdx` → `/guides/small-business-domain-name-security`:**
   - Linked email authentication DNS records (SPF, DKIM, DMARC) to the domain and DNS security guide (`domain name and DNS records`).
8. **`small-business-phishing-protection.mdx` → `/guides/small-business-password-manager-guide`:**
   - Linked unique password management in phishing defense to the password manager guide (`business password manager`).
9. **`small-business-wifi-network-security.mdx` → `/guides/small-business-domain-name-security`:**
   - Linked Section 6 (threat-blocking recursive DNS) to authoritative domain protection (`small business domain name and DNS security`).
10. **`small-business-domain-name-security.mdx` → `/guides/small-business-wifi-network-security`:**
    - Linked DNSSEC cache poisoning section to the office Wi-Fi security guide (`small business office Wi-Fi security guide`).
11. **`small-business-incident-response-plan.mdx` → `/guides/small-business-computer-laptop-security`:**
    - Linked lost/stolen hardware first action to the laptop security guide (`work computer and laptop security guide`).
12. **`small-business-computer-laptop-security.mdx` → `/guides/microsoft-365-security-small-business`:**
    - Linked BitLocker recovery key Entra ID cloud backup to the Microsoft 365 security guide (`Microsoft 365 security guide`).
13. **`small-business-password-manager-guide.mdx` → `/guides/small-business-phishing-protection`:**
    - Linked autofill domain checking advice in common mistakes to the phishing protection guide (`small business phishing protection guide`).

### Anchor Text Improvements
1. **`small-business-incident-response-plan.mdx` (Line 62):**
   - Changed `[MFA rollout]` to `[multi-factor authentication rollout]`, improving standalone clarity and descriptive quality.

### Links Intentionally NOT Added
1. **Cross-Cluster Unnatural Links:**
   - Intentionally avoided linking from Wi-Fi security to Payment Fraud (BEC) or Password Policy to Ransomware Backups. The user journey across disparate domains is maintained via the central checklist and curated related articles widget.
2. **Duplicate Inline Links:**
   - Maintained a strict rule of a single high-intent contextual link per topical subject within an article rather than linking every repeated instance of a keyword.

### Files Modified
- `src/app/small-business/page.tsx`
- `src/app/start-here/page.tsx`
- `src/content/guides/mfa-for-small-businesses.mdx`
- `src/content/guides/small-business-backup-ransomware-protection.mdx`
- `src/content/guides/small-business-computer-laptop-security.mdx`
- `src/content/guides/small-business-domain-name-security.mdx`
- `src/content/guides/small-business-incident-response-plan.mdx`
- `src/content/guides/small-business-password-manager-guide.mdx`
- `src/content/guides/small-business-phishing-protection.mdx`
- `src/content/guides/small-business-wifi-network-security.mdx`

### Validation Results
- **`git diff --check`:** PASSED (0 errors, clean diff)
- **`npm.cmd run check`:** PASSED (ESLint: 0 errors; TypeScript: 0 errors)
- **`npm.cmd run build`:** PASSED (All 24 static pages generated successfully in 2.7s)
- **`git diff --stat`:** 10 files changed, 14 insertions(+), 14 deletions(-)
- **`git status --short`:** Clean working tree with only the 10 modified files and the untracked audit documents.

### Remaining Opportunities for Future Phases
- When future guides on remote work / VPNs, endpoint detection (EDR), or software supply chain security are created, integrate them into the workplace and infrastructure cluster.
- Monitor Search Console click-through paths as impressions grow to identify high-traffic entry points needing additional contextual pathways.
