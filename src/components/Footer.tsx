import { siteConfig } from "@/config/site";
import { generalWhatsAppMessage, getWhatsAppUrl } from "@/lib/contact";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Acomodações", "#acomodacoes"],
  ["Estrutura", "#estrutura"],
  ["Comodidades", "#comodidades"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"],
] as const;

export const Footer = () => {
  const whatsappUrl = getWhatsAppUrl(generalWhatsAppMessage);
  const instagramUrl = siteConfig.contact.instagramUrl;

  return (
    <footer className="bg-ink pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-12 text-ink-foreground sm:pt-16">
      <div className="container-main">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a href="#inicio" className="font-display text-3xl tracking-tight sm:text-4xl">
              {siteConfig.hotel.name}
            </a>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
              {siteConfig.hotel.city} • {siteConfig.hotel.stateAbbr}
            </p>
          </div>

          <div className="space-y-5 md:text-right">
            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/60 md:justify-end" aria-label="Rodapé">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/38 md:justify-end">
              {whatsappUrl ? (
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  WhatsApp
                </a>
              ) : (
                <span>WhatsApp · a configurar</span>
              )}
              {instagramUrl ? (
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  Instagram
                </a>
              ) : (
                <span>Instagram · a configurar</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.68rem] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Proposta institucional demonstrativa — dados comerciais sujeitos à confirmação.</p>
          <p>
            Site desenvolvido por <span className="text-white/62">{siteConfig.developer}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
