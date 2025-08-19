import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { metadata } from './page.metadata'

export { metadata }
import {
  GitHubIcon,
  LinkedInIcon,
  ItchioIcon,
  MatrixIcon
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
            Rester un développeur en 2025
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Après deux années de remises en question autour de &ldquo;L&rsquo;IA fait-elle de moi un non-développeur&rdquo;, j&rsquo;ai voulu faire un portrait dynamique, qui souligne la transition à laquelle tous les développeurs doivent faire face en ce moment, et quoi de plus dynamique qu&rsquo;un dialogue ? Je conviens qu&rsquo;il sera biaisé, le monologue s&rsquo;est déguisé. J&rsquo;y parle de ma philosophie de travail, de ma vision du métier, de mes valeurs. Après 20 ans dans le développement web, j&rsquo;ai envie de partager non pas ce que je fais, mais comment et pourquoi je le fais.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : En deux décennies de code, comment votre métier a-t-il évolué ?</p>
                <p>Moi : Sous la pression de petites révolutions, qui nous obligent à apprendre à faire notre travail autrement ! J&rsquo;ai commencé à coder quand internet balbutiait. J&rsquo;ai webmaster, je taillais des images, j&rsquo;apprenais Photoshop, c&rsquo;était la guerre entre ASP et PHP. Puis la bulle web, les entreprises qui foncent dans le web, les agences qui se montent. Alors, le développeur arrive en bout de chaîne : d&rsquo;abord la conception, puis le graphisme, le SEO, et enfin moi qui code avec tout le passif des travaux précédents. Puis la révolution JS, ou le front s&rsquo;est dit qu&rsquo;il pouvait faire du back. On oublie le MVC des serveurs, on apprend les composants. Et maintenant, l&rsquo;IA, qui propose d&rsquo;écrire le code à notre place. Elle peut remplacer tous les rôles, à condition qu&rsquo;on puisse savoir quand elle travaille mal. Mon métier a pris un nouveau tournant : je suis chef d&rsquo;orchestre entre l&rsquo;IA et les besoins humains.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : L&rsquo;IA code  vite, très vite. Comment gardez-vous le contrôle ?</p>
                <p>Moi : C&rsquo;est LE défi ! L&rsquo;IA est comme un stagiaire brillant mais hyperactif - elle revient toutes les 5 minutes avec du travail terminé. Cette fulgurance peut être déstabilisante. Ma parade ? Le papier. Oui, en 2025, écrire a encore un sens ! C&rsquo;est mon ancre. Quand je lis des spécifications imprimées, je retrouve le rythme naturel de la pensée humaine. Je peux imaginer, structurer, réfléchir sans être bousculé par la vitesse de la machine.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : N&rsquo;est-ce pas paradoxal d&rsquo;utiliser du papier quand on travaille avec l&rsquo;IA ?</p>
                <p>Moi : Le danger avec l&rsquo;IA, c&rsquo;est le glissement : on commence par lui déléguer une tâche, puis deux, et progressivement on lui sous-traite notre réflexion. Mon carnet, mon imprimante, ce sont mes zones de résistance créative. Sans quoi le cerveau devient paresseux.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Si c&rsquo;est l&rsquo;IA qui code, à quoi occupez-vous votre temps ?</p>
                <p>Moi : Je parle couramment trois langues : celle du client avec ses besoins business, celle des différents métiers du web, et celle de l&rsquo;IA. Mon rôle, c&rsquo;est de faire comprendre à l&rsquo;IA non seulement ce qu&rsquo;on veut, mais pourquoi on le veut, dans quel contexte, avec quelles contraintes. C&rsquo;est un dialogue constant où j&rsquo;inspecte, je reformule, je valide.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Avez-vous appris de l&rsquo;IA dans votre façon de travailler ?</p>
                <p>Moi : Absolument ! L&rsquo;ère de l&rsquo;information et de communication nous oblige à développer nos capacités cognitives, à traiter les données rapidement. Des études montrent d&rsquo;ailleurs que certaines pathologies sont liées à la surcharge des traitements d&rsquo;informations. En regardant l&rsquo;IA faire, j&rsquo;ai adopté certaines de ses méthodologies pour organiser ma pensée et ma gestion de projet. D&rsquo;ailleurs, elle est parfaitement consciente de ses limites, et nous échangeons ensemble pour trouver une méthologie qui maximise à la fois sa performance et la mienne. Qu&rsquo;elle ne fasse pas tout comme un esclave, et que mon cerveau continue d&rsquo;être sollicité. Et que j&rsquo;ajoute les traits qui lui manquent : l&rsquo;intuition, l&rsquo;empathie, la vision long terme.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Comment vous positionnez-vous éthiquement face à l&rsquo;IA ?</p>
                <p>Moi : C&rsquo;est un crève-coeur. Jacques Ellul a mis en garde contre la fausse neutralité de la technologie. J&rsquo;ai été early adopter du web, et j&rsquo;ai plongé dans la révolution digitale. Mais chaque prompt a un coût carbone, chaque automatisation a des implications sociales, chaque incantation à utiliser davantage l&rsquo;IA agrandit la fracture sociale et la domination des richissimes pourvoyeurs en innovation. Mon métier aujourd&rsquo;hui n&rsquo;a pas d&rsquo;avenir sans l&rsquo;IA, et une fois encore, je suis obligé d&rsquo;y adhérer aveuglément, mais je la vois comme un outil professionnel, et évite de m&rsquo;en servir à titre personnel.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Concrètement, comment travaillez-vous avec vos clients ?</p>
                <p>Moi : Je fonctionne comme un interprète entre leurs besoins et les possibilités démultipliées de codage avec l&rsquo;IA. Un client arrive avec une vision, souvent floue, parfois contradictoire. Mon travail consiste à clarifier ces besoins, à les structurer pour que l&rsquo;IA puisse produire exactement ce qui est attendu. Puis j&rsquo;inspecte, je valide, j&rsquo;affine. Mon métier déborde parfois franchement sur le contrôle qualité ! (rires) C&rsquo;est un processus itératif où l&rsquo;humain doit garder l&rsquo;oeil ouvert et la main sur le gouvernail.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Qu&rsquo;est-ce qui vous ressource en dehors du digital ?</p>
                <p>Moi : Couper les écrans est déjà un ressourcement en soi, mon épouse est boulimique de séries et de films alors qu&rsquo;elle passe ses journées devant l&rsquo;écran, j&rsquo;ignore comme elle garde cette appétence ! D&rsquo;abord, je ne me limite pas à développer, j&rsquo;ai fait construire ma maison et j&rsquo;ai développé des cabinets de soins partagés. Ces projets physiques me font recoller au réel, à la prise de décisions. Et bien sur les loisirs, l&rsquo;exercice, la contemplation.</p>
              </div>

              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Vous : Un conseil pour ceux qui veulent travailler avec l&rsquo;IA sans s&rsquo;y perdre ?</p>
                <p>Moi : Intéressez-vous aux neurosciences, à la plasticité du cerveau, profitez du temps gagné avec les nouveaux outils pour apprendre de nouvelles compétences, vous donner de nouveaux défis que vous ne déléguerez pas à la machine. Un coach m&rsquo;a dit : &ldquo;Le meilleur investissement que tu puisses faire, c&rsquo;est sur toi-même.&rdquo; Plus nous sommes aidés par les machines, plus nous devons prendre garde à garder notre valeur. Pour notre santé, pour notre bien-être mental.</p>

              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/tnntwister" icon={GitHubIcon} className="mt-4">Mon code public (GitHub)</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/francois-xavier-guillois/" icon={LinkedInIcon} className="mt-4">Mon compte pro (LinkedIn)</SocialLink>
            <SocialLink href="https://rebellious-smile.itch.io/" icon={ItchioIcon} className="mt-4">Mon compte Itch.io</SocialLink>
            <SocialLink href="https://matrix.to/#/#discussions-avec-fx:matrix.org" icon={MatrixIcon} className="mt-4">Discutons sur Matrix</SocialLink>
            
            <SocialLink
              href="mailto:ecrire.a@scriptami.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ecrire.a@scriptami.com
            </SocialLink>
          </ul>
          <div className="mt-12 text-sm text-zinc-600 dark:text-zinc-400">
            <p>François-Xavier Guillois</p>
            <p>Rumilly, Haute-Savoie (74)</p>
            <p>tél : <a href="tel:0638056100" className="hover:text-zinc-800 dark:hover:text-zinc-200">0638 056 100</a></p>
          </div>
        </div>
      </div>
    </Container>
  )
}
