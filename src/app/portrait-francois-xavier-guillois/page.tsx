import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  ObsidianIcon,
  DiscordIcon,
  MastodonIcon,
  PeertubeIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Portrait',
  description:
    "Je m'appelle François-Xavier Guillois. Je vis à Rumilly, en Haute-Savoie (74). Je combine un excellent cadre de vie avec un abonnement à la fibre pour vivre dans le meilleur des mondes.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Je m&apos;appelle François-Xavier Guillois. Je vis à Rumilly, en Haute-Savoie (74).
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mt-4">
            Je combine un excellent cadre de vie avec un abonnement à la fibre pour vivre dans le meilleur des mondes.
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Je me suis lancé dans la programmation à l&apos;âge de 10 ans, sur un MO5. J&apos;écrivais en BASIC et sauvegardais mes programmes sur des cassettes de bandes magnétiques. Ma passion pour le monde imaginaire et les jeux de simulation s&apos;est épanouie dès mon plus jeune âge, notamment à travers les livres dont vous êtes le héros.
            </p>
            <p>
              Avant même d&apos;avoir suivi un seul cours d&apos;anglais, je me suis aventuré dans un voyage linguistique dans le sud de l&apos;Angleterre. Cette expérience a non seulement élargi mes horizons mais m&apos;a aussi ouvert à de nouvelles perspectives.
            </p>
            <p>
              Mon parcours professionnel a réellement pris son envol dans les agences web, où j&apos;ai pu affiner mes compétences tout en répondant aux besoins variés des professionnels. Cette période m&apos;a appris l&apos;importance de comprendre le métier de mes clients tout en éliminant les intermédiaires, une philosophie que j&apos;ai continué à appliquer dans ma carrière.
            </p>
            <p>
              Actuellement, en tant qu&apos;indépendant, je concentre mes efforts sur des projets personnels diversifiés touchant à l&apos;immobilier, aux jeux et à la santé, tout en continuant à collaborer avec d&apos;anciens collègues et clients qui me font confiance.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/scriptami/"  icon={InstagramIcon}>Scriptami sur Instagram</SocialLink>
            <SocialLink href="https://github.com/tnntwister" icon={GitHubIcon}  className="mt-4">Mon compte GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/francois-xavier-guillois/" icon={LinkedInIcon}  className="mt-4">Mon compte LinkedIn</SocialLink>
            <SocialLink href="https://www.facebook.com/scriptami/"  icon={FacebookIcon}  className="mt-4">Scriptami sur Facebook</SocialLink>
            <SocialLink href="https://publish.obsidian.md/jdr-fx/" icon={ObsidianIcon}  className="mt-4">Mon wiki JDR</SocialLink>
            <SocialLink href="https://videos.pair2jeux.tube/a/tnntwister/" icon={PeertubeIcon}  className="mt-4">Mes histoires animées</SocialLink>
            <SocialLink href="https://discord.gg/JXeecvqGUx"  icon={DiscordIcon}  className="mt-4">Rejoins mon serveur Discord</SocialLink>  
            <SocialLink href="https://twitter.com/tnntwister" icon={XIcon}  className="mt-4">Mon compte X</SocialLink>
            <SocialLink href="https://h4.io/@scriptami" icon={MastodonIcon}  className="mt-4">Mon compte Mastodon</SocialLink>
            
            <SocialLink
              href="mailto:ecrire.a@scriptami.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ecrire.a@scriptami.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
