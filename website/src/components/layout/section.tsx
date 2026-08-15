import { cn } from "@/lib/utils";
type SectionProps = React.ComponentProps<"section">;
export function Section({ className, ...props }: SectionProps) { return <section className={cn("py-14 sm:py-20", className)} {...props} />; }
