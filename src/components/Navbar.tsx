"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Top Headlines", href: "/#headlines" },
  { name: "Latest", href: "/latest" },
  { name: "Categories", href: "/#categories" },
  { name: "Newsletter", href: "/#newsletter" },
];

const Hamburger = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-col justify-center items-end w-10 h-10 gap-[5px] focus:outline-none z-50 relative"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <span
      className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
    />
    <span
      className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out ${isOpen ? "opacity-0 translate-x-2" : ""}`}
    />
    <span
      className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
    />
  </button>
);

const Logo = ({ compact = false }: { compact?: boolean }) => (
  <Link href="/" className="flex items-center gap-3 group">
    <div
      className={`${compact ? "w-9 h-9" : "w-10 h-10"} bg-black flex items-center justify-center border-2 border-black`}
      style={{ boxShadow: "3px 3px 0 var(--color-primary)" }}
    >
      <span
        className="text-primary font-bold text-sm tracking-widest"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        HS
      </span>
    </div>
    <span
      className={`font-bold tracking-wide uppercase text-black ${compact ? "text-[16px]" : "text-[18px] hidden sm:block"}`}
      style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
    >
      Headstart<span className="text-primary">.</span>News
    </span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const go = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.slice(1);
      if (pathname !== "/") {
        router.push(href);
        return;
      }
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav
        className={`border-b-2 border-black py-5 px-6 md:px-8 lg:px-16 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6">
          <Logo />

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => go(link.href)}
                className="relative py-1 font-semibold text-[#171717] hover:text-primary transition-colors text-[15px] tracking-wide bg-transparent border-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button
              onClick={() => go("/#newsletter")}
              className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-white font-bold uppercase tracking-wider text-[13px] px-5 py-2.5 transition-all duration-100 ease-out shadow-[3px_3px_0px_#0A0E11] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_#0A0E11] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Subscribe
            </button>
          </div>

          <div className="lg:hidden">
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="py-5 px-6 flex items-center justify-between border-b-2 border-black">
          <Logo compact />
          <div className="w-10 h-10" />
        </div>
        <div className="flex flex-col gap-1 p-6 pt-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => go(link.href)}
              className="flex items-center w-full h-14 px-4 text-[18px] font-semibold text-[#171717] hover:bg-tint rounded-md text-left bg-transparent border-none"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="mt-auto p-6 pb-12">
          <button
            onClick={() => go("/#newsletter")}
            className="flex h-14 w-full items-center justify-center border-[3px] border-black bg-primary text-white font-bold uppercase tracking-wider text-[15px] shadow-[3px_3px_0px_#0A0E11]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}
