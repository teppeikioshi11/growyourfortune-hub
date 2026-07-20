## Plan de création du site d'investissement

### Objectif
Créer un site vitrine d'investissement professionnel avec 5 rubriques accessibles via la navigation de pied de page : Accueil, Plans d'investissement, Vos produits, Équipe et Mon compte.

### Choix de design validés
- **Palette** : Midnight Indigo — `#0a0a1a`, `#141432`, `#1e1e5a`, `#4f46e5`
- **Typographie** : Libre Baskerville (titres) + IBM Plex Sans (corps)
- **Layout d'accueil** : Bento grid — grille de blocs de tailles variées, moderne et structurée

### Structure des routes
Toutes les rubriques seront des pages distinctes pour le SEO et le partage :

| Route | Fichier | Contenu |
|-------|---------|---------|
| `/` | `src/routes/index.tsx` | Accueil avec hero Bento grid, présentation générale |
| `/plans-investissement` | `src/routes/plans-investissement.tsx` | Grille de plans d'investissement (Starter, Growth, Premium, etc.) |
| `/vos-produits` | `src/routes/vos-produits.tsx` | Produits financiers proposés |
| `/equipe` | `src/routes/equipe.tsx` | Présentation de l'équipe |
| `/mon-compte` | `src/routes/mon-compte.tsx` | Espace client (formulaire de connexion / dashboard minimal) |

### Composants partagés
- `src/components/Header.tsx` : navigation principale avec logo et liens
- `src/components/Footer.tsx` : navigation des 5 rubriques demandée
- `src/components/ui/` : cartes de plans, cartes produits, cartes équipe

### Système de design
- Mise à jour de `src/styles.css` avec les tokens Midnight Indigo en oklch
- Chargement des polices Google Fonts via `<link>` dans `src/routes/__root.tsx`
- Composants shadcn/ui personnalisés via les variables CSS (pas de couleurs en dur)

### SEO
- Métadonnées uniques (`head()`) pour chaque route
- `public/robots.txt` et `src/routes/sitemap[.]xml.ts`

### Étapes d'implémentation
1. Mettre à jour les tokens CSS dans `src/styles.css` avec la palette Midnight Indigo
2. Charger les polices Libre Baskerville et IBM Plex Sans dans `src/routes/__root.tsx`
3. Créer les composants Header et Footer
4. Créer les 5 pages de routes
5. Générer les images nécessaires pour hero et équipe
6. Ajouter `robots.txt` et `sitemap.xml`
7. Vérifier le build et le rendu visuel

### Livrable
Un site d'investissement multi-pages, responsive, avec une navigation footer claire et un design cohérent Midnight Indigo / Bento grid.