# Rockwood Accounting & Tax Services

Static React/Vite marketing site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## GitHub Pages

This project uses Vite with `base: "./"` and React Router's `HashRouter`, so it works on a GitHub Pages static host without a server-side rewrite configuration.

After pushing the repository to GitHub, use GitHub Actions to deploy the `dist/` build to GitHub Pages.

## Before launch

- Replace the placeholder Formspree endpoint in `src/pages/Contact.jsx`.
- Replace placeholder email/phone details with the firm's real contact information.
- Review all service/about copy for accuracy.
- Add a favicon and social preview image.
- Connect the custom domain, if applicable.
