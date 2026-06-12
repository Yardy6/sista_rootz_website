type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "dark" | "warm" | "green" | "gold";
};

const tones = {
  paper: "paper-texture text-[#15120d]",
  dark: "urban-dark-surface text-[#fff8e8]",
  warm: "warm-street-surface text-[#15120d]",
  green: "greenhouse-surface text-[#fff8e8]",
  gold: "gold-surface text-[#15120d]"
};

export function Section({ children, className = "", tone = "paper" }: SectionProps) {
  return (
    <section className={`scroll-section ${tones[tone]} px-5 py-20 lg:px-8 lg:py-32 ${className}`}>
      <div className="section-inner mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label mb-5 text-xs font-black uppercase text-[#12864a]">
      {children}
    </p>
  );
}
