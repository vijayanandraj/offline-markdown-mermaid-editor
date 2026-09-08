import { cp, mkdir } from 'node:fs/promises';

await mkdir('vendor', { recursive: true });
await cp('node_modules/marked/lib/marked.umd.js', 'vendor/marked.umd.js');
await cp('node_modules/dompurify/dist/purify.min.js', 'vendor/purify.min.js');
await cp('node_modules/mermaid/dist/mermaid.min.js', 'vendor/mermaid.min.js');
await cp('node_modules/docx/dist/index.iife.js', 'vendor/docx.iife.js');
