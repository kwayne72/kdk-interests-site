import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "bg-ink/90 shadow-[0_1px_0_0_color-mix(in_oklab,var(--color-paper)_10%,transparent)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Wordmark compact />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative py-2 text-[0.8rem] font-medium tracking-[0.16em] uppercase transition-colors duration-150",
                  active ? "text-paper" : "text-muted hover:text-paper",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px bg-sage transition-opacity duration-200",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="relative flex size-11 items-center justify-center text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="flex min-h-[calc(100dvh-4rem)] flex-col gap-2 bg-ink px-6 pb-16 pt-6"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-display text-4xl font-medium tracking-tight text-paper py-3"
            >
              {item.label}
            </Link>
          ))}
          <p className="mt-auto kicker">Dallas · The world in view</p>
        </nav>
      </div>
    </header>
  );
}
