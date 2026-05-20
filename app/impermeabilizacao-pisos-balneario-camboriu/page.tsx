import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { servicePages } from "@/lib/services"

const page = servicePages[0]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords.join(", "),
  alternates: {
    canonical: "https://falimpezaprofissional.com.br/impermeabilizacao-pisos-balneario-camboriu",
  },
}

export default function Page() {
  return <ServicePage page={page} />
}
