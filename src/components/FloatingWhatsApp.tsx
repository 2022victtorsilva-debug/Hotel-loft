import { MessageCircle } from "lucide-react";

import { generalWhatsAppMessage, getWhatsAppUrl } from "@/lib/contact";

export const FloatingWhatsApp = () => {
  const url = getWhatsAppUrl(generalWhatsAppMessage);
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_16px_40px_-12px_rgba(37,33,29,.55)] transition hover:-translate-y-0.5 hover:bg-brand-dark sm:bottom-6 sm:right-6 sm:size-13"
      aria-label="Falar com a Barreiras LOFT pelo WhatsApp"
    >
      <MessageCircle size={21} aria-hidden="true" />
    </a>
  );
};
