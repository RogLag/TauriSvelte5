# 🚀 Tauri + Svelte 5 + TailwindCSS + shadcn/svelte

![Tauri](https://img.shields.io/badge/tauri-1.8-blue)
![Svelte](https://img.shields.io/badge/svelte-5-orange)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-4-06b6d4)

Template prêt à l'emploi pour développer des applications de bureau performantes et modernes avec Tauri, Svelte 5, TailwindCSS et shadcn/svelte. Cette combinaison de technologies offre un développement rapide et une expérience utilisateur exceptionnelle.

## ✨ Fonctionnalités

- **🦀 Tauri** - Framework permettant de créer des applications de bureau légères en utilisant des technologies web
- **⚡ Svelte 5** - Framework JavaScript réactif avec les nouvelles fonctionnalités "runes"
- **💨 TailwindCSS 4** - Framework CSS utilitaire pour un design rapide et efficace
- **🎨 shadcn/svelte** - Composants UI réutilisables et accessibles
- **📝 TypeScript** - Support complet du typage statique
- **📦 Vite** - Build tooling ultra rapide

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (v18 ou plus récent)
- [Rust](https://www.rust-lang.org/tools/install)
- Dépendances Tauri: [Guide d'installation](https://tauri.app/v1/guides/getting-started/prerequisites)

## 🚀 Pour commencer

1. Clonez ce dépôt
2. Installez les dépendances:

```bash
# Avec npm
npm install

# Avec pnpm
pnpm install

# Avec yarn
yarn
```

## 💻 Développement

Lancez l'application en mode développement:

```bash
# Avec npm
npm run dev

# Avec pnpm
pnpm dev

# Avec yarn
yarn dev
```

## 🏗️ Build

Créez une version de production de votre application:

```bash
# Avec npm
npm run build

# Avec pnpm
pnpm build

# Avec yarn
yarn build
```

Les fichiers compilés se trouveront dans le dossier `src-tauri/target/release`.

## 📂 Structure du projet

```
├── src/                  # Code Svelte
│   ├── lib/              # Composants et utilitaires
│   │   ├── shadcn/       # Composants shadcn/svelte
│   └── routes/           # Pages de l'application
├── src-tauri/            # Code Rust pour Tauri
│   ├── src/              # Code source Rust
│   └── tauri.conf.json   # Configuration Tauri
├── static/               # Fichiers statiques
└── ...                   # Fichiers de configuration
```

## 🔧 Personnalisation

Vous pouvez personnaliser l'application en modifiant:

- `src-tauri/tauri.conf.json` pour la configuration de Tauri
- `tailwind.config.js` pour la configuration de TailwindCSS
- `components.json` pour la configuration de shadcn

## 📝 Licence

[MIT](LICENSE)
