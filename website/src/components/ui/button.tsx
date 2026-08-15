import { cn } from "@/lib/utils";
const variants = { primary: "bg-primary text-primary-foreground hover:bg-primary/90", secondary: "border border-border bg-surface text-foreground hover:bg-surface-muted" } as const;
type ButtonProps = React.ComponentProps<"a"> & { variant?: keyof typeof variants };
export function Button({ className, variant = "primary", ...props }: ButtonProps) { return <a className={cn("inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", variants[variant], className)} {...props} />; }
