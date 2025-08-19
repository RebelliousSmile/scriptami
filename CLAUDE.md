# Site Personnel Scriptami - Guide de Développement

## Vue d'ensemble
Site personnel de François-Xavier Guillois, développeur senior opérant sous la marque Scriptami.
Framework: Next.js 14+ avec App Router, TypeScript, Tailwind CSS.

## Structure du projet

### Architecture des pages
- `/src/app/` - Pages Next.js avec App Router
- `/src/data/` - Fichiers de données pour le contenu des pages
- `/src/components/` - Composants React réutilisables
- `/src/types/` - Types TypeScript

### Pages principales
- `/` - Page d'accueil
- `/portrait-francois-xavier-guillois` - Portrait personnel
- `/services` - Services proposés (fusion activités + forces)
- `/thoughts` - Mur de pensées (microblog) - Layout masonry CSS columns
- `/projets-realisations-scriptami` - Portfolio projets
- `/references-collaborations-professionnelles-scriptami` - Références clients
- `/mentions-legales-scriptami` - Mentions légales
- `/devis-gratuit-pour-vos-envies-web` - Formulaire de devis

## Conventions de développement

### Nommage des fichiers
- Pages: URLs en kebab-case avec mots-clés SEO
- Composants: PascalCase
- Données: camelCase avec suffixe Content

### Structure des données
Les pages utilisent un pattern uniforme via `PageContent<T>`:
```typescript
interface PageContent<T> {
  header: {
    title: string
    intro: string
  }
  sections: {
    id: string
    title: string
    items: T[]
  }[]
}
```

### Métadonnées SEO
Chaque page DOIT avoir des métadonnées optimisées:
- Title: 60 caractères max, incluant "François-Xavier Guillois"
- Description: 150-160 caractères, mots-clés pertinents
- Structure: export const metadata: Metadata = {...}

### Composants réutilisables
- `Container` - Conteneur responsive standard
- `SectionTitle` - Titre de section uniforme
- `Activity/Service` - Composants pour lister les services

## Commandes importantes
```bash
pnpm dev      # Développement local
pnpm build    # Build production
pnpm lint     # Vérifier le code
```

## Points d'attention
- NE PAS créer "Écrivain public" dans les services
- Toujours optimiser les descriptions pour le SEO
- Utiliser pnpm (pas npm)
- Les images sont dans `/public/images/`
- **ESLint entités**: Échapper les apostrophes avec `&apos;` et les guillemets avec `&quot;` dans JSX

## Intégrations
- Formulaire de contact: API route `/api/devis`
- Analytics: À configurer
- Newsletter: Intégration à prévoir

## À faire
- Migration des anciennes pages activités/forces vers /services
- Optimisation des images
- Ajout sitemap.xml
- Configuration robots.txt