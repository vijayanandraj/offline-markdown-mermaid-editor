# Offline Markdown + Mermaid Editor

A free, local-first Markdown editor with live preview and Mermaid diagram support. It is designed for people who want to write documentation without accounts, uploads, or server-side document storage.

## Highlights

- Side-by-side Markdown source and sanitized live preview
- Mermaid fenced blocks rendered locally
- Local image embedding as Base64, plus image URLs and relative paths
- Formatting toolbar, dark mode, local autosave, download, HTML copy, and scroll sync
- Works without network access after its three browser dependencies are available

## Run locally

```bash
npm install
npm run build
```

Then open `index.html` in a modern browser. The build copies the browser bundles into `vendor/`, so the app refers only to local files:

```text
vendor/marked.umd.js
vendor/purify.min.js
vendor/mermaid.min.js
```

## Mermaid example

````markdown
```mermaid
flowchart LR
  A[Write] --> B[Preview]
```
````

## Deploy to Vercel

Import this GitHub repository into Vercel. Vercel runs `npm run build`, creating the local `vendor/` directory before publishing the static site.

## Privacy

The editor stores drafts in the browser's local storage. It does not include an account system, analytics, or a document-upload service.

## License

[MIT](LICENSE)

## Third-party software

This project uses Marked, DOMPurify, and Mermaid. Their respective licenses apply to their bundled distributions.
