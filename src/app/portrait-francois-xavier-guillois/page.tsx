import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  SignalIcon,
  DiscordIcon,
  BlueSkyIcon,
  MatrixIcon,
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
          Mais j&#039;ai la fibre. Je suis r&eacute;actif pour mes clients, je travaille avec des IA. Le meilleur des mondes, c&#039;est celui qu&#039;on se cr&eacute;e.
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            C&ocirc;t&eacute; professionnel, j&#039;ai fait partie des early adopters d&#039;internet, et depuis je ne cesse de m&#039;&eacute;merveiller de ses projets. En parent responsable, je condamne aussi ses exc&egrave;s, ses d&eacute;rives. Avec l&#039;arriv&eacute;e de l&#039;IA, d&eacute;finir son &eacute;thique, penser au co&ucirc;t carbone de ses d&eacute;veloppements, 
            est devenu aussi important que de s&#039;assurer de la qualit&eacute; de ses algorithmes.
            </p>
            <p>
            C&ocirc;t&eacute; personnel, j&#039;aime me servir de ma t&ecirc;te, qu&#039;il s&#039;agisse de lecture, d&#039;un jeu de plateau ou de parties de jeu de r&ocirc;les. J&#039;aime aussi me servir de mes muscles, dans le jardin, en randonn&eacute;e, en v&eacute;lo. 
              Enfin, j&#039;aime aussi le d&eacute;veloppement personnel, j&#039;ai un dipl&ocirc;me de psychologie et je fais des stages de m&eacute;ditation, de yoga et de Qi Gong. 
            </p>
            <p>
            Entre les deux, j&#039;aime d&eacute;velopper des lieux de vie, que ce soit ma maison construite avec des architectes, ou les cabinets de soins o&ugrave; le partage est au coeur du projet.
            </p>
            <p>
            Un coach m&#039;a dit : &quot;Le meilleur investissement que tu puisses faire c&#039;est sur toi-m&ecirc;me.&quot; C&#039;est le meilleure conseil que j&#039;ai re&ccedil;u, et m&#039;empresse de vous le transmettre &agrave; mon tour. N&#039;ayez jamais de cesse de vous d&eacute;velopper, de vous embellir, de vous d&eacute;passer. 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/tnntwister" icon={GitHubIcon}  className="mt-4">Mon code public (GitHub)</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/francois-xavier-guillois/" icon={LinkedInIcon}  className="mt-4">Mon compte pro (LinkedIn)</SocialLink>
            <SocialLink href="https://bsky.app/profile/fxguillois.bsky.social" icon={BlueSkyIcon}  className="mt-4">Mon compte Bluesky</SocialLink>
            <SocialLink href="https://signal.me/#eu/T-BmyvkxPeRs3bSj852ie8yG7fXhqUyNK0FOTYwlLulDD7o8Z5VL8bfAzFEqRXlM" icon={SignalIcon}  className="mt-4">Ma messagerie (Signal)</SocialLink>
            <SocialLink href="https://matrix.to/#/#discussions-avec-fx:matrix.org"  icon={MatrixIcon}  className="mt-4">Discutons sur Matrix</SocialLink>
            
            <SocialLink
              href="mailto:ecrire.a@scriptami.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ecrire.a@scriptami.com
            </SocialLink>
          </ul>
          <p className="mt-12 space-y-7 text-sm text-zinc-600 dark:text-zinc-400 leading-9">
            François-Xavier Guillois<br />
            Rumilly, Haute-Savoie (74)<br />
            tél : <a href="tel:0638056100">0638 056 100</a>
          </p>
        </div>
      </div>
    </Container>
  )
}
