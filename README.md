# nuxt-heroes-and-villains

This is a simple web application built with [Nuxt.js](https://nuxtjs.org/). It lists hero and villain characters from various comics, movies, etc. and shows their details.  
**Live demo is [here](https://onderonur.github.io/nuxt-heroes-and-villains/).**

## 💻 Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
- Framework: [Nuxt.js](https://nuxtjs.org/)
- API: [superhero-api](https://akabab.github.io/superhero-api/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Vue-Awesome](https://justineo.github.io/vue-awesome/demo/)
- Linting: [ESLint](https://eslint.org/)
- Code Formatting: [Prettier](https://prettier.io/)
- Deployment: [GitHub Pages](https://pages.github.com/) (w/ [GitHub Actions](https://github.com/features/actions))

## ⌨️ Development

To start development, we should install our packages first.

```
npm install
```

After the installation is completed, we can run the app by:

```
npm run dev
```

and it will start at `http://localhost:3000`.

## 🚀 Build

To create a production build, we need to run the below command first:

```
npm run generate
```

This command will create our static files in `dist` folder to serve.  
After this step, we can run the app in `production` mode by:

```
npm start
```
