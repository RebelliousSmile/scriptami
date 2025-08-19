import { type PageContent } from '@/types/content'

interface FavoriteProject {
  title: string
  description: string
  content: string
  technologies: string[]
  links?: {
    href: string
    label: string
  }[]
}

export const favoritesContent: PageContent<FavoriteProject> = {
  header: {
    title: "Projets coup de cœur",
    intro: "Trois collaborations qui m'ont particulièrement marqué cette année. Pas forcément les plus techniques ou les plus complexes, mais celles où j'ai eu le plus de plaisir à travailler."
  },
  sections: [
    {
      id: "favorites",
      title: "Collaborations marquantes",
      items: [
        {
          title: "ONET - Aéroports de Paris",
          description: "Responsabilité et réactivité, les deux pendants d'un développeur senior.",
          content: "Smartlockers a signé un partenariat avec les aéroports de Paris pour faciliter la délivrabilité des matériels sur leurs différentes zones. Au sein de l'entreprise, j'ai été délégué pour coder l'interface logicielle, et les particularités du projet m'ont mis en avant pour prendre le lead et développer un prototype utilisable en temps réel dans la routine des agents de l'aéroport. Du challenge, des heures de test et de scan de badge, et du bonheur de resigner pour un contrat plus large avec plus d'options.",
          technologies: ["Vanilla JS", "Balena", "GitLab", "Synchronisation multi-APIs"],
          links: [
            { href: "https://smartlockers.io", label: "SmartLockers" }
          ],
        },
        {
          title: "Bikly - Vers un nouvelle marque",
          description: "2ème migration, de la sueur et des rires",
          content: "Jennifer Cataldo accompagne les marchands sur l'analyse stratégique et le marketing de leur boutique. Elle connaît très bien son sujet, et elle a monté seule sa marque de vêtements et accessoires pour les cyclistes femme. Un projet passionnant qui se heurte parfois à la masse de code délicate à mettre à jour qu'est Prestashop. Avec un challenge supplémentaire cette année : changer de marque et passer en multisite. C'est avec bonheur que je l'aide à résoudre ses problèmes techniques.",
          technologies: ["Prestashop 8.2", "Migration serveur", "Architecture multisites"],
          links: [
            { href: "https://bikly.fr", label: "Bikly" }
          ]
        },
        {
          title: "Euroceramic - exemple besoins/solutions",
          description: "La relation client idéale : confiance totale et carte blanche technique",
          content: "Dans le cadre de la vente de carrelage et de ses showrooms, Laurent Boissonnard a développé une méthodologie pour étiqueter toutes les dalles de ses magasins, propulsée avec des modules Wordpress soumis à des mises à jour intempestives. Je l'ai poussé à signer pour avoir son application propriétaire : elle fait exactement ce dont il a besoin, et ne se met à jour que si on lui demande. Je salue fièrement cette naissance digitale et en revendique la paternité.",
          technologies: ["AlpineJS", "QR Codes", "Outil métier sur mesure"],
          links: [
            { href: "https://mes-tarifs.com", label: "Mes-tarifs.com" }
          ]
        }
      ]
    }
  ]
}