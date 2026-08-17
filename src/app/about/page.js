import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Maison Iro",
  description: "Why Maison Iro exists — cloth, families, and fittings that outlive a season.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">About</p>
        <h1 className="text-4xl font-black tracking-tight text-white">The house behind the fitting.</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Maison Iro started from a simple waste: African houses paying for a shoot before the cloth had been seen on a body. Iro is the wrapper. The maison is the firm that will still be cutting in thirty years.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          We build for Lagos, Nairobi, Accra, and Johannesburg first. The studio is a tool. The story is ownership — the line, the look, and the archive staying with the family that made them.
        </p>
      </main>
      <Footer />
    </div>
  );
}
