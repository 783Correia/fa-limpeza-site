import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { servicePages } from "@/lib/services"

const page = servicePages.find(
  (p) => p.service.slug === "limpeza-piscinas" && p.city.slug === "balneario-camboriu"
)!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: "https://falimpezaprofissional.com.br/limpeza-piscinas-balneario-camboriu",
  },
}

export default function Page() {
  return <ServicePage page={page} />
}
