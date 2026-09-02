export default function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 lg:mb-16">
      <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
        {kicker}
      </span>
      <h2
        className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-[#171717]"
        style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-[#525252] text-[17px] font-medium mt-4 max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
