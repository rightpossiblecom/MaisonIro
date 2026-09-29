import Footer from "@/components/Footer";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Jobs",
  description: "Open seats at Loom.",
};

export default function JobsPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Jobs</p>
        <h1 className="text-4xl font-black tracking-tight text-white">Two seats.</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Write{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-bold text-violet-400">
            {SITE_EMAIL}
          </a>{" "}
          with the seat in the subject.
        </p>
        <ul className="space-y-4">
          <li className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-black text-white">Studio engineer</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Lagos or remote. The fitting, the wardrobe, and the credit a sitting spends.
            </p>
          </li>
          <li className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-black text-white">House partnerships</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Lagos. Cloth houses and boutiques that want the garment on a person before a shoot.
            </p>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
