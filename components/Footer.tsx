import { SALON_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#2a1f16] py-8 px-5 text-center">
      <p className="text-[#faf8f5] font-bold text-sm mb-1">{SALON_INFO.name}</p>
      <p className="text-[#7a6a5a] text-xs mb-4">{SALON_INFO.tagline}</p>
      <p className="text-[#7a6a5a] text-[10px]">
        © 2025 {SALON_INFO.name} All rights reserved.
      </p>
    </footer>
  );
}
