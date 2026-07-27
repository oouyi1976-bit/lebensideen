# LieblingsIdeen – Wasser Aesthetic

Statische, responsive Affiliate-Landingpage mit Astro.

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
Sobald ein Produkt verifiziert ist, kann in
`src/data/wasser-aesthetic.ts` ein geprüftes `href` im Format
`https://www.amazon.de/dp/ASIN?tag=epic05e-21` hinterlegt werden. Bild, Titel
und Button erhalten dann automatisch denselben Link inklusive
`target="_blank"` und `rel="nofollow sponsored noopener noreferrer"`.
