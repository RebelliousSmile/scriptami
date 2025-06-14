import { type PageContent, type Activity } from '@/types/content'

export const activitesContent: PageContent<Activity> = {
  header: {
    title: "J'accompagne mes clients afin de les autonomiser dans leurs défis numériques.",
    intro: "Internet est un marché qui change constamment de configuration et d'agenda..."
  },
  sections: [
    {
      id: "development",
      title: "Développement",
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
          title: "Traduire vos besoins métier en numérique",
          description: "Gérer l'activité numérique de son entreprise, c'est arbitrer entre des solutions clé en main proposés par des gros éditeurs, et investir dans le développement de solutions personnalisées. Plus l'activité touche un besoin sensible à votre métier, plus vous devez l'internaliser et en avoir de contrôle. Je vous aide à comprendre les enjeux, à définir les besoins, et à développer les outils qui vous autonomiseront."
        }
      ]
    },
    {
      id: "formation",
      title: "Formation",
      items: [
        {
          title: "Conduite accompagnée vers la mise en ligne",
          description: "Vous avez besoin de comprendre comment fonctionne votre site, comment le mettre à jour, comment le faire évoluer. Je vous accompagne dans la prise en main de votre outil, je crée la documentation qui vous manque pour vous y retrouver, et je vous fais faire des exercices pour m'assurer de votre montée en compétence."
        },
        {
          title: "Automatisation",
          description: "Les intelligences artificielles génératives sont en train de révolutionner le monde du numérique. Parce que j'utilise ces technologies pour mes propres projets et que je fais de la veille sur le sujet, je peux vous accompagner dans la compréhension de ces technologies, et dans la mise en place de solutions pour votre entreprise."
        }
      ]
    },
    {
      id: "other",
      title: "Hors cadre",
      items: [
        {
          title: "Ecrivain public",
          description: "Que vous cherchez à créer du contenu optimisé pour le web (SEO), un relecteur compétent ou une plume pour rédiger vos newsletters et vos emails, je mets à votre disposition mon expérience de la rédaction pour écrire vite et bien."
        },
        {
          title: "Gamification",
          description: "Dans la guerre de l'attention des utilisateurs, et des besoins de fidélisation, la gamification des outils numériques est une arme pour pousser les utilisateurs à revenir vous voir. Définissons ensemble les scénarii compatibles avec vos possibilités techniques, et mettons en place des solutions pour vous démarquer."
        }
      ]
    }
  ]
} 