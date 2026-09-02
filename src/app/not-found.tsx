import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center gap-6">
      <p className="text-primary font-bold uppercase tracking-widest text-sm">404</p>
      <h1
        className="text-4xl font-bold uppercase"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        Story not on the desk
      </h1>
      <p className="text-[#525252] max-w-md">
        That URL does not match a briefing. Head back to the front page.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-white font-bold uppercase tracking-wider text-[14px] px-6 py-3 shadow-[4px_4px_0px_#0A0E11]"
      >
        Home
      </Link>
    </main>
  );
}
