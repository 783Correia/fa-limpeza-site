import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { servicePages } from "@/lib/services"

const page = servicePages.find(
  (p) => p.service.slug === "pintura-epoxi" && p.city.slug === "apucarana"
)!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: "https://falimpezaprofissional.com.br/pintura-epoxi-apucarana",
  },
}

export default function Page() {
  return <ServicePage page={page} />
}
