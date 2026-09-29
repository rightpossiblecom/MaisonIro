import Footer from "@/components/Footer";
import { SITE_DOMAIN, SITE_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Write Loom.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-bg-page text-primary-text">
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400">Contact</p>
        <h1 className="text-4xl font-black tracking-tight text-white">Write the house.</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Boutiques, family lines, and stylists can reach us at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-bold text-violet-400">
            {SITE_EMAIL}
          </a>
          . The site is {SITE_DOMAIN}. Lagos answers.
        </p>
      </main>
      <Footer />
    </div>
  );
}
