import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => (
  <section className="px-3 py-3 sm:px-5 sm:py-5" aria-label="Consultar estadia">
    <Reveal>
      <div className="relative mx-auto min-h-[520px] max-w-[1500px] overflow-hidden rounded-[2rem] sm:min-h-[600px]">
        <img
          src={siteConfig.media.finalCta}
          alt="Ambiente de hospedagem contemporâneo em tons neutros"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,19,17,.80),rgba(22,19,17,.36),rgba(22,19,17,.12))]" />
        <div className="container-main relative z-10 flex min-h-[520px] items-end py-10 text-white sm:min-h-[600px] sm:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Barreiras LOFT
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.9rem,8vw,6.8rem)] leading-[0.9] tracking-[-0.04em]">
              Sua próxima estadia em Barreiras começa aqui.
            </h2>
            <a
              href="#reserva"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-[#f5f1ea]"
            >
              Consultar disponibilidade <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);
