import { type PageContent } from '@/types/content'

interface Service {
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  links?: {
    references?: { title: string; href: string }[]
    moreInfo?: { title: string; href: string }[]
  }
}

export const servicesContent: PageContent<Service> = {
  header: {
    title: "Ce que je peux faire pour vous",
    intro: "Fort de 20 ans d'expérience dans le développement web et les technologies numériques, je vous accompagne dans votre transformation digitale. De la conception à la mise en production, je m'appuie sur les dernières technologies (IA, automatisation) pour créer des solutions sur mesure adaptées à vos besoins métier."
  },
  sections: [
    {
      id: "expertise",
      title: "Mes domaines d'expertise",
      items: [
        {
          title: "Interfaces besoins / solutions",
          description: "Le développeur a toujours eu le rôle de comprendre la partie métier du client pour faciliter son travail et lui amener, au delà de la visibilité facilitée par Internet, une vraie plus-value à s'installer sur la toile. Le développement piloté par l'IA renforce cette approche. De l'analyse initiale à la mise en production, je prépare tous vos processus pour que l'IA les code et je contrôle le résultat.",
          image: {
            src: "/images/forces/automation.jpg",
            alt: "Automatisation et Intelligence Artificielle"
          },
          links: {
            references: [
              { title: "Du Excel aux QR Codes sur les dalles de carrelage", href: "https://www.mes-tarifs.com/" },
              { title: "Refonte d'un site novateur pour le recrutement", href: "https://www.jeveuxtravailler.com/" }
            ],
            moreInfo: [
              { title: "La communauté AI-Driven-Dev", href: "https://ai-driven-dev.com/" }
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
              { title: "Brizz (Prestashop 8)", href: "https://brizz.fr/" },
              { title: "Bikly (Prestashop 7/8", href: "https://www.bikly.fr/" }
            ],
            moreInfo: [
              { title: "Description de Prestashop 9", href: "https://www.beyonds.fr/blog/prestashop-9/" },
              { title: "Payez en crypto-monnaie", href: "https://www.coinbase.com/" }
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
        }
      ]
    },
    {
      id: "development",
      title: "Développement Web",
      items: [
        {
          title: "Créer et maintenir son site vitrine",
          description: "Les CMS et solutions no-code ont révolutionné votre capacité à créer leur propre vitrine numérique. Parfois, vous êtes perdu.e parmi les possibles, submergé.e par la somme de connaissance à acquérir. Nous faisons le tri ensemble, nous fixons les prochains caps, et je vous donne les clés pour les atteindre."
        },
        {
          title: "Gérer sa boutique en ligne",
          description: "Intervenant sur des boutiques en ligne depuis plus de 10 ans (oscommerce, Prestashop, Magento, Woocommerce), j'apporte mon expertise pour vous aider à gérer votre boutique en ligne. Que ce soit pour des mises à jour, des développements spécifiques, ou pour vous aider à comprendre comment fonctionne votre boutique, nous travaillons sur tous les sujets pour vous faire gagner du temps et des clients."
        },
        {
          title: "Applications métier sur mesure",
          description: "Chaque entreprise a des besoins spécifiques qui ne rentrent pas dans les cases des logiciels standards. Je développe des applications web personnalisées qui s'adaptent exactement à vos processus : gestion interne, portails clients, outils de production. Solutions évolutives construites avec les technologies modernes (React, Node.js, bases de données)."
        }
      ]
    },
    {
      id: "formation",
      title: "Formation & Accompagnement",
      items: [
        {
          title: "Conduite accompagnée vers la mise en ligne",
          description: "Vous avez besoin de comprendre comment fonctionne votre site, comment le mettre à jour, comment le faire évoluer. Je vous accompagne dans la prise en main de votre outil, je crée la documentation qui vous manque pour vous y retrouver, et je vous fais faire des exercices pour m'assurer de votre montée en compétence."
        },
        {
          title: "Automatisation avec l'IA",
          description: "Les intelligences artificielles génératives sont en train de révolutionner le monde du numérique. Parce que j'utilise ces technologies pour mes propres projets et que je fais de la veille sur le sujet, je peux vous accompagner dans la compréhension de ces technologies, et dans la mise en place de solutions pour votre entreprise."
        },
        {
          title: "Gamification",
          description: "Dans la guerre de l'attention des utilisateurs, et des besoins de fidélisation, la gamification des outils numériques est une arme pour pousser les utilisateurs à revenir vous voir. Définissons ensemble les scénarii compatibles avec vos possibilités techniques, et mettons en place des solutions pour vous démarquer."
        }
      ]
    }
  ]
}