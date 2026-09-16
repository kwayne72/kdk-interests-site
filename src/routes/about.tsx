import { createFileRoute, Link } from "@tanstack/react-router";
import { FramedImage } from "@/components/framed-image";
import { HouseTree } from "@/components/house-tree";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the house — KDK Interests LLC" },
      {
        name: "description",
        content:
          "How KDK Interests LLC is built: a parent company inside a family trust, holding KDK TX and KDK Media.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <Section className="pt-28 sm:pt-36">
        <p className="kicker">About the house</p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-medium">
          One roof. Distinct rooms. A Trust at the foundation.
        </h1>
        <p className="mt-6 max-w-2xl text-lede text-muted">
          KDK Interests LLC is the parent company — the entity that will live inside the Trust,
          and the company that holds the others. It is not a brand stacked on brands. It is a
          house.
        </p>
      </Section>

      <Section className="pt-0">
        <HouseTree />
      </Section>

      <Section className="bg-ink-soft">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <FramedImage
            src="/images/interior-living.jpg"
            alt="Sunlit living room with linen seating and eucalyptus"
            className="lg:col-span-6"
            imgClassName="aspect-[4/3]"
          />
          <div className="lg:col-span-6">
            <p className="kicker">Why a house</p>
            <h2 className="mt-4 font-display text-display font-medium">
              Structure for the long view. Style for the days in between.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                A Trust is a way of holding things past a single season. The LLC is the working
                company inside that idea. KDK TX and KDK Media are the rooms you can walk into
                today.
              </p>
              <p>
                Each room keeps its own door — its own site, its own voice — so a tenant looking
                for a porch in Palmer does not have to walk through a media studio, and a producer
                does not have to walk through a lease. The parent is the place they meet.
              </p>
              <p>
                We are rooted in Dallas, with work in Palmer and Ellis County, and a posture that
                is global: the finish, the references, the way a thing is presented. Local without
                thinking small.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-3">
          <article>
            <p className="kicker">01</p>
            <h3 className="mt-3 font-display text-2xl font-medium">The Trust</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The long-horizon vessel. KDK Interests LLC is what the Trust holds. Continuity
              without the coldness of a chart.
            </p>
          </article>
          <article>
            <p className="kicker">02</p>
            <h3 className="mt-3 font-display text-2xl font-medium">The parent</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              KDK Interests LLC. Governance, stewardship, and the front door the world meets
              first.
            </p>
          </article>
          <article>
            <p className="kicker">03</p>
            <h3 className="mt-3 font-display text-2xl font-medium">The rooms</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Operating companies with their own sites. KDK TX for homes. KDK Media for stories.
              Future rooms when the work is ready.
            </p>
          </article>
        </div>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/tx">Visit KDK TX</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/media">Visit KDK Media</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/contact">Write to the house</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
