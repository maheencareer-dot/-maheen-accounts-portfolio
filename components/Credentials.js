import { education, certifications, awards } from "../data/content";

export default function Credentials() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-lg">Education</h3>
        <ul className="mt-2 space-y-3">
          {education.map((d) => (
            <li key={d.degree}>
              <p className="font-medium">{d.degree}</p>
              <p className="text-sm text-mute">{d.school}. {d.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif text-lg">Certifications</h3>
        <ul className="mt-2 space-y-1">
          {certifications.map((c) => (
            <li key={c.name}>{c.name} <span className="text-mute">({c.issuer})</span></li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif text-lg">Awards and activities</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-accent">
          {awards.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </div>
  );
}
