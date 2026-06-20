import Image from "next/image";
import { assetPath } from "../lib/asset-path";

export function RastaDivider({ className = "" }: { className?: string }) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={`rasta-divider h-auto w-full object-contain ${className}`}
      height={200}
      src={assetPath("/images/rasta-vine-divider.png")}
      width={2043}
    />
  );
}
