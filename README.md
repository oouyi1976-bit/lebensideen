# Lebensideen

Statische, responsive Portal-Seite mit Astro. Sie bündelt die eigenständigen
Lebensideen-Themenwelten und leitet frühere Wasser-Aesthetic-Routen dauerhaft
auf das neue Projekt weiter.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Portal-Seite ist anschließend unter `/` erreichbar.

## Produktions-Build

```bash
npm run build
```

Der statische Build wird in `dist/` erzeugt.

## Projektstruktur

Die Wasser-Aesthetic-Seite wird eigenständig unter
`https://wasser-aesthetic.pages.dev/` veröffentlicht. Die frühere Unteradresse
`/wasser-aesthetic/` sowie ihre Magazinpfade werden über `public/_redirects`
mit HTTP 301 weitergeleitet.

## Cloudflare Pages

Die geprüften Build-Einstellungen für die Git-Integration stehen in
[`CLOUDFLARE-PAGES.md`](./CLOUDFLARE-PAGES.md).
