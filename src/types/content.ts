// Type de base pour tous les contenus
export interface BaseContent {
  title: string
  description: string
}

// Types spécifiques
export interface Activity extends BaseContent {}

export interface Force extends BaseContent {
  image: {
    src: string
    alt: string
  }
  links: {
    references: Array<Link>
    moreInfo: Array<Link>
  }
}

export interface Reference extends BaseContent {
  date: string
  technologies: string[]
}

// Types communs
export interface Link {
  title: string
  href: string
}

// Structure de page commune
export interface PageHeader {
  title: string
  intro: string
}

export interface ContentSection<T extends BaseContent> {
  id: string
  title: string
  items: T[]
}

export interface PageContent<T extends BaseContent> {
  header: PageHeader
  sections: ContentSection<T>[]
}

// Ajout des types pour la page d'accueil
export interface Article {
  title: string
  description: string
  href: string
}

interface DateInfo {
  label: string
  dateTime: string
}

export interface Role {
  company: string
  title: string
  logo: string
  start: string | DateInfo
  end: string | DateInfo
}

export interface Social {
  href: string
  label: string
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element
  target?: string
} 