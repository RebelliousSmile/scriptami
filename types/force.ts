export interface Link {
  title: string
  href: string
}

export interface Force {
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