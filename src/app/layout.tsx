import { type Metadata } from 'next'
import Head from 'next/head'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - François-Xavier Guillois',
    default:
      'François-Xavier Guillois - Développeur Senior, sous marque Scriptami, geek à temps plein',
  },
  description:
    'François-Xavier Guillois - Développeur Senior, sous marque Scriptami, geek à temps plein',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
