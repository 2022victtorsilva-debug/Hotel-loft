import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const items = [
  {
    number: "01",
    title: "Conforto",
    text: "Ambientes preparados para uma estadia agradável e uma rotina mais leve.",
  },
  {
    number: "02",
    title: "Praticidade",
    text: "Informações, valores demonstrativos e contato reunidos em uma experiência direta.",
  },
  {
    number: "03",
    title: "Localização",
    text: "Uma proposta de hospedagem em Barreiras, com localização exata pronta para configuração.",
  },
  {
    number: "04",
    title: "Atendimento",
    text: "Consulta de disponibilidade pensada para seguir de forma simples pelo WhatsApp.",
  },
];

export const Differentials = () => (
  <section className="section-space overflow-hidden" aria-labelledby="diferenciais-title">
    <div className="container-main">
      <Reveal>
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">Diferenciais</p>
            <h2 id="diferenciais-title" className="section-title mt-4">
              Menos complicação. <span className="italic text-brand">Mais estadia.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted lg:justify-self-end">
            Uma experiência digital clara, pensada para ajudar o hóspede a entender a
            proposta, comparar acomodações e iniciar o contato sem etapas desnecessárias.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 border-t border-border">
        {items.map((item, index) => (
          <Reveal key={item.number} delay={index * 45}>
            <article className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[70px_0.7fr_1.3fr_44px] sm:items-center sm:gap-6 lg:py-9">
              <span className="text-xs font-semibold tracking-[0.2em] text-brand">
                {item.number}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl">{item.title}</h3>
              <p className="max-w-xl text-sm leading-7 text-muted">{item.text}</p>
              <span className="hidden size-10 items-center justify-center rounded-full border border-border text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:inline-flex">
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
