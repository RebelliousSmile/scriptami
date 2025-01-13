import { articles } from '@/data/articles'

export interface ArticleWithSlug {
  slug: string
  title: string
  description: string
  href: string
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  return articles
}
