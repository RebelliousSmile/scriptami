import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ForcesSection } from '@/components/ForcesSection'

export const metadata: Metadata = {
  title: 'Nos Forces - Automatisation, IA et E-commerce',
  description: 'Expertise en automatisation des processus, intelligence artificielle et développement e-commerce pour votre entreprise.',
}

export default function AutomatisationPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            L'automatisation et l'IA au service de votre entreprise
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              L'automatisation et l'intelligence artificielle ne sont plus des options, mais des nécessités pour rester compétitif. Je vous accompagne dans cette transition avec des solutions sur mesure.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <ForcesSection />
      </div>
    </Container>
  )
} 