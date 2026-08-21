import { siteConfig } from "@/config/site";

const sanitizeNumber = (value: string) => value.replace(/\D/g, "");

export const hasWhatsapp = () =>
  Boolean(sanitizeNumber(siteConfig.contact.whatsappNumber));

export const getWhatsAppUrl = (message: string) => {
  const number = sanitizeNumber(siteConfig.contact.whatsappNumber);
  if (!number) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const generalWhatsAppMessage =
  "Olá! Vim pelo site da Barreiras LOFT e gostaria de mais informações.";

export const roomWhatsAppMessage = (roomName: string) =>
  `Olá! Vim pelo site da Barreiras LOFT e gostaria de consultar disponibilidade e valores do ${roomName}.`;

export const bookingWhatsAppMessage = ({
  checkIn,
  checkOut,
  guests,
  room,
}: {
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
}) =>
  `Olá! Vim pelo site da Barreiras LOFT e gostaria de consultar disponibilidade.\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nHóspedes: ${guests}\nAcomodação: ${room}`;
