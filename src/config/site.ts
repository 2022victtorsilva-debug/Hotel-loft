export type Room = {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: string;
  bed: string;
  bathroom: string;
  amenities: string[];
  image: string;
};

export const siteConfig = {
  hotel: {
    name: "Barreiras LOFT",
    city: "Barreiras",
    state: "Bahia",
    stateAbbr: "BA",
    tagline: "Conforto e praticidade para sua estadia em Barreiras.",
    description:
      "Um loft contemporâneo pensado para quem valoriza conforto, praticidade e uma estadia tranquila em Barreiras.",
  },
  developer: "Yuukri",
  contact: {
    whatsappNumber: "",
    instagramUrl: "",
    address: "",
    googleMapsUrl: "",
  },
  seo: {
    title: "Barreiras LOFT | Hospedagem em Barreiras - BA",
    description:
      "Conheça a proposta da Barreiras LOFT em Barreiras, Bahia: hospedagem contemporânea, conforto, acomodações e consulta de disponibilidade por contato direto.",
  },
  media: {
    hero:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2200&q=84",
    about:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=82",
    finalCta:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2200&q=82",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=82",
        alt: "Quarto contemporâneo em tons neutros com iluminação acolhedora",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=82",
        alt: "Acomodação moderna com cama ampla e área de apoio",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=82",
        alt: "Detalhe de quarto de hospedagem contemporâneo",
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=82",
        alt: "Ambiente de hospedagem organizado e confortável",
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=82",
        alt: "Detalhes internos com madeira e tons claros",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=82",
        alt: "Ambiente interno contemporâneo em paleta neutra",
      },
    ],
  },
  rooms: [
    {
      id: "essencial",
      name: "Loft Essencial",
      price: 169,
      description:
        "Praticidade e conforto em um espaço acolhedor, ideal para estadias objetivas.",
      capacity: "Até 2 hóspedes",
      bed: "1 cama de casal",
      bathroom: "Banheiro privativo",
      amenities: ["Wi-Fi", "Ar-condicionado"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=82",
    },
    {
      id: "conforto",
      name: "Loft Conforto",
      price: 219,
      description:
        "Mais espaço e comodidade para quem busca uma experiência ainda mais confortável.",
      capacity: "Até 2 hóspedes",
      bed: "1 cama queen",
      bathroom: "Banheiro privativo",
      amenities: ["Wi-Fi", "Ar-condicionado", "TV"],
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=82",
    },
    {
      id: "premium",
      name: "Loft Premium",
      price: 289,
      description:
        "Uma experiência superior, com detalhes que tornam sua estadia ainda mais especial.",
      capacity: "Até 3 hóspedes",
      bed: "1 cama queen",
      bathroom: "Banheiro privativo",
      amenities: ["Wi-Fi", "Ar-condicionado", "TV"],
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=82",
    },
  ] satisfies Room[],
  amenities: [
    {
      key: "wifi",
      label: "Wi-Fi",
      description: "Conectividade para tornar a rotina de viagem mais prática.",
    },
    {
      key: "ac",
      label: "Ar-condicionado",
      description: "Ambientes preparados para mais conforto durante a estadia.",
    },
    {
      key: "tv",
      label: "TV",
      description: "Entretenimento no próprio loft para momentos de descanso.",
    },
    {
      key: "bathroom",
      label: "Banheiro privativo",
      description: "Privacidade e conveniência dentro da acomodação.",
    },
    {
      key: "parking",
      label: "Estacionamento",
      description: "Item demonstrativo, sujeito à confirmação pela hospedagem.",
    },
    {
      key: "whatsapp",
      label: "Atendimento pelo WhatsApp",
      description: "Contato direto para dúvidas e consulta de disponibilidade.",
    },
    {
      key: "location",
      label: "Boa localização",
      description: "Hospedagem em Barreiras, Bahia; endereço oficial a confirmar.",
    },
    {
      key: "comfort",
      label: "Conforto",
      description: "Uma proposta centrada em bem-estar, simplicidade e cuidado.",
    },
  ],
} as const;
