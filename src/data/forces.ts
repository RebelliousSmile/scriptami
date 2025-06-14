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
             /* { title: "La communauté AI-Driven-Dev", href: "https://ai-driven-dev.com/" },
              { title: "Solution IA pour la gestion documentaire", href: "https://example.com/case2" }*/
            ],
            moreInfo: [
              { title: "La communauté AI-Driven-Dev", href: "https://ai-driven-dev.com/" }
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
              { title: "Je développe pour SmartLockers", href: "https://www.smartlockers.io/" },
              { title: "Mes cabinets partagés, avec des serrures connectées", href: "https://www.cabinet-partage.fr/" }
            ],
            moreInfo: [
              { title: "Luckey, pour vos serrures connectées", href: "https://luckeystore.sofialocks.com/fr/" }
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
              { title: "Shop en woocommerce", href: "https://www.letempsdunebox.fr/" },
              { title: "Boutique en prestashop 7/8/9", href: "https://www.bikly.fr/" }
            ],
            moreInfo: [
              { title: "Description de Prestashop 9", href: "https://www.beyonds.fr/blog/prestashop-9/" },
              { title: "Payez en crypto-monnaie", href: "https://www.coinbase.com/" }
            ]
          }
        }
      ]
    }
  ]
}