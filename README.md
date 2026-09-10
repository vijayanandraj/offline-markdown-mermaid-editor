# Offline Markdown + Mermaid Editor

A free, local-first Markdown editor with live preview and Mermaid diagram support. It is designed for people who want to write documentation without accounts, uploads, or server-side document storage.

## Highlights

- Side-by-side Markdown source and sanitized live preview
- Mermaid fenced blocks rendered locally
- Local image embedding as Base64, plus image URLs and relative paths
- Formatting toolbar, dark mode, local autosave, Markdown download, PDF/DOCX export, HTML copy, and scroll sync
- Starter templates for `SKILL.md`, GitHub Copilot instructions, `CLAUDE.md`, and low-level design documentation
- A Mermaid diagram picker with Flowchart, Sequence, Class, State, Entity Relationship, and Gantt starters
- Works without network access after its browser dependencies are available

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
vendor/docx.iife.js
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

## Support the project

This project is free to use. If it helps you, [star it on GitHub](https://github.com/vijayanandraj/offline-markdown-mermaid-editor) to make it easier for others to find.

## License

[MIT](LICENSE)

## Third-party software

This project uses Marked, DOMPurify, Mermaid, and docx. Their respective licenses apply to their bundled distributions.
