export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-4 border-t border-rule">
      <div className="mx-auto max-w-5xl px-5 py-14 md:grid md:grid-cols-[11rem_1fr] md:gap-10">
        <h2 className="font-serif text-xl md:pt-1">{title}</h2>
        <div className="mt-5 md:mt-0">{children}</div>
      </div>
    </section>
  );
}
