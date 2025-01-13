import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { forces } from '@/data/forces'
import { Force } from '@/types/force'

export const metadata: Metadata = {
  title: 'Nos Forces - Automatisation, IA et E-commerce',
  description: 'Expertise en automatisation des processus, intelligence artificielle et développement e-commerce pour votre entreprise.',
}

function ForceSection({ force }: { force: Force }) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {force.title}
      </h2>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            <p>{force.description}</p>
            {force.links.moreInfo.length > 0 && (
              <div>
                <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Pour en savoir plus :</h4>
                <ul className="mt-1 space-y-1">
                  {force.links.moreInfo.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-teal-500 hover:text-teal-600 dark:text-teal-400">
                        {link.title} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {force.links.references.length > 0 && (
        <div className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
          <div>
            <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Références sur ce sujet :</h4>
            <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {force.links.references.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-teal-500 hover:text-teal-600 dark:text-teal-400">
                    {link.title} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AutomatisationPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            L'automatisation et l'IA au service de votre entreprise
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            L'automatisation et l'intelligence artificielle ne sont plus des options, mais des nécessités pour rester compétitif. Je vous accompagne dans cette transition avec des solutions sur mesure.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {forces.map((force, index) => (
              <ForceSection key={index} force={force} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
} 