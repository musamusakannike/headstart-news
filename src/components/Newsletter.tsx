"use client";

import { useState } from "react";

const STORAGE_KEY = "hs-newsletter";

export default function Newsletter({ variant = "band" }: { variant?: "band" | "inline" }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setSubscribed(true);
  };

  const inner = subscribed ? (
    <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
      <div className="w-12 h-12 bg-primary border-2 border-white flex items-center justify-center text-white text-2xl font-bold">
        ✓
      </div>
      <h3
        className="text-3xl font-bold uppercase text-white"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        You&apos;re on the list
      </h3>
      <p className="text-[#D4D4D4] text-[16px] leading-relaxed">
        We&apos;ll send a short briefing — no spam, no daily dump. Just the stories that actually move.
      </p>
    </div>
  ) : (
    <>
      <div className="inline-flex items-center gap-2">
        <span className="block w-2 h-2 bg-primary rotate-45" />
        <span
          className="font-bold text-primary uppercase tracking-widest text-sm"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Newsletter
        </span>
        <span className="block w-2 h-2 bg-primary rotate-45" />
      </div>
      <h2
        className="text-[36px] sm:text-[44px] lg:text-[52px] text-white font-bold leading-[1.1] uppercase text-center"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        Briefing, not noise
      </h2>
      <p className="font-medium text-[#D4D4D4] text-center max-w-[540px] mx-auto text-[17px] leading-relaxed">
        One email when we publish something worth your time. AI, startups, gadgets, software, and policy — edited, not aggregated.
      </p>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-xl flex flex-col sm:flex-row gap-3"
        noValidate
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="you@company.com"
          className="flex-1 h-14 px-4 border-[3px] border-white bg-white text-black font-medium text-[16px] outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="h-14 px-8 border-[3px] border-white bg-primary text-white font-bold uppercase tracking-wider text-[15px] shadow-[4px_4px_0px_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-primary)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          Subscribe
        </button>
      </form>
      {error ? <p className="text-primary text-sm font-semibold">{error}</p> : null}
    </>
  );

  if (variant === "inline") {
    return (
      <section className="w-full bg-black border-2 border-black py-14 px-6 flex flex-col gap-8 items-center">
        {inner}
      </section>
    );
  }

  return (
    <section
      id="newsletter"
      className="w-full border-y-2 border-black bg-black py-20 lg:py-28 px-6 sm:px-14 lg:px-20 flex flex-col gap-10 items-center"
    >
      {inner}
    </section>
  );
}
