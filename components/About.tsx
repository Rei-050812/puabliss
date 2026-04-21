import Image from "next/image";
import { INTERIOR_IMAGES, SALON_INFO } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4d6b44] mb-1 leading-none">
          About
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          サロン紹介
        </p>

        {/* Interior photos */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-10">
          {INTERIOR_IMAGES.map((img) => (
            <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 280px"
              />
            </div>
          ))}
        </div>

        {/* Concept text */}
        <div className="mb-8 space-y-4">
          {SALON_INFO.conceptText.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm md:text-base text-[#5a4a3a] leading-loose">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Owner comment */}
        <div className="border-l-4 border-[#4d6b44] pl-4 py-2 bg-[#f5f0e8] rounded-r-xl">
          <p className="text-sm text-[#5a4a3a] leading-relaxed mb-3 italic">
            「{SALON_INFO.ownerComment.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}」
          </p>
          <p className="text-xs font-bold text-[#4d6b44]">
            {SALON_INFO.owner} / {SALON_INFO.ownerTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
