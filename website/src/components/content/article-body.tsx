export function ArticleBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-10 space-y-6 text-base leading-relaxed text-foreground
      [&_p]:text-muted-foreground [&_p]:leading-7 [&_p]:text-sm sm:[&_p]:text-base
      [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary-hover
      [&_h2]:mt-12 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:scroll-mt-24 [&_h2]:border-b [&_h2]:border-border/60 [&_h2]:pb-2
      [&_h3]:mt-8 [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-foreground [&_h3]:scroll-mt-24
      [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground
      [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:text-sm sm:[&_ul]:text-base
      [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_ol]:text-sm sm:[&_ol]:text-base
      [&_li]:my-2
      [&_strong]:font-semibold [&_strong]:text-foreground
      [&_code]:rounded-md [&_code]:bg-surface-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs sm:[&_code]:text-sm [&_code]:font-mono [&_code]:text-foreground [&_code]:border [&_code]:border-border/80
      [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface-muted [&_pre]:p-4 [&_pre]:text-xs sm:[&_pre]:text-sm
      [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-surface-muted/40 [&_blockquote]:p-4 [&_blockquote]:rounded-r-lg [&_blockquote]:italic
      [&_table]:w-full [&_table]:border-collapse [&_table]:text-xs sm:[&_table]:text-sm [&_table]:my-6
      [&_th]:border [&_th]:border-border [&_th]:bg-surface-muted [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground
      [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-muted-foreground"
    >
      {children}
    </div>
  );
}
