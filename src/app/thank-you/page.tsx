import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: "C'est dans la boîte",
  description: "Merci de vous être inscrit.e à ma lettre d'information. Restons connectés !",
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Merci de votre confiance."
      intro="Mes lettres d'information parleront de mes réussites professionnelles et de mes réflexions personnelles. Pas plus de 10 newsletters par an, pas de harcèlement, j'espère vous emmener avec moi dans mes bagages... Vous pouvez vous désinscrire à tout moment, pas d'embrouille."
    />
  )
}
