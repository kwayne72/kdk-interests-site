import { cn } from "@/lib/utils";

export function FramedImage({
  src,
  alt,
  className,
  imgClassName,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-xl bg-ink-mid">
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
            imgClassName,
          )}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs tracking-wide text-subtle">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
