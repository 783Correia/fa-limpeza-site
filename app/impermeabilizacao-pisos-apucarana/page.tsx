import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { servicePages } from "@/lib/services"

const page = servicePages[1]

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords.join(", "),
  alternates: {
    canonical: "https://falimpeza.com.br/impermeabilizacao-pisos-apucarana",
  },
}

export default function Page() {
  return <ServicePage page={page} />
}
