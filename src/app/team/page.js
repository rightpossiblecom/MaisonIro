import Footer from "@/components/Footer";
import { TEAM } from "@/lib/team";

export const metadata = {
  title: "Team — Maison Iro",
  description: "The people who keep Maison Iro — Accra, Lagos, Johannesburg.",
};

export default function TeamPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Team</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Three cities. One house.
          </h1>
          <p className="text-base leading-relaxed text-zinc-400">
            Maison Iro is run by people who have stood on shop floors and in family cutting rooms. The product is a studio. The work is keeping African cloth in African hands.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-3">
          {TEAM.map((person) => (
            <li key={person.name} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={person.photo} alt={person.name} className="aspect-[4/5] w-full object-cover" />
              <div className="space-y-2 p-5">
                <h2 className="text-lg font-black text-white">{person.name}</h2>
                <p className="text-sm font-bold text-violet-300">
                  {person.role} · {person.city}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex pt-2 text-xs font-black text-violet-400 hover:text-violet-300"
                >
                  LinkedIn
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
