export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  icon: string
  image: string
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
    image: "/images/lapidacao.jpg",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "limpeza-pos-obra",
    name: "Limpeza Pós-Obra",
    shortName: "Pós-Obra",
    description:
      "Limpeza técnica especializada para construtoras e incorporadoras. Entrega do imóvel no padrão exigido para o cliente final.",
    icon: "building",
    image: "/images/pos-obra.jpg",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "lapidacao-piso-usinado",
    name: "Lapidação de Piso Usinado",
    shortName: "Lapidação",
    description:
      "Processo técnico que recupera o brilho e a uniformidade de pisos usinados, polidos e lustrados. Resultado comparável ao piso novo.",
    icon: "sparkles",
    image: "/images/lapidacao.jpg",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "impermeabilizacao-telhados",
    name: "Impermeabilização de Telhados",
    shortName: "Telhados",
    description:
      "Impermeabilização técnica que elimina infiltrações e prolonga a vida útil da cobertura. Aplicação em telhas cerâmicas, fibrocimento e lajes.",
    icon: "home",
    image: "/images/telhados.png",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "tratamento-decks",
    name: "Tratamento de Decks e Madeiras",
    shortName: "Decks",
    description:
      "Limpeza profunda e impermeabilização de decks de madeira, restaurando a cor original e protegendo contra umidade e raios UV.",
    icon: "tree",
    image: "/images/decks.jpg",
    cities: ["balneario-camboriu"],
  },
  {
    slug: "pintura-epoxi",
    name: "Pintura Epoxi",
    shortName: "Epoxi",
    description:
      "Revestimento epóxi de alta resistência para pisos de garagem, galpões e áreas industriais. Superfície lavável, antiderrapante e durável.",
    icon: "paint",
    image: "/images/epoxi.jpg",
    cities: ["balneario-camboriu", "apucarana"],
  },
  {
    slug: "limpeza-piscinas",
    name: "Limpeza de Piscinas e Área Externa",
    shortName: "Piscinas",
    description:
      "Limpeza técnica de piscinas, calçadas e áreas externas. Remoção de algas, bolor e sujeira incrustada com equipamentos profissionais.",
    icon: "water",
    image: "/images/piscina.jpg",
    cities: ["balneario-camboriu"],
  },
  {
    slug: "porcelanato-areas-externas",
    name: "Porcelanato e Áreas Externas",
    shortName: "Porcelanato",
    description:
      "Limpeza e restauração de porcelanato técnico, calçadas e áreas externas. Removemos manchas de cimento, tinta e sujeira incrustada.",
    icon: "grid",
    image: "/images/porcelanato.jpg",
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

export const cities = {
  bc: { name: "Balneário Camboriú", state: "SC", slug: "balneario-camboriu" },
  apu: { name: "Apucarana", state: "PR", slug: "apucarana" },
}

export const servicePages: PageService[] = [
  // ── impermeabilizacao-pisos ──────────────────────────────────────
  {
    service: services[0],
    city: cities.bc,
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
    city: cities.apu,
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
  // ── limpeza-pos-obra ─────────────────────────────────────────────
  {
    service: services[1],
    city: cities.bc,
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
    city: cities.apu,
    title: "Limpeza Pós-Obra em Apucarana",
    metaTitle: "Limpeza Pós-Obra em Apucarana PR | FA Limpeza Profissional",
    metaDescription:
      "Limpeza técnica pós-obra para construtoras e incorporadoras em Apucarana PR. Entrega do imóvel no padrão exigido pelo cliente final. Orçamento sem compromisso.",
    h1: "Limpeza Pós-Obra em Apucarana, PR",
    keywords: [
      "limpeza pós obra Apucarana",
      "limpeza obra Apucarana PR",
      "limpeza entrega obra Apucarana",
      "faxina pós obra Apucarana PR",
    ],
  },
  // ── lapidacao-piso-usinado ───────────────────────────────────────
  {
    service: services[2],
    city: cities.bc,
    title: "Lapidação de Piso Usinado em Balneário Camboriú",
    metaTitle: "Lapidação de Piso Usinado em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Recupere o brilho do seu piso usinado em Balneário Camboriú SC. Lapidação técnica com resultado comparável ao piso novo. Atendemos hotéis, condomínios e alto padrão. Orçamento grátis.",
    h1: "Lapidação de Piso Usinado em Balneário Camboriú, SC",
    keywords: [
      "lapidação piso usinado Balneário Camboriú",
      "polimento piso BC SC",
      "restauração piso usinado Balneário Camboriú",
      "lustração piso BC",
    ],
  },
  {
    service: services[2],
    city: cities.apu,
    title: "Lapidação de Piso Usinado em Apucarana",
    metaTitle: "Lapidação de Piso Usinado em Apucarana PR | FA Limpeza",
    metaDescription:
      "Lapidação e polimento de pisos usinados em Apucarana PR. Recupere o brilho original com processo técnico especializado. Condomínios e residências. Orçamento sem compromisso.",
    h1: "Lapidação de Piso Usinado em Apucarana, PR",
    keywords: [
      "lapidação piso usinado Apucarana",
      "polimento piso Apucarana PR",
      "restauração piso usinado Apucarana",
      "lustração piso Apucarana",
    ],
  },
  // ── impermeabilizacao-telhados ───────────────────────────────────
  {
    service: services[3],
    city: cities.bc,
    title: "Impermeabilização de Telhados em Balneário Camboriú",
    metaTitle: "Impermeabilização de Telhados em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Impermeabilização técnica de telhados em Balneário Camboriú SC. Elimina infiltrações em telhas cerâmicas, fibrocimento e lajes. Ideal para condomínios e hotéis. Orçamento grátis.",
    h1: "Impermeabilização de Telhados em Balneário Camboriú, SC",
    keywords: [
      "impermeabilização telhado Balneário Camboriú",
      "impermeabilizar telha BC SC",
      "infiltração telhado Balneário Camboriú",
      "impermeabilização laje BC",
    ],
  },
  {
    service: services[3],
    city: cities.apu,
    title: "Impermeabilização de Telhados em Apucarana",
    metaTitle: "Impermeabilização de Telhados em Apucarana PR | FA Limpeza",
    metaDescription:
      "Impermeabilização técnica de telhados em Apucarana PR. Resolve infiltrações em telhas cerâmicas, fibrocimento e lajes com aplicação especializada. Orçamento sem compromisso.",
    h1: "Impermeabilização de Telhados em Apucarana, PR",
    keywords: [
      "impermeabilização telhado Apucarana",
      "impermeabilizar telha Apucarana PR",
      "infiltração telhado Apucarana",
      "impermeabilização laje Apucarana",
    ],
  },
  // ── tratamento-decks (só BC) ─────────────────────────────────────
  {
    service: services[4],
    city: cities.bc,
    title: "Tratamento de Decks e Madeiras em Balneário Camboriú",
    metaTitle: "Tratamento de Decks e Madeiras em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Restauração e impermeabilização de decks de madeira em Balneário Camboriú SC. Recupera a cor original e protege contra umidade e UV. Hotéis e alto padrão. Orçamento grátis.",
    h1: "Tratamento de Decks e Madeiras em Balneário Camboriú, SC",
    keywords: [
      "tratamento deck madeira Balneário Camboriú",
      "restauração deck BC SC",
      "impermeabilização deck madeira BC",
      "limpeza deck Balneário Camboriú",
    ],
  },
  // ── pintura-epoxi ────────────────────────────────────────────────
  {
    service: services[5],
    city: cities.bc,
    title: "Pintura Epoxi em Balneário Camboriú",
    metaTitle: "Pintura Epoxi para Pisos em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Aplicação de piso epóxi em garagens, galpões e condomínios em Balneário Camboriú SC. Superfície lavável, antiderrapante e durável. Orçamento grátis.",
    h1: "Pintura Epoxi para Pisos em Balneário Camboriú, SC",
    keywords: [
      "pintura epoxi Balneário Camboriú",
      "piso epóxi BC SC",
      "pintura garagem Balneário Camboriú",
      "epoxi condomínio BC",
    ],
  },
  {
    service: services[5],
    city: cities.apu,
    title: "Pintura Epoxi em Apucarana",
    metaTitle: "Pintura Epoxi para Pisos em Apucarana PR | FA Limpeza",
    metaDescription:
      "Revestimento epóxi para garagens, galpões e indústrias em Apucarana PR. Superfície lavável e antiderrapante de alta resistência. Orçamento sem compromisso.",
    h1: "Pintura Epoxi para Pisos em Apucarana, PR",
    keywords: [
      "pintura epoxi Apucarana",
      "piso epóxi Apucarana PR",
      "pintura garagem Apucarana",
      "epoxi industrial Apucarana",
    ],
  },
  // ── limpeza-piscinas (só BC) ─────────────────────────────────────
  {
    service: services[6],
    city: cities.bc,
    title: "Limpeza de Piscinas em Balneário Camboriú",
    metaTitle: "Limpeza de Piscinas e Área Externa em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Limpeza técnica de piscinas, calçadas e áreas externas em Balneário Camboriú SC. Remoção de algas e sujeira com equipamentos profissionais. Hotéis e condomínios. Orçamento grátis.",
    h1: "Limpeza de Piscinas e Área Externa em Balneário Camboriú, SC",
    keywords: [
      "limpeza piscina Balneário Camboriú",
      "limpeza área externa BC SC",
      "limpeza calçada Balneário Camboriú",
      "remoção algas piscina BC",
    ],
  },
  // ── porcelanato-areas-externas ───────────────────────────────────
  {
    service: services[7],
    city: cities.bc,
    title: "Limpeza de Porcelanato em Balneário Camboriú",
    metaTitle: "Limpeza e Restauração de Porcelanato em Balneário Camboriú SC | FA Limpeza",
    metaDescription:
      "Limpeza profunda e restauração de porcelanato em Balneário Camboriú SC. Removemos manchas de cimento, tinta e sujeira incrustada. Condomínios e áreas externas. Orçamento grátis.",
    h1: "Limpeza e Restauração de Porcelanato em Balneário Camboriú, SC",
    keywords: [
      "limpeza porcelanato Balneário Camboriú",
      "restauração porcelanato BC SC",
      "limpeza área externa porcelanato BC",
      "limpeza fachada Balneário Camboriú",
    ],
  },
  {
    service: services[7],
    city: cities.apu,
    title: "Limpeza de Porcelanato em Apucarana",
    metaTitle: "Limpeza e Restauração de Porcelanato em Apucarana PR | FA Limpeza",
    metaDescription:
      "Limpeza de porcelanato e áreas externas em Apucarana PR. Removemos manchas de cimento, tinta e sujeira acumulada com técnica especializada. Orçamento sem compromisso.",
    h1: "Limpeza e Restauração de Porcelanato em Apucarana, PR",
    keywords: [
      "limpeza porcelanato Apucarana",
      "restauração porcelanato Apucarana PR",
      "limpeza área externa Apucarana",
      "porcelanato técnico Apucarana PR",
    ],
  },
]
