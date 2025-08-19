import Image from 'next/image'
import { Container } from '@/components/Container'
import { thoughts, type Thought } from '@/data/thoughts'
import { metadata } from './page.metadata'

export { metadata }

// Fonction pour mélanger un tableau (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Fonction pour distribuer les pensées en évitant l'adjacence de même type
function distributeThoughts(thoughts: Thought[]): Thought[] {
  // Séparer par type
  const quotes = thoughts.filter(t => t.type === 'quote')
  const personalThoughts = thoughts.filter(t => t.type === 'thought')
  const images = thoughts.filter(t => t.type === 'image')
  
  // Mélanger chaque type séparément
  const shuffledQuotes = shuffleArray(quotes)
  const shuffledThoughts = shuffleArray(personalThoughts)
  const shuffledImages = shuffleArray(images)
  
  // Créer un tableau résultat
  const result: Thought[] = []
  let quoteIndex = 0, thoughtIndex = 0, imageIndex = 0
  
  // Stratégie : alterner les types autant que possible
  const totalItems = thoughts.length
  const types = ['quote', 'thought', 'image'] as const
  let typeIndex = 0
  
  for (let i = 0; i < totalItems; i++) {
    let placed = false
    let attempts = 0
    
    // Essayer de placer un élément en évitant la répétition du type précédent
    while (!placed && attempts < 3) {
      const currentType = types[typeIndex % 3]
      
      // Vérifier si on peut éviter l'adjacence avec l'élément précédent
      const lastType = result.length > 0 ? result[result.length - 1].type : null
      
      if (currentType !== lastType || attempts === 2) {
        // Placer l'élément du type courant s'il en reste
        if (currentType === 'quote' && quoteIndex < shuffledQuotes.length) {
          result.push(shuffledQuotes[quoteIndex])
          quoteIndex++
          placed = true
        } else if (currentType === 'thought' && thoughtIndex < shuffledThoughts.length) {
          result.push(shuffledThoughts[thoughtIndex])
          thoughtIndex++
          placed = true
        } else if (currentType === 'image' && imageIndex < shuffledImages.length) {
          result.push(shuffledImages[imageIndex])
          imageIndex++
          placed = true
        }
      }
      
      typeIndex++
      attempts++
    }
    
    // Si on n'a pas réussi à placer, forcer avec le premier type disponible
    if (!placed) {
      if (quoteIndex < shuffledQuotes.length) {
        result.push(shuffledQuotes[quoteIndex])
        quoteIndex++
      } else if (thoughtIndex < shuffledThoughts.length) {
        result.push(shuffledThoughts[thoughtIndex])
        thoughtIndex++
      } else if (imageIndex < shuffledImages.length) {
        result.push(shuffledImages[imageIndex])
        imageIndex++
      }
    }
  }
  
  return result
}


function ThoughtCard({ content, tags, author, type, image }: { content: string; tags?: string[]; author?: string; type?: 'quote' | 'thought' | 'image'; image?: { src: string; alt: string; caption?: string } }) {
  const isQuote = type === 'quote'
  const isImage = type === 'image'
  
  if (isImage && image) {
    return (
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300"></div>
        <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 overflow-hidden bg-white dark:bg-zinc-900">
          <div className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {tags && tags.length > 0 && (
            <div className="p-4">
              <div className="flex gap-1 flex-wrap">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300"></div>
      <div className={`relative p-6 rounded-lg border transition-all duration-300 ${
        isQuote
          ? 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600'
          : 'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-zinc-700'
      }`}>
        {isQuote && (
          <div className="text-zinc-400 dark:text-zinc-500 text-4xl leading-none mb-2 font-serif">"</div>
        )}
        <p className={`text-base leading-relaxed ${
          isQuote 
            ? 'text-zinc-700 dark:text-zinc-300 font-medium italic' 
            : 'text-zinc-800 dark:text-zinc-200'
        }`}>
          {content}
        </p>
        {author && (
          <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 font-semibold">
            — {author}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex gap-1 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className={`text-[10px] px-1.5 py-0.5 rounded ${
                  isQuote
                    ? 'bg-zinc-200 dark:bg-zinc-700/70 text-zinc-600 dark:text-zinc-400'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ThoughtsPage() {
  // Distribuer les pensées en évitant l'adjacence de même type
  const distributedThoughts = distributeThoughts(thoughts)
  
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Mur de pensées
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Réflexions en vrac. Des pensées courtes, sans filtre, sur la technologie, la vie, 
            le monde qui change et les constantes qui demeurent.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
            {distributedThoughts.map((thought) => (
              <div key={thought.id} className="mb-8 break-inside-avoid">
                <ThoughtCard
                  content={thought.content}
                  tags={thought.tags}
                  author={thought.author}
                  type={thought.type}
                  image={thought.image}
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-16 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Ces pensées sont les miennes, elles n'engagent que moi à l'instant où elles ont été écrites.
          </p>
        </footer>
      </div>
    </Container>
  )
}