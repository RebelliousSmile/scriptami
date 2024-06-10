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
            Je fais partie des travailleurs nomades dont le bureau donne sur la nature.
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mt-4">
            Mais j'ai la fibre. Je suis réactif pour mes clients, je travaille avec des IA. Le meilleur des mondes, c'est celui qu'on se crée.
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Côté professionnel, j'ai fait partie des early adopters d'internet, et depuis je ne cesse de m'émerveiller de ses projets. En parent responsable, je condamne aussi ses excès, ses dérives. Avec l'arrivée de l'IA, définir son éthique, penser au coût carbone de ses développements, 
            est devenu aussi important que de s'assurer de la qualité de ses algorithmes.
            </p>
            <p>
              Côté personnel, j'aime me servir de ma tête, qu'il s'agisse de lecture, d'un jeu de plateau ou de parties de jeu de rôles. J'aime aussi me servir de mes muscles, dans le jardin, en randonnée, en vélo. 
              Enfin, j'aime aussi le développement personnel, j'ai un diplôme de psychologie et je fais des stages de méditation, de yoga et de Qi Gong. 
            </p>
            <p>
              Entre les deux, j'aime développer des lieux de vie, que ce soit ma maison construite avec des architectes, ou les cabinets de soins où le partage est au coeur du projet.
            </p>
            <p>
              Un coach m'a dit : "Le meilleur investissement que tu puisses faire c'est sur toi-même." C'est le meilleure conseil que j'ai reçu, et m'empresse de vous le transmettre à mon tour. N'ayez jamais de cesse de vous développer, de vous embellir, de vous dépasser. 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/tnntwister" icon={GitHubIcon}  className="mt-4">Mon compte GitHub</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/francois-xavier-guillois/" icon={LinkedInIcon}  className="mt-4">Mon compte LinkedIn</SocialLink>
            <SocialLink href="https://h4.io/@empathie" icon={MastodonIcon}  className="mt-4">Mon compte Mastodon</SocialLink>
            <SocialLink href="https://videos.pair2jeux.tube/a/tnntwister/" icon={PeertubeIcon}  className="mt-4">Mes histoires animées</SocialLink>
            <SocialLink href="https://discord.gg/JXeecvqGUx"  icon={DiscordIcon}  className="mt-4">Rejoins mon serveur Discord</SocialLink>  
            
            <SocialLink
              href="mailto:ecrire.a@scriptami.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ecrire.a@scriptami.com
            </SocialLink>
          </ul>
          <p class="mt-12 space-y-7 text-sm text-zinc-600 dark:text-zinc-400 leading-9">
            François-Xavier Guillois<br />
            Rumilly, Haute-Savoie (74)<br />
            tél : <a href="tel:0638056100">0638 056 100</a>
          </p>
        </div>
      </div>
    </Container>
  )
}
