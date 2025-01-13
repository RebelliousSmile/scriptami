'use client'

import { BaseContent, type ContentSection } from '@/types/content'
import { SectionTitle } from '@/components/SectionTitle'

interface ContentSectionProps<T extends BaseContent> {
  section: ContentSection<T>
  children: (item: T) => React.ReactNode
}

export function ContentSection<T extends BaseContent>({ 
  section, 
  children 
}: ContentSectionProps<T>) {
  return (
    <section 
      key={section.id} 
      aria-labelledby={`${section.id}-title`} 
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <SectionTitle>{section.title}</SectionTitle>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {section.items.map((item, index) => (
              <li key={index}>{children(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 