import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms — Maison Iro",
  description: "Terms of use for the Maison Iro studio.",
};

export default function TermsPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Terms</p>
        <h1 className="text-4xl font-black tracking-tight text-white">Terms of the house.</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          By opening a Maison Iro account you agree to use the studio for garments and portraits you have the right to fit. Credits are spent on fittings. Packs are not a subscription. The house may refuse work that is not yours to show.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          The studio is a demonstration of the product. Results are illustrative. Do not treat a fitting as a legal likeness or a substitute for a contracted photoshoot unless the house has agreed in writing.
        </p>
      </main>
      <Footer />
    </div>
  );
}
