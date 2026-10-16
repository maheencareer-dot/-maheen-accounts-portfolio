import { experience as e } from "../data/content";

export default function Experience() {
  return (
    <div>
      <h3 className="font-serif text-xl">{e.role}, {e.company}</h3>
      <p className="text-sm text-mute">{e.dates}</p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 marker:text-accent">
        {e.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}
