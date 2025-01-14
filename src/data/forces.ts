import { type Force } from '@/types/content'
import { type PageContent } from '@/types/content'

export const forcesContent: PageContent<Force> = {
  header: {
    title: "Mes forces",
    intro: "En tant que développeur en informatique, je peux prendre en charge une multitude de langages et technologies. Mais pourquoi faire appel à moi spécifiquement ? Quelques éléments de réponse ci-dessous."
  },
  sections: [
    {
      id: "forces",
      title: "Mes forces",
      items: [
        {
          title: "Automatisation et IA",
          description: "L'automatisation et l'intelligence artificielle permettent d'optimiser vos processus métier. De l'analyse initiale à la mise en production, je repasse tous vos processus à la loupe de l'IA pour les accélérer et les optimiser.",
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
          title: "Contrôle d'accès",
          description: "Un autre secteur en plein essor : les casiers connectés (et leur pendant : les serrures connectées). Grâce à des API modernes, contrôlez l'accès à vos biens ou à des services à distance, le tout dans votre poche sur votre smartphone.",
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
          title: "E-commerce",
          description: "Gros acheteur par correspondance, Internet a révolutionné la manière dont je consommais. et je me suis vite passionné pour les sites de vente, au point de m'être formé à la plupart d'entre eux : OsCommerce, Prestashop, Magento, Woocommerce... Les modifications actuelles du développement et de la recherche en ligne amène l'e-commerce dans de nouveaux défis : parlons-en ensemble !",
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