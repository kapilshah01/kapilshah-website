import { cn } from "@/lib/utils";
type BadgeProps = React.ComponentProps<"span">;
export function Badge({ className, ...props }: BadgeProps) { return <span className={cn("inline-flex items-center rounded-sm bg-surface-muted px-2.5 py-1 text-xs font-semibold text-secondary", className)} {...props} />; }
