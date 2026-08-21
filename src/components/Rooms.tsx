import {
  BedDouble,
  ChevronRight,
  ShowerHead,
  UserRound,
  Wifi,
  Wind,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, roomWhatsAppMessage } from "@/lib/contact";

const miniIcons = [UserRound, BedDouble, ShowerHead];

export const Rooms = () => (
  <section id="acomodacoes" className="section-space bg-secondary/55">
    <div className="container-main">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Acomodações</p>
            <h2 className="section-title mt-4">
              Escolha o seu <span className="italic text-brand">jeito de ficar.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted sm:text-right">
            Opções demonstrativas para diferentes estilos de estadia. Valores e
            características podem ser atualizados facilmente.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {siteConfig.rooms.map((room, index) => {
          const whatsappUrl = getWhatsAppUrl(roomWhatsAppMessage(room.name));
          return (
            <Reveal key={room.id} delay={index * 80}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] bg-secondary">
                  <img
                    src={room.image}
                    alt={`Imagem ilustrativa da acomodação ${room.name}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/92 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur-lg">
                    Opção {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-1 pt-6">
                  <div className="flex flex-col gap-3 min-[410px]:flex-row min-[410px]:items-start min-[410px]:justify-between">
                    <h3 className="font-display text-3xl tracking-tight">{room.name}</h3>
                    <div className="shrink-0 min-[410px]:text-right">
                      <span className="block text-xs text-muted">A partir de</span>
                      <strong className="font-display text-2xl font-medium text-brand">
                        R$ {room.price}
                      </strong>
                      <span className="block text-xs text-muted">/ diária</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">{room.description}</p>

                  <div className="mt-5 grid gap-2 border-y border-border py-4 text-xs text-muted">
                    {[room.capacity, room.bed, room.bathroom].map((item, i) => {
                      const Icon = miniIcons[i];
                      return (
                        <span key={item} className="flex items-center gap-2">
                          <Icon size={14} className="text-brand" aria-hidden="true" />
                          {item}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.amenities.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[0.68rem] font-semibold text-muted"
                      >
                        {item === "Wi-Fi" ? (
                          <Wifi size={12} aria-hidden="true" />
                        ) : item === "Ar-condicionado" ? (
                          <Wind size={12} aria-hidden="true" />
                        ) : null}
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl ?? "#contato"}
                    className="mt-6 inline-flex min-h-12 items-center justify-between rounded-full border border-border px-5 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
                    target={whatsappUrl ? "_blank" : undefined}
                    rel={whatsappUrl ? "noreferrer" : undefined}
                    aria-label={
                      whatsappUrl
                        ? `Consultar disponibilidade do ${room.name} pelo WhatsApp`
                        : `Ir para contato sobre ${room.name}`
                    }
                  >
                    Consultar disponibilidade <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100}>
        <p className="mt-9 text-xs leading-6 text-muted">
          Nomes, valores e características das acomodações são demonstrativos nesta
          proposta e permanecem centralizados para atualização rápida.
        </p>
      </Reveal>
    </div>
  </section>
);
