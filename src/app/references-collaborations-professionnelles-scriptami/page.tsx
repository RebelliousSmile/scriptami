'use client'

import { Container } from '@/components/Container'
import { references } from '@/data/references'
import { type Reference } from '@/types/Reference'
import { Card } from '@/components/Card'
import { SectionTitle } from '@/components/SectionTitle'
import { favoritesContent } from '@/data/favorites'

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

function FavoriteProject({ 
  title, 
  description, 
  content, 
  technologies, 
  links
}: any) {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative z-10 flex-1 w-full">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-teal-600 dark:text-teal-400">
          {description}
        </p>
        
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {content}
        </p>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {links && links.length > 0 && (
          <div className="mt-4">
            {links.map((link: any) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                → {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
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
            Mes collaborations professionnelles en 2025
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Ce que j&apos;apprécie dans mon métier, c&apos;est de partager un bout de chemin avec des entrepreneurs, 
            des gens qui ont un objectif. Mon but: les aider à l&apos;atteindre.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {/* Section Projets coup de cœur */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
                Coups de cœur
              </h2>
              <div className="grid gap-8 lg:grid-cols-3 max-w-3xl">
                {favoritesContent.sections[0].items.map((project) => (
                  <FavoriteProject key={project.title} {...project} />
                ))}
              </div>
            </section>

            {/* Titre pour les références */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
                Mes références cette année
              </h2>
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
            </section>
          </div>
        </div>
      </div>
    </Container>
  )
}
