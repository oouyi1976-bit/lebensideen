export const AMAZON_PARTNER_TAG = "epic05e-21";

export type AffiliateStatus = "active" | "placeholder";

type EditableAmazonProduct = {
  id: number;
  title: string;
  amazonSearchTerm: string;
  /**
   * Nach manueller Prüfung entweder hier die 10-stellige ASIN eintragen …
   * Beispiel: "B0XXXXXXXX"
   */
  asin: string;
  /**
   * … oder alternativ die vollständige Amazon.de-Produkt-URL eintragen.
   * Die ASIN wird aus /dp/ASIN oder /gp/product/ASIN übernommen.
   */
  amazonUrl: string;
};

export type AmazonProductImport = EditableAmazonProduct & {
  affiliateUrl: string | null;
  affiliateStatus: AffiliateStatus;
};

const ASIN_PATTERN = /^[A-Z0-9]{10}$/;

function normalizeAsin(value: string): string {
  return value.trim().toUpperCase();
}

function extractAsinFromAmazonUrl(value: string): string {
  const input = value.trim();
  if (!input) return "";

  let url: URL;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`Ungültige Amazon-URL: ${input}`);
  }

  const hostname = url.hostname.toLowerCase();
  if (hostname !== "amazon.de" && !hostname.endsWith(".amazon.de")) {
    throw new Error(`Nur Amazon.de-Produktlinks sind erlaubt: ${input}`);
  }

  const match = url.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?]|$)/i);
  if (!match) {
    throw new Error(`Keine ASIN in Amazon.de-Produktlink gefunden: ${input}`);
  }

  return normalizeAsin(match[1]);
}

export function buildAmazonAffiliateUrl(asin: string): string | null {
  const normalized = normalizeAsin(asin);
  if (!normalized) return null;
  if (!ASIN_PATTERN.test(normalized)) {
    throw new Error(`Ungültige ASIN "${asin}". Erwartet werden 10 Buchstaben/Ziffern.`);
  }

  return `https://www.amazon.de/dp/${normalized}?tag=${AMAZON_PARTNER_TAG}`;
}

function resolveProduct(product: EditableAmazonProduct): AmazonProductImport {
  const directAsin = normalizeAsin(product.asin);
  const urlAsin = extractAsinFromAmazonUrl(product.amazonUrl);

  if (directAsin && urlAsin && directAsin !== urlAsin) {
    throw new Error(
      `ASIN und Amazon-URL widersprechen sich bei Produkt ${product.id}: ${directAsin} / ${urlAsin}`,
    );
  }

  const asin = directAsin || urlAsin;
  const affiliateUrl = buildAmazonAffiliateUrl(asin);

  return {
    ...product,
    asin,
    affiliateUrl,
    affiliateStatus: affiliateUrl ? "active" : "placeholder",
  };
}

/**
 * Zentrale Importdatei für alle Wasser-Aesthetic-Karten.
 *
 * Erst nach manueller Prüfung auf Amazon.de eintragen:
 * - Produkt passt exakt zum Kartentitel
 * - kaufbares Angebot und sichtbarer Kaufbutton
 * - nicht „Derzeit nicht verfügbar“
 *
 * Sobald `asin` oder `amazonUrl` gesetzt ist, wird automatisch die kanonische
 * Affiliate-URL erzeugt und die zugehörige Karte vollständig verlinkt.
 */
const editableAmazonProducts: EditableAmazonProduct[] = [
  {
    id: 1,
    title: "Wellenlicht-Projektor mit Wasserreflexen",
    amazonSearchTerm: "Wellenlicht Projektor Wasserreflexe Lampe blau USB",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 2,
    title: "Wasserlichtlampe mit Holzsockel",
    amazonSearchTerm: "Wasserlichtlampe Holzsockel Wasserreflex Lampe",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 3,
    title: "Rippenvase aus blauem Glas",
    amazonSearchTerm: "blaue Glasvase gerippt groß Blumenvase",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 4,
    title: "Bauchige Vase in Kobaltblau",
    amazonSearchTerm: "Glasvase kobaltblau bauchig Dekovase",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 5,
    title: "Muschelschale aus Aqua-Glas",
    amazonSearchTerm: "Muschelschale Glas blau aqua Dekoschale",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 6,
    title: "Wellenschale mit feinem Goldrand",
    amazonSearchTerm: "Wellenschale blau Goldrand Schmuckschale",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 7,
    title: "Zimmerbrunnen mit drei Wasserschalen",
    amazonSearchTerm: "Zimmerbrunnen drei Schalen LED Tischbrunnen",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 8,
    title: "Kompakter Tischbrunnen mit Warmlicht",
    amazonSearchTerm: "kleiner Tischbrunnen LED Warmlicht Zimmerbrunnen",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 9,
    title: "Gerahmtes Wandbild mit Meereswelle",
    amazonSearchTerm: "Wandbild Meereswelle gerahmt blau Leinwand",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 10,
    title: "Ocean-Print in hellem Holzrahmen",
    amazonSearchTerm: "Ocean Print Meer Poster Holzrahmen blau",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 11,
    title: "Kerzen-Set in Blau und Aqua",
    amazonSearchTerm: "Kerzen Set blau aqua Stumpenkerzen maritim",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 12,
    title: "Wellenkerze im strukturierten Glas",
    amazonSearchTerm: "Duftkerze blau Glas Wellenstruktur Wasseroptik",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 13,
    title: "Laternen-Duo in tiefem Marineblau",
    amazonSearchTerm: "Laternen Set 2 marineblau Metall Glas",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 14,
    title: "Blaues Windlicht mit Klarglas",
    amazonSearchTerm: "Windlicht blau Metall Klarglas Laterne",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 15,
    title: "Aroma-Diffuser mit Aqua-Licht",
    amazonSearchTerm: "Aroma Diffuser aqua Licht Ultraschall blau",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 16,
    title: "Leiser Luftbefeuchter im Wasser-Look",
    amazonSearchTerm: "leiser Luftbefeuchter blaues Licht Schlafzimmer",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 17,
    title: "Muschel- und Korallen-Deko in Weiß",
    amazonSearchTerm: "Muschel Korallen Deko Set weiß maritim",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 18,
    title: "Skulpturale Muscheldeko fürs Sideboard",
    amazonSearchTerm: "große Muschel Deko Skulptur weiß Sideboard",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 19,
    title: "Kissen-Set in Navy und Aqua",
    amazonSearchTerm: "Kissenhüllen Set navy aqua blau 45x45",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 20,
    title: "Weiche Decke mit blauem Farbverlauf",
    amazonSearchTerm: "Kuscheldecke blau Farbverlauf Sofa",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 21,
    title: "Bad-Accessoires aus Aqua-Glas",
    amazonSearchTerm: "Badezimmer Accessoires Set Glas aqua blau Seifenspender",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 22,
    title: "Muschel-Seifenschale mit blauem Handtuch",
    amazonSearchTerm: "Muschel Seifenschale Keramik weiß maritim",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 23,
    title: "Blaue Wasser-Schale für den Balkon",
    amazonSearchTerm: "Wasserschale Balkon blau Keramik Brunnen",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 24,
    title: "Solar-Wasserdeko aus Keramik",
    amazonSearchTerm: "Solarbrunnen Keramik blau Garten Wasserspiel",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 25,
    title: "Sea-Glass Skulpturen in Blau",
    amazonSearchTerm: "Sea Glass Deko Skulptur blau Glasobjekt",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 26,
    title: "Frosted-Glass Steine in Meeresfarben",
    amazonSearchTerm: "Deko Glassteine frosted blau aqua Sea Glass",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 27,
    title: "Aqua-Serviettenringe aus Glas",
    amazonSearchTerm: "Serviettenringe Glas aqua blau Set",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 28,
    title: "Kobalt-Teelichthalter fürs Sommerdinner",
    amazonSearchTerm: "Teelichthalter Glas kobaltblau Set",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 29,
    title: "Wellness-Set mit Wasserstein",
    amazonSearchTerm: "Wellness Geschenkset blau Wasserstein Augenkissen",
    asin: "",
    amazonUrl: "",
  },
  {
    id: 30,
    title: "Glas-Karaffe und Augenkissen in Naturtönen",
    amazonSearchTerm: "Wellness Set Augenkissen Glaskaraffe Geschenk",
    asin: "",
    amazonUrl: "",
  },
];

export const amazonProductImports: AmazonProductImport[] =
  editableAmazonProducts.map(resolveProduct);

if (amazonProductImports.length !== 30) {
  throw new Error(`Erwartet werden 30 Amazon-Produkte, gefunden: ${amazonProductImports.length}`);
}

const uniqueIds = new Set(amazonProductImports.map((product) => product.id));
if (uniqueIds.size !== amazonProductImports.length) {
  throw new Error("Die Amazon-Importdatei enthält doppelte Produkt-IDs.");
}
