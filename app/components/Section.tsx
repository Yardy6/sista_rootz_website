type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "dark" | "warm";
};

const tones = {
  paper: "paper-texture text-[#15120d]",
  dark: "bg-[#070806] text-[#fff8e8]",
  warm: "bg-[#e8dcc5] text-[#15120d]"
};

export function Section({ children, className = "", tone = "paper" }: SectionProps) {
  return (
    <section className={`${tones[tone]} px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#12864a]">
      {children}
    </p>
  );
}
