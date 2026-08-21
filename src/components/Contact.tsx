import { Instagram, MapPin, MessageCircle } from "lucide-react";

import { ContactAction } from "@/components/ContactAction";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { generalWhatsAppMessage } from "@/lib/contact";

export const Contact = () => (
  <section id="contato" className="section-space">
    <div className="container-main">
      <Reveal>
        <div className="grid gap-8 border-y border-border py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-kicker">Contato</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
              Planejando sua <span className="italic text-brand">estadia?</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
              Escolha o canal mais conveniente. Os dados oficiais ficam centralizados e só aparecem como links quando estiverem configurados.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap lg:max-w-lg lg:justify-end">
            <ContactAction
              icon={MessageCircle}
              label="WhatsApp"
              message={generalWhatsAppMessage}
            />
            <ContactAction
              icon={Instagram}
              label="Instagram"
              href={siteConfig.contact.instagramUrl}
              external
            />
            <ContactAction
              icon={MapPin}
              label="Localização"
              href={siteConfig.contact.googleMapsUrl}
              external
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
