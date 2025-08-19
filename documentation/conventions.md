# Conventions de Code - Site Scriptami

## TypeScript

### Types et Interfaces
- Préférer `interface` pour les objets
- Utiliser `type` pour les unions et types utilitaires
- Toujours typer les props des composants

```typescript
// Bon
interface ServiceProps {
  title: string
  description: string
}

// Type pour les unions
type Status = 'pending' | 'active' | 'completed'
```

### Imports
- Imports absolus avec alias `@/`
- Grouper par catégorie: React, Next, libs, composants, types

```typescript
import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { servicesContent } from '@/data/services'
```

## React/Next.js

### Composants
- Un composant par fichier
- Props typées explicitement
- Destructuring des props

```typescript
function Service({ title, description }: ServiceProps) {
  return (...)
}
```

### Pages
- Utiliser `export default` pour les pages
- Metadata exportée séparément
- Structure cohérente: header + sections

```typescript
export const metadata: Metadata = {...}
export default function PageName() {...}
```

## Tailwind CSS

### Classes
- Mobile-first: classes de base puis `sm:`, `md:`, `lg:`
- Grouper par catégorie: layout, spacing, typography, colors
- Utiliser `clsx` pour les classes conditionnelles

```typescript
className="mt-16 sm:mt-32"  // Spacing responsive
className="text-zinc-800 dark:text-zinc-100"  // Dark mode
```

### Spacing
- Utiliser l'échelle Tailwind standard
- `mt-16 sm:mt-20` pour les grandes sections
- `space-y-16` pour l'espacement vertical uniforme

## Contenu et SEO

### URLs
- Kebab-case avec mots-clés SEO
- Français accepté pour le référencement local
- Exemple: `/portrait-francois-xavier-guillois`

### Métadonnées
```typescript
export const metadata: Metadata = {
  title: 'Titre - François-Xavier Guillois',  // 60 car max
  description: 'Description de 150-160 caractères...'
}
```

### Structure de Données
Pattern uniforme pour toutes les pages:
```typescript
interface PageContent<T> {
  header: {
    title: string      // H1 de la page
    intro: string      // Paragraphe d'introduction
  }
  sections: Section<T>[]
}
```

## Git et Commits

### Messages de Commit
- En français
- Préfixe par type: feat, fix, docs, style, refactor
- Exemple: `feat: ajout page services unifiée`

### Branches
- `main` pour la production
- `dev/feature-name` pour le développement

## Performance

### Images
- Utiliser Next/Image toujours
- Images dans `/public/images/`
- Alt text descriptif obligatoire

### Lazy Loading
- Components lourds avec `dynamic()`
- Images avec Next/Image (automatique)

## Accessibilité

### HTML Sémantique
- `<nav>`, `<main>`, `<section>`, `<article>`
- `role` et `aria-label` quand nécessaire

### Navigation
- Liens avec texte descriptif
- Focus visible pour le clavier
- Skip links si nécessaire

## Tests

### Commandes
```bash
pnpm lint      # ESLint
pnpm typecheck # TypeScript
pnpm build     # Build test
```

### Checklist Avant Commit
1. ✓ pnpm lint passe
2. ✓ Pas d'erreurs TypeScript
3. ✓ Build réussit
4. ✓ SEO optimisé
5. ✓ Responsive testé