"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const { status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/studio");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Enter an email and password");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await signIn("credentials", {
        email: email.trim(),
        password,
        redirect: false,
        callbackUrl: "/studio",
      });

      if (res?.error) {
        toast.error(res.error || "Could not open the account");
      } else {
        router.push("/studio");
      }
    } catch (err) {
      toast.error("Could not open the account");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-bg-page px-6 py-12 text-primary-text">
      <Toaster position="top-right" />
      <div className="relative w-full max-w-md space-y-6 rounded-xl border border-divider bg-bg-card p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-black text-primary shadow-md shadow-primary/15">
            M
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tight">Open a Maison Iro account</h1>
          <p className="px-2 text-xs font-semibold leading-relaxed text-secondary-text">
            For the house, the boutique, or the family line. Any email and password will do.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text">
              House name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adjoa Mensah"
              autoComplete="name"
              className="w-full rounded-lg border border-divider bg-bg-page px-3.5 py-2.5 text-xs text-white placeholder-secondary-text/50 focus:border-primary focus:outline-none"
            />
          </div>
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
              autoComplete="new-password"
              className="w-full rounded-lg border border-divider bg-bg-page px-3.5 py-2.5 text-xs text-white placeholder-secondary-text/50 focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-full bg-primary py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-primary-hover disabled:opacity-50"
          >
            {isSubmitting ? "Opening the house…" : "Sign up"}
          </button>
        </form>

        <p className="text-center text-[11px] text-secondary-text">
          Already have a seat?{" "}
          <Link href="/login" className="font-bold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
