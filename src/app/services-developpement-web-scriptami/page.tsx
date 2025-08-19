import Image from 'next/image'
import { Container } from '@/components/Container'
import { servicesContent } from '@/data/services'
import { SectionTitle } from '@/components/SectionTitle'
import { metadata } from './page.metadata'

export { metadata }

interface ServiceProps {
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  links?: {
    references?: { title: string; href: string }[]
    moreInfo?: { title: string; href: string }[]
  }
}

function Service({ title, description, image, links }: ServiceProps) {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex-1">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        {links && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.references && links.references.length > 0 && (
              <div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Références :</span>
                <ul className="mt-1 space-y-1">
                  {links.references.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        → {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {links.moreInfo && links.moreInfo.length > 0 && (
              <div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">En savoir plus :</span>
                <ul className="mt-1 space-y-1">
                  {links.moreInfo.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                      >
                        → {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  )
}

export default function ServicesPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {servicesContent.header.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {servicesContent.header.intro}
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {servicesContent.sections.map((section) => (
              <section key={section.id} aria-labelledby={`${section.id}-title`} className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <SectionTitle>{section.title}</SectionTitle>
                  <div className="md:col-span-3">
                    <ul role="list" className="space-y-16">
                      {section.items.map((service) => (
                        <Service key={service.title} {...service} />
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {servicesContent.footer && (
          <div className="mt-16 sm:mt-20">
            <header className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
                {servicesContent.footer.title}
              </h2>
              {servicesContent.footer.intro && (
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {servicesContent.footer.intro}
                </p>
              )}
              
              {servicesContent.footer.profiles && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {servicesContent.footer.profiles.map((profile, index) => (
                    <div key={index} className="group relative flex flex-col items-start">
                      <div className="relative z-10 flex-1">
                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          {profile.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {profile.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {servicesContent.footer.conclusion && (
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 italic">
                  {servicesContent.footer.conclusion}
                </p>
              )}
            </header>
          </div>
        )}
      </div>
    </Container>
  )
}