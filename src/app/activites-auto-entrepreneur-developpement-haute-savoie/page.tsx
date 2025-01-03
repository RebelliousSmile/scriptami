import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Activités - Développement et Formation',
  description: 'Accompagnement et autonomisation dans vos défis numériques en Haute-Savoie.',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
      {children}
    </h2>
  )
}

function Activity({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </li>
  )
}

export default function ActivitesPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            J'accompagne mes clients afin de les autonomiser dans leurs défis numériques.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Internet est un marché qui change constamment de configuration et d'agenda. Développeur dans ma première vie, je mets à profit mon expérience et ma vision d'internet pour aider celles et ceux qui ont besoin d'un bagage technique. Je leur sers de canne le temps qu'ils se remettent debout après avoir buté sur des gros cailloux. Contactez-moi et soyez le/la prochain.e.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <section aria-labelledby="development-title" className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <SectionTitle>Développement</SectionTitle>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    <Activity title="Créer et maintenir son site vitrine">
                      Les CMS et solutions no-code ont révolutionné votre capacité à créer leur propre vitrine numérique. Parfois, vous êtes perdu.e parmi les possibles, submergé.e par la somme de connaissance à acquérir. Nous faisons le tri ensemble, nous fixons les prochains caps, et je vous donne les clés pour les atteindre.
                    </Activity>
                    <Activity title="Gérer sa boutique en ligne">
                      Intervenant sur des boutiques en ligne depuis plus de 10 ans (oscommerce, Prestashop, Magento, Woocommerce), j'apporte mon expertise pour vous aider à gérer votre boutique en ligne. Que ce soit pour des mises à jour, des développements spécifiques, ou pour vous aider à comprendre comment fonctionne votre boutique, nous travaillons sur tous les sujets pour vous faire gagner du temps et des clients.
                    </Activity>
                    <Activity title="Traduire vos besoins métier en numérique">
                      Gérer l'activité numérique de son entreprise, c'est arbitrer entre des solutions clé en main proposés par des gros éditeurs, et investir dans le développement de solutions personnalisées. Plus l'activité touche un besoin sensible à votre métier, plus vous devez l'internaliser et en avoir de contrôle. Je vous aide à comprendre les enjeux, à définir les besoins, et à développer les outils qui vous autonomiseront.
                    </Activity>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="formation-title" className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <SectionTitle>Formation</SectionTitle>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    <Activity title="Conduite accompagnée vers la mise en ligne">
                      Vous avez besoin de comprendre comment fonctionne votre site, comment le mettre à jour, comment le faire évoluer. Je vous accompagne dans la prise en main de votre outil, je crée la documentation qui vous manque pour vous y retrouver, et je vous fais faire des exercices pour m'assurer de votre montée en compétence.
                    </Activity>
                    <Activity title="Automatisation">
                      Les intelligences artificielles génératives sont en train de révolutionner le monde du numérique. Parce que j'utilise ces technologies pour mes propres projets et que je fais de la veille sur le sujet, je peux vous accompagner dans la compréhension de ces technologies, et dans la mise en place de solutions pour votre entreprise.
                    </Activity>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="other-title" className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <SectionTitle>Hors cadre</SectionTitle>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    <Activity title="Ecrivain public">
                      Que vous cherchez à créer du contenu optimisé pour le web (SEO), un relecteur compétent ou une plume pour rédiger vos newsletters et vos emails, je mets à votre disposition mon expérience de la rédaction pour écrire vite et bien.
                    </Activity>
                    <Activity title="Gamification">
                      Dans la guerre de l'attention des utilisateurs, et des besoins de fidélisation, la gamification des outils numériques est une arme pour pousser les utilisateurs à revenir vous voir. Définissons ensemble les scénarii compatibles avec vos possibilités techniques, et mettons en place des solutions pour vous démarquer.
                    </Activity>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  )
} 