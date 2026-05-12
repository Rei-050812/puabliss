import Image from "next/image";
import { INTERIOR_IMAGES, SALON_INFO } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 texture-beige">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4b6345] mb-1 leading-none">
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

        {/* サロン名の由来 */}
        <div className="mb-8 space-y-4">
          <p className="text-sm md:text-base text-[#525041] font-medium">
            サロン名には<br className="md:hidden" />わんちゃんと飼い主さまへの想いを込めています。
          </p>
          {SALON_INFO.nameStory.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm md:text-base text-[#525041] leading-loose">
              {i === 0 ? (
                <>
                  「Pua Bliss（プアブリス）」の&quot;Pua&quot;は「花」
                  <br className="md:hidden" />
                  &quot;Bliss&quot;は「幸福・幸せ」を意味します。
                </>
              ) : (
                paragraph.split("\n").map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))
              )}
            </p>
          ))}
        </div>

        {/* Concept text */}
        <div className="mb-10 space-y-4">
          {SALON_INFO.conceptText.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm md:text-base text-[#525041] leading-loose">
              {paragraph.split("\n").map((line, j, arr) => (
                <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
              ))}
            </p>
          ))}
        </div>

        {/* Owner comment — 楕円形 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#525041] rounded-[50%] w-[88vw] max-w-[420px] md:w-[620px] md:max-w-none h-52 md:h-60 flex flex-col items-center justify-center text-center px-10 md:px-20">
            <p className="text-sm text-white leading-relaxed italic mb-4">
              「{SALON_INFO.ownerComment.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}」
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-sm font-bold text-white">{SALON_INFO.owner}</p>
              <p className="font-handwritten text-sm text-white/80">{SALON_INFO.ownerTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
