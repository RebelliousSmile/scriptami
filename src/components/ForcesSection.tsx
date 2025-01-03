import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'

interface Link {
  title: string
  href: string
}

interface ForceProps {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  links: {
    references: Link[]
    moreInfo: Link[]
  }
}

function Force({ title, description, image, links }: ForceProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            <p>{description}</p>
            {links.moreInfo.length > 0 && (
              <div>
                <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Pour en savoir plus :</h4>
                <ul className="mt-1 space-y-1">
                  {links.moreInfo.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-teal-500 hover:text-teal-600 dark:text-teal-400">
                        {link.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="rounded-xl bg-gray-100 object-cover dark:bg-gray-800"
          />
        </div>
      </div>

      {links.references.length > 0 && (
        <div className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
          <div>
            <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Références sur ce sujet :</h4>
            <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {links.references.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-teal-500 hover:text-teal-600 dark:text-teal-400">
                    {link.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export function ForcesSection() {
  const forces = [
    {
      title: "Automatisation et IA",
      description: "L'automatisation et l'intelligence artificielle permettent d'optimiser vos processus métier. De l'analyse initiale à la mise en production, nous créons des solutions qui augmentent votre productivité.",
      image: {
        src: "/images/forces/automation.jpg",
        alt: "Automatisation et Intelligence Artificielle"
      },
      links: {
        references: [
          { title: "Projet d'automatisation pour Cabinet Médical", href: "https://example.com/case1" },
          { title: "Solution IA pour la gestion documentaire", href: "https://example.com/case2" }
        ],
        moreInfo: [
          { title: "Guide de l'automatisation des processus", href: "/guides/automation" },
          { title: "Intégration de l'IA dans votre entreprise", href: "/guides/ai-integration" }
        ]
      }
    },
    {
      title: "Sécurité et Contrôle d'accès",
      description: "La sécurité est au cœur de nos préoccupations. Nous implémentons des systèmes d'authentification robustes et une gestion fine des permissions pour protéger vos données sensibles.",
      image: {
        src: "/images/forces/security.jpg",
        alt: "Sécurité et Contrôle d'accès"
      },
      links: {
        references: [
          { title: "Système de contrôle d'accès pour école", href: "https://example.com/case3" }
        ],
        moreInfo: [
          { title: "Bonnes pratiques de sécurité", href: "/guides/security" },
          { title: "Exemples sur GitHub", href: "https://github.com/tnntwister/security-examples" }
        ]
      }
    },
    {
      title: "E-commerce et Performance",
      description: "Nous développons des boutiques en ligne performantes et optimisées pour la conversion. Notre expertise en e-commerce vous garantit une expérience client fluide et sécurisée.",
      image: {
        src: "/images/forces/ecommerce.jpg",
        alt: "E-commerce et Performance"
      },
      links: {
        references: [
          { title: "Boutique en ligne pour artisan", href: "https://example.com/case4" },
          { title: "Marketplace locale", href: "https://example.com/case5" }
        ],
        moreInfo: [
          { title: "Guide d'optimisation e-commerce", href: "/guides/ecommerce" }
        ]
      }
    }
  ]

  return (
    <Section title="Nos forces">
      <div className="space-y-16">
        {forces.map((force, index) => (
          <Force key={index} {...force} />
        ))}
      </div>
    </Section>
  )
} 