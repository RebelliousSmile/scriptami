import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/portrait-francois-xavier-guillois">Portrait</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/thoughts">Microblog</NavLink>
                <NavLink href="/references-collaborations-professionnelles-scriptami">Références</NavLink>
                <NavLink href="/devis-gratuit-pour-vos-envies-web">Devis</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; 2024-2025 François-Xavier Guillois, tous droits réservés - <NavLink href="/mentions-legales-scriptami">Mentions légales</NavLink>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
