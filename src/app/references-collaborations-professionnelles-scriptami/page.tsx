import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
  return (
    <SimpleLayout
      title="Mes collaborations professionnelles en 2024"
      intro="Ce que j'apprécie dans mon métier, c'est de partager un bout de chemin avec des entrepreneurs, des gens qui ont un objectif. Mon but: les aider à l'atteindre. Il n'y a pas que des happy end, la conjoncture ou les divergences artistiques m'éloignent parfois des personnes avec qui j'ai travaillées, mais j'accorde plus d'attention au chemin qu'à la destination, si bien que je reste malgré tout admiratif des rencontres que j'ai faites, année après année, qui ont construit mon parcours."
    >
      <div className="space-y-20">
        <SpeakingSection title="E-commerce">
          <Appearance
            href="https://bikly.fr/"
            title="Collab avec Jennifer Cataldo"
            description="L'objectif principal de Bikly est de s'assurer d'une automatisation de plus en plus importantes de toutes les tâches faites manuellement aujourd'hui. On oublie souvent combien une boutique en ligne peut être chronophage, et nous enfermer dans un emploi du temps sur lequel nous n'avons plus la main. J'interviens dans les mises à jour et les développements de cette boutique Prestashop 1.7/8."
            event="Bikly"
            cta="Sur la route du succès"
          />
          <Appearance
            href="https://epicime.com/"
            title="Collab avec Léa Anthonioz"
            description="Pour cette boutique en phase d'ascension, il est crucial d'éliminer les écueils amoncelés en chemin avant la prochaine montée en charge. Stabiliser le dialogue entre la boutique et l'ERP, s'assurer de la compatibilité du code pour les prochaines mises à jour, veiller à ne pas se fermer des portes avec des achats de module précipités. 
            J'interviens dans les mises à jour et les développements de cette boutique Prestashop 1.7/8."
            event="Epicime"
            cta="Trouver le bon assaisonnement"
          />
          <Appearance
            href="https://www.letempsdunebox.com/"
            title="Collab avec Sandra Lebre-Akli"
            description="J'ai créé cette boutique Woocommerce pour Sandra il y a 5 ans, et depuis nous faisons évoluer son site en fonction de ses projets et de ses nouvelles perspectives professionnelles."
            event="Le temps d'une box"
            cta="Rester zen en toutes circonstances"
          />
        </SpeakingSection>
        <SpeakingSection title="Wordpress">
          <Appearance
            href="https://www.808.fr/"
            title="Collab avec Jean-Marie Lemaux"
            description="808 possède énormément de sites Wordpress faits par de multiples. Nous travaillons aujourd'hui à ce que Jean-Marie puisse gérer son parc en tenant en compte le legacy."
            event="808"
            cta="Partager son savoir avec passion"
          />         
        </SpeakingSection>
        <SpeakingSection title="WebApp">
          <Appearance
            href="#"
            title="Collab avec David Espic"
            description="Après avoir participé à d'autres projets pour David, ce dernier m'a confié la réécriture de sa WebApp en VueJS pour se connecter à la nouvelle version de l'API de la société."
            event="SmartLockers"
            cta="Ouvrir les portes de la réussite"
          />        
        </SpeakingSection>
        <SpeakingSection title="Site headless">
          <Appearance
            href="https://arbre-de-jade.com/"
            title="Collab avec Sylvie Jacquier"
            description="Après avoir réalisé un site complètement statique, nous avons décidé avec Sylvie de mettre en place un outil d'administration simple pour mettre à jour les stages. Avec Wordpress, la mise en place a été très simple."
            event="L'arbre de Jade"
            cta="Embrasser un développement holistique"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
