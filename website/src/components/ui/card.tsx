import { cn } from "@/lib/utils";
type CardProps = React.ComponentProps<"article">;
export function Card({ className, ...props }: CardProps) { return <article className={cn("rounded-lg border border-border bg-surface p-6", className)} {...props} />; }
