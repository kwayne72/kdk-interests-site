import { createFileRoute, Link } from "@tanstack/react-router";
import { FramedImage } from "@/components/framed-image";
import { InquiryForm } from "@/components/inquiry-form";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { mediaDisciplines } from "@/lib/site";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "KDK Media — Stories with a pulse" },
      {
        name: "description",
        content:
          "KDK Media, a company of KDK Interests LLC. Film, brand, and culture — a studio for the house and for the world.",
      },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <main>
      <section className="relative min-h-[88dvh] overflow-hidden bg-ink">
        <img
          src="/images/media-studio.jpg"
          alt="Cinematic film studio with a 35mm camera in a shaft of tungsten light"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-veil-room absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8">
          <p className="kicker text-sage">A company of KDK Interests</p>
          <h1 className="mt-4 font-display text-hero font-medium">KDK Media</h1>
          <p className="mt-5 max-w-lg font-display text-title italic text-paper/90">
            Stories with a pulse.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#studio">The studio</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Commission work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="studio">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="kicker">The avenue</p>
            <h2 className="mt-4 font-display text-display font-medium">
              A studio for the house — and for anyone who wants the same standard.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              KDK Media is the cultural room of KDK Interests. We make film, brand, and editorial
              work that should still feel true in five years. Global in its references. Personal
              in its finish.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This is the door. As the studio grows, it will keep its own address — the way KDK TX
              already does.
            </p>
          </div>
          <FramedImage
            src="/images/media-night.jpg"
            alt="Rain-streaked window looking onto a city at night"
            className="lg:col-span-6"
            imgClassName="aspect-[4/3]"
            caption="The world, seen slowly."
          />
        </div>
      </Section>

      <Section className="bg-ink-soft">
        <p className="kicker">Disciplines</p>
        <h2 className="mt-4 max-w-xl font-display text-display font-medium">
          Three ways in. One temperament.
        </h2>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">
          {mediaDisciplines.map((d, i) => (
            <article key={d.name} className="bg-ink-soft p-8">
              <span className="font-display text-3xl text-sage/80">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-medium">{d.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Start a picture</p>
            <h2 className="mt-4 font-display text-display font-medium">Tell us what you want seen.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Brand films, stills, identity, a series. If it belongs in the world with some
              style, it belongs here.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm defaultRoom="media" />
          </div>
        </div>
      </Section>
    </main>
  );
}
