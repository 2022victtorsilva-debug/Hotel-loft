import { ArrowDown, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";

export const Hero = () => (
  <section
    id="inicio"
    className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    aria-label="Apresentação Barreiras LOFT"
  >
    <img
      src={siteConfig.media.hero}
      alt="Acomodação contemporânea, confortável e iluminada"
      className="absolute inset-0 h-full w-full object-cover"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,18,16,0.78)_0%,rgba(20,18,16,0.45)_54%,rgba(20,18,16,0.13)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,13,12,0.43),transparent_44%)]" />

    <div className="container-main relative z-10 pb-12 pt-32 text-white sm:pb-16 lg:pb-20">
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/65 sm:mb-6">
          {siteConfig.hotel.city} • {siteConfig.hotel.state}
        </p>
        <h1 className="font-display text-[clamp(3.4rem,11vw,8rem)] font-medium leading-[0.82] tracking-[-0.045em]">
          Barreiras
          <span className="block pl-[0.18em] italic text-accent">LOFT</span>
        </h1>
        <p className="mt-7 max-w-xl text-xl font-light leading-relaxed text-white/88 sm:text-2xl">
          {siteConfig.hotel.tagline}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          Espaços contemporâneos e acolhedores para uma experiência simples,
          tranquila e bem cuidada.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <a
            href="#reserva"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-[#f5f1ea]"
          >
            Consultar disponibilidade <ArrowRight size={16} />
          </a>
          <a
            href="#acomodacoes"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
          >
            Conhecer acomodações
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="mt-12 inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/50 transition hover:text-white sm:mt-16"
      >
        Descobrir <ArrowDown size={14} />
      </a>
    </div>
  </section>
);
