import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"article"> & {
  hover?: boolean;
};

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface p-6 transition-all duration-200",
        hover && "hover:border-primary/50 hover:shadow-sm",
        className
      )}
      {...props}
    />
  );
}
