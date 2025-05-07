# 🚀 Tauri + Svelte 5 + TailwindCSS + shadcn/svelte

![Tauri](https://img.shields.io/badge/tauri-1.8-blue)
![Svelte](https://img.shields.io/badge/svelte-5-orange)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-4-06b6d4)

Template prêt à l'emploi pour développer des applications de bureau performantes et modernes avec Tauri, Svelte 5, TailwindCSS et shadcn/svelte. Cette combinaison de technologies offre un développement rapide et une expérience utilisateur exceptionnelle.

## ✨ Fonctionnalités

- [**🦀 Tauri**](https://tauri.app/) - Framework permettant de créer des applications de bureau légères en utilisant des technologies web
- [**⚡ Svelte 5**](https://svelte.dev/) - Framework JavaScript réactif avec les nouvelles fonctionnalités "runes"
- [**💨 TailwindCSS 4**](https://tailwindcss.com/) - Framework CSS utilitaire pour un design rapide et efficace
- [**🎨 shadcn/svelte**](https://next.shadcn-svelte.com/) - Composants UI réutilisables et accessibles
- [**📝 TypeScript**](https://www.typescriptlang.org/) - Support complet du typage statique
- [**📦 Vite**](https://vite.dev/) - Build tooling ultra rapide

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (v20 ou plus récent)
- [Rust](https://www.rust-lang.org/tools/install)
- Dépendances Tauri: [Guide d'installation](https://tauri.app/start/prerequisites/)

## 🚀 Pour commencer

1. Clonez ce dépôt
2. Installez les dépendances:

```bash
# Avec npm
npm install

# Avec pnpm
pnpm i

# Avec yarn
yarn
```

## 💻 Développement

Lancez l'application en mode développement:

```bash
# Avec npm
npm run tauri dev

# Avec pnpm
pnpm tauri dev

# Avec yarn
yarn tauri dev
```

## 🏗️ Build

Créez une version de production de votre application:

```bash
# Avec npm
npm run tauri build

# Avec pnpm
pnpm tauri build

# Avec yarn
yarn tauri build
```

Les fichiers compilés se trouveront dans le dossier `src-tauri/target/release`.

## 📂 Structure du projet

```
├── src/                  # Code Svelte
│   ├── lib/              # Composants et utilitaires
│   │   ├── components/   # Vos composants
│   │   ├── shadcn/       # Composants shadcn/svelte
│   └── routes/           # Pages de l'application
├── src-tauri/            # Code Rust pour Tauri
│   ├── src/              # Code source Rust
│   └── tauri.conf.json   # Configuration Tauri
├── static/               # Fichiers statiques
└── ...                   # Fichiers de configuration
```


## 🔐 Authentification

Ce template propose plusieurs stratégies d'authentification prêtes à l'emploi côté front, avec une intégration par défaut pour Laravel Sanctum.

### Fonctionnement (Sanctum)

- Les pages `/auth/login`, `/auth/register`, `/auth/forgot-password` et `/auth/reset-password` utilisent les fonctions de `$lib/auth/sanctum`.
- Les appels se font via axios, avec gestion automatique du cookie CSRF (`/sanctum/csrf-cookie`) et des credentials (`withCredentials: true`).
- **Il est nécessaire de mettre en place un backend compatible** : le front ne fonctionne pas sans un serveur qui expose les routes suivantes :
  - `GET /sanctum/csrf-cookie` (obligatoire avant tout POST d'auth)
  - `POST /api/login` (connexion)
  - `POST /api/register` (inscription)
  - `POST /api/forgot-password` (mot de passe oublié)
  - `POST /api/reset-password` (réinitialisation du mot de passe)
  - `GET /api/user` (infos utilisateur, nécessite le cookie de session ou un token)
- Le token retourné est stocké dans le localStorage côté front.
- Le front gère la redirection et l'affichage des erreurs.

### Exemple de configuration backend (Laravel)

1. Installer Sanctum et configurer les CORS pour autoriser l'origine de l'app Tauri/Svelte.
2. S'assurer que les routes API d'auth sont bien exposées (voir [doc Sanctum](https://laravel.com/docs/11.x/sanctum#spa-authentication)).
3. Adapter l'URL du backend dans `.env` (`PUBLIC_BACKEND_URL`).

### Autres stratégies

Le dossier `$lib/auth/` propose aussi des intégrations pour JWT, Passport, OAuth, etc. Pour changer de stratégie, modifiez simplement l'import dans vos pages d'authentification.

> **Astuce** : Consultez le code de `$lib/auth/sanctum.ts` et des pages `/auth/login`, `/auth/register`, `/auth/forgot-password` et `/auth/reset-password` pour voir un exemple complet.

## 🔧 Personnalisation

Vous pouvez personnaliser l'application en modifiant:

- `src-tauri/tauri.conf.json` pour la configuration de Tauri
- `components.json` pour la configuration de shadcn