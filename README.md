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

## 🔧 Personnalisation

Vous pouvez personnaliser l'application en modifiant:

- `src-tauri/tauri.conf.json` pour la configuration de Tauri
- `components.json` pour la configuration de shadcn