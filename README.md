# React + TypeScript + Vite + Tailwindcss

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Updating this template

Most of the packages are at or near their current latest versions as of May 2025.
Here's what you can do to ensure everything is fully updated:

First, let's check for any outdated packages with npm:

```bash
npm outdated
```

Then, update all packages to their latest versions:

```bash
npm update
```

For more specific control, you can update major versions if needed:

```bash
npm install react@latest react-dom@latest
npm install --save-dev @eslint/js@latest @types/react@latest @types/react-dom@latest @vitejs/plugin-react@latest autoprefixer@latest eslint@latest eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest globals@latest postcss@latest tailwindcss@latest typescript@latest typescript-eslint@latest vite@latest
```

After running the update commands, I recommend checking that everything works properly by:

Running the development server:

```bash
npm run dev
```

Building the project:

```bash
npm run build
```

Commit your changes.

## Connect to your new GitHub repo

Great! Now that you've updated and committed all the dependencies, let's connect your local template repo to a new GitHub repository. Here's a step-by-step guide:

1. Create the new repository on GitHub first
   Go to github.com, log in to your account, and create a new repository, e.g. "my-new-repo". Don't initialize it with a README, .gitignore, or license so it will be completely empty.

2. Rename your local project (optional)
   If you want your local directory to match the new repo name:

```bash
# Navigate up one directory
cd ..

# Rename the directory
mv fe-project-template my-new-repo

# Enter the renamed directory
cd my-new-repo
```

3. Update your package.json
   Edit your package.json to update the project name:

```bash
# Open package.json in your preferred editor and change:
# "name": "fe-project-template" to "name": "my-new-repo"
```

4. Change the remote URL
   Now change the Git remote URL to point to your new GitHub repository:

```bash
# Check current remote
git remote -v

# Remove the current origin
git remote remove origin

# Add the new origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/my-new-repo.git
```

5. Push your code to the new repository

```bash
# Push your code to the new repository
git push -u origin main
```

6. Verify the connection
   To make sure everything is properly connected:

```bash
git remote -v
```

This should display the new repository URL as your origin.

That's it! Your local template repo is now connected to the new "my-new-repo" repository on GitHub. You can now start building your website using this template as a foundation.
