import {
  Bath,
  CarFront,
  MapPin,
  MessageCircle,
  Monitor,
  Snowflake,
  Sparkles,
  Wifi,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const iconMap = {
  wifi: Wifi,
  ac: Snowflake,
  tv: Monitor,
  bathroom: Bath,
  parking: CarFront,
  whatsapp: MessageCircle,
  location: MapPin,
  comfort: Sparkles,
};

export const Amenities = () => (
  <section id="comodidades" className="section-space bg-ink text-ink-foreground">
    <div className="container-main">
      <Reveal>
        <div className="max-w-2xl">
          <p className="section-kicker !text-accent">Comodidades</p>
          <h2 className="section-title mt-4 text-ink-foreground">
            Tudo para uma estadia{" "}
            <span className="italic text-accent">mais confortável.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 border-l border-t border-white/10 min-[380px]:grid-cols-2 sm:grid-cols-4">
        {siteConfig.amenities.map((amenity, index) => {
          const Icon = iconMap[amenity.key];
          return (
            <Reveal
              key={amenity.key}
              delay={(index % 4) * 55}
              className="border-b border-r border-white/10"
            >
              <article className="group h-full min-h-52 p-5 transition hover:bg-white/[0.035] sm:p-7">
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-7 font-display text-xl">{amenity.label}</h3>
                <p className="mt-3 text-xs leading-6 text-white/48 sm:text-sm">
                  {amenity.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 max-w-2xl text-xs leading-6 text-white/45">
        As comodidades apresentadas neste protótipo são demonstrativas e podem ser
        atualizadas assim que as informações oficiais da Barreiras LOFT forem
        confirmadas.
      </p>
    </div>
  </section>
);
