import { ANIMAL_HANDLER_REGISTRATION } from "@/lib/data";

export default function Registration() {
  return (
    <section id="registration" className="py-20 px-5 texture-beige">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4b6345] mb-1 leading-none">
          Registration
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          動物取扱業登録
        </p>

        <div className="max-w-xl mx-auto bg-[#faf8f5] rounded-2xl border border-[#e0d4c0] px-5 py-6">
          <p className="text-sm font-bold text-[#4b6345] text-center mb-4">
            {ANIMAL_HANDLER_REGISTRATION.title}
          </p>
          <dl className="w-fit mx-auto space-y-2 text-left">
            {ANIMAL_HANDLER_REGISTRATION.rows.map((row) => (
              <div key={row.label} className="flex gap-4 text-xs leading-relaxed">
                <dt className="text-[#4b6345] font-bold min-w-[10.5em] shrink-0">
                  {row.label}
                </dt>
                <dd className="text-[#5a4a3a]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
