import { cn } from "@/lib/utils";

type StackProps = React.ComponentProps<"div"> & { gap?: "sm" | "md" | "lg" };
const gaps = { sm: "gap-3", md: "gap-6", lg: "gap-8" } as const;

export function Stack({ className, gap = "md", ...props }: StackProps) {
  return <div className={cn("flex flex-col", gaps[gap], className)} {...props} />;
}
