'use client'

interface PersonSchema {
  "@context": string
  "@type": string
  name: string
  jobTitle: string
  description: string
  worksFor: {
    "@type": string
    name: string
    description: string
  }
  address: {
    "@type": string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  sameAs: string[]
  url: string
}

interface LocalBusinessSchema {
  "@context": string
  "@type": string
  name: string
  description: string
  image: string
  address: {
    "@type": string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  founder: {
    "@type": string
    name: string
  }
  url: string
  sameAs: string[]
}

export function PersonStructuredData() {
  const personSchema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "François-Xavier Guillois",
    jobTitle: "Développeur Web Indépendant",
    description: "Développeur web indépendant spécialisé dans les solutions sur mesure et personnalisées. Partenaire technique de confiance pour projets alignés sur le sens.",
    worksFor: {
      "@type": "Organization",
      name: "Scriptami",
      description: "Développement web sur mesure et personnalisé"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rumilly",
      addressRegion: "Haute-Savoie",
      postalCode: "74150",
      addressCountry: "FR"
    },
    sameAs: [
      "https://github.com/tnntwister",
      "https://www.linkedin.com/in/francois-xavier-guillois/",
      "https://rebellious-smile.itch.io/"
    ],
    url: "https://scriptami.com"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const businessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Scriptami",
    description: "Développement web sur mesure et personnalisé. Partenaire technique de confiance pour votre transformation digitale.",
    image: "https://scriptami.com/images/pictoScriptami_180x180px.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rumilly",
      addressRegion: "Haute-Savoie",
      postalCode: "74150",
      addressCountry: "FR"
    },
    founder: {
      "@type": "Person",
      name: "François-Xavier Guillois"
    },
    url: "https://scriptami.com",
    sameAs: [
      "https://github.com/tnntwister",
      "https://www.linkedin.com/in/francois-xavier-guillois/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  )
}