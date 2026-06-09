type RootPillarProps = {
  className?: string;
};

export function RootPillar({ className = "" }: RootPillarProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 72 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="root-pillar-trunk"
        d="M37 14c-9 17-8 32-1 47 6 13 5 28-5 42-10 15-11 32-3 49 7 14 6 28-3 43"
      />
      <path
        className="root-pillar-branch"
        d="M35 48c-12-2-22-10-27-22M37 67c13-5 23-16 28-31M30 104c-12-2-20-9-24-19M29 126c13-5 23-15 31-29M30 161c-11-3-19-10-24-21M28 183c12-4 23-13 31-26"
      />
      <path
        className="root-pillar-leaf"
        d="M8 26c13-1 20 5 20 18-12 1-20-6-20-18ZM65 36c-13 1-20 8-19 20 13-1 20-8 19-20ZM6 85c13-1 20 5 20 18-13 1-20-6-20-18ZM60 97c-13 0-21 7-21 20 13 0 21-7 21-20ZM6 140c13 0 20 7 20 19-13 0-20-6-20-19ZM59 157c-13-1-21 5-22 18 13 1 21-5 22-18Z"
      />
      <path
        className="root-pillar-root"
        d="M25 194c-1 15-7 27-19 37M26 197c4 15 1 28-8 40M27 197c10 13 14 26 12 40M28 197c16 10 25 22 29 36M29 195c19 5 31 14 38 27"
      />
    </svg>
  );
}
