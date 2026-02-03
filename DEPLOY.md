# Deployment Guide

This guide provides instructions for deploying the Amazon Clone application.

## 🛠️ Build Process

Before deploying, you must create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` directory containing all static assets.

## 🚀 Hosting Options

### Vercel / Netlify

Both Vercel and Netlify offer excellent support for Vite-based React applications.

1. Connect your GitHub repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. (Optional) Configure environment variables in the dashboard.

### GitHub Pages

To deploy to GitHub Pages:

1. Install the `gh-pages` package: `npm install -D gh-pages`.
2. Update `vite.config.js` to include the `base` property (usually your repository name).
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

## ⚙️ Environment Variables

Ensure all necessary environment variables are configured in your hosting platform's settings, following the template in `.env.example`.
