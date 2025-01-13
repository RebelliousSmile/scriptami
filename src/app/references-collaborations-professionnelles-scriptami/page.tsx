import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { references } from '@/data/references'
import { type Reference } from '@/types/Reference'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Collaborations professionnelles',
  description:
    "Ce que j'apprécie dans mon métier, c'est de partager un bout de chemin avec des entrepreneurs, des gens qui ont un objectif. Mon but: les aider à l'atteindre.",
}

export default function Speaking() {
  const referencesByCategory = references.reduce((acc, reference) => {
    if (!acc[reference.category]) {
      acc[reference.category] = []
    }
    acc[reference.category].push(reference)
    return acc
  }, {} as Record<Reference['category'], Reference[]>)

  return (
    <SimpleLayout
      title="Mes collaborations professionnelles en 2024"
      intro="Ce que j'apprécie dans mon métier, c'est de partager un bout de chemin avec des entrepreneurs, des gens qui ont un objectif. Mon but: les aider à l'atteindre. Il n'y a pas que des happy end, la conjoncture ou les divergences artistiques m'éloignent parfois des personnes avec qui j'ai travaillées, mais j'accorde plus d'attention au chemin qu'à la destination, si bien que je reste malgré tout admiratif des rencontres que j'ai faites, année après année, qui ont construit mon parcours."
    >
      <div className="space-y-20">
        {Object.entries(referencesByCategory).map(([category, categoryReferences]) => (
          <SpeakingSection key={category} title={category}>
            {categoryReferences.map((reference) => (
              <Appearance
                key={reference.href}
                href={reference.href}
                title={reference.title}
                description={reference.description}
                event={reference.event}
                cta={reference.cta}
              />
            ))}
          </SpeakingSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
