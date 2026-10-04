# Phase 8B — Interactive Checklist Architecture & Content Mapping

## 1. Executive Summary & Scope

- **Document:** Phase 8B Specification Report
- **Target Repository:** `C:\Users\kapil shah\Desktop\kapilshah-website\website`
- **Primary Source Guide:** `src/content/guides/small-business-cybersecurity-checklist.mdx`
- **Target Feature:** Standalone Interactive Web Checklist + Browser-Native Printable Executive Sheet
- **Target Route:** `/checklist`
- **Canonical Explanatory Guide:** `/guides/small-business-cybersecurity-checklist`
- **Core User:** Small-business owner, office manager, or operations lead with 2–50 employees and no dedicated IT/security team.
- **Strict Constraint:** **NO CODE IMPLEMENTATION PERFORMED DURING PHASE 8B.** No existing files were modified. No new routes were created. No packages or dependencies were added.

---

## 2. 25-Item Extraction & Detailed Content Mapping

Every item below is directly extracted from `src/content/guides/small-business-cybersecurity-checklist.mdx`. Terminology, recommendations, time horizons, and acceptance criteria reflect the existing guide without silent invention.

```
┌────────────────────────────────────────────────────────────────────────┐
│               CHECKLIST STRUCTURE: 25 OPERATIONAL CONTROLS             │
├────────────────────────────────────┬───────────────────────────────────┤
│ Category                           │ Items                             │
├────────────────────────────────────┼───────────────────────────────────┤
│ 1. Accounts and Access             │ Items 1–5                         │
│ 2. Business Email and Phishing     │ Items 6–10                        │
│ 3. Computers and Devices           │ Items 11–15                       │
│ 4. Website and Online Services     │ Items 16–19                       │
│ 5. Business Data and Backups       │ Items 20–24                       │
│ 6. Incident Response               │ Item 25                           │
└────────────────────────────────────┴───────────────────────────────────┘
```

### Detailed Item-by-Item Specification

#### 1. Turn on MFA for important accounts
- **ID:** `item-01-mfa-important-accounts`
- **Title:** 1. Turn on MFA for important accounts
- **Category:** Accounts and Access
- **Priority:** Critical
- **Timeframe:** 30 minutes
- **What to do:** List high-impact accounts (business email, financial services, domain registration, cloud storage, website admin) and enable their strongest practical MFA option. Store backup codes in a protected business-controlled location.
- **Done looks like:** Every active high-impact account that supports MFA requires it, and the person responsible for recovery is known.
- **Why it matters:** MFA adds another verification step beyond a password. It makes a stolen password less useful on its own.
- **Existing source section:** `## Accounts and Access > ### 1. Turn on MFA for important accounts`
- **Deep-dive route:** `/guides/mfa-for-small-businesses`
- **Estimated effort:** 15–30 minutes
- **Verification method:** Attempt to sign into business email and banking portals with only password; confirm secondary verification prompt appears.

#### 2. Use unique, strong passwords
- **ID:** `item-02-unique-strong-passwords`
- **Title:** 2. Use unique, strong passwords
- **Category:** Accounts and Access
- **Priority:** Critical
- **Timeframe:** 30 minutes
- **What to do:** Replace reused passwords on important accounts first. Prefer long, randomly generated passwords when a password manager can store them. Establish a modern password policy focused on length without arbitrary periodic rotation.
- **Done looks like:** Each important business account has its own password; no password is shared by email, chat, or an unprotected document.
- **Why it matters:** One reused password can turn a single account breach into several compromised business services.
- **Existing source section:** `## Accounts and Access > ### 2. Use unique, strong passwords`
- **Deep-dive route:** `/guides/small-business-password-policy`
- **Estimated effort:** 20–30 minutes
- **Verification method:** Audit critical logins; ensure no identical passwords exist across email, banking, and administrative dashboards.

#### 3. Use a reputable password manager
- **ID:** `item-03-password-manager`
- **Title:** 3. Use a reputable password manager
- **Category:** Accounts and Access
- **Priority:** High
- **Timeframe:** 30 minutes
- **What to do:** Choose a well-supported password manager, set up individual accounts where practical, enable MFA on the vault, and decide who can administer the business account.
- **Done looks like:** The team has an approved place to generate and store passwords, with documented recovery access for the business owner.
- **Why it matters:** Reduces password reuse and gives a small team a secure method to handle account credentials without informal spreadsheets.
- **Existing source section:** `## Accounts and Access > ### 3. Use a reputable password manager`
- **Deep-dive route:** `/guides/small-business-password-manager-guide`
- **Estimated effort:** 30 minutes
- **Verification method:** Confirm password manager vault is active with MFA and emergency access recovery configured.

#### 4. Remove unused accounts
- **ID:** `item-04-remove-unused-accounts`
- **Title:** 4. Remove unused accounts
- **Category:** Accounts and Access
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Review users in email, cloud storage, payroll, accounting, website, and key software. Disable or delete access that is no longer needed; audit shared mailboxes and API integrations.
- **Done looks like:** Every active account has a current business reason and an identifiable owner.
- **Why it matters:** Old staff accounts, former contractors, and abandoned integrations remain unmonitored entry points into business data.
- **Existing source section:** `## Accounts and Access > ### 4. Remove unused accounts`
- **Deep-dive route:** `/guides/employee-offboarding-security-checklist`
- **Estimated effort:** 1–2 hours
- **Verification method:** Cross-reference active user lists in email and SaaS portals against current payroll/contractor rosters.

#### 5. Review administrator privileges
- **ID:** `item-05-review-admin-privileges`
- **Title:** 5. Review administrator privileges
- **Category:** Accounts and Access
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Identify all administrators. Give admin rights only to people who need them, and use a standard account for routine day-to-day work.
- **Done looks like:** The administrator list is short, reviewed, and documented; administrators use MFA.
- **Why it matters:** Administrator accounts can alter users, security settings, and billing; reducing admin count minimizes the blast radius of any credential compromise.
- **Existing source section:** `## Accounts and Access > ### 5. Review administrator privileges`
- **Deep-dive route:** `/guides/microsoft-365-security-small-business`
- **Estimated effort:** 30–45 minutes
- **Verification method:** Inspect Global Admin / Super Admin roles in cloud consoles; ensure no staff uses admin accounts for daily browsing.

#### 6. Secure business email with MFA
- **ID:** `item-06-secure-email-mfa`
- **Title:** 6. Secure business email with MFA
- **Category:** Business Email and Phishing
- **Priority:** Critical
- **Timeframe:** 30 minutes
- **What to do:** Require MFA for every mailbox, including administrators and shared-mailbox owners. Review forwarding rules and delegated access as part of the setup.
- **Done looks like:** Active email users have MFA, recovery details are business-controlled, and unexpected forwarding is investigated.
- **Why it matters:** Business email receives password resets, invoices, and sensitive customer conversations; mailbox takeover unlocks access to many connected services.
- **Existing source section:** `## Business Email and Phishing > ### 6. Secure business email with MFA`
- **Deep-dive route:** `/guides/microsoft-365-security-small-business`
- **Estimated effort:** 15–30 minutes
- **Verification method:** Check admin portal sign-in logs; verify 100% of user mailboxes have active MFA enforcement.

#### 7. Train people to recognize phishing
- **ID:** `item-07-train-recognize-phishing`
- **Title:** 7. Train people to recognize phishing
- **Category:** Business Email and Phishing
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Explain common phishing signs in plain language (fake invoices, sign-in notices, urgency, vendor bank changes) and give staff a low-friction way to ask before acting.
- **Done looks like:** Everyone knows to stop, check, and report suspicious requests without fear of blame.
- **Why it matters:** Phishing preys on natural human urgency; simple habits interrupt attacks before credentials or funds are sent.
- **Existing source section:** `## Business Email and Phishing > ### 7. Train people to recognize phishing`
- **Deep-dive route:** `/guides/small-business-phishing-protection`
- **Estimated effort:** 45 minutes
- **Verification method:** Hold a brief team briefing or send an internal memo detailing real examples and the internal check-in contact.

#### 8. Verify unusual payment or account-change requests
- **ID:** `item-08-verify-payment-requests`
- **Title:** 8. Verify unusual payment or account-change requests
- **Category:** Business Email and Phishing
- **Priority:** Critical
- **Timeframe:** 30 minutes
- **What to do:** Create a rule that bank-detail changes, payment instructions, payroll updates, and unusual purchases must be confirmed verbally using a known pre-established phone number—never details inside the email.
- **Done looks like:** The verification rule is written down and the people who approve payments know how to apply it.
- **Why it matters:** Business Email Compromise (BEC) and fake invoice scams succeed when employees treat an email as proof of a supplier's banking change.
- **Existing source section:** `## Business Email and Phishing > ### 8. Verify unusual payment or account-change requests`
- **Deep-dive route:** `/guides/business-email-compromise-small-business-payment-fraud`
- **Estimated effort:** 15 minutes
- **Verification method:** Verify that finance/accounting staff have written out-of-band verification procedures taped by their workstations or in accounting SOPs.

#### 9. Protect email recovery methods
- **ID:** `item-09-protect-email-recovery`
- **Title:** 9. Protect email recovery methods
- **Category:** Business Email and Phishing
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Review recovery settings for every administrator and critical mailbox. Move business recovery details under current business control and protect backup codes.
- **Done looks like:** Recovery methods are current, known to authorized decision-makers, and not dependent on a departed person.
- **Why it matters:** Recovery emails, phone numbers, and security questions can bypass password protection if tied to an ex-employee's personal phone.
- **Existing source section:** `## Business Email and Phishing > ### 9. Protect email recovery methods`
- **Deep-dive route:** `/guides/mfa-for-small-businesses`
- **Estimated effort:** 30 minutes
- **Verification method:** Inspect authentication methods in Microsoft Entra or Google Admin; ensure zero personal mobile numbers or personal emails are listed for admin recovery.

#### 10. Report suspicious messages instead of interacting with them
- **ID:** `item-10-report-suspicious-messages`
- **Title:** 10. Report suspicious messages instead of interacting with them
- **Category:** Business Email and Phishing
- **Priority:** Medium
- **Timeframe:** 1 week
- **What to do:** Tell staff to use their email provider’s reporting feature or send suspicious messages to the person who manages email security. Do not reply, click links, or unsubscribe.
- **Done looks like:** The team knows one safe reporting path and understands that reporting quickly is encouraged.
- **Why it matters:** Interacting with malicious emails can confirm active mailboxes or trigger credential theft; fast reporting allows warning the rest of the company.
- **Existing source section:** `## Business Email and Phishing > ### 10. Report suspicious messages instead of interacting with them`
- **Deep-dive route:** `/guides/small-business-phishing-protection`
- **Estimated effort:** 20 minutes
- **Verification method:** Confirm the built-in "Report Phishing" button is visible in email clients or an internal contact email is published to staff.

#### 11. Keep operating systems updated
- **ID:** `item-11-keep-os-updated`
- **Title:** 11. Keep operating systems updated
- **Category:** Computers and Devices
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Turn on automatic updates where practical, schedule restarts, and check that updates are actually completing on laptops, desktops, and mobile devices.
- **Done looks like:** Supported devices have a named owner and a working update process rather than a collection of overdue prompts.
- **Why it matters:** Operating system patches fix actively exploited vulnerabilities that attackers use to gain local footholds.
- **Existing source section:** `## Computers and Devices > ### 11. Keep operating systems updated`
- **Deep-dive route:** `/guides/small-business-computer-laptop-security`
- **Estimated effort:** 30–60 minutes
- **Verification method:** Inspect Windows Update or macOS Software Update on employee workstations; verify no critical patches are pending.

#### 12. Keep applications and browsers updated
- **ID:** `item-12-keep-apps-updated`
- **Title:** 12. Keep applications and browsers updated
- **Category:** Computers and Devices
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Enable automatic updates for web browsers, office suites, PDF readers, and browser extensions. Remove unused legacy software.
- **Done looks like:** Essential software is supported, routinely updated, and unused software has been removed.
- **Why it matters:** Unpatched browsers and third-party applications provide attack vectors even on an updated operating system.
- **Existing source section:** `## Computers and Devices > ### 12. Keep applications and browsers updated`
- **Deep-dive route:** `/guides/small-business-computer-laptop-security`
- **Estimated effort:** 45 minutes
- **Verification method:** Verify Chrome/Edge/Firefox show "Up to date" in settings; uninstall obsolete local software.

#### 13. Use supported operating systems
- **ID:** `item-13-use-supported-os`
- **Title:** 13. Use supported operating systems
- **Category:** Computers and Devices
- **Priority:** Medium
- **Timeframe:** 1 month
- **What to do:** Identify unsupported devices and software. Replace, upgrade, or isolate them with help from an IT professional if needed for a legacy business task.
- **Done looks like:** You have no unknown unsupported systems and a documented plan for any exception.
- **Why it matters:** End-of-life operating systems (such as Windows 10 after October 2025) stop receiving security patches, creating permanent unpatched flaws.
- **Existing source section:** `## Computers and Devices > ### 13. Use supported operating systems`
- **Deep-dive route:** `/guides/small-business-computer-laptop-security`
- **Estimated effort:** 1–2 hours
- **Verification method:** Review OS versions across all fleet devices; ensure all machines run supported Windows 11 or modern macOS versions.

#### 14. Lock devices when unattended
- **ID:** `item-14-lock-devices-unattended`
- **Title:** 14. Lock devices when unattended
- **Category:** Computers and Devices
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Require screen locks with a short timeout (e.g., 5–10 minutes) and secure sign-in. Teach staff how to report a lost or stolen device immediately.
- **Done looks like:** Business devices lock automatically, and people know whom to contact if a device is missing.
- **Why it matters:** An unattended, unlocked laptop in an office, cafe, or airport gives anyone direct access to open sessions and corporate files.
- **Existing source section:** `## Computers and Devices > ### 14. Lock devices when unattended`
- **Deep-dive route:** `/guides/small-business-computer-laptop-security`
- **Estimated effort:** 15 minutes
- **Verification method:** Check screen saver/sleep lock settings on team laptops; confirm automatic locking triggers after inactivity.

#### 15. Limit unnecessary administrator access
- **ID:** `item-15-limit-device-admin`
- **Title:** 15. Limit unnecessary administrator access
- **Category:** Computers and Devices
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Use standard user accounts for daily work where possible. Keep a separate administrator account for maintenance tasks and remove unneeded local admin rights.
- **Done looks like:** People use elevated access deliberately, not as the default for every task.
- **Why it matters:** Malware executing under a standard user account is restricted from altering system files or disabling endpoint protection.
- **Existing source section:** `## Computers and Devices > ### 15. Limit unnecessary administrator access`
- **Deep-dive route:** `/guides/small-business-computer-laptop-security`
- **Estimated effort:** 30–60 minutes
- **Verification method:** Check Windows User Accounts or macOS Users & Groups; verify daily accounts are Standard Users.

#### 16. Keep the website, CMS, and plugins updated
- **ID:** `item-16-keep-website-updated`
- **Title:** 16. Keep the website, CMS, and plugins updated
- **Category:** Website and Online Services
- **Priority:** Medium
- **Timeframe:** 1 month
- **What to do:** Assign someone to check updates for the website, CMS plugins, themes, and hosting control panel. Confirm backups exist before major updates.
- **Done looks like:** Every enabled website component has an owner and a regular update responsibility.
- **Why it matters:** Vulnerable CMS plugins are one of the most common vectors for website defacement, malicious redirects, and credential harvesting.
- **Existing source section:** `## Website and Online Services > ### 16. Keep the website, CMS, and plugins updated`
- **Deep-dive route:** `/guides/small-business-domain-name-security`
- **Estimated effort:** 30–45 minutes
- **Verification method:** Log into website CMS; verify all plugins and themes are current and unneeded plugins are deleted.

#### 17. Protect website administrator accounts with MFA
- **ID:** `item-17-protect-website-admin-mfa`
- **Title:** 17. Protect website administrator accounts with MFA
- **Category:** Website and Online Services
- **Priority:** Critical
- **Timeframe:** 1 month
- **What to do:** Turn on MFA for domain registrar, web hosting, CMS admin, and payment gateways. Use separate admin accounts and keep recovery info updated.
- **Done looks like:** Critical online-service administrators use unique accounts, MFA, and business-controlled recovery methods.
- **Why it matters:** Domain or website takeover allows criminals to redirect customer traffic, intercept email, or damage business reputation.
- **Existing source section:** `## Website and Online Services > ### 17. Protect website administrator accounts with MFA`
- **Deep-dive route:** `/guides/small-business-domain-name-security`
- **Estimated effort:** 20–30 minutes
- **Verification method:** Attempt sign-in at domain registrar and hosting dashboard; verify secondary authentication prompt is enforced.

#### 18. Remove unused website and service accounts
- **ID:** `item-18-remove-unused-web-accounts`
- **Title:** 18. Remove unused website and service accounts
- **Category:** Website and Online Services
- **Priority:** Medium
- **Timeframe:** 1 month
- **What to do:** Review user lists at domain registrar, hosting portal, website CMS, payment processor, and cloud storage. Disable accounts for past agencies or contractors.
- **Done looks like:** Current access is limited to current work, with a named owner for each service.
- **Why it matters:** Former web development agencies or marketing interns frequently retain full admin rights indefinitely.
- **Existing source section:** `## Website and Online Services > ### 18. Remove unused website and service accounts`
- **Deep-dive route:** `/guides/employee-offboarding-security-checklist`
- **Estimated effort:** 30 minutes
- **Verification method:** Audit user administration panels in registrar, hosting, and CMS; delete old developer and contractor accounts.

#### 19. Review third-party services and integrations
- **ID:** `item-19-review-third-party-services`
- **Title:** 19. Review third-party services and integrations
- **Category:** Website and Online Services
- **Priority:** Medium
- **Timeframe:** 1 month
- **What to do:** Keep a simple inventory: service name, purpose, owner, administrator, data it holds, MFA status, and recovery procedure. Revoke unused OAuth integrations.
- **Done looks like:** You can identify your important services and regain control if a key person is unavailable.
- **Why it matters:** Third-party OAuth apps granted access to email or cloud storage retain persistent data access without requiring ongoing logins.
- **Existing source section:** `## Website and Online Services > ### 19. Review third-party services and integrations`
- **Deep-dive route:** `/guides/microsoft-365-security-small-business`
- **Estimated effort:** 1 hour
- **Verification method:** Review Enterprise Applications / Connected Apps in Google Workspace or Microsoft Entra ID; revoke unfamiliar app permissions.

#### 20. Identify your most important business data
- **ID:** `item-20-identify-important-data`
- **Title:** 20. Identify your most important business data
- **Category:** Business Data and Backups
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** List the data that would stop operations if lost or compromised: customer records, financial ledgers, contracts, email, design assets, and system configurations.
- **Done looks like:** The business knows what must be protected and restored first.
- **Why it matters:** You cannot protect or back up data effectively if you do not know where all critical files are stored.
- **Existing source section:** `## Business Data and Backups > ### 20. Identify your most important business data`
- **Deep-dive route:** `/guides/small-business-backup-ransomware-protection`
- **Estimated effort:** 45 minutes
- **Verification method:** Write down a one-page data inventory mapping data types to storage locations (cloud drive, accounting software, local server).

#### 21. Limit access to sensitive information
- **ID:** `item-21-limit-sensitive-access`
- **Title:** 21. Limit access to sensitive information
- **Category:** Business Data and Backups
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Review shared drives, folders, customer systems, and financial tools. Grant access based on job necessity and remove it when projects end.
- **Done looks like:** Sensitive information is not broadly available just because broad access is convenient.
- **Why it matters:** Restricting sensitive payroll and customer files prevents accidental exposure and limits damage if an employee account is compromised.
- **Existing source section:** `## Business Data and Backups > ### 21. Limit access to sensitive information`
- **Deep-dive route:** `/guides/employee-offboarding-security-checklist`
- **Estimated effort:** 30–45 minutes
- **Verification method:** Inspect permissions on shared accounting/HR folders; verify only authorized staff have read/write access.

#### 22. Back up important data
- **ID:** `item-22-backup-important-data`
- **Title:** 22. Back up important data
- **Category:** Business Data and Backups
- **Priority:** Critical
- **Timeframe:** 30 minutes
- **What to do:** Confirm automated backup coverage for critical files, cloud data exports, and essential configurations. Select a frequency matching loss tolerance.
- **Done looks like:** Critical data has a documented backup method, owner, and review process.
- **Why it matters:** Reliable backups are the ultimate defense against accidental deletion, hardware failure, service disruption, and ransomware extortion.
- **Existing source section:** `## Business Data and Backups > ### 22. Back up important data`
- **Deep-dive route:** `/guides/small-business-backup-ransomware-protection`
- **Estimated effort:** 30 minutes
- **Verification method:** Check backup console or cloud snapshot logs; verify a successful backup completed within the last 24 hours.

#### 23. Keep at least one backup separated from the main system
- **ID:** `item-23-separated-backup-copy`
- **Title:** 23. Keep at least one backup separated from the main system
- **Category:** Business Data and Backups
- **Priority:** Critical
- **Timeframe:** 1 week
- **What to do:** Ensure at least one backup copy lives in an isolated location (separate cloud account, air-gapped drive, or immutable storage) with independent credentials.
- **Done looks like:** At least one recovery copy is appropriately separated and its access is controlled.
- **Why it matters:** Modern ransomware actively searches for connected backup drives and cloud sync folders to encrypt them alongside primary files.
- **Existing source section:** `## Business Data and Backups > ### 23. Keep at least one backup separated from the main system`
- **Deep-dive route:** `/guides/small-business-backup-ransomware-protection`
- **Estimated effort:** 45 minutes
- **Verification method:** Confirm backup storage uses separate credentials not stored on daily workstations, preventing lateral movement from compromising backups.

#### 24. Test that backups can actually be restored
- **ID:** `item-24-test-backup-restore`
- **Title:** 24. Test that backups can actually be restored
- **Category:** Business Data and Backups
- **Priority:** High
- **Timeframe:** 1 week
- **What to do:** Perform a small restore test: recover representative files to an alternate location, open them, and verify integrity. Record date and time required.
- **Done looks like:** You have completed a recent restore test and know who can perform recovery.
- **Why it matters:** A successful backup notification does not prove data is uncorrupted or recoverable during an emergency.
- **Existing source section:** `## Business Data and Backups > ### 24. Test that backups can actually be restored`
- **Deep-dive route:** `/guides/small-business-backup-ransomware-protection`
- **Estimated effort:** 30 minutes
- **Verification method:** Restore a sample spreadsheet or document from the backup vault; confirm it opens without error.

#### 25. Create a simple cybersecurity incident response plan
- **ID:** `item-25-incident-response-plan`
- **Title:** 25. Create a simple cybersecurity incident response plan
- **Category:** Incident Response
- **Priority:** High
- **Timeframe:** 1 month
- **What to do:** Name decision-makers; record offline contacts for IT support, hosting, email, bank, and insurance; document where recovery details live. Share reporting paths with staff.
- **Done looks like:** Responsible people can find the plan without relying on business email, know who will communicate, and can start recovery without guessing.
- **Why it matters:** During an active breach or ransomware event, panic and confusion cost valuable hours; an offline plan directs orderly containment.
- **Existing source section:** `## Incident Response > ### 25. Create a simple cybersecurity incident response plan`
- **Deep-dive route:** `/guides/small-business-incident-response-plan`
- **Estimated effort:** 1–2 hours
- **Verification method:** Print or store an offline copy of the emergency contact sheet in a physical location accessible outside corporate email.

---

## 3. Category & Taxonomy Architecture

To maintain continuity with the existing guide and avoid arbitrary categorization, the interactive tool preserves the guide's exact 6 categories:

| Category ID | Label | Item Range | Count | Primary Focus |
|---|---|:---:|:---:|---|
| `accounts-access` | **Accounts and Access** | Items 1–5 | 5 | MFA, unique passwords, password vaults, offboarding, admin rights |
| `email-phishing` | **Business Email and Phishing** | Items 6–10 | 5 | Mailbox MFA, phishing awareness, payment verification rule, reporting |
| `computers-devices` | **Computers and Devices** | Items 11–15 | 5 | OS updates, application patching, supported systems, screen locks, standard accounts |
| `website-services` | **Website and Online Services** | Items 16–19 | 4 | CMS patching, registrar MFA, contractor cleanup, third-party app consent |
| `data-backups` | **Business Data and Backups** | Items 20–24 | 5 | Data inventory, access restriction, daily backups, isolated copies, restore tests |
| `incident-response`| **Incident Response** | Item 25 | 1 | Decision roles, offline emergency contact sheet, breach reporting |

---

## 4. Timeframe & Priority Mapping

### 4.1 Timeframe Breakdown
Directly mirroring the guide's `"If you only have 30 minutes today"`, `"Today"`, `"This Week"`, and `"This Month"` structures:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   TIMEFRAME PROGRESSION (3 TIERS)                      │
├───────────────────┬───────┬────────────────────────────────────────────┤
│ Timeframe Tier    │ Count │ Included Items                             │
├───────────────────┼───────┼────────────────────────────────────────────┤
│ 30-Minute Triage  │ 5     │ Items 1 (MFA), 2 (Passwords),              │
│                   │       │ 3 (Vault), 6 (Email MFA), 8 (Payment Rule),│
│                   │       │ 22 (Critical Backup)                       │
├───────────────────┼───────┼────────────────────────────────────────────┤
│ 1-Week Routine    │ 13    │ Items 4, 5, 7, 9, 10, 11, 12, 14, 15,      │
│                   │       │ 20, 21, 23, 24                             │
├───────────────────┼───────┼────────────────────────────────────────────┤
│ 1-Month Baseline  │ 7     │ Items 13, 16, 17, 18, 19, 25               │
└───────────────────┴───────┴────────────────────────────────────────────┘
```

*(Note: Items 1, 2, 3, 6, 8, and 22 represent the initial emergency actions cited in the guide's "If you only have 30 minutes today" triage).*

### 4.2 Priority Breakdown
- **Critical (6 Items):** Directly prevent catastrophic monetary loss, total mailbox compromise, or unrecoverable ransomware extortion (Items 1, 2, 6, 8, 17, 22, 23).
- **High (14 Items):** Substantially reduce lateral movement, credential reuse, and operational blind spots (Items 3, 4, 5, 7, 9, 11, 12, 14, 15, 20, 21, 24, 25).
- **Medium (5 Items):** Hygiene, inventory maintenance, and ongoing review cadences (Items 10, 13, 16, 18, 19).

---

## 5. User Experience & Interaction Specification

### 5.1 Page Layout & Progression
1. **Hero Header:**
   - Small category badge: `Interactive Security Tool`
   - H1: `Small Business Cybersecurity Checklist`
   - Descriptive paragraph emphasizing practical, un-gated, private progress tracking.
   - Micro-metadata: `25 Essential Controls · 100% Client-Side Private · Sourced from NIST CSF 2.0 & CISA`
2. **Sticky/Prominent Progress Dashboard (`ChecklistProgress`):**
   - High-contrast visual progress bar (`0%` to `100%`).
   - Counter: `X of 25 completed (Y%)`.
   - Category completion pills (e.g. `Accounts: 2/5`, `Email: 1/5`, `Devices: 0/5`).
   - Action toolbar:
     - `Print / Save as PDF` button (triggers browser print stylesheet).
     - `Reset Progress` button (with modal/inline confirmation dialog).
3. **Filter Bar:**
   - **Timeframe Selector:** `All (25)`, `30-Minute Triage (6)`, `1-Week Plan (13)`, `1-Month Foundation (6)`.
   - **Category Dropdown / Pill Filter:** Toggle by the 6 core operational categories.
4. **Checklist Item Cards (`ChecklistItemCard`):**
   - Accessible checkbox (`<input type="checkbox" />`) with full label hit area.
   - Item title with number and categorical badges.
   - Clear visual differentiation when checked (subtle border highlight, muted completed styling).
   - "Why it matters" background rationale.
   - "What to do" actionable steps.
   - "Done looks like" verifiable acceptance criteria with distinct icon badge.
   - Contextual link to the relevant deep-dive guide.
5. **Completion Celebration State:**
   - When 25/25 items are checked, an encouraging completion message renders with guidance on scheduling recurring calendar reviews (as recommended in the guide).
6. **Filter Empty State:**
   - If filtering results in zero items, a clean "No items match this filter" banner renders with a "Clear Filters" button.

---

## 6. Privacy Model & Local Storage Architecture

To ensure 100% trust and eliminate privacy barriers for small-business owners:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRIVACY-FIRST STORAGE MODEL                     │
│                                                                        │
│  [User Checks Item]                                                    │
│         │                                                              │
│         ▼                                                              │
│  [React Component State] ──(Debounced Write)──► [Browser LocalStorage] │
│         │                                                              │
│         ├─ ZERO Server Requests                                        │
│         ├─ ZERO Accounts or Passwords Required                         │
│         ├─ ZERO Personal Identifying Information Stored                │
│         └─ ZERO Tracking of Individual Security Posture                │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Storage Key:** `kapilshah_checklist_v1`
2. **Stored Payload:** A simple array of completed item IDs:
   ```json
   ["item-01-mfa-important-accounts", "item-02-unique-strong-passwords"]
   ```
3. **SSR Safety:** On initial render (server and static pre-render), the component initializes with an empty array `[]` to prevent hydration mismatch. Client hydration reads from `localStorage` in `useEffect`.
4. **Reset Mechanism:** Clicking "Reset Progress" presents a confirmation prompt; upon confirmation, `localStorage.removeItem("kapilshah_checklist_v1")` clears the state and resets progress to 0%.

---

## 7. Print & PDF Export Specification (`@media print`)

A printable version is generated directly via the browser's native `Print` or `Save as PDF` engine (`window.print()`). This requires **zero third-party dependencies** and functions flawlessly on desktop and mobile.

### 7.1 What Disappears When Printed (`print:hidden`)
- Top navigation header and search bar.
- Footer navigation and legal copyright block.
- Interactive filter buttons, category tabs, and time selectors.
- Action buttons ("Print", "Reset Progress").
- Hyperlink URLs and anchor texts that distract on paper.

### 7.2 What Remains in Print (`print:block`)
- Document Header: Title ("Small Business Cybersecurity Checklist — Executive Operational Baseline"), date printed, and progress summary (`Completed X of 25 items (Y%)`).
- Clean, structured card layout with crisp borders (`print:border-border`).
- Checkbox indicators showing checked `[X]` or unchecked `[ ]` state cleanly using vector/high-contrast styling.
- All "What to do" and "Done looks like" instructions formatted in high-contrast black text on pure white paper (`print:text-black print:bg-white`).
- Page-break optimization: Each item card applies `break-inside: avoid` (`print:break-inside-avoid`) to prevent awkward splits across page boundaries.

---

## 8. Internal Linking & Hub Architecture

```
                                  ┌──────────────────────────────┐
                                  │          /checklist          │
                                  │   (Interactive Web Tool)     │
                                  └───────────────┬──────────────┘
                                                  │
                                 Bi-directional   │   Canonical Explanatory
                                 Contextual Links │   Relationship
                                                  ▼
                                  ┌──────────────────────────────┐
                                  │ /guides/small-business-      │
                                  │ cybersecurity-checklist      │
                                  │   (Comprehensive Guide)      │
                                  └───────────────┬──────────────┘
                                                  │
        ┌───────────────────┬─────────────────────┼───────────────────┬───────────────────┐
        ▼                   ▼                     ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐     ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ /guides/mfa-  │   │ /guides/bec-  │     │ /guides/m365- │   │ /guides/laptop│   │ /guides/backup│
│ small-business│   │ payment-fraud │     │ security      │   │ security      │   │ ransomware    │
└───────────────┘   └───────────────┘     └───────────────┘   └───────────────┘   └───────────────┘
```

1. **Reciprocal Connection with Primary Guide:**
   - The interactive tool `/checklist` features a prominent callout linking to the deep-dive explanatory guide `/guides/small-business-cybersecurity-checklist`.
   - The primary guide `/guides/small-business-cybersecurity-checklist` features an interactive banner near the top: *"Prefer an interactive progress tracker? Use the [Interactive Small Business Cybersecurity Checklist](/checklist) to check off items and print your baseline."*
2. **Inbound Links to `/checklist`:**
   - `/start-here` (Step 6 card links to `/checklist`).
   - `/small-business` (Checklist card links to `/checklist`).
   - Site header navigation (optional future item: link "Checklist" or "Tools").
   - Site footer (under "Content": add link to "Interactive Checklist").

---

## 9. Data Architecture Specification (`src/data/checklist.ts`)

The proposed data model provides strict type safety, zero dependencies, and complete separation between content and display logic:

```ts
export type ChecklistTimeframe = "30-minutes" | "1-week" | "1-month";
export type ChecklistPriority = "critical" | "high" | "medium";

export type ChecklistCategoryId =
  | "accounts-access"
  | "email-phishing"
  | "computers-devices"
  | "website-services"
  | "data-backups"
  | "incident-response";

export interface ChecklistCategory {
  id: ChecklistCategoryId;
  label: string;
  description: string;
}

export interface ChecklistItem {
  id: string;
  number: number;
  title: string;
  category: ChecklistCategoryId;
  priority: ChecklistPriority;
  timeframe: ChecklistTimeframe;
  whatToDo: string;
  doneLooksLike: string;
  whyItMatters: string;
  deepDiveRoute?: string;
  deepDiveLabel?: string;
  estimatedEffort: string;
  verificationMethod: string;
}
```

---

## 10. Component Architecture Specification

To prevent component bloat and avoid overengineering, only four minimal components are required:

1. **`src/app/checklist/page.tsx` (Server Component):**
   - Renders metadata, structured data, static hero introduction, and embeds the interactive client component.
2. **`src/components/checklist/interactive-checklist.tsx` (Client Component):**
   - Manages active filters (timeframe, category), completed item array in `useState`, and hydration with `localStorage`.
   - Orchestrates print trigger (`window.print()`) and reset dialog.
3. **`src/components/checklist/checklist-progress.tsx` (Client / UI Component):**
   - Visual progress bar, percentage calculation, category breakdown counts, and action toolbar.
4. **`src/components/checklist/checklist-item-card.tsx` (Client / UI Component):**
   - Accessible checkbox input, status styling, verification checkpoint box, and deep-dive link.

---

## 11. SEO & Metadata Specification

- **Route:** `/checklist`
- **Page Title:** `Interactive Small Business Cybersecurity Checklist | Kapil Shah`
- **Meta Description:** `Track your small-business cybersecurity progress with this interactive 25-point operational checklist. Prioritize controls, verify completion, and print your executive baseline.`
- **Canonical URL:** `https://kapilshah.com.np/checklist`
- **Robots:** `index, follow`
- **Primary Heading (H1):** `Interactive Small Business Cybersecurity Checklist`
- **Structured Data:**
  - `WebApplication` / `WebPage` schema with author attribution to Kapil Shah (`https://kapilshah.com.np/about`).
  - Clear statement: Structured data helps search engines understand the interactive nature of the tool; it does not guarantee search rankings.

---

## 12. Accessibility & Usability (WCAG 2.1 AA)

1. **Semantic Form Elements:** Each checklist item utilizes a native HTML `<input type="checkbox" id={item.id} checked={isChecked} onChange={...} />` explicitly linked to a `<label htmlFor={item.id}>`.
2. **Keyboard Operation:** Full keyboard support. Users can Tab through items and toggle checkboxes using Spacebar.
3. **Screen Reader Live Announcements:** An `aria-live="polite"` region announces completion status changes (e.g., *"Point 1 completed. Overall progress: 4 percent, 1 of 25 items done"*).
4. **Color Contrast:** All text, badges, and progress bars maintain at least 4.5:1 contrast against light and dark background tokens.
5. **Reduced Motion:** Progress bar width transitions respect `@media (prefers-reduced-motion: reduce)`.

---

## 13. Authority & Original Value Justification

This asset provides distinct information gain and practical utility beyond a static blog article:
1. **Interactive Operational Retention:** Instead of reading an article once and forgetting it, a business owner uses the checklist as an active project workspace across multiple weeks.
2. **Definitive Verification Criteria:** Unlike generic advice, each item provides unambiguous "Done looks like" checkpoints.
3. **Zero-Friction Utility:** Instant access with no registration, no tracking, and 1-click printable PDF creation.
4. **Link-Worthy Editorial Value:** Other websites, organizations, and mentors have a compelling reason to link to a free, functional, vendor-neutral tool that their readers can immediately use.

---

## 14. Implementation Risk Matrix

| Risk Category | Identified Risk | Mitigation Strategy |
|---|---|---|
| **SSR / Hydration** | LocalStorage state causing React hydration mismatches on static pre-render. | Initialize state with empty array `[]`; load from `localStorage` inside `useEffect` after mount. |
| **Print Styling** | Cards breaking awkwardly across paper margins. | Apply `print:break-inside-avoid` and clean white-background print classes. |
| **Mobile Layout** | Filter buttons or progress bars overflowing narrow mobile viewports. | Use responsive flex/grid wrappers and clean stacked progress layouts. |
| **Cloudflare Build** | Node runtime or canvas dependencies breaking OpenNext edge builds. | Use zero external dependencies; rely entirely on browser-native print APIs and standard React. |
| **Content Drift** | Inconsistencies between MDX guide and checklist data. | Data strictly extracted from and mapped to the MDX guide. |

---

## 15. Proposed Implementation Sequence (Phase 8C Roadmap)

When approved for implementation in Phase 8C, the execution sequence will be:

1. **Step 1 — Data Layer:** Create `src/data/checklist.ts` containing the 25 typed items, categories, and timeframes.
2. **Step 2 — UI Components:** Implement `checklist-item-card.tsx`, `checklist-progress.tsx`, and `interactive-checklist.tsx`.
3. **Step 3 — Standalone Route:** Create `src/app/checklist/page.tsx` with SEO metadata, structured data, and responsive layout.
4. **Step 4 — Bi-Directional Linking:** Add reciprocal contextual link callouts between `/guides/small-business-cybersecurity-checklist` and `/checklist`.
5. **Step 5 — Print & Mobile Testing:** Verify `@media print` layout and mobile responsiveness.
6. **Step 6 — Technical Validation:** Run `npm run check` and `npm run build` to confirm 25 static routes compile cleanly.

---

## 16. Guardrail Confirmation

- **No modifications performed to existing source files.**
- **No new routes created.**
- **No dependencies altered.**
- **No commits or pushes executed.**
