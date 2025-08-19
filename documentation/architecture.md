# Architecture du Site Scriptami

## Stack Technique

### Frontend
- **Framework**: Next.js 14+ avec App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Composants custom + Headless UI

### Structure des Dossiers

```
personal-site/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   └── [slug]/             # Pages dynamiques
│   │       └── page.tsx
│   ├── components/             # Composants React
│   │   ├── Layout.tsx          # Layout wrapper
│   │   ├── Container.tsx       # Container responsive
│   │   └── SocialIcons.tsx     # Icônes réseaux sociaux
│   ├── data/                   # Données statiques
│   │   ├── services.ts         # Contenu services
│   │   ├── projects.ts         # Portfolio projets
│   │   └── articles.ts         # Articles blog
│   ├── lib/                    # Utilitaires
│   │   └── articles.ts         # Gestion articles
│   ├── styles/                 # Styles globaux
│   │   └── tailwind.css
│   └── types/                  # Types TypeScript
│       └── content.ts
├── public/                     # Assets statiques
│   ├── images/
│   └── favicon.png
└── documentation/              # Documentation projet
```

## Flux de Données

### Pages Statiques
1. Données stockées dans `/src/data/`
2. Importées dans les pages
3. Rendu côté serveur (SSG)

### Formulaires
1. Formulaire de devis → API Route `/api/devis`
2. Validation côté client et serveur
3. Envoi email via service tiers

## Patterns Utilisés

### Container Pattern
Tous les contenus utilisent le composant `Container` pour:
- Largeur maximale responsive
- Padding cohérent
- Centrage automatique

### Data-Driven Pages
Les pages complexes utilisent:
```typescript
const content = {
  header: { title, intro },
  sections: [{ id, title, items }]
}
```

### Metadata Pattern
Chaque page exporte ses métadonnées:
```typescript
export const metadata: Metadata = {
  title: "...",
  description: "..."
}
```

### Layout Masonry (Mur de pensées)
Le mur de pensées utilise CSS columns pour un layout masonry:
```css
columns-1 sm:columns-2 lg:columns-3
break-inside-avoid /* Évite la cassure des cartes */
```
- Positionnement naturel selon la hauteur des blocs
- Responsive: 1-3 colonnes selon la taille d'écran
- Mélange pensées personnelles, citations et images

## Routes Principales

| Route | Description | Fichier |
|-------|------------|---------|
| `/` | Accueil | `app/page.tsx` |
| `/services` | Services proposés | `app/services/page.tsx` |
| `/portrait-*` | Portrait | `app/portrait-*/page.tsx` |
| `/projets-*` | Portfolio | `app/projets-*/page.tsx` |
| `/references-*` | Références | `app/references-*/page.tsx` |
| `/devis-*` | Formulaire devis | `app/devis-*/page.tsx` |

## Optimisations

### Performance
- Images optimisées avec Next/Image
- Code splitting automatique
- Prefetching des liens

### SEO
- Métadonnées personnalisées par page
- URLs descriptives avec mots-clés
- Schema.org à implémenter

### Accessibilité
- Semantic HTML
- ARIA labels
- Navigation clavier