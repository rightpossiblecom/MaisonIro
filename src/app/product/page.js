import Link from "next/link";
import Footer from "@/components/Footer";

const SHOTS = [
  { src: "/product/studio.png", alt: "Maison Iro virtual outfit studio", caption: "Studio — portrait, garment, prompt" },
  { src: "/product/gallery.png", alt: "Maison Iro wardrobe gallery", caption: "Wardrobe — saved fittings" },
  { src: "/product/fitting.png", alt: "Completed fitting output", caption: "Output — cloth on the body" },
  { src: "/product/pricing.png", alt: "Maison Iro credit packs", caption: "Credits — buy for the collection" },
];

export const metadata = {
  title: "Product — Maison Iro",
  description: "The virtual fitting room for African cloth houses. Studio, wardrobe, and credit packs.",
};

export default function ProductPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Product</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            A fitting room that stays with the house.
          </h1>
          <p className="text-base leading-relaxed text-zinc-400">
            African fashion still spends a season’s cash on a shoot before the cloth has been seen on a body. Maison Iro puts the garment on the wearer first — so boutiques in Balogun, houses in Accra, and lines in Sandton keep the money and the look in the family.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">Watch a sitting</h2>
          <video
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
            src="/product/demo.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white">The rooms</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {SHOTS.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={shot.alt} className="aspect-[16/10] w-full object-cover object-top" />
                <figcaption className="px-4 py-3 text-xs font-bold text-zinc-400">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-black text-white">How a sitting works</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
              <li>1. Upload the person who will wear the line.</li>
              <li>2. Upload the garment the house intends to sell or keep.</li>
              <li>3. Choose a ratio. Edit the prompt if the drape must be exact.</li>
              <li>4. Generate. Eighteen credits. The wardrobe keeps the still.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-black text-white">What the house can do</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
              <li>Lookbook and shop-tile ratios without a studio day.</li>
              <li>A wardrobe of fittings the next season can open.</li>
              <li>Credit packs bought when the collection is ready.</li>
              <li>Download for the buyer, the cutter, or the family archive.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 text-center">
          <h2 className="text-2xl font-black text-white">Open the studio</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400">
            Sign up with any work email. The wardrobe is already dressed so you can see how a house keeps its line.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-xs font-black text-white"
            >
              Sign up
            </Link>
            <Link href="/login" className="rounded-full border border-zinc-700 px-6 py-3 text-xs font-black text-white">
              Log in
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
