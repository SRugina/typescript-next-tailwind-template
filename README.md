# TypeScript, NextJS, TailwindCSS Template

## Setup

Ensure you have nodejs and yarn installed, then:

```sh
yarn
```

```
cp .env.example .env
```

Fill the `.env` file with the api url.

## Usage

### Build

To export as a static site:

```sh
yarn build
```

### Watch & Serve

To watch for changes and serve the site on localhost:

```sh
yarn dev
```
### Serve

To serve locally without watching for code changes:

```sh
yarn start
```

### Automatic pre-commit checks

Before a commit is made, all `.ts`, `.tsx`, and `.js` files will automatically be linted by eslint and formatted by prettier.

To run those checks manually:

```sh
yarn lint
yarn format
```

### Automatic pre-push checks

Before a push is made, the code will be type checked to ensure there are no typescript issues.

To run this check manually:

```sh
yarn type-check
```

