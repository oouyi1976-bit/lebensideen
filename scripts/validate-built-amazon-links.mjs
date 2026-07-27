import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const pagePath = resolve("dist/wasser-aesthetic/index.html");
const html = await readFile(pagePath, "utf8");
const cards = html.match(/<article class="product-card"[\s\S]*?<\/article>/g) ?? [];

if (cards.length !== 30) {
  throw new Error(`Erwartet werden 30 Produktkarten, gefunden: ${cards.length}`);
}

let active = 0;
let placeholders = 0;

for (const [index, card] of cards.entries()) {
  const hrefs = [...card.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);

  if (hrefs.length === 0) {
    if (!card.includes("Amazon-Link folgt")) {
      throw new Error(`Karte ${index + 1}: Platzhaltertext fehlt.`);
    }
    placeholders += 1;
    continue;
  }

  if (hrefs.length !== 3 || new Set(hrefs).size !== 1) {
    throw new Error(
      `Karte ${index + 1}: Bild, Titel und Button müssen exakt denselben Link verwenden.`,
    );
  }

  const [affiliateUrl] = hrefs;
  if (
    !/^https:\/\/www\.amazon\.de\/dp\/[A-Z0-9]{10}\?tag=epic05e-21$/.test(
      affiliateUrl,
    )
  ) {
    throw new Error(`Karte ${index + 1}: ungültige Affiliate-URL ${affiliateUrl}`);
  }

  const targetCount = (card.match(/target="_blank"/g) ?? []).length;
  const relCount = (
    card.match(/rel="nofollow sponsored noopener noreferrer"/g) ?? []
  ).length;
  if (targetCount !== 3 || relCount !== 3) {
    throw new Error(`Karte ${index + 1}: target- oder rel-Attribute fehlen.`);
  }

  active += 1;
}

console.log(
  `Amazon-Karten validiert: ${active} aktiv, ${placeholders} Platzhalter, 30 gesamt.`,
);
