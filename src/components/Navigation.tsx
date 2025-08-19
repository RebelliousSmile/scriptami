import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex justify-center py-4">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        <li><Link href="/" className="transition hover:text-teal-500 dark:hover:text-teal-400">Accueil</Link></li>
        <li><Link href="/services-developpement-web-scriptami" className="transition hover:text-teal-500 dark:hover:text-teal-400">Services</Link></li>
        <li><Link href="/reflexions-developpeur-scriptami" className="transition hover:text-teal-500 dark:hover:text-teal-400">Microblog</Link></li>
        <li><Link href="/devis-gratuit-pour-vos-envies-web" className="whitespace-nowrap transition hover:text-teal-500 dark:hover:text-teal-400">Demander un devis</Link></li>
        <li><Link href="/contact" className="transition hover:text-teal-500 dark:hover:text-teal-400">Contact</Link></li>
      </ul>
    </nav>
  )
} 