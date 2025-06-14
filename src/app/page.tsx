import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MatrixIcon,
  ItchioIcon
} from '@/components/SocialIcons'
import image1 from '@/images/photos/select_1.png'
import image2 from '@/images/photos/select_2.jpg'
import image3 from '@/images/photos/select_3.jpg'
import image4 from '@/images/photos/select_4.jpeg'
import image5 from '@/images/photos/select_5.jpg'
import image6 from '@/images/photos/select_6.jpg'
import image7 from '@/images/photos/select_7.jpg'
import image8 from '@/images/photos/select_8.jpg'
import image9 from '@/images/photos/select_9.jpg'
import image10 from '@/images/photos/select_10.jpg'

// create an array of images with alt text
const images: ImageProps[] = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image8, alt: "Image 8" },
  { src: image9, alt: "Image 9" },
  { src: image10, alt: "Image 10" }
]

// select 5 random images from the array
const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 5)

import { getAllArticles } from '@/lib/articles'
import { Article } from '@/components/home/Article'
import { Role } from '@/components/home/Role'
import { SocialLink } from '@/components/home/SocialLink'
import { Photos } from '@/components/home/Photos'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function Focus() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Mon projet : Cabinet-Partage.fr</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Je développe actuellement une plateforme pour les locataires de mes cabinets partagés pour gérer en ligne leur relations avec la SARL : réservation, paiement, contrats, quittances et factures, paiement en ligne, etc.
        Avec les API, je débloque les serrures connectées en temps réel, en fonction des besoins des thérapeutes. Envie de développer la même synergie pour vos investissements fonciers ? Parlons-en !
      </p>
      <div className="mt-6 flex">
        <Button href="https://cabinet-partage.fr" className="flex-none">
          Découvrir le projet
        </Button>
      </div>
    </div>
  )
}


function Resume() {
  let resume = [
    {
      company: 'Wordpress',
      title: 'Développement, maintenance',
      logo: '/images/logos/wordpress.svg',
      start: {
        label: 'Toutes',
        dateTime: "6.4.3"
      },
      end: {
        label: 'versions',
        dateTime: "6.4.3",
      },
    },
    {
      company: 'Prestashop',
      title: 'Développement, maintenance',
      logo: '/images/logos/prestashop.svg',
      start: '1.6',
      end: '8',
    },
    {
      company: 'Next.js',
      title: 'Développement, Mise à jour',
      logo: '/images/logos/nextjs.svg',
      start: '1.5',
      end: '8',
    },
    {
      company: 'Nuxt',
      title: 'Développement, Mise à jour',
      logo: '/images/logos/nuxt.svg',
      start: '2',
      end: '3',
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Directement disponible pour...</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="./documents/fxg-cvdevweb-latest.pdf" variant="secondary" className="group mt-6 w-full">
        Télécharger mon C.V.
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Développer. Se développer.<br /> Sur tous les plans.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Officiant sous la marque Scriptami, je suis un développeur web indépendant basé à Rumilly, en Haute-Savoie (74). 
            Je crée des <Link href="/references-collaborations-professionnelles-scriptami">projets</Link> et <Link href="/devis-gratuit-pour-vos-envies-web">accompagne mes clients</Link> pour les autonomiser dans leurs défis numériques.
            Allez sur <Link href="/portrait-francois-xavier-guillois">ma bio</Link> pour les détails et les liens personnels.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              social={{
                href: "https://github.com/tnntwister",
                target: '_blank',
                label: "Mes projets GitHub",
                icon: GitHubIcon
              }}
            />
            <SocialLink
              social={{
                href: "https://www.linkedin.com/in/francois-xavier-guillois/",
                target: '_blank',
                label: "Compte pro (LinkedIn)",
                icon: LinkedInIcon
              }}
            />
            <SocialLink 
              social={{
                href: "https://rebellious-smile.itch.io/",
                target: '_blank',
                label: "Mes productions jeux sur Itch.io",
                icon: ItchioIcon
              }}
            />
            <SocialLink 
              social={{
                href: "https://matrix.to/#/#discussions-avec-fx:matrix.org",
                target: '_blank',
                label: "Discutons sur Matrix",
                icon: MatrixIcon
              }}
            />
          </div>
          
        </div>
      </Container>
      <Photos photos={randomImages} />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Focus />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
