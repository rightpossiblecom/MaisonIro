"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Enter an email and password");
      return;
    }
    setSent(true);
  };

  return (
    <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-bg-page px-6 py-12 text-primary-text">
      <Toaster position="top-right" />
      <div className="relative w-full max-w-md space-y-6 rounded-xl border border-divider bg-bg-card p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-3 text-center">
          <img src="/mark.svg" alt="" className="h-14 w-14" />
          <h1 className="text-2xl font-black uppercase tracking-tight">Open a Loom account</h1>
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
              placeholder="House name"
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
              placeholder="Email"
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
          {sent ? (
            <p className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-4 text-sm font-bold text-white">
              Check your email
            </p>
          ) : (
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-primary py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-primary-hover"
            >
              Sign up
            </button>
          )}
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
