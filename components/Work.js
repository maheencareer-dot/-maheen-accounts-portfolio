import { work } from "../data/content";

export default function Work() {
  return (
    <div className="border-t border-rule">
      {work.map((w) => (
        <article key={w.label} className="grid gap-1 border-b border-rule py-5 transition-colors hover:bg-panel md:grid-cols-[1fr_9rem] md:gap-8 md:px-3">
          <div>
            <h3 className="font-serif text-lg">{w.label}</h3>
            <p className="mt-1 max-w-xl text-mute">{w.text}</p>
          </div>
          <p className="order-first font-serif text-4xl tabular-nums text-accent md:order-none md:text-right">{w.figure}</p>
        </article>
      ))}
    </div>
  );
}
