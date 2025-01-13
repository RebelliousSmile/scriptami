import { Container } from '@/components/Container'
import { activitesContent } from '@/data/activites'
import { Activity } from '@/components/Activity'
import { SectionTitle } from '@/components/SectionTitle'

export default function ActivitesPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {activitesContent.header.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {activitesContent.header.intro}
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {activitesContent.sections.map((section) => (
              <section key={section.id} aria-labelledby={`${section.id}-title`} className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <SectionTitle>{section.title}</SectionTitle>
                  <div className="md:col-span-3">
                    <ul role="list" className="space-y-16">
                      {section.activities.map((activity) => (
                        <Activity key={activity.title} title={activity.title}>
                          {activity.description}
                        </Activity>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
} 