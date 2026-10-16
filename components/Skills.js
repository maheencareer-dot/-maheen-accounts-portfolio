import { skills } from "../data/content";

export default function Skills() {
  return (
    <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {skills.map((s) => (
        <div key={s.group}>
          <h3 className="font-serif text-lg">{s.group}</h3>
          <p className="mt-1 text-mute">{s.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
