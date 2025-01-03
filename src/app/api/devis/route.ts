import { type NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const nom = formData.get('nom')
    const email = formData.get('email')
    const type = formData.get('type')
    const description = formData.get('description')
    const budget = formData.get('budget')
    const delai = formData.get('delai')

    // Email pour moi
    await resend.emails.send({
      from: 'Formulaire de devis <devis@scriptami.com>',
      to: 'ecrire.a@scriptami.com',
      subject: `Nouvelle demande de devis - ${type}`,
      html: `
        <h1>Nouvelle demande de devis</h1>
        <h2>Informations du contact :</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <h2>Détails du projet :</h2>
        <p><strong>Type :</strong> ${type}</p>
        <p><strong>Description :</strong></p>
        <p>${description}</p>
        <p><strong>Budget :</strong> ${budget}</p>
        <p><strong>Délai souhaité :</strong> ${delai}</p>
      `,
    })

    // Email de confirmation pour le client
    await resend.emails.send({
      from: 'Scriptami <contact@scriptami.com>',
      to: email as string,
      subject: 'Confirmation de votre demande de devis',
      html: `
        <h1>Merci pour votre demande de devis</h1>
        <p>Bonjour ${nom},</p>
        <p>J'ai bien reçu votre demande de devis et je vous recontacterai dans les plus brefs délais pour en discuter plus en détail.</p>
        <p>En attendant, vous pouvez consulter mes références sur <a href="https://scriptami.com/references-collaborations-professionnelles-scriptami">mon site</a>.</p>
        <p>À très bientôt,</p>
        <p>François-Xavier Guillois<br>Scriptami</p>
      `,
    })

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Erreur lors de l\'envoi du devis:', error)
    return new Response('Erreur lors de l\'envoi du formulaire', { status: 500 })
  }
} 