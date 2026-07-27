export type Product = {
  id: number;
  title: string;
  feature: string;
  category: string;
  categoryTitle: string;
  image: string;
  alt: string;
  favorite?: boolean;
  href: string | null;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Wellenlicht-Projektor mit Wasserreflexen",
    feature: "Sanfte Wasserreflexe",
    category: "wasserlicht",
    categoryTitle: "Wasserlichtlampen & Wellenprojektoren",
    image: "/images/wasser-aesthetic/produkt-wasserlicht.avif",
    alt: "Klare Wasserlichtlampe auf hellem Holzfuß mit blauen Lichtreflexen",
    favorite: true,
    href: null,
  },
  {
    id: 2,
    title: "Wasserlichtlampe mit Holzsockel",
    feature: "Für ruhige Abendstunden",
    category: "wasserlicht",
    categoryTitle: "Wasserlichtlampen & Wellenprojektoren",
    image: "/images/wasser-aesthetic/produkt-wasserlicht.avif",
    alt: "Zylindrische Wasserlichtlampe mit hellem Holzsockel",
    href: null,
  },
  {
    id: 3,
    title: "Rippenvase aus blauem Glas",
    feature: "Skulpturale Glasstruktur",
    category: "glasvasen",
    categoryTitle: "Blaue Glasvasen",
    image: "/images/wasser-aesthetic/produkt-glasvase.avif",
    alt: "Große gerippte blaue Glasvase mit weißen Blüten",
    favorite: true,
    href: null,
  },
  {
    id: 4,
    title: "Bauchige Vase in Kobaltblau",
    feature: "Maritimer Blickfang",
    category: "glasvasen",
    categoryTitle: "Blaue Glasvasen",
    image: "/images/wasser-aesthetic/produkt-glasvase.avif",
    alt: "Bauchige kobaltblaue Glasvase im hellen Interieur",
    href: null,
  },
  {
    id: 5,
    title: "Muschelschale aus Aqua-Glas",
    feature: "Dekoratives Highlight",
    category: "schalen",
    categoryTitle: "Schalen in Muschel- oder Wellenform",
    image: "/images/wasser-aesthetic/produkt-muschelschale.avif",
    alt: "Transparente hellblaue Glasschale in Muschelform",
    favorite: true,
    href: null,
  },
  {
    id: 6,
    title: "Wellenschale mit feinem Goldrand",
    feature: "Für Schmuck und kleine Schätze",
    category: "schalen",
    categoryTitle: "Schalen in Muschel- oder Wellenform",
    image: "/images/wasser-aesthetic/produkt-muschelschale.avif",
    alt: "Aqua-blaue Wellenschale mit schmalem goldfarbenem Rand",
    href: null,
  },
  {
    id: 7,
    title: "Zimmerbrunnen mit drei Wasserschalen",
    feature: "Entspannendes Plätschern",
    category: "zimmerbrunnen",
    categoryTitle: "Kleine Zimmerbrunnen",
    image: "/images/wasser-aesthetic/produkt-zimmerbrunnen.avif",
    alt: "Kleiner dunkler Zimmerbrunnen mit drei Schalen und Licht",
    favorite: true,
    href: null,
  },
  {
    id: 8,
    title: "Kompakter Tischbrunnen mit Warmlicht",
    feature: "Für Wohn- und Arbeitszimmer",
    category: "zimmerbrunnen",
    categoryTitle: "Kleine Zimmerbrunnen",
    image: "/images/wasser-aesthetic/produkt-zimmerbrunnen.avif",
    alt: "Kompakter beleuchteter Tischbrunnen auf heller Konsole",
    href: null,
  },
  {
    id: 9,
    title: "Gerahmtes Wandbild mit Meereswelle",
    feature: "Ruhige Küstenfarben",
    category: "wandbilder",
    categoryTitle: "Wandbilder mit Meer, Wasser oder Wellen",
    image: "/images/wasser-aesthetic/produkt-wandbild.avif",
    alt: "Gerahmtes Wandbild mit großer blauer Meereswelle",
    favorite: true,
    href: null,
  },
  {
    id: 10,
    title: "Ocean-Print in hellem Holzrahmen",
    feature: "Zeitlose Wanddekoration",
    category: "wandbilder",
    categoryTitle: "Wandbilder mit Meer, Wasser oder Wellen",
    image: "/images/wasser-aesthetic/produkt-wandbild.avif",
    alt: "Helles Ocean-Wandbild in einem schmalen Holzrahmen",
    href: null,
  },
  {
    id: 11,
    title: "Kerzen-Set in Blau und Aqua",
    feature: "Warm und atmosphärisch",
    category: "kerzen",
    categoryTitle: "Blaue und maritime Kerzen",
    image: "/images/wasser-aesthetic/produkt-kerzen.avif",
    alt: "Drei blaue und cremefarbene Kerzen mit Wasserstruktur",
    href: null,
  },
  {
    id: 12,
    title: "Wellenkerze im strukturierten Glas",
    feature: "Sanftes Licht im Wasser-Look",
    category: "kerzen",
    categoryTitle: "Blaue und maritime Kerzen",
    image: "/images/wasser-aesthetic/produkt-kerzen.avif",
    alt: "Brennende Kerze in hellblau strukturiertem Glas",
    href: null,
  },
  {
    id: 13,
    title: "Laternen-Duo in tiefem Marineblau",
    feature: "Für drinnen und draußen",
    category: "laternen",
    categoryTitle: "Laternen & Windlichter",
    image: "/images/wasser-aesthetic/produkt-laternen.avif",
    alt: "Zwei elegante marineblaue Laternen mit cremefarbenen Kerzen",
    href: null,
  },
  {
    id: 14,
    title: "Blaues Windlicht mit Klarglas",
    feature: "Stimmungsvolles Sommerlicht",
    category: "laternen",
    categoryTitle: "Laternen & Windlichter",
    image: "/images/wasser-aesthetic/produkt-laternen.avif",
    alt: "Marineblaues Windlicht aus Metall und klarem Glas",
    href: null,
  },
  {
    id: 15,
    title: "Aroma-Diffuser mit Aqua-Licht",
    feature: "Entspannende Atmosphäre",
    category: "diffuser",
    categoryTitle: "Diffuser & Luftbefeuchter mit Wasserlicht",
    image: "/images/wasser-aesthetic/produkt-diffuser.avif",
    alt: "Cremefarbener Aroma-Diffuser mit aqua-blauem Lichtring",
    href: null,
  },
  {
    id: 16,
    title: "Leiser Luftbefeuchter im Wasser-Look",
    feature: "Feiner Nebel, ruhige Form",
    category: "diffuser",
    categoryTitle: "Diffuser & Luftbefeuchter mit Wasserlicht",
    image: "/images/wasser-aesthetic/produkt-diffuser.avif",
    alt: "Runder heller Luftbefeuchter mit feinem Nebel",
    href: null,
  },
  {
    id: 17,
    title: "Muschel- und Korallen-Deko in Weiß",
    feature: "Maritim, aber zurückhaltend",
    category: "meeresdeko",
    categoryTitle: "Muschel- & Meeresdekoration",
    image: "/images/wasser-aesthetic/produkt-meeresdeko.avif",
    alt: "Helle Muscheln und abstrakte Korallendekoration auf Naturstein",
    href: null,
  },
  {
    id: 18,
    title: "Skulpturale Muscheldeko fürs Sideboard",
    feature: "Natürliche Küstenstruktur",
    category: "meeresdeko",
    categoryTitle: "Muschel- & Meeresdekoration",
    image: "/images/wasser-aesthetic/produkt-meeresdeko.avif",
    alt: "Große helle Muschel neben einer matten Korallenform",
    href: null,
  },
  {
    id: 19,
    title: "Kissen-Set in Navy und Aqua",
    feature: "Ruhige Farbtiefe",
    category: "textilien",
    categoryTitle: "Blaue Kissen & Decken",
    image: "/images/wasser-aesthetic/produkt-kissen-decke.avif",
    alt: "Dunkelblaues und hellblaues Kissen auf hellem Sofa",
    href: null,
  },
  {
    id: 20,
    title: "Weiche Decke mit blauem Farbverlauf",
    feature: "Für Sofa und Leseecke",
    category: "textilien",
    categoryTitle: "Blaue Kissen & Decken",
    image: "/images/wasser-aesthetic/produkt-kissen-decke.avif",
    alt: "Weiche Decke mit sanftem Verlauf von Hellblau zu Dunkelblau",
    href: null,
  },
  {
    id: 21,
    title: "Bad-Accessoires aus Aqua-Glas",
    feature: "Frische Spa-Optik",
    category: "bad",
    categoryTitle: "Badezimmerdekoration in Blau & Türkis",
    image: "/images/wasser-aesthetic/produkt-bad-deko.avif",
    alt: "Aqua-blauer Seifenspender und Becher mit Handtuch",
    href: null,
  },
  {
    id: 22,
    title: "Muschel-Seifenschale mit blauem Handtuch",
    feature: "Ordnung mit Küstengefühl",
    category: "bad",
    categoryTitle: "Badezimmerdekoration in Blau & Türkis",
    image: "/images/wasser-aesthetic/produkt-bad-deko.avif",
    alt: "Helle muschelförmige Seifenschale neben blauem Handtuch",
    href: null,
  },
  {
    id: 23,
    title: "Blaue Wasser-Schale für den Balkon",
    feature: "Bewegtes Wasser im Kleinformat",
    category: "garten",
    categoryTitle: "Garten- & Balkondekoration mit Wasseroptik",
    image: "/images/wasser-aesthetic/produkt-garten-wasser.avif",
    alt: "Blaue Keramikschale mit sprudelndem Wasser und hellen Steinen",
    href: null,
  },
  {
    id: 24,
    title: "Solar-Wasserdeko aus Keramik",
    feature: "Für sonnige Lieblingsplätze",
    category: "garten",
    categoryTitle: "Garten- & Balkondekoration mit Wasseroptik",
    image: "/images/wasser-aesthetic/produkt-garten-wasser.avif",
    alt: "Kompakte Wasserdekoration aus dunkelblauer Keramik",
    href: null,
  },
  {
    id: 25,
    title: "Sea-Glass Skulpturen in Blau",
    feature: "Lichtfang aus Glas",
    category: "seaglass",
    categoryTitle: "Glasdekoration & Sea-Glass-Deko",
    image: "/images/wasser-aesthetic/produkt-sea-glass.avif",
    alt: "Abstrakte Glasobjekte in Aqua und Kobaltblau",
    href: null,
  },
  {
    id: 26,
    title: "Frosted-Glass Steine in Meeresfarben",
    feature: "Für Schalen und Tabletts",
    category: "seaglass",
    categoryTitle: "Glasdekoration & Sea-Glass-Deko",
    image: "/images/wasser-aesthetic/produkt-sea-glass.avif",
    alt: "Milchig-transparente Glassteine in hellen Meerestönen",
    href: null,
  },
  {
    id: 27,
    title: "Aqua-Serviettenringe aus Glas",
    feature: "Sommerliche Tischakzente",
    category: "tischdeko",
    categoryTitle: "Maritime Tischdekoration",
    image: "/images/wasser-aesthetic/produkt-tischdeko.avif",
    alt: "Transparente aqua-blaue Serviettenringe auf hellem Leinen",
    href: null,
  },
  {
    id: 28,
    title: "Kobalt-Teelichthalter fürs Sommerdinner",
    feature: "Funkelndes Tischlicht",
    category: "tischdeko",
    categoryTitle: "Maritime Tischdekoration",
    image: "/images/wasser-aesthetic/produkt-tischdeko.avif",
    alt: "Kobaltblaue Teelichthalter neben aqua-blauen Glasringen",
    href: null,
  },
  {
    id: 29,
    title: "Wellness-Set mit Wasserstein",
    feature: "Kleine Auszeit für zu Hause",
    category: "wellness",
    categoryTitle: "Entspannende Wellness-Accessoires",
    image: "/images/wasser-aesthetic/produkt-wellness.avif",
    alt: "Wellness-Set mit Glas, blauem Stein und hellem Augenkissen",
    href: null,
  },
  {
    id: 30,
    title: "Glas-Karaffe und Augenkissen in Naturtönen",
    feature: "Ritual für mehr Ruhe",
    category: "wellness",
    categoryTitle: "Entspannende Wellness-Accessoires",
    image: "/images/wasser-aesthetic/produkt-wellness.avif",
    alt: "Helle Glas-Karaffe mit Becher und cremefarbenem Augenkissen",
    href: null,
  },
];

export type Article = {
  slug: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  readingTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }[];
};

export const articles: Article[] = [
  {
    slug: "trend-zu-hause",
    title: "Wasser Aesthetic: So gelingt der Trend zu Hause",
    intro:
      "Mit Glas, fließenden Formen und einer ruhigen Farbpalette entsteht ein Zuhause, das an Licht auf dem Wasser erinnert.",
    image: "/images/wasser-aesthetic/magazin-trend.avif",
    alt: "Helles Wohnzimmer mit blauer Glasvase, Wellenschale und Wasserreflexen",
    readingTime: "6 Min. Lesezeit",
    sections: [
      {
        heading: "Was Wasser Aesthetic ausmacht",
        paragraphs: [
          "Wasser Aesthetic ist weniger ein festes Dekoschema als eine Stimmung. Transparenz, Spiegelungen und fließende Konturen bringen optische Leichtigkeit in den Raum. Dazu passen gedeckte Blau- und Türkistöne, warmes Weiß sowie Materialien, die Licht sichtbar machen.",
          "Der Trend wirkt am überzeugendsten, wenn er nicht wie ein Themenzimmer inszeniert wird. Ein einzelnes Glasobjekt, ein ruhiges Wellenmotiv und eine weiche Textilie reichen oft schon, um die Atmosphäre zu verändern.",
        ],
      },
      {
        heading: "Die richtige Basis",
        paragraphs: [
          "Helle Wände, Naturholz, Leinen und Kalkstein geben den blauen Akzenten Raum. Beginne mit einer neutralen Fläche und setze anschließend drei unterschiedlich intensive Blautöne ein: zum Beispiel Nebelblau, Aqua und Kobalt.",
        ],
        tips: [
          "Ein großes Objekt statt vieler kleiner Dekoartikel wählen",
          "Glas dort platzieren, wo Tageslicht hindurchfällt",
          "Runde und gewellte Formen mit geraden Möbelkanten ausbalancieren",
        ],
      },
      {
        heading: "Licht wie auf dem Wasser",
        paragraphs: [
          "Eine Wasserlampe kann abends bewegte Reflexe an die Wand werfen. Tagsüber übernehmen gerippte Vasen, Glasschalen oder Karaffen diese Aufgabe. Stelle sie in Fensternähe, aber vermeide direkte, dauerhaft starke Sonneneinstrahlung auf empfindlichen Oberflächen.",
          "Für einen ruhigen Gesamteindruck genügt eine Lichtquelle mit langsamem, weichem Muster. Mehrere bewegte Projektoren zugleich wirken schnell unruhig.",
        ],
      },
    ],
  },
  {
    slug: "blaue-deko-kombinieren",
    title: "Blaue Deko richtig kombinieren",
    intro:
      "Von Nebelblau bis Kobalt: So entsteht Tiefe, ohne dass dein Raum kühl oder unruhig wirkt.",
    image: "/images/wasser-aesthetic/magazin-blaue-deko.avif",
    alt: "Helle Leseecke mit dunkelblauem Kissen, Aquadecke und blauer Vase",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Mit drei Farbstufen arbeiten",
        paragraphs: [
          "Ein harmonisches Blaukonzept braucht Unterschiede. Kombiniere einen dunklen Anker wie Navy mit einem mittleren Meerblau und einem sehr hellen Aqua. Das dunkelste Blau sollte sparsam eingesetzt werden, während helle Töne größere Flächen vertragen.",
          "Creme, Sand und helles Holz nehmen dem Blau seine Kühle. Reinweiß kann dagegen schnell hart wirken; gebrochene Weißtöne sind meist wohnlicher.",
        ],
      },
      {
        heading: "Materialien bewusst mischen",
        paragraphs: [
          "Samt schluckt Licht, Glas bündelt es und Leinen streut es weich. Genau dieser Kontrast macht blaue Deko lebendig. Wiederhole jede Materialwirkung höchstens zweimal, damit das Arrangement nicht wie eine Produktpräsentation aussieht.",
        ],
        tips: [
          "Navy für Kissen oder kleine Flächen",
          "Aqua für Glas und leichte Textilien",
          "Kobalt als einzelner, klarer Blickfang",
        ],
      },
      {
        heading: "Der 60-30-10-Ansatz",
        paragraphs: [
          "Lass etwa 60 Prozent des sichtbaren Raums neutral, nutze 30 Prozent für natürliche Begleiter wie Holz und Leinen und setze Blau auf den verbleibenden 10 Prozent ein. Diese Faustregel ist kein Zwang, hilft aber beim Reduzieren.",
        ],
      },
    ],
  },
  {
    slug: "wasserlampen-entspannte-abende",
    title: "Die schönsten Wasserlampen für entspannte Abende",
    intro:
      "Worauf es bei Lichtfarbe, Bewegung und Platzierung ankommt, damit Wasserlicht wirklich beruhigend wirkt.",
    image: "/images/wasser-aesthetic/magazin-wasserlampen.avif",
    alt: "Ruhiges Schlafzimmer mit zwei Wasserlichtlampen und weichen Reflexen",
    readingTime: "7 Min. Lesezeit",
    sections: [
      {
        heading: "Wasserlicht ist nicht gleich Wasserlicht",
        paragraphs: [
          "Manche Lampen projizieren ein bewegtes Muster an Wand oder Decke, andere lassen eine gefüllte oder strukturierte Glaskuppel leuchten. Projektoren wirken großflächiger, während Leuchten mit Glaskörper ein konzentrierter Lichtakzent bleiben.",
          "Für Wohn- und Schlafzimmer sind langsame Bewegungen und eine dimmbare Helligkeit sinnvoll. Sehr schnelle Effekte oder harte Kontraste passen eher zu Partybeleuchtung als zu einer entspannten Ecke.",
        ],
      },
      {
        heading: "Farbtemperatur und Helligkeit",
        paragraphs: [
          "Blaues Licht sollte am Abend nicht den ganzen Raum dominieren. Besonders angenehm ist die Kombination aus sanftem Aqua und einer warmweißen zweiten Lichtquelle. So bleibt die Stimmung weich und Gesichter wirken natürlich.",
        ],
        tips: [
          "Reflexe auf eine matte, helle Wand richten",
          "Projektor nicht direkt ins Blickfeld stellen",
          "Timer oder Abschaltautomatik für das Schlafzimmer bevorzugen",
        ],
      },
      {
        heading: "Sicher und ruhig platzieren",
        paragraphs: [
          "Stelle Lampen auf eine feste, trockene Fläche und halte Lüftungsöffnungen frei. Bei Modellen mit echtem Wasser lohnt ein genauer Blick auf Dichtigkeit, Reinigung und Stromanschluss. Kabel sollten nicht über Laufwege führen.",
        ],
      },
    ],
  },
  {
    slug: "maritime-dekoration-ohne-kitsch",
    title: "Maritime Dekoration ohne Kitsch",
    intro:
      "Wenige natürliche Formen, hochwertige Materialien und ruhige Farben ersetzen Anker, Schilder und Souvenir-Look.",
    image: "/images/wasser-aesthetic/magazin-maritim.avif",
    alt: "Minimalistisches Regal mit Muschel, blauem Glasobjekt und Meeresbild",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Die Küste zitieren, nicht nachbauen",
        paragraphs: [
          "Maritime Dekoration wirkt modern, wenn sie Erinnerungen an die Küste weckt, ohne jedes Motiv wörtlich zu zeigen. Eine Muschelstruktur, ein horizontales Meeresbild oder ein einzelnes blaues Glasobjekt genügt als Hinweis.",
          "Vermeide die gleichzeitige Kombination aus Ankern, Tauwerk, Streifen und Schriftzügen. Je abstrakter die Form, desto leichter lässt sie sich langfristig mit vorhandenen Möbeln verbinden.",
        ],
      },
      {
        heading: "Qualität über Menge",
        paragraphs: [
          "Natürliche Muscheln, Keramik mit matter Oberfläche und mundgeblasen wirkendes Glas besitzen genug Struktur, um allein zu stehen. Gruppiere höchstens drei Objekte und variiere ihre Höhe.",
        ],
        tips: [
          "Ein großes Küstenfoto statt einer Bilderwand",
          "Naturmaterialien mit klarem Glas kombinieren",
          "Blau nur an zwei bis drei Stellen im Raum wiederholen",
        ],
      },
      {
        heading: "Saisonale Akzente",
        paragraphs: [
          "Im Sommer passen helle Leinenstoffe und transparente Glasobjekte. Im Winter kannst du Navy mit Wolle, Kerzenlicht und dunklerem Holz verbinden. Die Wasser Aesthetic bleibt so ganzjährig wohnlich.",
        ],
      },
    ],
  },
  {
    slug: "wellness-ecke-blau-tuerkis",
    title: "Wellness-Ecke in Blau und Türkis gestalten",
    intro:
      "Eine kleine, aufgeräumte Zone mit weichen Textilien und einem ruhigen Ritual kann schon genügen.",
    image: "/images/wasser-aesthetic/magazin-wellness.avif",
    alt: "Helle Wellness-Ecke mit Aquadecke, Diffuser und Wasserkaraffe",
    readingTime: "6 Min. Lesezeit",
    sections: [
      {
        heading: "Den richtigen Platz finden",
        paragraphs: [
          "Eine Wellness-Ecke braucht keine freie Raumhälfte. Eine ungestörte Fensternische, ein Platz neben dem Bett oder ein Sessel mit kleinem Beistelltisch reichen aus. Entscheidend ist, dass dort nicht ständig Dinge abgelegt werden.",
          "Begrenze die Ausstattung auf das, was du tatsächlich nutzt: eine Decke, eine Karaffe, ein Diffuser oder eine Kerze und eventuell ein festes Kissen.",
        ],
      },
      {
        heading: "Farbe als Ruhepol",
        paragraphs: [
          "Helles Türkis wirkt frisch, Navy vermittelt Tiefe. In einer kleinen Wellness-Zone sollte der hellere Ton überwiegen. Cremefarbene Textilien und Holz verhindern, dass die Ecke kühl erscheint.",
        ],
        tips: [
          "Kabel und Fläschchen in einer geschlossenen Box verstauen",
          "Eine wiederkehrende zehnminütige Pause einplanen",
          "Duft sehr sparsam und nur bei guter Verträglichkeit nutzen",
        ],
      },
      {
        heading: "Ein einfaches Abendritual",
        paragraphs: [
          "Licht dimmen, ein Glas Wasser bereitstellen und das Smartphone außerhalb der Ecke lassen: Diese drei Schritte schaffen eine klare Grenze zum Alltag. Dekoration unterstützt das Ritual, ersetzt es aber nicht.",
        ],
      },
    ],
  },
  {
    slug: "balkon-garten",
    title: "Wasser Aesthetic für Balkon und Garten",
    intro:
      "Mit einer kleinen Wasserschale, Laternen und wetterfesten Blautönen wird selbst ein kompakter Balkon zur ruhigen Sommerecke.",
    image: "/images/wasser-aesthetic/magazin-balkon.avif",
    alt: "Sommerlicher Balkon mit blauer Wasserschale, Laternen und Aquakissen",
    readingTime: "6 Min. Lesezeit",
    sections: [
      {
        heading: "Kleine Wasserideen mit großer Wirkung",
        paragraphs: [
          "Eine flache Keramikschale mit bewegter Wasseroberfläche bringt bereits Licht und leises Geräusch auf den Balkon. Achte auf einen stabilen, waagerechten Untergrund und auf das Gewicht, besonders bei größeren Gefäßen.",
          "Eine solarbetriebene Pumpe vermeidet ein langes Kabel, funktioniert aber nur bei geeigneter Ausrichtung zuverlässig. Prüfe vor dem Kauf die benötigte Sonneneinstrahlung und die Möglichkeit, Pumpe und Schale leicht zu reinigen.",
        ],
      },
      {
        heading: "Textilien und Licht ergänzen",
        paragraphs: [
          "Outdoor-Kissen in Aqua oder Navy verbinden die Wasserschale optisch mit dem Sitzplatz. Zwei unterschiedlich hohe Laternen erzeugen abends Tiefe, ohne den kleinen Raum zu überladen.",
        ],
        tips: [
          "Wasser regelmäßig wechseln und Gefäß sauber halten",
          "Laternen standsicher und mit Abstand zu Textilien aufstellen",
          "Glasobjekte bei Sturm und Frost ins Haus holen",
        ],
      },
      {
        heading: "Eine ruhige Pflanzenauswahl",
        paragraphs: [
          "Gräser, Oliven, Lavendel oder andere locker wachsende Pflanzen unterstreichen die Leichtigkeit. Wiederhole lieber wenige Arten, statt viele verschiedene Töpfe zu sammeln. Helle Pflanzgefäße lassen die blaue Deko stärker wirken.",
        ],
      },
    ],
  },
];

export const categoryOrder = [
  "wasserlicht",
  "glasvasen",
  "schalen",
  "zimmerbrunnen",
  "wandbilder",
  "kerzen",
  "laternen",
  "diffuser",
  "meeresdeko",
  "textilien",
  "bad",
  "garten",
  "seaglass",
  "tischdeko",
  "wellness",
];
