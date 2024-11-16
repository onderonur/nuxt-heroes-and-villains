# nuxt-heroes

This is a simple web application built with [Nuxt](https://nuxt.com/). It lists hero and villain characters from various comics, movies, etc. and shows their details.  
**Live demo is [here](https://onderonur.github.io/nuxt-heroes/).**

## 💻 Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
- Framework: [Nuxt](https://nuxt.com/)
- API: [superhero-api](https://akabab.github.io/superhero-api/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Nuxt Icon](https://github.com/nuxt-modules/icon)
- Linting: [ESLint](https://eslint.org/)
- Code Formatting: [Prettier](https://prettier.io/)
- Deployment: [GitHub Pages](https://pages.github.com/) (w/ [GitHub Actions](https://github.com/features/actions))

## ⌨️ Development

To start development, we should install our packages first.

```bash
pnpm install
```

After the installation is completed, we can run the app by:

```bash
pnpm dev
```

and it will start on `http://localhost:3000`.

## 🚀 Build

To create a production build, we need to run the below command first:

```bash
pnpm generate
```

This command will create our static files in `dist` folder to serve.  
After this step, we can run the app in `production` mode by:

```bash
pnpm start
```
