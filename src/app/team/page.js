import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import { TEAM } from "@/lib/team";

export const metadata = {
  title: "Team",
  description:
    "Tekenna, Founder, https://www.linkedin.com/in/tekenna/. Chinyere Grace Eluwa, Co-founder, https://www.linkedin.com/in/chinyere-grace-eluwa-645120237/.",
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    founder: TEAM.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      sameAs: person.linkedin,
      image: `${SITE_URL}${person.photo}`,
    })),
  };

  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <header className="max-w-2xl space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Team</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">The two who keep the fitting.</h1>
          <p className="text-base leading-relaxed text-zinc-400">Loom is a studio. These are the people who own it.</p>
        </header>

        <ul className="space-y-10">
          {TEAM.map((person) => (
            <li key={person.name} className="grid items-start gap-8 border-t border-zinc-800 pt-10 md:grid-cols-[1fr_220px]">
              <div className="space-y-3">
                <h2 className="text-3xl font-black text-white">{person.name}</h2>
                <p className="text-sm font-bold text-violet-300">{person.role}</p>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-400">{person.bio}</p>
                <p className="pt-2">
                  <a href={person.linkedin} itemProp="sameAs" className="text-sm font-bold text-violet-400">
                    click to view linkedin profile
                  </a>
                </p>
                <p>
                  <a href={person.linkedin} className="break-all text-xs text-zinc-500">
                    {person.linkedin}
                  </a>
                </p>
              </div>
              <img src={person.photo} alt={person.name} className="h-56 w-56 rounded-sm object-cover object-top" />
            </li>
          ))}
        </ul>

        <section className="space-y-2 border-t border-zinc-800 pt-10 text-sm text-zinc-400">
          <h2 className="text-lg font-black text-white">{SITE_NAME}</h2>
          <p>You upload a photo and a cloth. You see the garment on a person.</p>
          <p>
            <a href={`mailto:${SITE_EMAIL}`} className="font-bold text-violet-400">
              {SITE_EMAIL}
            </a>
          </p>
          <p>{SITE_URL.replace("https://", "")}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
