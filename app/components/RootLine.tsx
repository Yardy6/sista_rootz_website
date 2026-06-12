export function RootLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`block w-full ${className}`}
      fill="none"
      viewBox="0 0 520 42"
    >
      <path
        d="M3 25c55-19 91-20 132-5 32 12 61 13 88-3 40-24 74-17 103 5 24 18 52 18 77 0 28-20 58-21 113 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M107 21c-8 10-12 18-10 24M222 17c-11 7-18 16-22 28M336 21c10 7 17 15 20 24M423 22c-6 9-9 16-8 23"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}
