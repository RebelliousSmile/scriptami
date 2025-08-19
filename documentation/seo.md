# SEO - Site Scriptami

## Vue d'ensemble

Le site de François-Xavier Guillois (Scriptami) est optimisé pour le référencement local et les mots-clés métier en Haute-Savoie.

## Stratégie SEO

### Mots-clés principaux
- **Primaire** : "développeur web indépendant sur mesure", "partenaire technique de confiance"
- **Secondaires** : "développeur freelance aligné", "développement web personnalisé", "développeur remote France"
- **Longue traîne** : "développeur indépendant valeurs", "partenaire tech personnalisé", "automation intelligente PME", "développeur projets sens"

### Ciblage géographique
- **Zone principale** : Rumilly, Haute-Savoie (74)
- **Zone étendue** : Annecy, Chambéry, Genève
- **Mentions** : "Haute-Savoie", "74", "Rumilly" dans les contenus

## Pages et métadonnées

### Structure des URLs
Toutes les URLs incluent des mots-clés SEO :
```
/portrait-francois-xavier-guillois
/services
/thoughts
/projets-realisations-scriptami
/references-collaborations-professionnelles-scriptami
/devis-gratuit-pour-vos-envies-web
/mentions-legales-scriptami
```

### Template de métadonnées
```typescript
export const metadata: Metadata = {
  title: 'Page - François-Xavier Guillois', // 60 car max
  description: 'Description 150-160 caractères avec mots-clés'
}
```

### Pages optimisées

#### Page d'accueil
- **Title** : "François-Xavier Guillois - Développeur Senior, sous marque Scriptami, geek à temps plein"
- **Description** : Générique mais inclut nom + marque + géolocalisation

#### Services (/services)
- **Title** : "Services - Développement, E-commerce et Automatisation"
- **Description** : "Développeur senior avec 20 ans d'expérience, je vous accompagne dans votre transformation digitale : sites vitrines, e-commerce, automatisation par IA, formation et gamification. Expertise Prestashop, Magento, Woocommerce."
- **Mots-clés** : développeur senior, e-commerce, Prestashop, automatisation, formation

#### Microblog (/thoughts)
- **Title** : "Mur de pensées - François-Xavier Guillois"
- **Description** : "Micro-blog de François-Xavier Guillois : réflexions personnelles sur la technologie, la vie, le travail et le monde qui nous entoure."

#### Portrait
- **Title** : "Portrait"
- **Description** : "Je m'appelle François-Xavier Guillois. Je vis à Rumilly, en Haute-Savoie (74)..."
- **Géolocalisation** : Rumilly, Haute-Savoie explicitement mentionnées

## Contenu et structure

### Hiérarchie H1-H6
- **H1** : Unique par page, contient mots-clés principaux
- **H2-H3** : Structure logique avec mots-clés secondaires
- **Éviter** : H4-H6 (peu utiles SEO)

### Maillage interne
- **Navigation** : liens vers toutes les pages importantes
- **Footer** : répétition des liens principaux
- **Mentions légales** : données structurées contact

### Images
- **Alt text** : descriptif pour l'accessibilité
- **Noms de fichiers** : `select_1.jpg` (neutre)
- **Lazy loading** : automatique avec Next/Image
- **Formats** : JPG/PNG optimisés

## Contenu géolocalisé

### Mentions géographiques
- "Rumilly, Haute-Savoie (74)" dans le portrait
- "La fibre, les montagnes, et du code" (lifestyle local)
- Références à l'écosystème local (Annecy, etc.)

### Projets locaux
- SmartLockers (casiers connectés)
- Cabinet-partage.fr (serrures connectées)
- Références à des entreprises locales dans le contenu

## Données structurées

### Schema.org (à implémenter)
```json
{
  "@type": "Person",
  "name": "François-Xavier Guillois",
  "jobTitle": "Développeur Web Senior",
  "worksFor": {
    "@type": "Organization",
    "name": "Scriptami"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rumilly",
    "addressRegion": "Haute-Savoie",
    "postalCode": "74150",
    "addressCountry": "FR"
  }
}
```

### LocalBusiness (à implémenter)
```json
{
  "@type": "LocalBusiness",
  "name": "Scriptami",
  "image": "/images/pictoScriptami_180x180px.png",
  "description": "Développement web sur mesure en Haute-Savoie",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rumilly",
    "addressRegion": "Haute-Savoie"
  }
}
```

## Performance SEO

### Core Web Vitals
- **LCP** : Optimisé avec Next.js Image
- **FID** : JavaScript minimal, React optimisé
- **CLS** : Layout stable, pas de décalages

### Technique
- **Sitemap** : À générer automatiquement
- **Robots.txt** : À configurer
- **Canonical** : URLs propres sans duplicata
- **HTTPS** : Obligatoire pour le référencement

## Monitoring

### Outils recommandés
- **Google Search Console** : Suivi positions/erreurs
- **Google Analytics** : Trafic et comportement
- **PageSpeed Insights** : Performance
- **Semrush/Ahrefs** : Analyse concurrentielle

### KPIs à suivre
- Positions sur "développeur web indépendant sur mesure"
- Trafic organique qualifié (leads alignés sur les valeurs)
- Conversions formulaire de devis
- Taux de rebond par page
- Temps passé sur les pages de contenu éthique

## Évolution stratégique (Août 2024)

### Repositionnement
**Objectif** : Se faire connaître comme développeur indépendant **sélectif** et **aligné sur le sens**, sans excès de visibilité.

**Enjeux identifiés** :
- Peu de créneaux disponibles dans le planning → pas besoin de volume
- Géolocalisation Haute-Savoie modérément importante (clients télétravail)  
- Volonté de travailler avec des clients "qui font sens"
- Montrer la personnalité entière, pas juste les compétences techniques

### Ajustements apportés

#### 1. Section "Avec qui je travaille" (/services)
- **Fonction** : Filtre naturel basé sur les valeurs
- **Cibles** : Transparence, utilité communautaire, respect environnemental, innovation raisonnée
- **Ton** : Direct, authentique, anti-bullshit marketing
- **Impact SEO** : Réduit le volume mais améliore drastiquement la qualité des leads

#### 2. Section "Projets coup de cœur" (intégrée dans /references)
- **Fonction** : Montrer ce qui te plaît spécifiquement dans les collaborations
- **Contenu** : ONET (autonomie totale), Bikly (valeurs écologiques), Euroceramic (carte blanche)
- **Format** : 3 colonnes, paragraphes authentiques centrés sur ton ressenti
- **Impact** : Storytelling personnel au-delà des compétences techniques

#### 3. Microblog déconnecté du business
- **Principe** : Page personnelle montrant qui tu es **actuellement**
- **Effet** : Attraction naturelle des clients en phase avec ta personnalité

### Mots-clés révisés

#### Abandonner
- ❌ "développeur web Haute-Savoie" (trop restrictif géographiquement)
- ❌ Focus volume généraliste

#### Privilégier
- ✅ "développeur web indépendant sur mesure"
- ✅ "développement web éthique et transparent"
- ✅ "technologie au service de la communauté"
- ✅ "innovation responsable et raisonnée"
- ✅ "développeur remote France"
- ✅ "partenaire technique de confiance"
- ✅ "projets à impact environnemental positif"
- ✅ "développement durable numérique"

## Actions prioritaires

### À court terme
1. ✅ Métadonnées optimisées sur toutes les pages
2. ✅ URLs SEO-friendly  
3. ✅ Section "Avec qui je travaille" basée sur les valeurs (transparence, communauté, environnement, innovation)
4. ✅ Projets coup de cœur intégrés dans /references (format 3 colonnes)
5. ✅ Ton authentique et anti-corporate adopté
6. ⏳ Sitemap.xml automatique
7. ⏳ Robots.txt

### À moyen terme
1. ⏳ Schema.org (Person + LocalBusiness)
2. ⏳ Réduction focus géographique dans métadonnées
3. ⏳ Backlinks qualitatifs (partenaires alignés)
4. ⏳ Content marketing sélectif

### À long terme
1. ⏳ Veille et positionnement sur "développement éthique"
2. ⏳ Cas d'usage détaillés projets à impact
3. ⏳ Réseau professionnel ciblé (qualité > quantité)
4. ⏳ Thought leadership sur dev avec sens

## Bonnes pratiques

### Rédaction
- **Lisibilité** : phrases courtes, paragraphes aérés
- **Mots-clés** : naturels, pas de keyword stuffing
- **Expertise** : démontrer la compétence technique
- **Local** : mentionner régulièrement la géolocalisation

### Technique
- **Mobile-first** : responsive design obligatoire
- **Vitesse** : optimisation images et code
- **Accessibilité** : alt texts, semantic HTML
- **Sécurité** : HTTPS, sécurisation formulaires

### Contenu
- **Fraîcheur** : microblog régulièrement mis à jour
- **Pertinence** : contenu aligné avec les besoins clients
- **Originalité** : éviter le contenu dupliqué
- **Valeur ajoutée** : expertise vs concurrence