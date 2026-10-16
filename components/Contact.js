import { profile as p } from "../data/content";

export default function Contact() {
  const rows = [
    ["Email", p.email, `mailto:${p.email}`],
    ["Phone", p.phone, `tel:${p.phone}`],
    ["LinkedIn", "linkedin.com/in/maheens", p.linkedin],
    ["Location", p.location, null],
  ];
  return (
    <div>
      <p className="max-w-xl font-serif text-lg">{p.openTo}</p>
      <dl className="mt-6 divide-y divide-rule border-y border-rule">
        {rows.map(([k, v, href]) => (
          <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 py-3">
            <dt className="text-mute">{k}</dt>
            <dd>{href ? <a href={href} className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">{v}</a> : v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
