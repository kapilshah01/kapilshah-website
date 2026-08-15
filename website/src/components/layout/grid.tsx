import { cn } from "@/lib/utils";

type GridProps = React.ComponentProps<"div">;
export function Grid({ className, ...props }: GridProps) {
  return <div className={cn("grid gap-5", className)} {...props} />;
}
