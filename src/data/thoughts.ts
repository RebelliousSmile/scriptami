import { connect } from "http2"

export interface Thought {
  id: string
  content: string
  tags?: string[]
  author?: string  // Si absent, c'est une pensée personnelle
  type?: 'quote' | 'thought' | 'image'  // Pour distinguer les types
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export const thoughts: Thought[] = [
  {
    id: 'quote-1',
    content: "On n'accumule pas, on élimine. Ce n'est pas une augmentation quotidienne mais une diminution quotidienne. Le sommet de l'éducation ramène toujours à la simplicité",
    tags: ['minimalisme', 'éducation'],
    author: 'Bruce Lee',
    type: 'quote'
  },
  {
    id: 'smartlockers',
    content: "",
    tags: ['casiers connectés', 'terminal de paiement'],
    type: 'image',
    image: {
      src: '/images/photos/select_3.jpg',
      alt: 'Programmation d\'un terminal de paiement pour des casiers connect'
    }
  },
  {
    id: 'ferriss-1',
    content: "En général, ce que nous avons le plus peur de faire est ce que nous avons le plus besoin de faire.",
    tags: ['problème', 'solution', 'peur'],
    author: 'Tim Ferriss',
    type: 'quote'
  },
  {
    id: 'prod-friday',
    content: "Tester en production le vendredi soir ? Mon cerveau reptilien dit toujours non. Certaines peurs sont plus sages que la confiance aveugle.",
    tags: ['DevOps', 'humour', 'instinct'],
    type: 'thought'
  },
  {
    id: 'dev-evolution',
    content: "20 ans de dev. Le métier a radicalement changé mais la complexité demeure. Juste déplacée ailleurs.",
    tags: ['évolution', 'carrière', 'complexité'],
    type: 'thought'
  },
  {
    id: 'prestashop-exp',
    content: "Prestashop 9 arrive. Après 10 ans sur cette plateforme, je connais chaque recoin, chaque piège, chaque raccourci. L'expérience n'a pas de raccourci.",
    tags: ['e-commerce', 'Prestashop', 'expérience'],
    type: 'thought'
  },
  {
    id: 'krishnamurti-1',
    content: "L'important, c'est d'être à soi-même sa propre lumière, son propre maître et son propre disciple. ",
    tags: ['mentor', 'évolution'],
    author: 'Jiddu Krishnamurti',
    type: 'quote'
  },
  {
    id: 'paper-thinking',
    content: "Le papier et le stylo restent mes meilleurs outils de conception. Le monde va trop vite pour ma réflexion. Parfois, ralentir c'est accélérer.",
    tags: ['productivité', 'réflexion', 'lenteur'],
    type: 'thought'
  },
  {
    id: 'screen-balance',
    content: "Nouvelle règle : pour chaque heure d'écran intense, une heure dehors. Mon cerveau me remercie.",
    tags: ['équilibre', 'santé', 'nature'],
    type: 'thought'
  },
  {
    id: 'security-reality',
    content: "Les serrures connectées que j'intègre aujourd'hui seront peut-être hackées demain. La sécurité parfaite n'existe pas, mais l'amélioration continue, oui.",
    tags: ['IoT', 'sécurité', 'philosophie'],
    type: 'thought'
  },
  {
    id: 'magritte-1',
    content: "Ceci n'est pas une pipe.",
    tags: ['art', 'perception', 'réalité'],
    author: 'René Magritte',
    type: 'quote'
  },
  {
    id: 'rumilly-life',
    content: "Rumilly, Haute-Savoie. La fibre, les montagnes, et du code. Certains cherchent l'équilibre travail-vie. J'ai trouvé la fusion.",
    tags: ['vie', 'localisation', 'équilibre'],
    type: 'thought'
  },
  {
    id: 'eyes-of-verona',
    content: "",
    tags: ['concert', 'ambiance', 'chanteuse'],
    type: 'image',
    image: {
      src: '/images/photos/select_7.jpg',
      alt: 'Concert de Eyes of Verona au Brise-Glace à Annecy',
    }
  },
  {
    id: 'mountain-patience',
    content: "Les montagnes enseignent la patience. Chaque sommet demande son temps. Dans le code comme dans l'escalade, vouloir aller trop vite, c'est risquer la chute.",
    tags: ['montagne', 'philosophie', 'patience'],
    type: 'thought'
  },
  {
    id: 'kids-society',
    content: "Mes enfants grandissent dans un monde où parler à une machine est normal. Je leur apprends quand même à dire bonjour aux humains d'abord.",
    tags: ['famille', 'éducation', 'société'],
    type: 'thought'
  },
  {
    id: 'code-bricolage',
    content: "Le bricolage et le code ont ceci en commun : la satisfaction de créer quelque chose qui fonctionne. Sauf que le marteau ne fait jamais de mise à jour qui casse tout.",
    tags: ['bricolage', 'création', 'humour'],
    type: 'thought'
  },
  {
    id: 'back-to-future',
    content: "",
    tags: ['Back to the Future', 'Doloreane'],
    type: 'image',
    image: {
      src: '/images/photos/select_5.jpg',
      alt: 'Monter dans la Doloreane pour de vrai'
    }
  },
  {
    id: 'ferriss-2',
    content: "Ce que vous faites est infiniment plus important que comment vous le faites.",
    tags: ['procrastination', 'action', 'productivité'],
    author: 'Tim Ferriss',
    type: 'quote'
  },
  {
    id: 'gamification',
    content: "Gamification : transformer l'ennui en engagement. Chaque clic peut devenir une micro-récompense. La dopamine au service du business.",
    tags: ['gamification', 'UX', 'psychologie'],
    type: 'thought'
  },
  {
    id: 'ellul-1',
    content: "Cultivez votre personnalité… […] Vous devenez essentiellement un consommateur, d'objets innombrables qui vont sont imposés, que vous devez consommer ; mais voyons en consommant plus, vous devenez une Personne. Les marchandises manufacturées sont des objets de grande série, tous identiques, mais en réalité ils sont extraordinairement personnalisés. Vous avez le sentiment d'être affreusement passif, de vous faire gaver de culture, d'informations, de politique, comme de spaghettis, mais n'oubliez pas que vous êtes une Personne. Plus vous êtes englués dans la masse, plus vous devez croire que vous êtes une Personne. Plus l'objet est de série, plus vous devez croire qu'il est unique. Plus vous êtes impuissant, plus la Personne doit devenir le noble et le grandiose. ",
    tags: ['personnalité', 'consommation'],
    author: 'Jacques Ellul',
    type: 'quote'
  },
  {
    id: 'nocode-value',
    content: "Le no-code tue-t-il le développeur ? Non, il le libère des tâches répétitives pour se concentrer sur la vraie valeur : comprendre et résoudre.",
    tags: ['no-code', 'métier', 'valeur'],
    type: 'thought'
  },
  {
    id: 'krishnamurti-2',
    content: "Si vos yeux sont aveuglés par vos soucis, vous ne pouvez pas voir la beauté d'un coucher de soleil. ",
    tags: ['apprentissage', 'liberté', 'esprit'],
    author: 'Jiddu Krishnamurti',
    type: 'quote'
  },
  {
    id: 'ellul-2',
    content: "Les idées dominantes d'une société sont les idées de la classe dominante.",
    tags: ['éthique', 'philosophie', 'technologie'],
    type: 'thought'
  },
  {
    id: 'ferriss-3',
    content: " Sans attention, le temps ne vaut rien : privilégiez donc l'attention sur le temps.",
    tags: ['attention', 'temps'],
    author: 'Tim Ferriss',
    type: 'quote'
  },
  {
    id: 'rosenberg-1',
    content: "Nous sommes dangereux quand nous ne sommes pas conscients que nous sommes responsables de nos actes, de nos pensées et de nos sentiments.",
    tags: ['danger', 'conscience', 'responsabilité'],
    author: 'Marshall Rosenberg',
    type: 'quote'
  },
  {
    id: 'rosenberg-2',
    content: "Les jugements portés sur les autres sont des expressions détournées de nos propres besoins insatisfaits.",
    tags: ['jugement', 'besoin', 'expression'],
    author: 'Marshall Rosenberg',
    type: 'quote'
  },
  {
    id: 'image-1',
    content: "",
    tags: ['IA', 'Code', 'Droide'],
    type: 'image',
    image: {
      src: '/images/photos/select_1.png',
      alt: 'un codeur assisté par un droïde qui ressemble à Eve'
    }
  },
  {
    id: 'image-2',
    content: "",
    tags: ['investissement', 'ebikelabs'],
    type: 'image',
    image: {
      src: '/images/photos/select_2.jpg',
      alt: 'J\'assiste à la conférence d\'Ebikelabs en tant qu\'investisseur'
    }
  },
  {
    id: 'image-4',
    content: "",
    tags: ['teambuilding', 'Lego', 'startup'],
    type: 'image',
    image: {
      src: '/images/photos/select_4.jpeg',
      alt: 'Séance de teambuilding avec des Lego chez TechVitam'
    }
  },
  {
    id: 'image-6',
    content: "",
    tags: ['lac', 'soleil', 'lumière'],
    type: 'image',
    image: {
      src: '/images/photos/select_6.jpg',
      alt: 'Jeu de lumière sur le lac d\'Annecy'
    }
  },
  {
    id: 'image-8',
    content: "",
    tags: ['pirates', 'liberté', 'jeu de rôles'],
    type: 'image',
    image: {
      src: '/images/photos/select_8.jpg',
      alt: 'Pavillon noir exhibé dans ma bibliothèque'
    }
  },
  {
    id: 'image-9',
    content: "",
    tags: ['bois', 'énergie', 'nature'],
    type: 'image',
    image: {
      src: '/images/photos/select_9.jpg',
      alt: 'Des stères de bois bien empilés pour l\'hiver'
    }
  },
  {
    id: 'image-10',
    content: "",
    tags: ['maison', 'construction', 'ossature bois'],
    type: 'image',
    image: {
      src: '/images/photos/select_10.jpg',
      alt: 'Construction de ma maison cubique en ossature bois'
    }
  }
];