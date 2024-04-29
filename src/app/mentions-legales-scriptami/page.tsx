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
  ItchioIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait_2.jpg'

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
  title: 'Mentions légales',
  description:
    "Mentions légales du site scriptami.",
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
            Mentions légales
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mt-4">
            ... et protection des données personnelles
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <div className="pt-6 mt-6 border-t privacy-content border-gray-200/50">
                <h2 className="text-lg font-bold">Le texte</h2>
                <div className="bold-text">
                    L&apos;obligation pour tout site internet de présenter des
                    mentions légales a été établie en 2004 par la loi de
                    confiance dans l&apos;économie numérique. Ces mentions
                    légales servent à vous informer sur les personnes
                    physiques et morales qui peuvent vous répondre en cas de
                    ligite ou de problème technique. Nous avons une
                    obligation légale d&apos;information à l&apos;égard de
                    l&apos;internaute qui visite notre création.
                </div>
            </div>

            <div className="mb-24 privacy-content">
                <h3 className="mt-6 mb-1 text-lg font-bold">
                    Protection des données personnelles
                </h3>
                <h5 className="mt-3 mb-1 font-bold">Objet du traitement des données</h5>
                <p>
                    L&apos;entreprise indididuelle FRANCOIS XAVIER GUILLOIS, dont
                    le siège est situé à RUMILLY (74150) 10 allée des
                    Rossignols, dispose d&apos;un site internet &lsquo; vitrine &rsquo;, qui
                    présente son activité de développeur en informatique. Ce
                    site permet, via un formulaire de contact en ligne, de
                    recevoir les demandes des internautes et les données
                    collectées à cette occasion sont enregistrées dans une
                    base de données par un service tiers de confiance
                    (SendInBlue).
                </p>
                <p>Cette base de données permet :</p>
                <ul>
                    <li>
                        de répondre aux sollicitations et demandes diverses
                        déposées sur le site internet,
                    </li>
                    <li>
                        d&apos;adresser des publicités par courrier postal ou
                        électronique auprès des prospects qui ne s&apos;y sont
                        pas opposés concernant les services proposés par
                        l&apos;entreprise.
                    </li>
                </ul>
                <h5 className="mt-3 mb-1 font-bold">Base légale des traitements</h5>
                <ul>
                    <li>
                        <em>Délivrance de renseignements</em> : la base
                        légale du traitement est le consentement de la
                        personne au traitement de ses données à caractère
                        personnel pour une plusieurs finalités spécifiques
                        (Cf. article 6.1.a du Règlement européen sur la
                        protection des données).
                    </li>
                    <li>
                        <em>Prise de rendez-vous</em> : la base légale du
                        traitement est l&apos;exécution de mesures
                        précontractuelles (Cf. article 6.1.b du Règlement
                        européen sur la protection des données).
                    </li>
                    <li>
                        <em
                            >Envoi de sollicitations commerciales par
                            courrier postal ou électronique sur les produits
                            et services commercialisés par l&apos;entreprise</em
                        >
                        : la base légale du traitement est l&apos;intérêt
                        légitime de la société (Cf. article 6.1.f) du
                        Règlement européen sur la protection des données), à
                        savoir promouvoir nos produits et services et
                        attirer de nouveaux clients.
                    </li>
                </ul>

                <h5 className="mt-3 mb-1 font-bold">Catégories de données</h5>
                <ul>
                    <li>
                        <em>Identité</em> : civilité, nom, prénom, adresse
                        électronique, adresse, numéro de téléphone, code
                        interne de traitement permettant l&apos;identification du
                        prospect, données relatives à l&apos;enregistrement sur
                        des listes d&apos;opposition.
                    </li>
                    <li>
                        <em>Données relatives aux devis</em> : numéro du
                        devis, détails et montant de la prestation demandée.
                    </li>
                </ul>
                <h5 className="mt-3 mb-1 font-bold">Destinataires des données</h5>
                Les services tiers utilisés par l&apos;entreprise individuelle
                FRANCOIS XAVIER GUILLOIS pour la mise en place des
                fonctionnalités proposées sur ce site.
                <h5 className="mt-3 mb-1 font-bold">Durée de conservation des données</h5>
                <ul>
                    <li>
                        <em
                            >Données nécessaires à la délivrance de
                            renseignements ou de prise de rendez-vous</em
                        > : un (1) an s&apos;il n&apos;est pas donné suite à
                        l&apos;information délivrée ou la proposition de
                        rendez-vous de soins; si le rendez-vous de soins est
                        effectif, les données sont reversées dans le fichier
                        clients de notre entreprise.
                    </li>
                    <li>
                        <em
                            >Données nécessaires à la réalisation des
                            opérations de prospection commerciale auprès de
                            nos prospects</em
                        >
                        : trois (3) ans à compter de la collecte des données
                        ou du dernier contact émanant du prospect.
                    </li>
                    <li>
                        <em
                            >Données concernant les listes d&apos;opposition à
                            recevoir de la prospection</em
                        > : trois (3) ans.
                    </li>
                </ul>
                <h3 className="mt-6 mb-1 font-bold">Vos droits</h3>
                <p>
                    Si vous ne souhaitez plus recevoir de publicité de la
                    part de l&apos;entreprise individuelle (exercice du droit
                    d&apos;opposition), contactez-nous à l&apos;adresse indiquée
                    ci-dessus. Vous pouvez accéder aux données vous
                    concernant, les rectifier ou les faire effacer. Vous
                    disposez également d&apos;un droit à la portabilité et d&apos;un
                    droit à la limitation du traitement de vos données
                    (Consulter le site
                    <Link href="https://www.cnil.fr/"
                        >cnil.fr</Link
                    >
                    pour plus d&apos;informations sur vos droits).
                </p>
                <p>
                    Pour exercer ces droits ou pour toute question sur le
                    traitement de vos données dans ce dispositif, vous
                    pouvez me contacter :
                </p>
                <ul className="my-3">
                    <li>
                        <em>Par voie électronique</em> : 
                        <Link href="mailto:ecrire.a@scriptami.com">ecrire.a@scriptami.com</Link>
                    </li>
                    <li>
                        <em>Par courrier postal</em> :<br />SCRIPTAMI<br />François-Xavier GUILLOIS<br />
                        10 allée des Rossignols<br />
                        74150 RUMILLY
                    </li>
                </ul>
                <p>
                    Si vous estimez, après avoir contacté l&apos;entreprise
                    individuelle FRANCOIS XAVIER GUILLOIS, que vos droits
                    « Informatique et Libertés » ne sont pas respectés, vous
                    pouvez adresser une réclamation en ligne auprès de la
                    CNIL.
                </p>
            </div>
          </div>
        </div>
        <div className="lg:pl-20 text-base text-zinc-600 dark:text-zinc-400">
        <p className="mb-3">
                  Editeur, Responsable de la rédaction, de
                  la publication et du traitement des
                  données
              </p>
              <p>
                  <strong>GUILLOIS François-Xavier</strong><br />
                  SIREN 891 085 516<br />
                  10 allée des Rossignols<br />
                  74150 RUMILLY<br />
                  +33 638 056 100
              </p>
              <p className="mt-6 mb-3 text-lg text-tertiary">
                  Hébergeur
              </p>
              <p>
                  <strong>Vercel Inc.</strong><br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  privacy@vercel.com
              </p>              
              <p>
                  Le nom de domaine nuxt.art est déposé chez
                  l&apos;hébergeur ALWAYSDATA SARL dont le siège
                  social se trouve 91 rue du Faubourg Saint
                  Honoré - 75008 Paris.
              </p>
              <p
                  className="py-4 mb-4 border-b date text-secondary border-gray-200/50"
              >
                  Dernière mise à jour le 1er décembre 2022
              </p>
        </div>
      </div>
    </Container>
  )
}
