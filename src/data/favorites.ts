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
          description: "Être le seul développeur sur un projet, c'est exactement ce que j'aime",
          content: "Je suis développeur unique sur la solution logicielle des casiers connectés pour les agents des aéroports de Paris. SmartLockers s'occupe du hardware, moi du software. Ce qui me plaît : avoir la responsabilité complète du code, prendre toutes les décisions techniques, et voir directement l'impact de mon travail sur le terrain. Relation directe avec ONET, autonomie totale sur les choix techniques. Pas de comité de décision, pas de validation en cascade - juste de la confiance mutuelle.",
          technologies: ["React", "Node.js", "APIs IoT", "Synchronisation multi-APIs"],
          links: [
            { href: "https://smartlockers.io", label: "SmartLockers" }
          ],
        },
        {
          title: "Bikly - Transformation complète",
          description: "Quand technologie et valeurs écologiques s'alignent parfaitement",
          content: "Bikly propose des vélos électriques éco-responsables. Mission cette année : migration serveur complète, passage multisites, upgrade Prestashop 8.2. Ce qui me motive : travailler pour une entreprise dont je partage les valeurs. Chaque ligne de code sert la transition écologique et la mobilité douce. Échanges passionnants avec Jennifer Cataldo sur l'impact environnemental de nos choix techniques. Quand le développement web a du sens au-delà du code.",
          technologies: ["Prestashop 8.2", "Migration serveur", "Architecture multisites"],
          links: [
            { href: "https://bikly.fr", label: "Bikly" }
          ]
        },
        {
          title: "Euroceramic - Interface besoins/solutions",
          description: "La relation client idéale : confiance totale et carte blanche technique",
          content: "Laurent Boissonnard voulait remplacer son outil Wordpress par quelque chose de sur mesure et performant. Mission : refonte complète avec liberté totale sur les choix techniques. Ce que j'adore : Laurent me dit ce dont il a besoin, je choisis comment le faire. Pas de contraintes techniques imposées, juste de la confiance mutuelle. L'interface besoins/solutions parfaite. Il connaît son métier, je connais le mien. Résultat : un outil qui lui correspond exactement.",
          technologies: ["AlpineJS", "QR Codes", "Outil métier sur mesure"],
          links: [
            { href: "https://mes-tarifs.com", label: "Mes-tarifs.com" }
          ]
        }
      ]
    }
  ]
}