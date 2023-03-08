<h1 align="center">
Testing Class with Jest
</h1>

<div align="center">

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)


</div>

## Development

To get a local copy, clone it using:
```
git clone https://github.com/castromaciel/template-vite-react-ts.git
```

### Make it your own

```
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

```
yarn install
or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script            | Description                                         |
| ----------------- | --------------------------------------------------- |
| yarn build        | Builds the app for production to the `dist` folder. |
| yarn dev          | Runs the app in the development mode.               |
| yarn preview      | Start a local web server that serves the built solution from ./dist for previewing |
| yarn test         | Runs tests with jest.                               |
| yarn test:watch   | Runs tests with jest in observer mode.              |

## Base Dependencies

- [axios](https://github.com/axios/axios) for networking.
- [sass](https://sass-lang.com/) for stylesheets.
- [jest](https://facebook.github.io/jest/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

## Folder Structure

```
practice-testing
├── .github/workflows
├── node_modules
├── docs
├── public
│   └── vite.svg
└── src
    ├── __tests__
    ├── assets
        ├── react.svg
    ├── pages
    ├── App.scss
    ├── App.tsx
    ├── index.scss
    ├── main.tsx
    └── vite-env.d.ts
├── .env.development
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .babel.config.json
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
├── yarn.lock
```

## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

Vite Template React with TypeScript is built and maintained by [Castro Maciel](https://github.com/castromaciel)

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
