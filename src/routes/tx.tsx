import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { property } from "@/lib/site";

export const Route = createFileRoute("/tx")({
  head: () => ({
    meta: [
      { title: "KDK TX — Homes, held well" },
      {
        name: "description",
        content:
          "KDK TX, a company of KDK Interests LLC. Quality long-term rental homes in Palmer, Ellis County, and the Dallas–Fort Worth corridor.",
      },
    ],
  }),
  component: TxPage,
});

function TxPage() {
  return (
    <main>
      <section className="relative min-h-[88dvh] overflow-hidden bg-ink">
        <img
          src="/images/tx-home.jpg"
          alt="A well-kept Texas home at golden hour with a covered porch and mature trees"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil-room absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8">
          <p className="kicker text-sage">A company of KDK Interests</p>
          <h1 className="mt-4 font-display text-hero font-medium">KDK TX</h1>
          <p className="mt-5 max-w-lg font-display text-title italic text-paper/90">
            Homes for people who take care of them.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={property.site} target="_blank" rel="noreferrer">
                Open the rentals site
                <ArrowUpRight className="size-4" strokeWidth={1.6} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#property">Current home</a>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">The work</p>
            <h2 className="mt-4 font-display text-display font-medium">
              Clean homes. Quiet streets. A short line to the people who own them.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              KDK TX is the property room of the house — long-term rentals in Palmer and the
              communities around Ellis County and DFW. We keep the houses well so the people who
              live in them can do the same.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Straightforward process. Responsive management. No theatre.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <FramedImage
              src="/images/tx-porch.jpg"
              alt="A deep covered porch with wood ceiling, chairs, and hanging ferns"
              imgClassName="aspect-[3/2] sm:aspect-[4/5]"
              caption="Porch as a room, not a leftover."
            />
            <FramedImage
              src="/images/tx-kitchen.jpg"
              alt="Open-concept kitchen and living room with afternoon light"
              className="sm:mt-10"
              imgClassName="aspect-[3/2] sm:aspect-[4/5]"
              caption="Kitchen and living, one conversation."
            />
          </div>
        </div>
      </Section>

      <Section id="property" className="bg-ink-soft">
        <p className="kicker">Now featuring</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
          <FramedImage
            src="/images/tx-home.jpg"
            alt="Palmer residential home at golden hour"
            className="lg:col-span-7"
            imgClassName="aspect-[16/10]"
          />
          <div className="lg:col-span-5">
            <h2 className="font-display text-display font-medium">{property.name}</h2>
            <p className="mt-2 text-sm tracking-[0.16em] text-sage uppercase">{property.place}</p>
            <p className="mt-5 text-base leading-relaxed text-muted">{property.blurb}</p>
            <ul className="mt-6 space-y-2.5">
              {property.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-paper">
                  <Check className="mt-0.5 size-4 shrink-0 text-sage" strokeWidth={1.8} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={property.site} target="_blank" rel="noreferrer">
                  View on KDK TX
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${property.email}`}>Write {property.email}</a>
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-12 max-w-2xl text-sm text-muted">
          More homes are coming across the Dallas–Fort Worth and Ellis County areas. If you are
          looking for a long-term place — or want to be told when the next one opens — use the
          live site or write Paige.
        </p>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-2xl border border-line bg-ink-soft p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Tenants</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Ready to look?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Applications, availability, and the full property live on the KDK TX site. This
              page is the door from the house. That site is the home itself.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button asChild size="lg">
              <a href={property.site} target="_blank" rel="noreferrer">
                kdktx.com
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Ask the house</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
