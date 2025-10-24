CONTRIBUTION GUIDELINES — YT-Thumbnailer

Thanks for wanting to contribute! The project accepts contributions via pull requests from forks or branches; please follow these steps and guidelines to make review fast and simple.

1) Getting started
- Fork the repository on GitHub.
- Clone your fork locally and create a feature branch:
  - `git checkout -b feat/short-description` (use `fix/`, `refactor/`, `UI/` as appropriate)

2) Development workflow
- Make small, focused commits.
- Rebase or merge from `main` before opening a PR to keep history clean.
- Run linting and tests locally before pushing.

3) Branch naming
- Use the following prefixes: `feat/`, `fix/`, `refactor/`, `UI/`, `docs/`, `chore/`.
- Keep branch names short and kebab-cased, e.g. `feat/add-default-thumbnails`.

4) Commit message format
- Use a concise prefix in the commit subject. Examples:
  - `feat: add default thumbnails on initial load`
  - `fix: prevent badge overflow in thumbnail grid`
  - `refactor: split ThumbnailDisplay into smaller components`
  - `UI: align header and title spacing`
  - `docs: update README with contribution links`
- Keep subject under 72 characters when possible.
- Add a short body if more context is needed.

5) Pull request
- Open a PR to `main` from your branch.
- Use a clear title and description describing the change, why it was made, and how to test.
- Link related issues if any.
- Add screenshots for UI changes.

6) Code review
- A maintainer will review the PR. Please respond to review comments promptly.
- Keep PRs small — they merge faster and are easier to review.

7) Tests & CI
- Add tests for any non-trivial logic.
- CI should pass (lint, build, unit tests) before merging.

8) Licensing
- By contributing, you agree that your contributions will be made under the project's license (MIT).

9) Style
- Follow the conventions listed in `STANDARDS.md` (naming, formatting, CSS conventions).


Thanks again — contributions are welcome and appreciated!
