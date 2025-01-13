import { type Force } from '@/types/content'
import { type PageContent } from '@/types/content'

export const forcesContent: PageContent<Force> = {
  header: {
    title: "Nos Forces - Automatisation, IA et E-commerce",
    intro: "Expertise en automatisation des processus, intelligence artificielle et développement e-commerce."
  },
  sections: [
    {
      id: "forces",
      title: "Nos forces",
      items: [
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
          title: "Sécurité et Conformité",
          description: "Nous vous aidons à protéger vos données et vos systèmes contre les menaces cybernetiques et à vous assurer de la conformité avec les réglementations en vigueur.",
          image: {
            src: "/images/forces/security.jpg",
            alt: "Sécurité et Conformité"
          },
          links: {
            references: [
              { title: "Audit de sécurité pour une banque", href: "https://example.com/case3" },
              { title: "Implémentation de la conformité GDPR", href: "https://example.com/case4" }
            ],
            moreInfo: [
              { title: "Guide de la sécurité des données", href: "/guides/data-security" },
              { title: "Comprendre la conformité GDPR", href: "/guides/gdpr-compliance" }
            ]
          }
        },
        {
          title: "Développement Web",
          description: "Nous concevons et développons des applications web modernes et sécurisées pour répondre aux besoins spécifiques de votre entreprise.",
          image: {
            src: "/images/forces/web-development.jpg",
            alt: "Développement Web"
          },
          links: {
            references: [
              { title: "Création d'un site e-commerce", href: "https://example.com/case5" },
              { title: "Développement d'une application de gestion de projet", href: "https://example.com/case6" }
            ],
            moreInfo: [
              { title: "Tendances du développement web", href: "/guides/web-development-trends" },
              { title: "Meilleures pratiques de sécurité web", href: "/guides/web-security-best-practices" }
            ]
          }
        }
      ]
    }
  ]
}