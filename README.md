# BARB'R Barbershop

Site vitrine one-page pour le barber shop **BARB'R** à Marseille 13001.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** (design system : couleurs orange/noir, polices condensées Anton + Oswald)
- **Framer Motion** (animations au scroll, parallax hero, lightbox, menu mobile)
- **Lucide React** (icônes — aucun emoji)

## Structure

```
index.html              # entrée Vite (meta SEO + Open Graph + polices)
src/
  main.tsx              # bootstrap React
  App.tsx               # assemblage des sections
  index.css             # base Tailwind + utilitaires
  data/site.ts          # tout le contenu centralisé (textes, images, icônes)
  components/
    Nav, Hero, About, Gallery, Vibe, Booking, Contact, Footer, Lightbox
    ui/Reveal.tsx        # wrapper d'animation au scroll réutilisable
    ui/SectionHeading.tsx
public/images/          # visuels du salon
```

## Développement

```bash
npm install
npm run dev      # serveur local http://localhost:5173
npm run build    # build de production -> dist/
npm run preview  # aperçu du build
```

## Déploiement

Le site est hébergé en statique sur `barbr.ghost-service.fr` (FTP).

À chaque `git push` sur `main`, GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
**build le projet puis envoie `dist/` sur le FTP**.

Secrets requis (repo → Settings → Secrets and variables → Actions) :

| Secret | Valeur |
|--------|--------|
| `FTP_SERVER` | `barbr.ghost-service.fr` |
| `FTP_USERNAME` | `admin-barbr@barbr.ghost-service.fr` (format complet) |
| `FTP_PASSWORD` | mot de passe FTP |

## Widgets à activer (avis Google + feed Instagram)

Les sections **Avis** et **Instagram** affichent une version statique par défaut, et
basculent automatiquement sur le widget live dès qu'un identifiant est renseigné dans
[src/data/site.ts](src/data/site.ts) → `WIDGETS`.

### Avis Google (Trustindex — gratuit)
1. Crée un compte sur https://www.trustindex.io
2. Connecte la fiche Google « BARB'R Barbershop » et génère un widget « Google Reviews »
3. Copie l'URL du loader fournie (du type `https://cdn.trustindex.io/loader.js?xxxx`)
4. Colle-la dans `WIDGETS.trustindexSrc`

### Feed Instagram (SnapWidget — gratuit)
1. Crée un compte sur https://snapwidget.com
2. Connecte le compte `@barbr._13` et crée un widget (Grid ou Slider)
3. Copie l'URL d'embed (du type `https://snapwidget.com/embed/1234567`)
4. Colle-la dans `WIDGETS.snapwidgetSrc`

> ⚠️ Les **stories** Instagram/Snapchat ne sont pas intégrables (éphémères, aucune API
> publique). Le feed affiche les **publications** récentes, pas les stories.

Après modification : `npm run build` puis push (ou redéploiement FTP).

## Infos salon

- Adresse : `1A Rue Chateauredon, 13001 Marseille`
- Téléphone : `07 49 46 78 69`
- Réservation via Instagram : `https://instagram.com/barbr._13`
- Horaires : Mardi – Samedi 10h–20h, Lundi & Dimanche sur RDV
