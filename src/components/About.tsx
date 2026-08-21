import { MapPin, MessageCircle, MoonStar } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const points = [
  {
    icon: MoonStar,
    title: "Conforto",
    text: "Ambientes pensados para você desacelerar e aproveitar sua estadia.",
  },
  {
    icon: MapPin,
    title: "Praticidade",
    text: "Uma experiência direta, simples e conveniente em Barreiras.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento",
    text: "Informações e consultas com contato descomplicado.",
  },
];

export const About = () => (
  <section id="sobre" className="section-space overflow-hidden">
    <div className="container-main">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary sm:aspect-[5/6]">
            <img
              src={siteConfig.media.about}
              alt="Detalhe elegante de uma acomodação aconchegante"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden w-44 rounded-2xl border border-border bg-background p-5 shadow-soft sm:block">
            <span className="font-display text-3xl text-brand">LOFT</span>
            <p className="mt-2 text-xs leading-5 text-muted">
              Hospitalidade contemporânea em Barreiras.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-kicker">Sobre nós</p>
          <h2 className="section-title mt-4 max-w-xl">
            Uma estadia pensada para você{" "}
            <span className="italic text-brand">se sentir bem.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            A Barreiras LOFT combina conforto, praticidade e uma atmosfera
            acolhedora em uma proposta de hospedagem contemporânea, feita para
            tornar cada estadia mais simples e agradável.
          </p>

          <div className="mt-9 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={20} className="text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
