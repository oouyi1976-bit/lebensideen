# Cloudflare Pages

Das Lebensideen-Portal wird vollständig statisch nach `dist/` gebaut und benötigt keine
Runtime-Secrets oder Datenbank-Bindings.

## Vorgesehene Git-Integration

| Einstellung | Wert |
| --- | --- |
| GitHub-Repository | `oouyi1976-bit/lebensideen` |
| Production Branch | `main` |
| Framework preset | `Astro` |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Build system | Pages Build Image v3 |
| Umgebungsvariable | `NODE_VERSION=22.14.0` |

Nach dem ersten Import des GitHub-Repositories veröffentlicht Cloudflare Pages
jeden neuen Commit auf `main` automatisch. Das Portal liegt im Build unter `/`.

## Warum Node 22

Astro 7 benötigt Node.js ab 22.12.0. Cloudflare Pages verwendet im aktuellen
Build Image v3 standardmäßig Node.js 22; die explizite Umgebungsvariable hält
den Build reproduzierbar.

Offizielle Dokumentation:

- [Cloudflare Pages: Build-Befehle und Ausgabeverzeichnisse](https://developers.cloudflare.com/pages/configuration/build-configuration/#build-commands-and-directories)
- [Cloudflare Pages Build Image v3 mit Node.js 22](https://developers.cloudflare.com/changelog/post/2025-05-30-pages-build-image-v3/)
