import { ArrowUpRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export const Location = () => {
  const { address, googleMapsUrl } = siteConfig.contact;

  return (
    <section id="localizacao" className="section-space">
      <div className="container-main">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="section-kicker">Localização</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl">
                Barreiras <span className="italic text-brand">— Bahia.</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
                A estrutura está pronta para apresentar o endereço oficial e abrir a
                rota no mapa assim que essas informações forem confirmadas.
              </p>

              <div className="mt-9 border-t border-border pt-7">
                <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-muted">
                  Endereço
                </span>
                <p className="mt-3 font-display text-2xl">
                  {address || "Endereço oficial a confirmar"}
                </p>
              </div>

              {googleMapsUrl ? (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:bg-brand-dark"
                >
                  Abrir no mapa <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-muted">
                  Abrir no mapa <span className="text-[0.62rem] uppercase tracking-wider">a configurar</span>
                </span>
              )}
            </div>

            <div className="map-placeholder relative min-h-[330px] overflow-hidden bg-ink lg:min-h-full" aria-hidden="true">
              <div className="absolute inset-0 opacity-70" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-28 place-items-center rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
                  <MapPin size={36} strokeWidth={1.3} className="text-accent" />
                </div>
              </div>
              <span className="absolute bottom-7 left-7 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-white/45">
                Barreiras • BA
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
