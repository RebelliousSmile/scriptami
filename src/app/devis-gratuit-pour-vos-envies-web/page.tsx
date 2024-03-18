import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Accompagnement',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="J'accompagne mes clients afin de les autonomiser dans leurs défis numériques."
      intro="Internet est un marché qui change constamment de configuration et d'agenda. Développeur dans ma première vie, je mets à profit mon expérience et ma vision d'internet pour aider celles et ceux qui ont besoin d'un bagage technique. Je leur sers de canne le temps qu'ils se remettent debout après avoir buté sur des gros cailloux. Contactez-moi et soyez le/la prochain.e."
    >
      <div className="space-y-20">
        <ToolsSection title="Développement">
          <Tool title="Créer et maintenir son site vitrine">
            Les CMS et solutions no-code ont révolutionné votre capacité à créer leur propre vitrine numérique.
            Parfois, vous êtes perdu.e parmi les possibles, submergé.e par la somme de connaissance à acquérir. 
            Nous faisons le tri ensemble, nous fixons les prochains caps, et je vous donne les clés pour les atteindre.
          </Tool>
          <Tool title="Gérer sa boutique en ligne">
            Intervenant sur des boutiques en ligne depuis plus de 10 ans (oscommerce, Prestashop, Magento, Woocommerce), j&apos;apporte mon expertise pour vous aider à gérer votre boutique en ligne.
            Que ce soit pour des mises à jour, des développements spécifiques, ou pour vous aider à comprendre comment fonctionne votre boutique, nous travaillons sur tous les sujets pour vous faire gagner du temps et des clients.
          </Tool>
          <Tool title="Traduire vos besoins métier en numérique">
            Gérer l&apos;activité numérique de son entreprise, c&apos;est arbitrer entre des solutions clé en main proposés par des gros éditeurs, et investir dans le développement de solutions personnalisées. 
            Plus l&apos;activité touche un besoin sensible à votre métier, plus vous devez l&apos;internaliser et en avoir de contrôle. 
            Je vous aide à comprendre les enjeux, à définir les besoins, et à développer les outils qui vous autonomiseront.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Formation">
          <Tool title="Conduite accompagnée vers la mise en ligne">
            Vous avez besoin de comprendre comment fonctionne votre site, comment le mettre à jour, comment le faire évoluer. 
            Je vous accompagne dans la prise en main de votre outil, je crée la documentation qui vous manque pour vous y retrouver, et je vous fais faire des exercices pour m&apos;assurer de votre montée en compétence.
          </Tool>
          <Tool title="Automatisation">
            Les intelligences artificielles génératives sont en train de révolutionner le monde du numérique. Parce que j&apos;utilise ces technologies pour mes propres projets et que je fais de la veille sur le sujet, je peux vous accompagner dans la compréhension de ces technologies, et dans la mise en place de solutions pour votre entreprise.
          </Tool>    
        </ToolsSection>
        <ToolsSection title="Hors cadre">
          <Tool title="Ecrivain public">
            Que vous cherchez à créer du contenu optimisé pour le web (SEO), un relecteur compétent ou une plume pour rédiger vos newsletters et vos emails, je mets à votre disposition mon expérience de la rédaction pour écrire vite et bien. 
          </Tool>
          <Tool title="Gamification">
            Dans la guerre de l&apos;attention des utilisateurs, et des besoins de fidélisation, la gamification des outils numériques est une arme pour pousser les utilisateurs à revenir vous voir.
            Définissons ensemble les scénarii compatibles avec vos possibilités techniques, et mettons en place des solutions pour vous démarquer.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
