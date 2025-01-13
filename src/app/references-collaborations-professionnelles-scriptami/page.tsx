'use client'

import { Container } from '@/components/Container'
import { references } from '@/data/references'
import { type Reference } from '@/types/Reference'
import { Card } from '@/components/Card'
import { SectionTitle } from '@/components/SectionTitle'

function ReferenceItem({ title, description, event, cta, href }: Reference) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta href={href}>{cta}</Card.Cta>
    </Card>
  )
}

export default function ReferencesPage() {
  const referencesByCategory = references.reduce((acc, reference) => {
    if (!acc[reference.category]) {
      acc[reference.category] = []
    }
    acc[reference.category].push(reference)
    return acc
  }, {} as Record<Reference['category'], Reference[]>)

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Mes collaborations professionnelles en 2024
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Ce que j&apos;apprécie dans mon métier, c&apos;est de partager un bout de chemin avec des entrepreneurs, 
            des gens qui ont un objectif. Mon but: les aider à l&apos;atteindre.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {Object.entries(referencesByCategory).map(([category, categoryReferences]) => (
              <section 
                key={category} 
                className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <SectionTitle>{category}</SectionTitle>
                  <div className="md:col-span-3">
                    <div className="space-y-16">
                      {categoryReferences.map((reference) => (
                        <ReferenceItem key={reference.href} {...reference} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
