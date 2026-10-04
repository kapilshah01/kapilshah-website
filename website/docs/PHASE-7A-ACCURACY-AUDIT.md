# Phase 7A Cybersecurity Accuracy & Authority Audit

## 1. Executive Summary

- **Overall Assessment:**  
  The publication library of 13 cybersecurity guides on `kapilshah.com.np` exhibits a high baseline of technical rigor, responsible security advice, and practical accessibility for small businesses without dedicated IT staff. Core recommendations consistently align with authoritative industry frameworks (NIST SP 800-63B, CISA Cross-Sector Cybersecurity Performance Goals, Microsoft Entra documentation, and RFC standards). Advice correctly avoids dangerous practices: there are no recommendations for arbitrary password rotation, no unverified DIY malware extraction procedures, and no dismissals of fundamental defenses like MFA and out-of-band verification.
- **Number of Guides Reviewed:** 13 published guides (100% of the active MDX corpus).
- **Total Issues Identified:** 12 issues cataloged across the library.
- **Issue Breakdown by Severity:**
  - **Critical:** 0
  - **High:** 2
  - **Medium:** 6
  - **Low / Style / Source:** 4
- **Highest-Risk Issues:**
  1. *Small Business Domain Security:* Recommends "Google Domains / Squarespace" as an active registrar option. Google Domains was discontinued and its portfolio transitioned to Squarespace in 2023.
  2. *Microsoft 365 Tenant Security:* Asserts that Microsoft "does not protect against ransomware encryption of OneDrive libraries." Microsoft 365 provides native point-in-time ransomware rollback ("Restore your OneDrive" / Files Restore) for up to 30 days. While third-party immutable backups remain best practice for out-of-tenant isolation and long-term retention, the guide's claim currently contradicts vendor documentation.
- **Internal Linking & Architecture Status:**  
  All 13 guides were audited for internal hyperlink integrity. 100% of internal links resolve to valid, existing static slugs or core landing pages. There are zero broken internal links, zero 404 targets, and zero orphaned articles.
- **Overall Readiness:**  
  The site is structurally sound and requires targeted factual refinement rather than conceptual overhauls or structural rewrites. The roadmap is **READY FOR IMPLEMENTATION** for Phase 7B content accuracy hardening.

---

## 2. Critical / High Priority Issues

| Severity | File | Section/Claim | Problem | Why It Matters | Recommended Correction | Authoritative Source |
|---|---|---|---|---|---|---|
| **HIGH** | `src/content/guides/small-business-domain-name-security.mdx` (Line 191) | `## Security Tools and Registrars to Consider` <br> "Enterprise-Grade Registrars (Cloudflare Registrar, Namecheap, Google Domains / Squarespace, GoDaddy Business Protection)" | Recommends "Google Domains / Squarespace". Google Domains was shut down; Google finalized the sale of all domain registrations and assets to Squarespace in September 2023, and customer accounts were fully migrated. Google Domains no longer exists as a registrar. | Recommending a defunct service confuses business owners attempting to follow the guide and undermines site authority. | Remove "Google Domains" and list "Squarespace Domains" directly: "Enterprise-Grade Registrars (Cloudflare Registrar, Namecheap, Squarespace Domains, GoDaddy Business Protection)". | [Google Cloud / Squarespace Announcement: Google Domains Migration](https://support.google.com/domains/answer/13689670) <br> [ICANN Notice: Registrar Transfer of Google Domains](https://www.icann.org) |
| **HIGH** | `src/content/guides/microsoft-365-security-small-business.mdx` (Line 259) | `## Security Tools to Consider for Microsoft 365` <br> "Microsoft operates on a shared responsibility model. Microsoft guarantees service uptime, but does not protect against malicious insider deletion or ransomware encryption of OneDrive libraries. A dedicated M365 backup ensures point-in-time recovery." | Incomplete and factually contradictory. Microsoft 365 natively includes point-in-time ransomware rollback ("Restore your OneDrive" and SharePoint Files Restore) allowing restoration to any second in the previous 30 days, alongside the multi-stage Recycle Bin. | Denying Microsoft's native ransomware rollback misinforms readers on built-in capabilities. Third-party backup remains critical, but for independent identity isolation, retention beyond 30/93 days, and defense against tenant-level administrative compromise. | Clarify: "While Microsoft provides built-in point-in-time ransomware rollback for OneDrive and SharePoint libraries for up to 30 days, third-party backups provide essential immutable, air-gapped protection outside the Entra ID tenant boundary and retain data beyond Microsoft's standard retention windows." | [Microsoft Learn: Restore your OneDrive](https://support.microsoft.com/en-us/office/restore-your-onedrive-fa231222-759d-4952-acef-7e4242a9ac8b) <br> [Microsoft Learn: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility) |

---

## 3. Medium Priority Issues

| Severity | File | Section/Claim | Problem | Why It Matters | Recommended Correction | Authoritative Source |
|---|---|---|---|---|---|---|
| **MEDIUM** | `src/content/guides/small-business-wifi-network-security.mdx` (Line 69) | `## 2. Wireless Encryption Standards` <br> "SAE is mathematically immune to offline dictionary attacks, meaning that even if an attacker captures the initial connection handshake, they cannot crack a simple password by guessing words offline." | Uses the absolute phrase "mathematically immune". The Dragonblood vulnerabilities (CVE-2019-9494, CVE-2019-9495) demonstrated that timing and cache-based side-channel attacks against certain SAE implementations could enable offline password partitioning/cracking. | Absolute assertions of immunity fail technical review and create a false sense of invulnerability. | Rephrase to: "SAE is designed to eliminate the passive offline four-way handshake dictionary attacks that plague WPA2 by requiring active interaction with the network." | [Wi-Fi Alliance: Wi-Fi CERTIFIED WPA3 Security](https://www.wi-fi.org/discover-wi-fi/security) <br> [Vanhoef & Ronen: Dragonblood Analysis of WPA3 SAE Handshake](https://wpa3.mathyvanhoef.com/) |
| **MEDIUM** | `src/content/guides/small-business-wifi-network-security.mdx` (Line 178) | `## 6. Threat-Blocking DNS at the Router Gateway` <br> "When configured on your main router, any laptop, smartphone, or smart device that attempts to resolve a known malicious phishing link or ransomware command-and-control server will receive a blocked response immediately." | Overstated guarantee without qualification. Endpoints using hardcoded DNS servers, or modern browsers/operating systems utilizing DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT), bypass router-assigned DHCP DNS unless outbound port 53 and DoH IPs are explicitly intercepted or blocked by router firewall rules. | Leads administrators to assume router DNS filtering cannot be bypassed by client browser settings or unmanaged personal devices. | Add qualification: "This protects devices utilizing the router's assigned DNS settings. However, devices or browsers with hardcoded DNS or encrypted DNS (DoH/DoT) can bypass router DNS unless outbound port 53 and known DoH endpoints are filtered at the firewall level." | [CISA: Selecting Protective DNS Services](https://www.cisa.gov/resources-tools/resources/protective-dns-fact-sheet) <br> [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484) |
| **MEDIUM** | `src/content/guides/small-business-wifi-network-security.mdx` (Line 60) | `## 1. Physical Router Hardening` <br> "Changing your local gateway address to an alternate private range (such as 10.14.20.1 or 192.168.55.1) provides defense-in-depth against automated browser-based Cross-Site Request Forgery (CSRF) scripts designed to reconfigure common default router IPs." | Changing private subnets is security-through-obscurity. Modern browsers enforce Private Network Access (PNA) restrictions, and the true protection against CSRF is robust router firmware session management, CSRF tokens, and strong credentials. | Conflating IP obscurity with CSRF defense can mislead users into prioritizing subnet changes over disabling WAN access and enforcing complex passwords. | Rephrase: "Changing your subnet is an optional defense-in-depth measure that slows blind, automated scripts targeting common defaults, but it does not replace the necessity of disabling remote WAN administration and using a strong master passphrase." | [OWASP: Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) <br> [W3C / Chrome: Private Network Access Specification](https://developer.chrome.com/blog/private-network-access-update/) |
| **MEDIUM** | `src/content/guides/small-business-domain-name-security.mdx` (Line 192) | `## Security Tools and Registrars to Consider` <br> "Enforcing a physical hardware key on registrar administrator logins renders stolen passwords completely useless." | Overly absolute ("completely useless"). While FIDO2/WebAuthn blocks credential replay and remote phishing, a stolen password can still be weaponized if the registrar provides insecure recovery fallback paths (e.g., SMS reset, support social engineering) or if the admin's active session cookie is stolen via endpoint infostealers. | Promotes a false sense of total invulnerability without addressing session theft or weak recovery fallbacks. | Rephrase: "Enforcing a physical hardware key on registrar administrator logins renders stolen passwords alone insufficient to access the account, neutralizing remote credential-stuffing and adversary-in-the-middle phishing." | [CISA: Phishing-Resistant MFA Fact Sheet](https://www.cisa.gov/resources-tools/resources/phishing-resistant-multifactor-authentication-fact-sheet) <br> [NIST SP 800-63B Rev. 3: Authenticator Assurance Level 3](https://csrc.nist.gov/publications/detail/sp/800-63b/final) |
| **MEDIUM** | `src/content/guides/small-business-computer-laptop-security.mdx` (Lines 58 & 134) | `## 1. Full-Disk Encryption` & `## 5. Endpoint Protection` <br> "BitLocker is included in Windows 10 Pro, Windows 11 Pro..." <br> "Microsoft Defender Antivirus (Windows): Built directly into Windows 10 and 11." | Treats Windows 10 and Windows 11 as equivalent current platforms. Windows 10 reached official End of Life (EOL) on October 14, 2025. In 2026, standard Windows 10 devices no longer receive free security patches without paid Extended Security Updates (ESU). | Failing to highlight Windows 10's EOL status in a 2026 guide risks leaving small business owners operating unpatched operating systems exposed to known zero-days. | Add note: "Note: Windows 10 reached official end-of-support in October 2025. Businesses should upgrade to Windows 11 Pro or enroll in Microsoft's Extended Security Updates (ESU) program to ensure ongoing security patches." | [Microsoft Lifecycle: Windows 10 Home and Pro End of Support](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro) |
| **MEDIUM** | `src/content/guides/small-business-domain-name-security.mdx` (Line 172) | `## Step 5: File ICANN and Law Enforcement Reports` <br> "file an Unauthorized Transfer Complaint under ICANN's Registrar Transfer Dispute Resolution Policy (TDRP)." | Factually imprecise legal procedure. Individual registrants cannot file a TDRP dispute directly; the TDRP is an inter-registrar dispute mechanism that can only be initiated by the losing registrar against the gaining registrar. Registrants submit an ICANN Transfer Complaint. | Small business owners attempting to submit a TDRP directly will encounter procedural dead ends during an urgent domain hijacking emergency. | Update to: "Submit an ICANN Transfer Complaint at icann.org/compliance and request that your original registrar immediately initiate a formal dispute under ICANN's Transfer Dispute Resolution Policy (TDRP)." | [ICANN: Transfer Dispute Resolution Policy (TDRP)](https://www.icann.org/resources/pages/tdrp-2024-02-21-en) <br> [ICANN: Transfer Complaint Process](https://www.icann.org/compliance/complaints/transfer) |

---

## 4. Low / Style / Source Issues

| Severity | File | Section/Claim | Problem | Why It Matters | Recommended Correction | Authoritative Source |
|---|---|---|---|---|---|---|
| **SOURCE** | `src/content/guides/employee-offboarding-security-checklist.mdx` (Line 7) | `## Quick Summary` <br> "Studies of small business data breaches reveal that a significant percentage of insider incidents involve former employees who retained access weeks or months after leaving..." | Claims specific empirical breach findings ("Studies of small business data breaches reveal...") without naming or citing the research organization. | Unattributed statistical claims degrade E-E-A-T and reader trust. | Attribute explicitly to published industry telemetry (such as the Ponemon Institute Cost of Insider Threats report or Verizon DBIR), or reframe as documented industry incident experience. | [Ponemon Institute: Cost of Insider Threats Global Report](https://www.ponemon.org/) <br> [Verizon: 2024 Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) |
| **SOURCE** | `src/content/guides/microsoft-365-security-small-business.mdx` (Line 7) | `## Quick Summary` <br> "...protects small businesses against more than 90% of cloud credential stuffing, business email compromise, and data leakage attacks." | Quantitative claim ("more than 90%") lacks an explicit citation in the text. | Asserting exact percentages without linking the source invites skepticism. | Cite the Microsoft Digital Defense Report, which documents that basic identity hygiene (such as MFA) protects against over 98-99% of identity-based attacks. | [Microsoft: Microsoft Digital Defense Report](https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report) |
| **LOW** | Multiple: `mfa-for-small-businesses.mdx` (Lines 17, 41, 152), `small-business-password-policy.mdx` (Lines 39, 153), `small-business-password-manager-guide.mdx` (Lines 167-168) | Sources & Citations <br> Links pointing exclusively to `https://pages.nist.gov/800-63-4/` | References point to the GitHub Pages working draft of NIST SP 800-63-4. While forward-looking, SP 800-63-4 is an active draft; SP 800-63-3 remains the formally enacted standard. | Working draft links can change permalinks, and draft guidance should be explicitly designated as draft rather than finalized government policy. | Cite the official permanent NIST CSRC DOI publication URL (`csrc.nist.gov/pubs/sp/800/63/b/final`) as the primary reference, while noting that SP 800-63-4 is an active draft revision proposing modern guidelines (such as the 15-character single-factor threshold). | [NIST CSRC: SP 800-63B Digital Identity Guidelines](https://csrc.nist.gov/pubs/sp/800/63/b/final) |
| **STYLE** | `src/content/guides/small-business-computer-laptop-security.mdx` (Line 55) | `## 1. Full-Disk Encryption` <br> "...anyone who physically possesses the laptop can remove the storage drive, connect it to another computer, and read every document..." | On modern laptops (Apple Silicon MacBooks, Microsoft Surface, compact ultrabooks), storage is soldered directly to the logic board and cannot be physically removed. The threat is booting via external media or recovery environments. | Wording feels dated to technical readers who know modular hard drives are largely legacy on modern ultrabooks. | Update to: "Without full-disk encryption, anyone who physically possesses the laptop can boot into a secondary operating system or extract files directly from storage—completely bypassing the operating system login password." | [Apple Support: FileVault Overview](https://support.apple.com/guide/security/filevault-sec4c407c6f0/web) <br> [Microsoft Learn: BitLocker Overview](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/) |

---

## 5. Guide-by-Guide Results

### 1. `small-business-cybersecurity-checklist.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** A rock-solid, balanced 25-point foundational checklist. Accurately frames small business constraints ("Done looks like"), avoids over-prescriptive vendor lock-in, correctly defines MFA, backups, and least privilege. Links cleanly to specific topical spoke guides.

### 2. `mfa-for-small-businesses.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO (NIST draft link can be paired with permanent CSRC DOI)
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Exemplary technical distinction between authentication factors, SMS vs. TOTP authenticator apps, and phishing-resistant FIDO2/WebAuthn. Correctly explains credential binding, recovery codes, and account fallback risks.

### 3. `small-business-password-policy.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Fully aligned with modern NIST SP 800-63B standards. Explicitly debunks counter-productive 90-day password expiration rules, composition complexity requirements, and promotes long passphrases and password managers.

### 4. `small-business-phishing-protection.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Clear, pragmatic advice emphasizing behavioral pauses, domain inspection, and out-of-band verification over unrealistic forensic analysis. Appropriately routes payment-diversion scenarios to the BEC guide.

### 5. `small-business-backup-ransomware-protection.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Technically precise. Correctly explains the critical distinction between synchronized cloud storage (which synchronizes ransomware encryption) and true isolated/immutable backups. Strongly emphasizes restoration testing and credential separation.

### 6. `small-business-incident-response-plan.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Highly practical one-page incident response structure. Correctly emphasizes out-of-band communication during suspected compromises, evidence preservation, and avoidance of premature host destruction. Cites CISA IR basics and NIST SP 800-61 Rev 3.

### 7. `small-business-password-manager-guide.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Accurately explains zero-knowledge client-side encryption architectures, master password safety, emergency kit governance, and team vault sharing. Fair, accurate evaluation of market tools (Bitwarden, 1Password, Apple Passwords).

### 8. `business-email-compromise-small-business-payment-fraud.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** PASS
- **Findings:** Outstanding, in-depth guide on BEC lifecycle, invoice fraud, and banking kill chains. Thoroughly explains the 72-hour wire recall window, out-of-band dual verification, and email authentication (SPF, DKIM, DMARC). Cites FBI IC3 and NIST SP 800-177.

### 9. `employee-offboarding-security-checklist.mdx`
- **Technical accuracy:** PASS
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** YES (Uncited small business breach claim in intro)
- **Internal link issues:** NO
- **Overall status:** PASS (Minor source attribution refinement recommended)
- **Findings:** Exceptional operational procedure emphasizing non-destructive offboarding (disabling sign-ins, reassigning file ownership, revoking active refresh tokens before deleting accounts).

### 10. `microsoft-365-security-small-business.mdx`
- **Technical accuracy:** NEEDS REVIEW
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** YES (OneDrive ransomware rollback vs. 3rd-party backup distinction)
- **Citation gaps:** YES (90% attack prevention metric citation)
- **Internal link issues:** NO
- **Overall status:** NEEDS REVISION
- **Findings:** Excellent coverage of Security Defaults, emergency break-glass accounts, OAuth app consent, and external forwarding blocks. Requires adjustment of the claim regarding Microsoft 365 ransomware protection to acknowledge built-in 30-day "Restore your OneDrive" capabilities while affirming the need for independent backups.

### 11. `small-business-computer-laptop-security.mdx`
- **Technical accuracy:** NEEDS REVIEW
- **Outdated claims:** YES (Windows 10 lifecycle in 2026)
- **Dangerous advice:** NO
- **Missing qualifications:** NO
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** NEEDS REVISION
- **Findings:** Strong coverage of BitLocker, FileVault, least privilege, and patching. Requires updating to reflect that Windows 10 reached End of Life in October 2025, recommending migration to Windows 11 Pro or enrollment in Microsoft's ESU program. Phrasing on physical drive removal should be modernized for soldered SSDs.

### 12. `small-business-wifi-network-security.mdx`
- **Technical accuracy:** NEEDS REVIEW
- **Outdated claims:** NO
- **Dangerous advice:** NO
- **Missing qualifications:** YES (WPA3-SAE resilience phrasing, router DNS filtering bypass via DoH/static DNS, subnet changing context)
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** NEEDS REVISION
- **Findings:** High-value network segmentation guide. Requires calibration of absolute language ("mathematically immune", "any device will be blocked") and clarification that encrypted DNS (DoH/DoT) can bypass router DHCP DNS unless restricted by router firewall rules.

### 13. `small-business-domain-name-security.mdx`
- **Technical accuracy:** NEEDS REVIEW
- **Outdated claims:** YES (Google Domains still listed)
- **Dangerous advice:** NO
- **Missing qualifications:** YES (Hardware key absolute claim, ICANN TDRP procedure)
- **Citation gaps:** NO
- **Internal link issues:** NO
- **Overall status:** NEEDS REVISION
- **Findings:** Comprehensive domain governance, transfer locking, and DNSSEC guide. Requires removing defunct Google Domains, clarifying ICANN TDRP filing procedures for registrants, and softening absolute wording on hardware security keys.

---

## 6. Authoritative Sources

| Organization | Document / Standard / Title | Official URL | Supported Claims / Technical Scope |
|---|---|---|---|
| **NIST** | SP 800-63B: Digital Identity Guidelines (Authentication and Lifecycle Management) | https://csrc.nist.gov/pubs/sp/800/63/b/final | Validates deprecation of arbitrary password expirations, length over complexity composition, authenticator assurance levels (AAL1-AAL3), and verifier-name binding. |
| **NIST** | SP 800-61 Rev. 3: Incident Response Recommendations and Considerations | https://csrc.nist.gov/pubs/sp/800/61/r3/final | Validates structured incident response lifecycle: preparation, detection/analysis, containment/eradication, and recovery. |
| **NIST** | SP 800-177 Rev. 1: Trustworthy Email Guide | https://csrc.nist.gov/publications/detail/sp/800-177/rev-1/final | Authoritative technical foundation for email authentication protocols (SPF, DKIM, DMARC) and mail server encryption. |
| **CISA** | Phishing-Resistant Multifactor Authentication Fact Sheet | https://www.cisa.gov/resources-tools/resources/phishing-resistant-multifactor-authentication-fact-sheet | Confirms FIDO2/WebAuthn as the only phishing-resistant MFA standard; establishes resilience against adversary-in-the-middle attacks. |
| **CISA** | Selecting Protective DNS Services | https://www.cisa.gov/resources-tools/resources/protective-dns-fact-sheet | Details DNS-layer threat filtering, recursive resolver blocking of known malicious domains, and DoH/DoT operational considerations. |
| **CISA** | StopRansomware Guide & Ransomware Prevention Best Practices | https://www.cisa.gov/stopransomware/ransomware-guide | Guides air-gapped, immutable backup architectures, 3-2-1 backup strategies, and offline credential management. |
| **Microsoft** | Restore your OneDrive (Files Restore) | https://support.microsoft.com/en-us/office/restore-your-onedrive-fa231222-759d-4952-acef-7e4242a9ac8b | Confirms native Microsoft 365 point-in-time file recovery capabilities for OneDrive and SharePoint against mass ransomware encryption. |
| **Microsoft** | Microsoft Lifecycle: Windows 10 Home and Pro | https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro | Documents official Windows 10 End of Life date as October 14, 2025, and Extended Security Update (ESU) requirements. |
| **Microsoft** | Microsoft Digital Defense Report | https://www.microsoft.com/en-us/security/security-insider/microsoft-digital-defense-report | Documents empirical identity threat statistics, confirming >98-99% attack mitigation from basic MFA and identity hygiene. |
| **ICANN** | Transfer Dispute Resolution Policy (TDRP) | https://www.icann.org/resources/pages/tdrp-2024-02-21-en | Authoritative specification establishing that TDRP disputes are strictly inter-registrar proceedings initiated by the losing registrar. |
| **ICANN / Google** | Google Domains Asset Migration Notice | https://support.google.com/domains/answer/13689670 | Confirms shutdown of Google Domains and complete customer migration to Squarespace Domains. |
| **IETF / RFC** | RFC 8484: DNS Queries over HTTPS (DoH) | https://www.rfc-editor.org/rfc/rfc8484 | Specifies encrypted DNS over port 443, documenting how client endpoints bypass local network recursive DNS resolvers. |
| **Wi-Fi Alliance** | Wi-Fi CERTIFIED WPA3 Security Standards | https://www.wi-fi.org/discover-wi-fi/security | Specifies Simultaneous Authentication of Equals (SAE), Protected Management Frames (PMF), and transition mode configurations. |
| **FBI IC3** | Internet Crime Report: Business Email Compromise Statistics | https://www.ic3.gov | Authoritative empirical benchmark for global BEC losses, reporting thresholds, and the 72-hour financial kill chain. |

---

## 7. Recommended Fix Order

1. **Critical:** None. (Zero critical vulnerabilities or dangerous practices detected).
2. **High Priority:**
   - `small-business-domain-name-security.mdx`: Remove defunct "Google Domains", replace with "Squarespace Domains".
   - `microsoft-365-security-small-business.mdx`: Accurately describe Microsoft's built-in 30-day "Restore your OneDrive" ransomware recovery feature while affirming the distinct benefits of third-party immutable backups.
3. **Medium Priority:**
   - `small-business-wifi-network-security.mdx`: Rephrase WPA3-SAE "mathematically immune" claim to focus on resistance against offline dictionary attacks; qualify router DNS filtering against DoH/DoT; clarify subnet changes as defense-in-depth rather than standalone CSRF defense.
   - `small-business-domain-name-security.mdx`: Soften hardware key claim ("renders stolen passwords alone insufficient"); clarify that registrants request their registrar initiate an ICANN TDRP or submit an ICANN Transfer Complaint.
   - `small-business-computer-laptop-security.mdx`: Add notice that Windows 10 reached End of Life in October 2025 and requires Windows 11 Pro or ESU enrollment.
4. **Low Priority / Source Attribution:**
   - `employee-offboarding-security-checklist.mdx`: Attribute or soften insider breach retention statement in the intro.
   - `microsoft-365-security-small-business.mdx`: Cite Microsoft Digital Defense Report for the >90% attack mitigation metric.
   - `mfa-for-small-businesses.mdx`, `small-business-password-policy.mdx`, `small-business-password-manager-guide.mdx`: Include permanent NIST CSRC DOI publication links alongside draft revision references.
5. **Style / Cosmetic Improvements:**
   - `small-business-computer-laptop-security.mdx`: Modernize physical drive removal phrasing to reflect modern soldered SSD architectures.

---

## 8. What NOT To Change

The audit confirms that the overwhelming majority of content is technically sound, responsible, and practical. The following sections and approaches must **NOT** be modified:

1. **Core Password Policy Principles:**  
   Do not revert to legacy password composition rules (e.g., demanding symbols or numbers) or recommend periodic mandatory password expiration (e.g., 90-day resets). The current advice correctly adheres to NIST SP 800-63B.
2. **MFA Hierarchy:**  
   The current presentation ranking phishing-resistant FIDO2/WebAuthn and passkeys above TOTP apps, and TOTP apps above SMS, is technically flawless and matches CISA and NIST guidance. Do not degrade or alter this hierarchy.
3. **Backup Separation Strategy:**  
   The clear distinction drawn between cloud file synchronization (e.g., Dropbox/OneDrive sync) and true immutable/isolated backups is vital. Do not weaken this distinction.
4. **Out-of-Band Verification Rules:**  
   The dual-authorization and callback procedures in the BEC and phishing guides are the gold standard for fraud prevention. Do not dilute these recommendations.
5. **Non-Destructive Offboarding Workflow:**  
   The instruction to never delete departing employee accounts immediately, and instead disable login, reassign data, revoke active sessions, and rotate team credentials, is sound systems administration practice. Preserve this workflow intact.
6. **Internal Link Structure:**  
   The existing hub-and-spoke internal links are 100% functional, contextually appropriate, and free of 404s. Do not restructure or remove existing internal links.

---

## 9. Phase 7A Verdict

**READY FOR IMPLEMENTATION**

*(Phase 7B may proceed to implement the specific factual calibrations, EOL updates, and source citations documented above without requiring architectural or design alterations).*

---

## 10. Phase 7A Implementation Status

### Fixes Implemented
1. **Google Domains Deprecation Replaced:**
   - In `src/content/guides/small-business-domain-name-security.mdx`, replaced the outdated "Google Domains / Squarespace" entry with "Squarespace Domains".
2. **Microsoft 365 / OneDrive Native Recovery vs. Independent Backups:**
   - In `src/content/guides/microsoft-365-security-small-business.mdx`, revised the backup tools and common mistakes sections to accurately document Microsoft 365's native 30-day "Restore your OneDrive" ransomware rollback, version history, and recycle bins, while explaining the clear necessity of independent backups for tenant isolation, administrative compromise protection, and long-term retention.
   - Refined the introductory attack mitigation claim with Microsoft telemetry context and added `Restore your OneDrive` and `Microsoft Digital Defense Report` citations to Sources.
3. **WPA3-SAE Resilience Phrasing Calibrated:**
   - In `src/content/guides/small-business-wifi-network-security.mdx`, replaced the absolute phrase "mathematically immune" with accurate technical phrasing regarding the elimination of passive offline four-way handshake dictionary attacks.
4. **Protective DNS Router Filtering Qualified:**
   - In `src/content/guides/small-business-wifi-network-security.mdx`, qualified that router-level DNS filtering applies to devices using default network DNS and can be bypassed by hardcoded or encrypted DNS (DoH/DoT) unless firewall rules intercept port 53 and DoH endpoints.
5. **Subnet Modification Reframed as Defense-in-Depth:**
   - In `src/content/guides/small-business-wifi-network-security.mdx`, reframed changing router default LAN subnets as an optional defense-in-depth tactic against automated scripts rather than a standalone security boundary replacing strong credentials and disabled WAN management.
6. **Hardware Key Absolute Claim Calibrated:**
   - In `src/content/guides/small-business-domain-name-security.mdx`, rephrased "renders stolen passwords completely useless" to "renders stolen passwords alone insufficient to access the account", preventing false assumptions regarding session theft or recovery bypass.
7. **Windows 10 End of Life Status Updated:**
   - In `src/content/guides/small-business-computer-laptop-security.mdx`, updated BitLocker requirements and Defender Antivirus sections to explicitly reflect that Windows 10 reached official End of Life on October 14, 2025, advising businesses to run Windows 11 Pro or enroll in Microsoft's Extended Security Updates (ESU) program.
8. **ICANN TDRP Complaint Process Clarified:**
   - In `src/content/guides/small-business-domain-name-security.mdx`, corrected the incident recovery step to explain that registrants submit an ICANN Transfer Complaint at icann.org/compliance and request that their original registrar initiate a dispute under ICANN's inter-registrar Transfer Dispute Resolution Policy (TDRP).
9. **Insider Breach Research Attribution Refined:**
   - In `src/content/guides/employee-offboarding-security-checklist.mdx`, updated the introductory breach assertion from vague "Studies of small business data breaches reveal" to reference industry breach reports and insider threat research.

### Files Modified
- `src/content/guides/small-business-domain-name-security.mdx`
- `src/content/guides/microsoft-365-security-small-business.mdx`
- `src/content/guides/small-business-wifi-network-security.mdx`
- `src/content/guides/small-business-computer-laptop-security.mdx`
- `src/content/guides/employee-offboarding-security-checklist.mdx`

### Fixes Intentionally Not Implemented & Rationale
1. **Physical Drive Extraction Phrasing on Modern Hardware (`small-business-computer-laptop-security.mdx`, Line 55):**
   - *Rationale:* Stylistic nuance only. Many small business laptops and desktops still utilize removable M.2 NVMe SSDs where physical extraction remains a viable threat vector without full-disk encryption. The existing explanation remains practically accurate and accessible.
2. **Replacing NIST GitHub Pages Draft Working URLs (`mfa-for-small-businesses.mdx`, `small-business-password-policy.mdx`, `small-business-password-manager-guide.mdx`):**
   - *Rationale:* NIST SP 800-63-4 working drafts accurately represent the authoritative source for the specific 15-character single-factor threshold and modern verifier-name binding terminology cited in those guides. The draft URLs remain active and functional, and avoiding unnecessary cosmetic edits preserves guide stability.

### Verification Results
- **`git diff --check`:** PASSED (0 errors, clean diff)
- **`npm.cmd run check`:** PASSED (ESLint: 0 errors; TypeScript: 0 errors)
- **`npm.cmd run build`:** PASSED (All 24 static routes generated successfully in 1642ms)
- **`git status --short`:**
  - `M src/content/guides/employee-offboarding-security-checklist.mdx`
  - `M src/content/guides/microsoft-365-security-small-business.mdx`
  - `M src/content/guides/small-business-computer-laptop-security.mdx`
  - `M src/content/guides/small-business-domain-name-security.mdx`
  - `M src/content/guides/small-business-wifi-network-security.mdx`
  - `?? docs/PHASE-7A-ACCURACY-AUDIT.md`
- **Confirmation:** ZERO unrelated files or infrastructure configurations were modified. NO git commit or push has been performed.
