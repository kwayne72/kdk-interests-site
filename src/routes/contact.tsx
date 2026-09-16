import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { Section } from "@/components/section";
import { property } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KDK Interests" },
      {
        name: "description",
        content: "Write to KDK Interests LLC, KDK TX, or KDK Media.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Section className="pt-28 sm:pt-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Contact</p>
            <h1 className="mt-4 font-display text-display font-medium">
              Write to the right room.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Homes, stories, partnerships, the next company. Tell us which door you meant to
              knock on.
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="kicker">Seat</dt>
                <dd className="mt-2 text-paper">Dallas, Texas</dd>
              </div>
              <div>
                <dt className="kicker">KDK TX</dt>
                <dd className="mt-2">
                  <a
                    className="text-paper underline decoration-line-strong underline-offset-4 hover:text-sage"
                    href={`mailto:${property.email}`}
                  >
                    {property.email}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    Palmer, Ellis County, and DFW rentals.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="kicker">Live site</dt>
                <dd className="mt-2">
                  <a
                    className="text-paper underline decoration-line-strong underline-offset-4 hover:text-sage"
                    href={property.site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    kdktx.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
