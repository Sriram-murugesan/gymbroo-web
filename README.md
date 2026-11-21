# Gymbroo Web

The landing page for [Gymbroo](https://github.com/Sriram-murugesan/Gymbroo), an offline workout tracker that
roasts you for skipping. It explains the app, shows its features and links to the Android download.

Built with **React 18** and **Vite**. No UI framework, just hand-written CSS in a pink, navy and black theme
taken from the hero artwork and the app itself.

## Sections

Hero with download button · Features · Roast levels · How it works · Privacy · Final download call-to-action

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Download button

The buttons point to the latest release of the app repo. For the direct download to work, the release asset must be
named exactly `app-arm64-v8a-release.apk`. The link lives in [`src/links.js`](src/links.js).

## Deploy to GitHub Pages

A workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
The site will then be live at `https://sriram-murugesan.github.io/gymbroo-web/`.

## Project layout

```
src/App.jsx       page sections and content
src/styles.css    theme tokens and styles
src/links.js      repo, releases and APK download URLs
src/assets/       hero artwork
public/           favicon and app icon
```
