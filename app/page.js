import Hero from "../components/Hero";
import Section from "../components/Section";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import { profile } from "../data/content";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section id="about" title="About">
        {profile.about.map((p) => (
          <p key={p} className="mb-4 max-w-2xl font-serif text-lg last:mb-0">{p}</p>
        ))}
      </Section>
      <Section id="work" title="Selected work"><Work /></Section>
      <Section id="experience" title="Experience"><Experience /></Section>
      <Section id="skills" title="Skills"><Skills /></Section>
      <Section id="credentials" title="Education and certifications"><Credentials /></Section>
      <Section id="contact" title="Contact"><Contact /></Section>
      <footer className="border-t border-rule py-8 text-center text-sm text-mute">{profile.name}</footer>
    </main>
  );
}
