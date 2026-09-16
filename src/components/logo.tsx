import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function HouseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={cn("text-paper", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 16.5 18 6.5 31 16.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 16.5v12M18 16.5v12M27 16.5v12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 28.5h18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Wordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-3 text-paper no-underline",
        className,
      )}
      aria-label="KDK Interests, home"
    >
      <HouseMark className="size-8 shrink-0 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-medium tracking-[-0.02em]">
          KDK
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.62rem] font-medium tracking-[0.28em] text-muted uppercase">
            Interests
          </span>
        ) : null}
      </span>
    </Link>
  );
}
