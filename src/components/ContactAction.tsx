import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { getWhatsAppUrl, hasWhatsapp } from "@/lib/contact";

type ContactActionProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  external?: boolean;
  message?: string;
};

export const ContactAction = ({
  icon: Icon,
  label,
  href = "",
  external = false,
  message,
}: ContactActionProps) => {
  const whatsappUrl = message ? getWhatsAppUrl(message) : null;
  const resolvedHref = message ? whatsappUrl : href || null;
  const canOpen = message ? hasWhatsapp() : Boolean(resolvedHref);

  if (!canOpen || !resolvedHref) {
    return (
      <span className="inline-flex min-h-12 items-center gap-3 rounded-full border border-border px-5 text-sm font-semibold text-muted">
        <Icon size={17} aria-hidden="true" />
        {label}
        <span className="text-[0.6rem] uppercase tracking-[0.12em]">a configurar</span>
      </span>
    );
  }

  return (
    <a
      href={resolvedHref}
      className="inline-flex min-h-12 items-center gap-3 rounded-full border border-border px-5 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
      target={external || resolvedHref.startsWith("http") ? "_blank" : undefined}
      rel={external || resolvedHref.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon size={17} aria-hidden="true" />
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
};
