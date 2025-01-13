import { SimpleLayout } from '@/components/SimpleLayout'
import { DevisForm } from '@/components/forms/DevisForm'
import { metadata } from './page.metadata'

export { metadata }

export default function DevisPage() {
  return (
    <SimpleLayout
      title="Demander un devis gratuit"
      intro="Décrivez votre projet et je vous recontacterai rapidement pour en discuter plus en détail."
    >
      <DevisForm />
    </SimpleLayout>
  )
}
