import { Link } from "@tanstack/react-router";
import { companies } from "@/lib/site";

export function HouseTree() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <p className="kicker">How the house is built</p>
      <div className="mt-10 flex w-full flex-col items-center">
        <div className="rounded-lg border border-line px-6 py-4">
          <p className="kicker text-sage">The Trust</p>
          <p className="mt-2 font-display text-2xl font-medium text-paper">Family trust</p>
          <p className="mt-1 text-sm text-muted">The long horizon</p>
        </div>
        <div className="h-10 w-px bg-line-strong" aria-hidden />
        <div className="w-full max-w-md rounded-xl border border-line-strong bg-ink-soft px-8 py-6">
          <p className="kicker text-sage">Parent</p>
          <p className="mt-2 font-display text-3xl font-medium text-paper">KDK Interests LLC</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The company inside the Trust. The roof over every room.
          </p>
        </div>
        <div className="relative h-12 w-full max-w-md" aria-hidden>
          <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-px bg-line-strong" />
          <div className="absolute left-[18%] right-[18%] top-6 h-px bg-line-strong" />
          <div className="absolute left-[18%] top-6 h-6 w-px bg-line-strong" />
          <div className="absolute right-[18%] top-6 h-6 w-px bg-line-strong" />
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          {companies.map((c) => (
            <Link
              key={c.id}
              to={c.href}
              className="group rounded-xl border border-line bg-ink-soft px-6 py-6 text-left transition-[border-color,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-strong"
            >
              <p className="kicker text-sage">{c.eyebrow}</p>
              <p className="mt-2 font-display text-2xl font-medium text-paper group-hover:text-ivory">
                {c.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.lede}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
