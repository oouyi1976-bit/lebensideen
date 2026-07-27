# Amazon-ASIN-Import: Wasser Aesthetic

Amazon.de ist aus der aktuellen Arbeitsumgebung durch eine Netzwerkregel
gesperrt. Deshalb wurden keine ungeprüften ASINs eingetragen.

Die zentrale, leicht bearbeitbare Importdatei ist:

`src/data/amazon-products.ts`

## So wird eine Karte aktiviert

1. Den angegebenen Suchbegriff auf Amazon.de verwenden.
2. Prüfen, dass Produktart und Kartentitel zusammenpassen.
3. Prüfen, dass ein kaufbares Angebot und ein sichtbarer Kaufbutton vorhanden
   sind und nicht „Derzeit nicht verfügbar“ angezeigt wird.
4. In `src/data/amazon-products.ts` entweder die 10-stellige ASIN in `asin`
   oder die vollständige Amazon.de-Produkt-URL in `amazonUrl` eintragen.
5. `npm run build` ausführen.

Aus der ASIN wird automatisch
`https://www.amazon.de/dp/ASIN?tag=epic05e-21` erzeugt. Bild, Titel und Button
der Karte erhalten denselben Link mit
`target="_blank"` und
`rel="nofollow sponsored noopener noreferrer"`.

Ungültige ASINs, fremde Domains, Links ohne ASIN, doppelte IDs und abweichende
Kartentitel lassen den Build bewusst fehlschlagen.

## Übersicht aller 30 Produkte

| Karte | Produkttitel | Genauer Amazon-Suchbegriff | ASIN | Status |
| ---: | --- | --- | --- | --- |
| 1 | Wellenlicht-Projektor mit Wasserreflexen | Wellenlicht Projektor Wasserreflexe Lampe blau USB | fehlt | Platzhalter |
| 2 | Wasserlichtlampe mit Holzsockel | Wasserlichtlampe Holzsockel Wasserreflex Lampe | fehlt | Platzhalter |
| 3 | Rippenvase aus blauem Glas | blaue Glasvase gerippt groß Blumenvase | fehlt | Platzhalter |
| 4 | Bauchige Vase in Kobaltblau | Glasvase kobaltblau bauchig Dekovase | fehlt | Platzhalter |
| 5 | Muschelschale aus Aqua-Glas | Muschelschale Glas blau aqua Dekoschale | fehlt | Platzhalter |
| 6 | Wellenschale mit feinem Goldrand | Wellenschale blau Goldrand Schmuckschale | fehlt | Platzhalter |
| 7 | Zimmerbrunnen mit drei Wasserschalen | Zimmerbrunnen drei Schalen LED Tischbrunnen | fehlt | Platzhalter |
| 8 | Kompakter Tischbrunnen mit Warmlicht | kleiner Tischbrunnen LED Warmlicht Zimmerbrunnen | fehlt | Platzhalter |
| 9 | Gerahmtes Wandbild mit Meereswelle | Wandbild Meereswelle gerahmt blau Leinwand | fehlt | Platzhalter |
| 10 | Ocean-Print in hellem Holzrahmen | Ocean Print Meer Poster Holzrahmen blau | fehlt | Platzhalter |
| 11 | Kerzen-Set in Blau und Aqua | Kerzen Set blau aqua Stumpenkerzen maritim | fehlt | Platzhalter |
| 12 | Wellenkerze im strukturierten Glas | Duftkerze blau Glas Wellenstruktur Wasseroptik | fehlt | Platzhalter |
| 13 | Laternen-Duo in tiefem Marineblau | Laternen Set 2 marineblau Metall Glas | fehlt | Platzhalter |
| 14 | Blaues Windlicht mit Klarglas | Windlicht blau Metall Klarglas Laterne | fehlt | Platzhalter |
| 15 | Aroma-Diffuser mit Aqua-Licht | Aroma Diffuser aqua Licht Ultraschall blau | fehlt | Platzhalter |
| 16 | Leiser Luftbefeuchter im Wasser-Look | leiser Luftbefeuchter blaues Licht Schlafzimmer | fehlt | Platzhalter |
| 17 | Muschel- und Korallen-Deko in Weiß | Muschel Korallen Deko Set weiß maritim | fehlt | Platzhalter |
| 18 | Skulpturale Muscheldeko fürs Sideboard | große Muschel Deko Skulptur weiß Sideboard | fehlt | Platzhalter |
| 19 | Kissen-Set in Navy und Aqua | Kissenhüllen Set navy aqua blau 45x45 | fehlt | Platzhalter |
| 20 | Weiche Decke mit blauem Farbverlauf | Kuscheldecke blau Farbverlauf Sofa | fehlt | Platzhalter |
| 21 | Bad-Accessoires aus Aqua-Glas | Badezimmer Accessoires Set Glas aqua blau Seifenspender | fehlt | Platzhalter |
| 22 | Muschel-Seifenschale mit blauem Handtuch | Muschel Seifenschale Keramik weiß maritim | fehlt | Platzhalter |
| 23 | Blaue Wasser-Schale für den Balkon | Wasserschale Balkon blau Keramik Brunnen | fehlt | Platzhalter |
| 24 | Solar-Wasserdeko aus Keramik | Solarbrunnen Keramik blau Garten Wasserspiel | fehlt | Platzhalter |
| 25 | Sea-Glass Skulpturen in Blau | Sea Glass Deko Skulptur blau Glasobjekt | fehlt | Platzhalter |
| 26 | Frosted-Glass Steine in Meeresfarben | Deko Glassteine frosted blau aqua Sea Glass | fehlt | Platzhalter |
| 27 | Aqua-Serviettenringe aus Glas | Serviettenringe Glas aqua blau Set | fehlt | Platzhalter |
| 28 | Kobalt-Teelichthalter fürs Sommerdinner | Teelichthalter Glas kobaltblau Set | fehlt | Platzhalter |
| 29 | Wellness-Set mit Wasserstein | Wellness Geschenkset blau Wasserstein Augenkissen | fehlt | Platzhalter |
| 30 | Glas-Karaffe und Augenkissen in Naturtönen | Wellness Set Augenkissen Glaskaraffe Geschenk | fehlt | Platzhalter |
