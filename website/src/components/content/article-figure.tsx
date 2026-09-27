import Image from "next/image";
import type { ArticleImage } from "@/types/content";

type Props = ArticleImage & {
  caption?: string;
  priority?: boolean;
};

export function ArticleFigure({ src, alt, width, height, caption, priority = false }: Props) {
  const svg = src.toLowerCase().endsWith(".svg");

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-surface-muted">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="h-auto w-full"
        unoptimized={svg}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      {caption ? <figcaption className="px-4 py-3 text-sm leading-6 text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}
