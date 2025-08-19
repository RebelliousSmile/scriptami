'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          500
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Erreur serveur
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Désolé, une erreur inattendue s&apos;est produite.
        </p>
        <div className="mt-6 flex gap-6">
          <button
            onClick={reset}
            className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-700"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </Container>
  )
}