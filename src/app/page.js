import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck, FaTshirt } from "react-icons/fa";

const CITIES = ["Lagos", "Nairobi", "Accra", "Johannesburg", "Dakar", "Kampala"];

const STEPS = [
  {
    n: "01",
    title: "Portrait of the wearer",
    body: "A phone photo from the shop floor or the family sitting. Face, posture, and skin stay exactly as they are.",
  },
  {
    n: "02",
    title: "The cloth itself",
    body: "Aso-oke, kente, a Sandton suit, a Yaba drop. Upload the garment the house intends to sell or keep.",
  },
  {
    n: "03",
    title: "The fitting",
    body: "Maison Iro lays the cloth on the body — folds, weight, light. The line is seen before a naira or a shilling leaves the till.",
  },
];

const FEATURES = [
  {
    title: "Virtual dressing studio",
    body: "Two dropzones. Aspect ratio for lookbook, story, or shop tile. A prompt the house can edit when the drape has to be exact.",
  },
  {
    title: "Wardrobe of the line",
    body: "Every fitting is kept. Compare last season’s wrapper to this one. Download the high-res still for the buyer in Westlands.",
  },
  {
    title: "Credits, not a lease",
    body: "Pay for fittings as the house needs them. No subscription that outlives the collection. Eighteen credits a sitting.",
  },
];

const FAQS = [
  {
    q: "Who is this for?",
    a: "Cloth houses, boutiques, stylists, and family firms that sell or keep garments across African cities. If the next generation will inherit the line, they should see it on a body first.",
  },
  {
    q: "Do we still need a photoshoot?",
    a: "Use Maison Iro to decide the look. Shoot later if the house wants film. Most fittings never needed a studio day — they needed an honest drape.",
  },
  {
    q: "What does a credit buy?",
    a: "One fitting costs 18 credits. Packs start at a thousand. Buy when the collection is ready, not every month.",
  },
  {
    q: "Will the face change?",
    a: "The studio is built to keep the person. Face, skin, hair, pose. The cloth moves. The wearer does not become a stranger.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main>
        <section className="relative overflow-hidden border-b border-zinc-800">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_42%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-violet-300">
                <FaTshirt className="text-violet-400" />
                Virtual fitting house
              </p>
              <h1 className="font-heading text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fit the cloth to the body.
                <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Keep the house in the family.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Maison Iro is the fitting room for African fashion houses. See the garment on a real person in Lagos, Nairobi, Accra, or Johannesburg before you cut, shoot, or ship — so the line compounds for the next generation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/signup"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-xs font-black text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-fuchsia-500"
                >
                  Open an account
                </Link>
                <Link
                  href="/product"
                  className="rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-xs font-black text-white hover:border-zinc-500"
                >
                  See the product
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
                  <div>
                    <p className="text-xs font-bold text-white">Virtual Outfit Fitting Output</p>
                    <p className="text-[10px] font-medium text-zinc-400">Review the generated dress outcome</p>
                  </div>
                  <span className="rounded border border-zinc-700 bg-zinc-950 px-2 py-0.5 text-[9px] font-black text-violet-400">
                    Try-On Result
                  </span>
                </div>
                <div className="relative aspect-[4/5] max-h-[520px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/product/studio.png"
                    alt="Maison Iro studio fitting"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 bg-zinc-950/60">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6 lg:px-8">
            {CITIES.map((city) => (
              <span key={city} className="text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">
                {city}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white">Three steps. One sitting.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="text-xs font-black text-violet-400">{step.n}</p>
                <h3 className="mt-3 text-lg font-black text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">The studio</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">The same room your cutter already knows.</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Dual uploads. A ratio for the shop tile or the story. A prompt you can reset. Eighteen credits when the house is ready to see the cloth on skin.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {["Portrait and garment dropzones", "Lookbook, story, and shop ratios", "Saved fittings in the wardrobe"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheck className="text-[10px] text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <h3 className="text-sm font-black text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Credits</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Buy fittings. Keep the profit in the house.</h2>
            </div>
            <Link href="/pricing" className="text-xs font-black text-violet-400 hover:text-violet-300">
              Full packs →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { name: "Basic", price: "$5", credits: "1,000" },
              { name: "Standard", price: "$10", credits: "2,000" },
              { name: "Professional", price: "$20", credits: "4,000", popular: true },
              { name: "Business", price: "$50", credits: "10,000" },
            ].map((pack) => (
              <div
                key={pack.name}
                className={`rounded-2xl border p-5 ${pack.popular ? "border-violet-500 bg-violet-500/5" : "border-zinc-800 bg-zinc-900/40"}`}
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{pack.name}</p>
                <p className="mt-2 text-2xl font-black text-white">{pack.price}</p>
                <p className="mt-1 text-xs font-bold text-violet-300">{pack.credits} credits</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 bg-zinc-950/50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <h2 className="text-3xl font-black tracking-tight text-white">Questions from the floor</h2>
            <div className="mt-8 space-y-4">
              {FAQS.map((item) => (
                <div key={item.q} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="text-sm font-black text-white">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Dress the line. Leave something standing.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
              Open a Maison Iro account. Fit the next collection on the people who will wear it — and the children who will inherit the shop.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-xs font-black text-white shadow-lg shadow-violet-500/20"
              >
                Sign up
              </Link>
              <Link href="/login" className="rounded-full border border-zinc-700 px-6 py-3 text-xs font-black text-white">
                Log in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
