# Lebensideen – Wasser Aesthetic

Statische, responsive Affiliate-Landingpage mit Astro. Der sichtbare
Website-Name bleibt entsprechend der Designvorlage „LieblingsIdeen“.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist anschließend unter `/wasser-aesthetic/` erreichbar.

## Produktions-Build

```bash
npm run build
```

Der statische Build wird in `dist/` erzeugt.

## Affiliate-Transparenz

Amazon.de war während der Umsetzung aus der Arbeitsumgebung nicht direkt
erreichbar. Deshalb enthält die Seite bewusst keine ungeprüften Affiliate-Links.
Alle 30 Produktkarten sind als Platzhalter mit „Amazon-Link folgt“ markiert.
Nach einer manuellen Amazon-Prüfung wird in
`src/data/amazon-products.ts` entweder eine ASIN oder eine Amazon.de-Produkt-URL
eingetragen. Die kanonische Affiliate-URL im Format
`https://www.amazon.de/dp/ASIN?tag=epic05e-21` wird automatisch erzeugt. Bild,
Titel und Button erhalten automatisch denselben Link inklusive
`target="_blank"` und `rel="nofollow sponsored noopener noreferrer"`.

Die vollständige Importanleitung und die Liste aller 30 Suchaufträge stehen in
[`AMAZON-ASIN-IMPORT.md`](./AMAZON-ASIN-IMPORT.md).

## Cloudflare Pages

Die geprüften Build-Einstellungen für die Git-Integration stehen in
[`CLOUDFLARE-PAGES.md`](./CLOUDFLARE-PAGES.md).
