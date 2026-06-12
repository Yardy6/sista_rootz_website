const phrases = [
  "Rooted in culture",
  "Wellness centered",
  "Adults 21+",
  "Coming late August",
  "Honor Sista Ruth",
  "Community first"
];

export function BrandTicker() {
  return (
    <div className="brand-ticker" aria-label="Sista Rootz brand values">
      <div className="brand-ticker-track">
        {[...phrases, ...phrases].map((phrase, index) => (
          <span key={`${phrase}-${index}`}>
            {phrase}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
