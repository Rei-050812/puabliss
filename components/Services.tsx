import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="service" className="py-20 px-5 bg-[#f5f0e8]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#8aab8a] mb-1 leading-none">
          Service
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          サービス紹介
        </p>

        <div className="flex flex-col gap-4 text-left">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <p className="mt-6 text-xs text-[#8a7a60]">
          ※ 犬種・毛量により価格が変動する場合があります。詳しくはお問い合わせください。
        </p>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  return (
    <div className="bg-[#faf8f5] border border-[#e0d4c0] rounded-2xl p-5 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-sans text-base font-bold text-[#3d2b1f]">{service.name}</h3>
        <span className="flex-shrink-0 bg-[#8aab8a] text-white text-xs font-bold px-3 py-1 rounded-full">
          {service.price}
        </span>
      </div>
      <p className="text-sm text-[#5a4a3a] leading-relaxed mb-2">
        {service.description}
      </p>
      <p className="text-[11px] text-[#8a7a60]">{service.note}</p>
    </div>
  );
}
