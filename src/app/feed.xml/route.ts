import { Feed } from 'feed'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'François-Xavier Guillois',
    email: 'ecrire.a@scriptami.com',
  }

  let feed = new Feed({
    title: 'Scriptami - François-Xavier Guillois',
    description: 'Développeur senior spécialisé en automatisation IA, contrôle d\'accès et e-commerce',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.png`,
    favicon: `${siteUrl}/favicon.png`,
    copyright: `Tous droits réservés ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // Ajouter les pages principales au feed
  const mainPages = [
    {
      url: '/automatisation-controle-acces-e-commerce',
      title: 'Nos Forces - Automatisation, Contrôle d\'accès, E-commerce',
    },
    {
      url: '/activites-auto-entrepreneur-developpement-haute-savoie',
      title: 'Activités - Développement et Formation',
    },
    {
      url: '/references-collaborations-professionnelles-scriptami',
      title: 'Références et Collaborations',
    },
  ]

  for (let page of mainPages) {
    feed.addItem({
      title: page.title,
      id: `${siteUrl}${page.url}`,
      link: `${siteUrl}${page.url}`,
      content: `Consultez ${page.title} sur Scriptami`,
      author: [author],
      date: new Date(),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
