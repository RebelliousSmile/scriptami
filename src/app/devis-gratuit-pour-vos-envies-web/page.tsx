'use client'

import { DevisForm } from '@/components/forms/DevisForm'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function DevisPage() {
  return (
    <SimpleLayout
      title="Demander un devis gratuit"
      intro="Décrivez votre projet et je vous recontacterai rapidement pour en discuter plus en détail."
    >
      <div className="mt-16 max-w-3xl md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <DevisForm />
      </div>
    </SimpleLayout>
  )
}

