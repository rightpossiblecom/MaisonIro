import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy — Maison Iro",
  description: "How Maison Iro treats portraits, garments, and house accounts.",
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Privacy</p>
        <h1 className="text-4xl font-black tracking-tight text-white">What the house keeps.</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Portraits and garments you upload belong to the account that sent them. Maison Iro uses them to produce the fitting and to show you the wardrobe. We do not sell the faces of your sitters or the cloth of your line.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Account email is used to open the studio and to send house notices you ask for. You may delete a fitting from the wardrobe at any time.
        </p>
      </main>
      <Footer />
    </div>
  );
}
