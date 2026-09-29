# Wesley DuSell — 21 Years of Making the Web

An Angular 21 cinematic tribute to web development, beginning with the overlapping movements of 2005–2010.

## Run locally

```sh
npm ci
npm start
```

Open http://localhost:4200. Scroll to travel through six chapters, use the timeline or chapter index to jump, or use the main button to advance. Motion can be paused and respects the operating system's reduced-motion preference. Chapter navigation and dialogs support the keyboard.

## Story and visuals

- `src/app/journey/chapters.ts`: chapter copy, dates, labels, and illustrative historical code.
- `src/app/journey/artifact.ts`: lightweight CSS 3D artifacts, without a WebGL dependency.
- `src/app/journey/journey.ts`: signal-based scene selection and navigation.
- `src/styles.scss`: scene styling, responsive layouts, and motion.

The dates describe overlapping movements rather than exact invention dates. The project information dialog includes historical context and references. The first era is complete; later eras are intentionally not invented. Fonts are loaded from Google Fonts with local fallbacks.

## Validation

```sh
npm test -- --watch=false
npm run build
```

## Deployment

The existing GitHub Actions workflow deploys pushes to `main` to the configured frontend host. It now runs tests and builds the production configuration. It requires `DROPLET_IP`, `SSH_HOST_FINGERPRINT`, and `SSH_PRIVATE_KEY` repository secrets. Output is built into `dist/wesleydusell/browser` and copied to `/opt/wesleydusell.com/`.

Domain/DNS, TLS, and host configuration are managed outside this repository. Local work does not publish the site until pushed through the deployment workflow.
