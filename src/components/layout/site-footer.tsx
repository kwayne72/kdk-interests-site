import { Link } from "@tanstack/react-router";
import { HouseMark } from "@/components/logo";
import { companies } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <HouseMark className="size-8" />
            <div>
              <p className="font-display text-2xl font-medium leading-none">KDK Interests</p>
              <p className="mt-1.5 text-xs tracking-[0.2em] text-muted uppercase">LLC</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            A Dallas-born holding company. The roof over KDK TX and KDK Media — and whatever we choose to
            build next.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="kicker mb-4">The house</p>
            <ul className="space-y-2.5 text-sm text-paper/90">
              <li>
                <Link to="/" className="hover:text-sage">
                  Front door
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sage">
                  How it is built
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sage">
                  Write to us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Rooms</p>
            <ul className="space-y-2.5 text-sm text-paper/90">
              {companies.map((c) => (
                <li key={c.id}>
                  <Link to={c.href} className="hover:text-sage">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Presence</p>
            <p className="text-sm leading-relaxed text-muted">
              Dallas, Texas
              <br />
              Palmer & Ellis County
              <br />
              The world, as the work requires
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-line px-5 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} KDK Interests LLC. All rights reserved.</p>
        <p>A house, not a conglomerate.</p>
      </div>
    </footer>
  );
}
