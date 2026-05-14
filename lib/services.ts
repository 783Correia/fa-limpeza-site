export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  icon: string
  cities: string[]
}

export const services: Service[] = [
  {
    slug: "impermeabilizacao-pisos",
    name: "Impermeabilização de Pisos e Pedras",
    shortName: "Impermeabilização",
    description:
      "Tratamento técnico que protege e restaura pisos de mármore, granito, porcelanato e pedras naturais. Resultado definitivo contra manchas e umidade.",
    icon: "layers",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "limpeza-pos-obra",
    name: "Limpeza Pós-Obra",
    shortName: "Pós-Obra",
    description:
      "Limpeza técnica especializada para construtoras e incorporadoras. Entrega do imóvel no padrão exigido para o cliente final.",
    icon: "building",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "lapidacao-piso-usinado",
    name: "Lapidação de Piso Usinado",
    shortName: "Lapidação",
    description:
      "Processo técnico que recupera o brilho e a uniformidade de pisos usinados, polidos e lustrados. Resultado comparável ao piso novo.",
    icon: "sparkles",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "impermeabilizacao-telhados",
    name: "Impermeabilização de Telhados",
    shortName: "Telhados",
    description:
      "Impermeabilização técnica que elimina infiltrações e prolonga a vida útil da cobertura. Aplicação em telhas cerâmicas, fibrocimento e lajes.",
    icon: "home",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "tratamento-decks",
    name: "Tratamento de Decks e Madeiras",
    shortName: "Decks",
    description:
      "Limpeza profunda e impermeabilização de decks de madeira, restaurando a cor original e protegendo contra umidade e raios UV.",
    icon: "tree",
    cities: ["balneario-camboriu"],
  },
  {
    slug: "pintura-epoxi",
    name: "Pintura Epoxi",
    shortName: "Epoxi",
    description:
      "Revestimento epóxi de alta resistência para pisos de garagem, galpões e áreas industriais. Superfície lavável, antiderrapante e durável.",
    icon: "paint",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "limpeza-piscinas",
    name: "Limpeza de Piscinas e Área Externa",
    shortName: "Piscinas",
    description:
      "Limpeza técnica de piscinas, calçadas e áreas externas. Remoção de algas, bolor e sujeira incrustada com equipamentos profissionais.",
    icon: "water",
    cities: ["balneario-camboriu"],
  },
  {
    slug: "porcelanato-areas-externas",
    name: "Porcelanato e Áreas Externas",
    shortName: "Porcelanato",
    description:
      "Limpeza e restauração de porcelanato técnico, calçadas e áreas externas. Removemos manchas de cimento, tinta e sujeira incrustada.",
    icon: "grid",
    cities: ["balneario-camboriu", "apucarana"],
  },
]

export type PageService = {
  service: Service
  city: { name: string; state: string; slug: string }
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  keywords: string[]
}

export const servicePages: PageService[] = [
  {
    service: services[0],
    city: { name: "Balneário Camboriú", state: "SC", slug: "balneario-camboriu" },
    title: "Impermeabilização de Pisos em Balneário Camboriú",
    metaTitle: "Impermeabilização de Pisos e Pedras em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Restauração e impermeabilização técnica de pisos, mármore, granito e porcelanato em Balneário Camboriú SC. Atendemos hotéis, condomínios e imóveis de alto padrão. Orçamento grátis.",
    h1: "Impermeabilização de Pisos e Pedras em Balneário Camboriú, SC",
    keywords: [
      "impermeabilização pisos Balneário Camboriú",
      "restauração pisos BC",
      "lapidação mármore Balneário Camboriú",
      "limpeza porcelanato BC SC",
    ],
  },
  {
    service: services[0],
    city: { name: "Apucarana", state: "PR", slug: "apucarana" },
    title: "Impermeabilização de Pisos em Apucarana",
    metaTitle: "Impermeabilização de Pisos e Pedras em Apucarana PR | FA Limpeza",
    metaDescription:
      "Restauração e impermeabilização técnica de pisos, mármore e porcelanato em Apucarana PR. Especialistas em pisos técnicos para condomínios e empresas. Orçamento sem compromisso.",
    h1: "Impermeabilização de Pisos e Pedras em Apucarana, PR",
    keywords: [
      "impermeabilização pisos Apucarana",
      "restauração pisos Apucarana PR",
      "lapidação piso Apucarana",
      "limpeza porcelanato Apucarana PR",
    ],
  },
  {
    service: services[1],
    city: { name: "Balneário Camboriú", state: "SC", slug: "balneario-camboriu" },
    title: "Limpeza Pós-Obra em Balneário Camboriú",
    metaTitle: "Limpeza Pós-Obra em Balneário Camboriú SC | FA Limpeza Profissional",
    metaDescription:
      "Limpeza técnica pós-obra para construtoras e incorporadoras em Balneário Camboriú SC. Entrega do imóvel no padrão exato para o cliente final. Equipe especializada. Orçamento grátis.",
    h1: "Limpeza Pós-Obra em Balneário Camboriú, SC",
    keywords: [
      "limpeza pós obra Balneário Camboriú",
      "limpeza obra BC SC",
      "faxina pós obra Balneário Camboriú",
      "limpeza entrega obra BC",
    ],
  },
  {
    service: services[1],
    city: { name: "Apucarana", state: "PR", slug: "apucarana" },
    title: "Limpeza Pós-Obra em Apucarana",
    metaTitle: "Limpeza Pós-Obra em Apucarana PR | FA Limpeza Profissional",
    metaDescription:
      "Limpeza técnica pós-obra para construtoras e incorporadoras em Apucarana PR. Entrega do imóvel no padrão exigido pelo cliente final. Orçamento sem compromisso.",
    h1: "Limpeza Pós-Obra em Apucarana, PR",
    keywords: [
      "limpeza pós obra Apucarana",
      "limpeza obra Apucarana PR",
      "limpeza entrega obra Apucarana",
    ],
  },
]
