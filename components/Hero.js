import { profile } from "../data/content";

const nav = [["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Hero() {
  return (
    <header className="mx-auto max-w-5xl px-5 pt-8">
      <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-mute">
        {nav.map(([label, href]) => (
          <a key={href} href={href} className="transition-colors hover:text-accent">{label}</a>
        ))}
      </nav>
      <div className="rise grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-accent">{profile.title}</p>
          <p className="mt-5 max-w-md text-lg">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded bg-accent px-5 py-2.5 font-medium text-paper transition-opacity hover:opacity-90">Email Maheen</a>
            <a href="#work" className="rounded border border-rule px-5 py-2.5 transition-colors hover:border-accent">See my work</a>
          </div>
        </div>
        <dl className="rounded border border-rule bg-panel text-sm">
          {profile.voucher.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 border-b border-rule px-4 py-3 last:border-0">
              <dt className="text-mute">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
