import Link from "next/link";
import { Container } from "@/components/layout/container";

const groups = [
  { title: "Content", links: [["Cybersecurity Guides", "/guides"], ["Small Business Security", "/small-business"], ["Start Here", "/start-here"]] },
  { title: "Site", links: [["About Kapil", "/about"]] },
];

export function SiteFooter() {
  return <footer className="border-t border-border bg-surface-muted"><Container className="py-12"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(2,1fr)]"><div><p className="text-base font-bold text-foreground">Kapil Shah</p><p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Practical cybersecurity guidance for small businesses without a security team.</p></div>{groups.map((group) => <div key={group.title}><h2 className="text-sm font-semibold text-foreground">{group.title}</h2><ul className="mt-3 space-y-2">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{label}</Link></li>)}</ul></div>)}</div><p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Kapil Shah. All rights reserved.</p></Container></footer>;
}
