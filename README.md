# 🚀 React + Tailwind + Vite Starter

Un starter minimaliste, rapide et propre pour lancer n'importe quel projet front-end en **React 18**, **Tailwind CSS**, et **Vite** ⚡

---

## 🧰 Technologies utilisées

- ⚛️ [React 18](https://reactjs.org/)
- 🎨 [Tailwind CSS 3](https://tailwindcss.com/)
- ⚡ [Vite](https://vitejs.dev/) pour un bundling ultra-rapide
- 🛠️ [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer)

---

## 📦 Structure du projet

monapp/
├── public/ # Fichiers statiques
├── src/ # Composants React + fichiers CSS
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Fichier Tailwind
├── tailwind.config.js # Config Tailwind
├── postcss.config.js # Config PostCSS
├── index.html # Entrée Vite
└── package.json

yaml
Copier

---

## ▶️ Démarrer le projet

### 1. Cloner ce repo
```bash
git clone https://github.com/<ton-pseudo>/monapp-starter.git
cd monapp-starter
```
2. Supprimer le lien Git (si tu veux repartir de zéro)
```bash
Copier
rm -rf .git
```
3. Installer les dépendances
```bash
Copier
npm install
```
4. Lancer le serveur de développement
```bash
Copier
npm run dev
```
👉 Ouvre http://localhost:5173

📋 Personnalisation
Ajouter des plugins Tailwind : dans tailwind.config.js

Créer des composants : dans src/

Ajouter des routes (option) : avec React Router DOM

❤️ Crédits
Ce starter est maintenu par Baptiste (aka Kacktucz)
Utilisez-le librement, forkez-le, contribuez, partagez !

🧙‍♂️ Pourquoi ce starter ?
Pour ne plus jamais perdre 2h à réinstaller Tailwind, React, et configurer Vite correctement 💡

yaml
Copier
