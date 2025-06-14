'use client'

import { Force } from '@/types/content'
import { forcesContent } from '@/data/forces'
import { PageLayout } from '@/components/content/PageLayout'
import Link from 'next/link'

function ForceItem({ title, description, links, image }: Force) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
      <p className="text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      {links.moreInfo.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Pour en savoir plus :</h4>
          <ul className="mt-2 space-y-1">
            {links.moreInfo.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-teal-500 hover:text-teal-600">
                  {link.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function AutomatisationPage() {
  return <PageLayout<Force> content={forcesContent}>{(force) => <ForceItem {...force} />}</PageLayout>
} 