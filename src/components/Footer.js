"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto w-full border-t border-divider/40 bg-bg-page py-6 text-center text-xs text-secondary-text">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>&copy; {currentYear} Maison Iro. The house keeps the line.</div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/product" className="transition-colors hover:text-primary-text">
            Product
          </Link>
          <Link href="/team" className="transition-colors hover:text-primary-text">
            Team
          </Link>
          <Link href="/studio" className="transition-colors hover:text-primary-text">
            Studio
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-primary-text">
            Gallery
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-primary-text">
            Pricing
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary-text">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary-text">
            Contact
          </Link>
          <Link href="/terms" className="transition-colors hover:text-primary-text">
            Terms
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-primary-text">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
