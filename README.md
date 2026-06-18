# Natalia Grzeskiewicz QA Portfolio

Static, dependency-free portfolio site for GitHub Pages or Netlify.

## Edit links

- GitHub profile links currently point to `https://github.com/ThisNatOne`.
- Featured project links currently point to:
  - `https://github.com/ThisNatOne/QASandboxTests`
  - `https://github.com/ThisNatOne/QASandbox`
- If the repository names differ, update the two links in `experience.html`.

## Replace images

Replace these files without changing HTML:

- `assets/images/hero-travel.jpg`
- `assets/images/headshot-placeholder.jpg`
- `assets/images/photo-strip-1.jpg`
- `assets/images/photo-strip-2.jpg`
- `assets/images/photo-strip-3.jpg`
- `assets/images/accent-banner.jpg`

## Add a new page

1. Copy `contact.html` or `experience.html`.
2. Change the `body data-page` value and page content.
3. Add one link to `partials/nav.html`.

Because the nav and footer are loaded with `fetch`, preview locally through a tiny static server rather than opening files directly.
