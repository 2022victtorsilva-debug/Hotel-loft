import { siteConfig } from "@/config/site";

const sanitizeNumber = (value: string) => value.replace(/\D/g, "");

export const hasWhatsapp = () =>
  Boolean(sanitizeNumber(siteConfig.contact.whatsappNumber));

export const buildWhatsAppUrl = (number: string, message: string) => {
  const sanitizedNumber = sanitizeNumber(number);
  if (!sanitizedNumber) return null;

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppUrl = (message: string) =>
  buildWhatsAppUrl(siteConfig.contact.whatsappNumber, message);

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
