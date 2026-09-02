import Link from "next/link";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 lg:py-20 px-6 sm:px-8 lg:px-14 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-primary border-2 border-primary flex items-center justify-center"
                style={{ boxShadow: "3px 3px 0 #fff" }}
              >
                <span
                  className="text-white font-bold text-base tracking-widest"
                  style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                >
                  HS
                </span>
              </div>
              <div>
                <p
                  className="font-bold text-white text-[18px] uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
                >
                  Headstart News
                </p>
                <p className="text-primary text-[13px] font-semibold tracking-widest uppercase">
                  Tech, clearly
                </p>
              </div>
            </div>
            <p className="text-[#D4D4D4] text-[15px] font-medium leading-relaxed max-w-xs">
              An editorial briefing on the technology that actually ships — not every press release.
            </p>
          </div>

          <div>
            <h3
              className="font-extrabold text-white text-[16px] tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Sections
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#headlines" className="text-[#D4D4D4] hover:text-primary text-[15px]">
                  Top Headlines
                </Link>
              </li>
              <li>
                <Link href="/latest" className="text-[#D4D4D4] hover:text-primary text-[15px]">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/#newsletter" className="text-[#D4D4D4] hover:text-primary text-[15px]">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-extrabold text-white text-[16px] tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Categories
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-[#D4D4D4] hover:text-primary text-[15px]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-extrabold text-white text-[16px] tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              Connect
            </h3>
            <ul className="flex flex-col gap-3 text-[#D4D4D4] text-[15px]">
              <li>tips@headstart.news</li>
              <li>Editorial desk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-[13px] text-[#A3A3A3]">
          <p>© {new Date().getFullYear()} Headstart News. All rights reserved.</p>
          <p>Static briefing. No live wire.</p>
        </div>
      </div>
    </footer>
  );
}
