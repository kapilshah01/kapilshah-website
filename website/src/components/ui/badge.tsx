import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-surface-muted text-foreground border border-border",
  primary: "bg-primary/10 text-primary border border-primary/20",
  secondary: "bg-secondary text-secondary-foreground border border-border",
  success: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-900 dark:text-amber-200 border border-amber-500/20",
  critical: "bg-red-500/10 text-red-800 dark:text-red-300 border border-red-500/20",
  outline: "bg-transparent text-foreground border border-border",
} as const;

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: keyof typeof badgeVariants;
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
