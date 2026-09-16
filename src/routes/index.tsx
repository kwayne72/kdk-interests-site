import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { HouseTree } from "@/components/house-tree";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { companies, principles, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "KDK Interests — A house of companies" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Routes />
      <Structure />
      <Temperament />
      <NextRoom />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-ink">
      <img
        src="/images/hero-dusk.jpg"
        alt="Dusk terrace overlooking a city skyline, warm interior light on limestone"
        className="hero-zoom absolute inset-0 h-full w-full object-cover object-left"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <p className="rise kicker text-paper/80" style={{ animationDelay: "80ms" }}>
          {site.city} · The world in view
        </p>
        <h1
          className="rise mt-5 max-w-5xl font-display text-hero font-medium text-paper"
          style={{ animationDelay: "160ms" }}
        >
          KDK Interests
        </h1>
        <p
          className="rise mt-6 max-w-xl font-display text-title font-normal italic text-paper/90"
          style={{ animationDelay: "260ms" }}
        >
          {site.tagline}
        </p>
        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "360ms" }}
        >
          <Button asChild size="lg">
            <a href="https://kdktx.com" target="_blank" rel="noreferrer">
              Enter KDK TX
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://kennyanddon.com" target="_blank" rel="noreferrer">
              Enter KDK Media
            </a>
          </Button>
        </div>
        <a
          href="#house"
          className="rise mt-16 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase"
          style={{ animationDelay: "480ms" }}
        >
          The house
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <Section id="house" className="bg-ink">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="kicker">The parent</p>
          <h2 className="mt-4 font-display text-display font-medium text-paper">
            We hold companies the way a good house holds a life.
          </h2>
          <p className="mt-6 max-w-xl text-lede text-muted">
            KDK Interests LLC is the company that sits inside the Trust — the roof over every
            room. KDK TX keeps the homes. KDK Media keeps the stories. Two routes from one front
            door, with space for the next.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Professional enough for the long view. Alive enough that you can feel who lives here.
          </p>
        </div>
        <FramedImage
          src="/images/table-dusk.jpg"
          alt="A linen table set for dinner at dusk, candlelight and a window to blue hour"
          className="lg:col-span-6"
          imgClassName="aspect-[3/2] lg:aspect-[4/3]"
          caption="Life, held with a little ceremony."
        />
      </div>
    </Section>
  );
}

function Routes() {
  return (
    <Section className="bg-ink-soft pt-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">The routes</p>
          <h2 className="mt-3 font-display text-display font-medium">Two doors, for now.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Each company keeps its own identity, its own site, its own work. This is the front door —
          choose a room.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <RouteCard
          href="https://kdktx.com"
          image="/images/tx-home.jpg"
          alt="A Texas home at golden hour with a deep covered porch and mature trees"
          kicker="Property"
          title="KDK TX"
          lede="Homes, held well."
          meta="Palmer · Ellis County · DFW"
          external="https://kdktx.com"
        />
        <RouteCard
          href="https://kennyanddon.com"
          image="/images/media-studio.jpg"
          alt="A dark film studio with a 35mm camera and a shaft of tungsten light"
          kicker="Studio"
          title="KDK Media"
          lede="Stories with a pulse."
          meta="Film · Brand · Culture"
          external="https://kennyanddon.com"
        />
      </div>
    </Section>
  );
}

function RouteCard({
  href,
  image,
  alt,
  kicker,
  title,
  lede,
  meta,
  external,
}: {
  href: string;
  image: string;
  alt: string;
  kicker: string;
  title: string;
  lede: string;
  meta: string;
  external?: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-ink">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="block"
      >
        <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,16,22,0.92)_0%,rgba(12,16,22,0.2)_55%,rgba(12,16,22,0.25)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="kicker text-sage">{kicker}</p>
            <h3 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{title}</h3>
            <p className="mt-2 font-display text-xl italic text-paper/90">{lede}</p>
            <p className="mt-4 text-xs tracking-[0.18em] text-muted uppercase">{meta}</p>
          </div>
        </div>
      </a>
      {external ? (
        <a
          href={external}
          target="_blank"
          rel="noreferrer"
          className="absolute right-5 top-5 inline-flex h-11 items-center gap-1.5 rounded-md bg-ink/70 px-3.5 text-xs tracking-[0.14em] text-paper uppercase backdrop-blur-sm hover:bg-ink"
        >
          Live site
          <ArrowUpRight className="size-3.5" strokeWidth={1.6} />
        </a>
      ) : null}
    </article>
  );
}

function Structure() {
  return (
    <Section>
      <HouseTree />
      <p className="mx-auto mt-12 max-w-lg text-center text-sm leading-relaxed text-muted">
        The Trust holds the parent. The parent holds the companies. Each company does one thing
        with full attention — and keeps a door of its own.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <Link to="/about">Read the architecture</Link>
        </Button>
      </div>
    </Section>
  );
}

function Temperament() {
  return (
    <Section className="bg-ink-soft">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Temperament</p>
          <h2 className="mt-4 font-display text-display font-medium">
            Global in posture.
            <br />
            Alive in the details.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            A holding company can be a cold diagram. This one isn’t. We want the work to feel
            considered — a little style, a little life, and a long memory.
          </p>
          <FramedImage
            src="/images/interior-living.jpg"
            alt="A sunlit living room with linen, oak, and eucalyptus"
            className="mt-8 hidden lg:block"
            imgClassName="aspect-[4/3]"
          />
        </div>
        <div className="grid gap-px bg-line lg:col-span-7 lg:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.name} className="bg-ink-soft p-6 sm:p-8">
              <span className="font-display text-3xl text-sage/80">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-medium">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function NextRoom() {
  return (
    <Section className="relative overflow-hidden">
      <img
        src="/images/media-night.jpg"
        alt="City lights through rain-streaked glass at night"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="kicker">The next room</p>
        <h2 className="mt-4 font-display text-display font-medium">
          The house is built to grow.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lede text-muted">
          Two companies now. More doors when the work deserves them. If you have a home, a story,
          or a partnership that belongs under this roof — write to the house.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">Write to the house</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/about">The structure</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
