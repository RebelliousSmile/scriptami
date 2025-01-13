import { BaseContent, PageContent } from '@/types/content'
import { Container } from '@/components/Container'
import { ClientContentSection } from './ClientContentSection'

interface PageLayoutProps<T extends BaseContent> {
  content: PageContent<T>
  children: (item: T) => React.ReactNode
}

export function PageLayout<T extends BaseContent>({
  content,
  children
}: PageLayoutProps<T>) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {content.header.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {content.header.intro}
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {content.sections.map((section) => (
              <ClientContentSection
                key={section.id}
                section={section}
                renderContent={children}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
} 