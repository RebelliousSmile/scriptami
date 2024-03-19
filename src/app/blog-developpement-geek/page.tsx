import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Réflexions sur ma vie professionnelle et personnelle, en sélectionnant au tamis de ce qui est généralisable aux autres.",
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Mes derniers articles, par ordre chronologique"
      intro="Réflexions sur ma vie professionnelle et personnelle, en sélectionnant au tamis de ce qui est généralisable aux autres. J'ai eu de nombreux blogs. La plupart des mes articles ne résistaient pas à une relecture 6 mois après."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length > 0 ? (
            articles.map((article) => <Article key={article.slug} article={article} />)
          ) : (
            <p className="-ml-6 text-teal-500">les textes sont encore en phase de maturation.</p>
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
