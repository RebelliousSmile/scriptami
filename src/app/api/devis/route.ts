import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const type = formData.get('type') as string
    const company = formData.get('company') as string
    const budget = formData.get('budget') as string
    const timeline = formData.get('timeline') as string
    const message = formData.get('message') as string

    if (!name || !email || !message || !type) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      )
    }

    // Vérification de la clé API Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('Clé API Resend manquante')
      return NextResponse.json(
        { error: "Erreur de configuration du serveur d'emails" },
        { status: 500 }
      )
    }

    try {
      const { data, error } = await resend.emails.send({
        from:'ecrire.a@scriptami.com',
        to: ['ecrire.a@scriptami.com'],
        subject: `Nouveau devis de ${name}`,
        html: `
          <h2>Nouveau devis</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Type de projet:</strong> ${type}</p>
          <p><strong>Entreprise:</strong> ${company || 'Non renseigné'}</p>
          <p><strong>Budget:</strong> ${budget || 'Non renseigné'}</p>
          <p><strong>Délai:</strong> ${timeline || 'Non renseigné'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })

      if (error) {
        console.error('Erreur Resend:', error)
        return NextResponse.json(
          { error: "Erreur lors de l'envoi de l'email" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    } catch (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Erreur générale:', error)
    return NextResponse.json(
      { error: "Une erreur s'est produite lors du traitement de la demande" },
      { status: 500 }
    )
  }
} 