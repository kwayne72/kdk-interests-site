import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { property } from "@/lib/site";
import { cn } from "@/lib/utils";

const rooms = [
  { id: "house", label: "The house" },
  { id: "tx", label: "KDK TX — homes" },
  { id: "media", label: "KDK Media — stories" },
] as const;

type RoomId = (typeof rooms)[number]["id"];

export function InquiryForm({ defaultRoom = "house" }: { defaultRoom?: RoomId }) {
  const [room, setRoom] = useState<RoomId>(defaultRoom);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and a note.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn’t look quite right.");
      return;
    }

    const subject = encodeURIComponent(`KDK Interests — ${rooms.find((r) => r.id === room)?.label}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const to = room === "tx" ? property.email : property.email;
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-ink-soft px-6 py-10 text-center sm:px-10">
        <p className="kicker text-sage">Received</p>
        <h3 className="mt-3 font-display text-3xl text-paper">We’ll take it from here.</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Your note is ready in your mail app. For homes, you can also write{" "}
          <a className="text-paper underline decoration-line-strong underline-offset-4" href={`mailto:${property.email}`}>
            {property.email}
          </a>
          .
        </p>
        <Button className="mt-8" variant="outline" type="button" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <fieldset>
        <legend className="kicker mb-3">Which room</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {rooms.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRoom(r.id)}
              className={cn(
                "h-12 rounded-md px-3 text-sm transition-[background-color,box-shadow,color] duration-150",
                room === r.id
                  ? "bg-paper text-fg-ink"
                  : "bg-ink-soft text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)] hover:text-paper",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="kicker">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-md border-0 bg-ink-soft px-4 text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-sage)_70%,transparent)]"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="kicker">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-md border-0 bg-ink-soft px-4 text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-sage)_70%,transparent)]"
            placeholder="you@studio.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="kicker">Note</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-2 w-full resize-y rounded-lg border-0 bg-ink-soft px-4 py-3 text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-sage)_70%,transparent)]"
          placeholder="A lease, a story, a next room…"
        />
      </label>
      {error ? <p className="text-sm text-paper">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Send the note
        </Button>
        {room === "tx" ? (
          <a
            href={`mailto:${property.email}`}
            className="text-sm text-muted underline decoration-line-strong underline-offset-4 hover:text-paper"
          >
            Or write {property.email}
          </a>
        ) : null}
      </div>
    </form>
  );
}
