import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs",
  secondary: "border border-border bg-surface text-foreground hover:bg-surface-muted hover:border-border-strong",
  outline: "border border-border bg-transparent text-foreground hover:bg-surface-muted",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
} as const;

const sizes = {
  sm: "min-h-9 px-3 py-1.5 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
} as const;

type BaseProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ComponentProps<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = props as ButtonAsLink;
    return <Link href={href} className={baseClasses} {...linkProps} />;
  }

  const buttonProps = props as React.ComponentProps<"button">;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={baseClasses}
      {...buttonProps}
    />
  );
}
