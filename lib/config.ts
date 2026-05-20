export const site = {
  name: "FA Limpeza Profissional",
  shortName: "FA",
  tagline: "SUPERFÍCIES QUE DURAM.",
  description:
    "Especialistas em restauração e impermeabilização técnica de pisos, telhados e decks para hotéis, condomínios e imóveis de alto padrão.",
  phone: "(47) 98447-5665",
  whatsapp: "5547984475665",
  whatsappMsg: "Olá, gostaria de solicitar um orçamento.",
  instagram: "fa.limpezaprofissional",
  facebook: "falimpezaprofissional10",
  cities: [
    {
      name: "Balneário Camboriú",
      state: "SC",
      slug: "balneario-camboriu",
      lat: -26.9927,
      lng: -48.6352,
    },
    {
      name: "Apucarana",
      state: "PR",
      slug: "apucarana",
      lat: -23.5505,
      lng: -51.4608,
    },
  ],
} as const

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg)}`
