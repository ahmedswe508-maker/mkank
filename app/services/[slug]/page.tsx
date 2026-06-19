import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService, serviceSlugs } from '../../lib/services'
import ServiceDetail from './ServiceDetail'

/* Pre-render every service page at build time */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: 'Service Not Found · Makani Contracting' }
  }

  const { title, tagline } = service.en
  return {
    title: `${title} · Makani Contracting & General Supplies`,
    description: tagline,
    keywords: [title, 'Makani', 'contracting', 'Egypt', 'Gulf'],
    openGraph: {
      title: `${title} · Makani Contracting`,
      description: tagline,
      type: 'website',
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  return <ServiceDetail slug={slug} />
}
