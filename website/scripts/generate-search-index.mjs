import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const guidesDir = path.join(rootDir, "src", "content", "guides");
const outputFile = path.join(rootDir, "src", "data", "search-index.ts");

const pillars = {
  "account-identity": "Account & Identity Security",
  "email-phishing": "Email, Phishing & Social Engineering",
  "website-device": "Website, Software & Device Security",
  "data-recovery": "Data, Backups & Recovery",
  "incident-response": "Incident Response",
  "security-management": "Small Business Security Management",
};

// Guide metadata matching src/lib/content.ts
const guidesMetadata = [
  {
    slug: "small-business-cybersecurity-checklist",
    file: "small-business-cybersecurity-checklist.mdx",
    title: "Small Business Cybersecurity Checklist: 25 Things to Secure Your Business",
    description: "A practical 25-point checklist to help small businesses protect accounts, email, devices, data, backups, and incident response.",
    category: "security-management",
    tags: ["small-business", "cybersecurity-checklist", "security-basics", "risk-management", "backups", "phishing"],
    readingTime: 15,
    difficulty: "beginner",
    publishedAt: "2026-08-15",
  },
  {
    slug: "mfa-for-small-businesses",
    file: "mfa-for-small-businesses.mdx",
    title: "Multi-Factor Authentication (MFA) for Small Businesses: A Practical Guide",
    description: "A practical beginner-friendly guide to choosing, rolling out, and recovering multi-factor authentication for critical small-business accounts.",
    category: "account-identity",
    tags: ["mfa", "accounts", "security-basics", "small-business", "email-security", "security-management"],
    readingTime: 12,
    difficulty: "beginner",
    publishedAt: "2026-08-15",
  },
  {
    slug: "small-business-password-policy",
    file: "small-business-password-policy.mdx",
    title: "How to Create a Strong Password Policy for a Small Business",
    description: "A practical password-policy guide for small businesses covering long unique passwords, password managers, MFA, access removal, and compromise response.",
    category: "account-identity",
    tags: ["passwords", "password-policy", "account-security", "mfa", "small-business", "security-management"],
    readingTime: 15,
    difficulty: "beginner",
    publishedAt: "2026-09-16",
  },
  {
    slug: "small-business-phishing-protection",
    file: "small-business-phishing-protection.mdx",
    title: "Small Business Phishing Protection: How to Spot and Stop Email Scams",
    description: "A practical guide for small businesses to recognize phishing, verify suspicious requests, and respond safely to email scams.",
    category: "email-phishing",
    tags: ["phishing", "email-security", "small-business", "business-email-compromise", "account-security", "incident-response"],
    readingTime: 11,
    difficulty: "beginner",
    publishedAt: "2026-08-15",
  },
  {
    slug: "small-business-backup-ransomware-protection",
    file: "small-business-backup-ransomware-protection.mdx",
    title: "Small Business Backup and Ransomware Protection: A Practical Recovery Plan",
    description: "Plan recoverable backups for a small business: choose critical data, protect backup access, test restores, and prepare for ransomware safely.",
    category: "data-recovery",
    tags: ["backups", "ransomware", "data-recovery", "small-business", "incident-response"],
    readingTime: 7,
    difficulty: "beginner",
    publishedAt: "2026-09-27",
  },
  {
    slug: "small-business-incident-response-plan",
    file: "small-business-incident-response-plan.mdx",
    title: "How to Create a Small Business Cybersecurity Incident Response Plan",
    description: "Create a practical incident response plan for a small business, with reporting steps, offline contacts, recovery priorities, and a simple practice exercise.",
    category: "incident-response",
    tags: ["incident-response", "small-business", "recovery", "phishing", "account-security"],
    readingTime: 8,
    difficulty: "beginner",
    publishedAt: "2026-09-27",
  },
  {
    slug: "small-business-password-manager-guide",
    file: "small-business-password-manager-guide.mdx",
    title: "Small Business Password Manager Guide: How to Store Business Passwords Safely",
    description: "Learn how a small business can store passwords safely, manage shared access and recovery, and onboard or offboard employees with a password manager.",
    category: "account-identity",
    tags: ["password-manager", "passwords", "account-security", "small-business", "onboarding", "offboarding", "mfa"],
    readingTime: 12,
    difficulty: "beginner",
    publishedAt: "2026-09-27",
  },
  {
    slug: "business-email-compromise-small-business-payment-fraud",
    file: "business-email-compromise-small-business-payment-fraud.mdx",
    title: "Business Email Compromise: How Small Businesses Can Prevent Payment Fraud",
    description: "Learn how small businesses can recognize business email compromise (BEC), stop changed bank details and fake invoice scams, and verify payment requests safely.",
    category: "email-phishing",
    tags: ["business-email-compromise", "bec", "payment-fraud", "email-security", "small-business", "phishing", "fraud-prevention", "incident-response"],
    readingTime: 14,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "small-business-computer-laptop-security",
    file: "small-business-computer-laptop-security.mdx",
    title: "Small Business Work Computer Security: How to Protect Laptops and Workstations",
    description: "A practical guide to securing small business laptops and workstations: BitLocker, FileVault, least privilege, patching, antivirus, and theft response.",
    category: "website-device",
    tags: ["device-security", "laptops", "encryption", "bitlocker", "endpoint-security", "small-business", "security-basics"],
    readingTime: 14,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "microsoft-365-security-small-business",
    file: "microsoft-365-security-small-business.mdx",
    title: "Microsoft 365 Security for Small Businesses: Essential Settings to Protect Your Tenant",
    description: "Practical Microsoft 365 security settings for small businesses: Security Defaults, dedicated admin accounts, disabling auto-forwarding, app consent, and audit logs.",
    category: "account-identity",
    tags: ["microsoft-365", "email-security", "mfa", "business-email-compromise", "entra-id", "small-business", "cloud-security"],
    readingTime: 16,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "employee-offboarding-security-checklist",
    file: "employee-offboarding-security-checklist.mdx",
    title: "Employee Offboarding Security Checklist: How to Revoke Access When Staff Leave",
    description: "A step-by-step security checklist for small businesses to revoke access, recover hardware, audit mailboxes, and prevent data leakage when employees leave.",
    category: "security-management",
    tags: ["offboarding", "access-management", "password-manager", "microsoft-365", "identity", "small-business", "risk-management"],
    readingTime: 13,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "small-business-wifi-network-security",
    file: "small-business-wifi-network-security.mdx",
    title: "Small Business Wi-Fi Security: How to Protect Your Office Wireless Network",
    description: "Learn how small businesses can secure office Wi-Fi networks: separate guest Wi-Fi, change default router passwords, enable WPA3, isolate IoT devices, and update firmware.",
    category: "website-device",
    tags: ["wifi-security", "network-security", "router-hardening", "wpa3", "guest-network", "small-business", "iot-security"],
    readingTime: 13,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "small-business-domain-name-security",
    file: "small-business-domain-name-security.mdx",
    title: "Domain Name Security for Small Businesses: How to Prevent Domain Takeovers and DNS Hijacking",
    description: "Protect your small business domain name from theft and DNS hijacking: enable registrar locks, enforce MFA on registrar accounts, prevent expiration, and secure DNS records.",
    category: "website-device",
    tags: ["domain-security", "dns", "dnssec", "domain-takeover", "registrar-lock", "small-business", "brand-protection"],
    readingTime: 14,
    difficulty: "beginner",
    publishedAt: "2026-09-30",
  },
  {
    slug: "google-workspace-security-small-business",
    file: "google-workspace-security-small-business.mdx",
    title: "Google Workspace Security for Small Businesses: Essential Settings to Protect Your Tenant",
    description: "Practical Google Workspace security settings for small businesses: 2-Step Verification, dedicated admin accounts, disabling auto-forwarding, app access control, and Drive sharing.",
    category: "account-identity",
    tags: ["google-workspace", "email-security", "mfa", "business-email-compromise", "google-drive", "small-business", "cloud-security"],
    readingTime: 16,
    difficulty: "beginner",
    publishedAt: "2026-10-04",
  },
  {
    slug: "cyber-insurance-readiness-small-business",
    file: "cyber-insurance-readiness-small-business.mdx",
    title: "Cyber Insurance Readiness Checklist: Security Controls and Evidence Small Businesses Should Prepare",
    description: "A vendor-neutral cyber insurance readiness checklist for small businesses: common underwriting questions, required evidence, and pre-application steps.",
    category: "security-management",
    tags: ["cyber-insurance", "small-business", "risk-management", "mfa", "backups", "incident-response", "compliance"],
    readingTime: 18,
    difficulty: "beginner",
    publishedAt: "2026-10-04",
  },
];

function cleanMdxText(raw) {
  return raw
    .replace(/^import\s+[\s\S]*?;\s*$/gm, "")
    .replace(/<[A-Za-z0-9_]+[\s\S]*?(?:\/>|<\/[A-Za-z0-9_]+>)/g, " ")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/`[^`]*`/g, " ")
    .replace(/[#*_\-\|>`~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const searchItems = [];

for (const g of guidesMetadata) {
  const filePath = path.join(guidesDir, g.file);
  let cleaned = "";
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf8");
    cleaned = cleanMdxText(raw);
  }
  searchItems.push({
    id: `guide-${g.slug}`,
    slug: g.slug,
    title: g.title,
    description: g.description,
    category: g.category,
    categoryLabel: pillars[g.category] || g.category,
    tags: g.tags,
    readingTime: g.readingTime,
    difficulty: g.difficulty,
    publishedAt: g.publishedAt,
    type: "guide",
    href: `/guides/${g.slug}`,
    content: cleaned,
  });
}

// Add Interactive Checklist
const checklistFile = path.join(rootDir, "src", "data", "checklist.ts");
let checklistContent = "";
if (fs.existsSync(checklistFile)) {
  const raw = fs.readFileSync(checklistFile, "utf8");
  checklistContent = raw
    .replace(/export\s+.*$/gm, "")
    .replace(/import\s+.*$/gm, "")
    .replace(/[{}\[\]":,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

searchItems.push({
  id: "tool-interactive-checklist",
  slug: "checklist",
  title: "Interactive Small Business Cybersecurity Checklist: 25 Controls",
  description: "Interactive 25-point cybersecurity checklist with browser progress tracking, category filters, and practical step-by-step verification methods.",
  category: "security-management",
  categoryLabel: pillars["security-management"],
  tags: ["checklist", "small-business", "interactive", "controls", "mfa", "passwords", "backups", "phishing", "incident-response"],
  readingTime: 15,
  difficulty: "beginner",
  publishedAt: "2026-08-15",
  type: "tool",
  href: "/checklist",
  content: checklistContent,
});

// Add Small Business Hub
searchItems.push({
  id: "page-small-business",
  slug: "small-business",
  title: "Practical Cybersecurity for Small Businesses",
  description: "Security guidance designed for businesses without a dedicated security team. Essential foundations that reduce everyday risk and protect operations.",
  category: "security-management",
  categoryLabel: pillars["security-management"],
  tags: ["small-business", "roadmap", "security-hub", "mfa", "ransomware", "backups", "email-security"],
  readingTime: 8,
  difficulty: "beginner",
  publishedAt: "2026-08-15",
  type: "page",
  href: "/small-business",
  content: "Practical cybersecurity guidance for businesses without dedicated security teams. Cybersecurity checklist, MFA and passwords, Phishing protection, Workstation and device security, Backups and recovery, Incident response and planning.",
});

// Add Start Here
searchItems.push({
  id: "page-start-here",
  slug: "start-here",
  title: "Start Here: Practical Cybersecurity Roadmap",
  description: "A simple place to begin with cybersecurity. You do not need to become a security specialist: follow this practical progression one step at a time.",
  category: "security-management",
  categoryLabel: pillars["security-management"],
  tags: ["start-here", "roadmap", "priorities", "30-minutes", "1-week", "1-month"],
  readingTime: 5,
  difficulty: "beginner",
  publishedAt: "2026-08-15",
  type: "page",
  href: "/start-here",
  content: "Start here: A simple place to begin with cybersecurity. 1. Secure accounts (MFA, password managers). 2. Secure email (phishing protection, BEC). 3. Secure work computers (encryption, patching). 4. Protect and back up data. 5. Prepare for incidents. 6. Build a repeatable security process.",
});

const tsOutput = `// Auto-generated static search index for kapilshah.com.np
// Zero runtime API calls, zero database, privacy-preserving client search.

export interface SearchItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  readingTime?: number;
  difficulty?: string;
  publishedAt?: string;
  type: "guide" | "tool" | "page";
  href: string;
  content: string;
}

export const searchIndex: SearchItem[] = ${JSON.stringify(searchItems, null, 2)};
`;

fs.writeFileSync(outputFile, tsOutput, "utf8");
console.log(`Successfully generated search index with ${searchItems.length} items at ${outputFile}`);

