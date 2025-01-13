export interface Force {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  links: {
    references: Array<{
      title: string
      href: string
    }>
    moreInfo: Array<{
      title: string
      href: string
    }>
  }
} 