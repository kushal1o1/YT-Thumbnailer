Project Standards — YT-Thumbnailer

This document summarizes the main conventions used in this repository to keep code consistent, readable and maintainable.

1) General goals
- Readability and small surface area over clever code.
- Use explicit typing in TypeScript for public APIs.
- Keep components small and focused.

2) File & folder naming
- Files: use kebab-case for filenames (e.g. `thumbnail-display.tsx`, `url-input.css`).
- React components: PascalCase file and component name (e.g. `ThumbnailDisplay.tsx`).
- Assets: keep in `src/assets/` and name `screenshot1.png`, `logo.svg` etc.
- Types: keep all types under `src/types/` and use `*.ts` (e.g. `types.ts`).

3) Variable, function & type naming
- Use camelCase for variables, functions and object keys (e.g. `videoId`, `fetchThumbnails`).
- Use PascalCase for React components and Type aliases / interfaces (e.g. `ThumbnailInfo`).
- Keep names short but descriptive.

4) TypeScript
- Prefer `interface` for exported object shapes and `type` for unions/aliases.
- Avoid `any`. If absolutely necessary, document why and scope narrowly.
- Use strict/null checks where possible (project uses `strict` in tsconfig).

5) React & components
- Prefer functional components and hooks.
- Keep components focused: one responsibility per file when practical.
- Props: provide explicit prop types and default values where appropriate.
- Side effects: place in `useEffect` and keep effects idempotent.

6) CSS & Styling
- Use kebab-case class names and BEM-like structure where helpful (e.g. `.thumbnail-card__image`).
- Keep component CSS in `src/components/` named after the component (e.g. `ThumbnailDisplay.css`).
- Prefer simple, composable utility classes for spacing if repeated.
- Avoid deep selector chains. Keep specificity low.

7) Formatting & linters
- Use Prettier default rules (2 spaces, trailing commas as per Prettier default).
- ESLint with TypeScript rules is recommended; prefer fixable rules on commit.
- Run `npm run lint` and `npm run format` before opening PRs.

8) Comments & documentation

9) Commit messages (short summary)
- Use conventional-style prefixes: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `test:`, `UI:`.
- Example: `feat: add default thumbnails on initial load`.

10)  Branching
- Use feature branches named like `feat/<short-description>`, `fix/<short-description>`.

11)  Accessibility
- Use semantic HTML when possible.
- Provide alt text for images; keyboard-accessible controls for interactive elements.

12)  Security
- Do not commit secrets or API keys. Use environment variables for config.

13)  Infra & CI notes
- Keep CI checks fast: unit tests + lint + build.

If you want to adopt additional rules (pre-commit hooks, stricter lint rules), open a PR and we will integrate them.
