import Link from "next/link";
import { SITE_DOMAIN, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto w-full border-t border-divider/40 bg-bg-page py-6 text-center text-xs text-secondary-text">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          &copy; {currentYear} {SITE_NAME}. Lagos.{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary-text">
            {SITE_EMAIL}
          </a>
          {" · "}
          {SITE_DOMAIN}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/product" className="transition-colors hover:text-primary-text">
            Product
          </Link>
          <Link href="/team" className="transition-colors hover:text-primary-text">
            Team
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
          <Link href="/jobs" className="transition-colors hover:text-primary-text">
            Jobs
          </Link>
          <Link href="/login" className="transition-colors hover:text-primary-text">
            Log in
          </Link>
          <Link href="/signup" className="transition-colors hover:text-primary-text">
            Sign up
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
