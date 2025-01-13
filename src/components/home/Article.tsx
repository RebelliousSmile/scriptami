'use client'

import { Card } from '@/components/Card'
import { type Article } from '@/types/content'

export function Article({ article }: { article: Article }) {
  return (
    <Card as="article">
      <Card.Title href={article.href}>
        {article.title}
      </Card.Title>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta href={article.href}>En savoir plus</Card.Cta>
    </Card>
  )
} 