"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function LoginContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("callbackUrl") || searchParams.get("next") || "/studio";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push(next);
    }
  }, [status, router, next]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Enter your email and password");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await signIn("credentials", {
        email: email.trim(),
        password,
        redirect: false,
        callbackUrl: next,
      });

      if (res?.error) {
        toast.error(res.error || "Could not sign in");
      } else {
        router.push(next);
      }
    } catch (err) {
      toast.error("Could not sign in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-bg-page px-6 py-12 text-primary-text">
      <Toaster position="top-right" />
      <div className="relative w-full max-w-md space-y-6 rounded-xl border border-divider bg-bg-card p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-3 text-center">
          <img src="/mark.svg" alt="" className="h-14 w-14" />
          <h1 className="text-2xl font-black uppercase tracking-tight">Log in to Loom</h1>
          <p className="px-2 text-xs font-semibold leading-relaxed text-secondary-text">
            Use the email the house works with. Any password opens the studio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@thehouse.africa"
              autoComplete="email"
              className="w-full rounded-lg border border-divider bg-bg-page px-3.5 py-2.5 text-xs text-white placeholder-secondary-text/50 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full rounded-lg border border-divider bg-bg-page px-3.5 py-2.5 text-xs text-white placeholder-secondary-text/50 focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-full bg-primary py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-primary-hover disabled:opacity-50"
          >
            {isSubmitting ? "Signing in…" : "Log in"}
          </button>
        </form>

        <p className="text-center text-[11px] text-secondary-text">
          New to the house?{" "}
          <Link href="/signup" className="font-bold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center bg-bg-page text-primary-text">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
