/* ============================================================
   IL MANUALE DELLA MAMMA — dati dell'app (contenuti in italiano)
   ============================================================ */

const APP_DATA = {

  /* ---------- Fasce d'età ---------- */
  ageRanges: [
    { id: "6-8",   label: "6–8 mesi",   desc: "Primi assaggi: consistenze lisce e morbide, un ingrediente alla volta." },
    { id: "9-11",  label: "9–11 mesi",  desc: "Consistenze più dense, piccoli pezzi morbidi e primi finger food." },
    { id: "12-17", label: "12–17 mesi", desc: "Piatti di famiglia adattati, pezzi più grandi da masticare." },
    { id: "18-24", label: "18–24 mesi", desc: "Piena diversificazione, porzioni familiari su misura per il bambino." }
  ],

  /* ---------- Tipi di pasto ---------- */
  mealTypes: ["Colazione", "Pranzo", "Cena", "Merenda"],

  /* ---------- Allergeni monitorati ---------- */
  allergenList: ["glutine", "uovo", "latte", "pesce", "frutta a guscio", "arachidi", "soia", "sedano"],

  /* ======================================================
     RICETTE — libreria principale (per fascia d'età)
     ====================================================== */
  recipes: [

    // ---------- 6–8 MESI ----------
    {
      id: "r601", title: "Purè di zucca e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia e omogenea", allergens: [],
      ingredients: ["150 g di zucca", "1 patata piccola", "un filo d'olio extravergine d'oliva a crudo"],
      steps: [
        "Lava, sbuccia e taglia a cubetti la zucca e la patata.",
        "Cuoci a vapore per 15-18 minuti, finché sono morbide.",
        "Frulla con un filo d'acqua di cottura fino a ottenere una crema liscia.",
        "Aggiungi un filo d'olio a crudo prima di servire."
      ],
      conservazione: "Si conserva in frigorifero per 2 giorni in contenitore ermetico, oppure in freezer per 1 mese."
    },
    {
      id: "r602", title: "Crema di carote al vapore", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia", allergens: [],
      ingredients: ["2 carote medie", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Lava, sbuccia e taglia le carote a rondelle sottili.",
        "Cuoci a vapore per circa 15 minuti, finché risultano molto tenere.",
        "Frulla con poca acqua di cottura fino a consistenza liscia e vellutata.",
        "Condisci con l'olio prima di servire."
      ],
      conservazione: "In frigorifero fino a 2 giorni; in freezer fino a 1 mese in porzioni singole."
    },
    {
      id: "r603", title: "Passato di piselli e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia", allergens: [],
      ingredients: ["100 g di piselli freschi o surgelati", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci i piselli e la patata a vapore o in poca acqua per 15 minuti.",
        "Frulla finemente, passando al setaccio se necessario per eliminare le bucce.",
        "Regola la consistenza con acqua di cottura e aggiungi un filo d'olio."
      ],
      conservazione: "Fino a 2 giorni in frigorifero; fino a 1 mese in freezer."
    },
    {
      id: "r604", title: "Purea di mela cotta alla cannella", ageRange: "6-8", mealType: "Merenda",
      prepTime: "15 min", texture: "Liscia", allergens: [],
      ingredients: ["1 mela dolce", "un pizzico di cannella (facoltativo, dopo i 7 mesi)"],
      steps: [
        "Sbuccia e taglia la mela a pezzetti.",
        "Cuoci a vapore o in poca acqua per 8-10 minuti, finché è morbida.",
        "Frulla o schiaccia con una forchetta fino a ottenere una purea liscia.",
        "Aggiungi un pizzico di cannella, se gradita."
      ],
      conservazione: "In frigorifero per 2 giorni, in contenitore chiuso."
    },
    {
      id: "r605", title: "Crema di riso con zucchina", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "25 min", texture: "Liscia e cremosa", allergens: [],
      ingredients: ["30 g di crema di riso o riso ben cotto", "1 zucchina piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci la zucchina a vapore per 10 minuti.",
        "Prepara la crema di riso seguendo i tempi di cottura indicati, oppure cuoci il riso fino a sfaldarsi.",
        "Frulla insieme riso e zucchina con un filo d'acqua di cottura.",
        "Condisci con olio a crudo."
      ],
      conservazione: "Si conserva in frigorifero per 1-2 giorni; non è consigliato il congelamento del riso già cotto oltre 1 mese."
    },
    {
      id: "r606", title: "Purea di pera e banana", ageRange: "6-8", mealType: "Merenda",
      prepTime: "10 min", texture: "Liscia", allergens: [],
      ingredients: ["1/2 banana matura", "1 pera matura"],
      steps: [
        "Sbuccia la pera e tagliala a pezzetti; cuoci a vapore per 8 minuti finché è morbida.",
        "Schiaccia la banana con una forchetta.",
        "Unisci pera e banana e frulla fino a consistenza liscia."
      ],
      conservazione: "Da consumare preferibilmente il giorno stesso; si conserva al massimo 24 ore in frigorifero."
    },
    {
      id: "r607", title: "Vellutata di broccoli e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia", allergens: [],
      ingredients: ["100 g di cimette di broccolo", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore broccoli e patata per 15 minuti.",
        "Frulla con acqua di cottura fino a ottenere una crema liscia e vellutata.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r608", title: "Crema di lenticchie rosse decorticate", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "30 min", texture: "Liscia", allergens: [],
      ingredients: ["40 g di lenticchie rosse decorticate", "1/2 carota", "olio extravergine d'oliva"],
      steps: [
        "Sciacqua bene le lenticchie sotto acqua corrente.",
        "Cuoci lenticchie e carota a pezzetti in acqua non salata per 18-20 minuti, finché sono morbidissime.",
        "Frulla fino a ottenere una crema liscia, regolando la densità con acqua di cottura.",
        "Aggiungi un filo d'olio a crudo."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese in porzioni singole."
    },

    // ---------- 9–11 MESI ----------
    {
      id: "r901", title: "Polpettine di pollo e zucchina al vapore", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: [],
      ingredients: ["100 g di petto di pollo macinato", "1/2 zucchina grattugiata", "un cucchiaio di pangrattato fine"],
      steps: [
        "Unisci pollo macinato, zucchina grattugiata e pangrattato in una ciotola.",
        "Forma piccole polpette con le mani.",
        "Cuoci a vapore per 12-15 minuti, finché sono cotte internamente.",
        "Lascia intiepidire e schiaccia leggermente con la forchetta prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni; in freezer, già cotte, fino a 1 mese."
    },
    {
      id: "r902", title: "Purè di patate con filetto di merluzzo sfaldato", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida e grossolana", allergens: ["pesce"],
      ingredients: ["1 patata media", "80 g di filetto di merluzzo fresco", "olio extravergine d'oliva"],
      steps: [
        "Cuoci la patata a vapore e schiacciala grossolanamente con una forchetta.",
        "Cuoci il merluzzo al vapore per 8-10 minuti, controllando che non ci siano lische.",
        "Sfalda il pesce con una forchetta e uniscilo al purè.",
        "Condisci con un filo d'olio."
      ],
      conservazione: "Da consumare entro 24 ore; il pesce cotto non va ricongelato."
    },
    {
      id: "r903", title: "Crema di ceci con pastina", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Densa, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["50 g di ceci già cotti", "30 g di pastina piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci la pastina in acqua non salata secondo i tempi indicati.",
        "Frulla i ceci con un filo d'acqua fino a ottenere una crema densa ma con piccoli pezzi.",
        "Unisci la pastina scolata alla crema di ceci.",
        "Aggiungi un filo d'olio a crudo."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r904", title: "Frittatina morbida di zucchine", ageRange: "9-11", mealType: "Cena",
      prepTime: "15 min", texture: "Morbida, a pezzetti", allergens: ["uovo"],
      ingredients: ["1 uovo", "1/2 zucchina grattugiata", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Sbatti l'uovo con la zucchina grattugiata.",
        "Scalda l'olio in una piccola padella antiaderente.",
        "Versa il composto e cuoci a fuoco basso, girando a metà cottura, finché l'uovo è ben rassodato.",
        "Taglia a listarelle morbide prima di servire."
      ],
      conservazione: "Da consumare preferibilmente il giorno stesso; conservabile 24 ore in frigorifero."
    },
    {
      id: "r905", title: "Bastoncini di carota lessa", ageRange: "9-11", mealType: "Merenda",
      prepTime: "15 min", texture: "Morbida, finger food", allergens: [],
      ingredients: ["2 carote"],
      steps: [
        "Taglia le carote a bastoncini della grandezza di un dito adulto.",
        "Cuoci a vapore per 10-12 minuti, finché sono tenere ma si tengono in mano.",
        "Lascia intiepidire prima di offrire al bambino, sempre sotto supervisione."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r906", title: "Risotto morbido alla zucca", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "30 min", texture: "Morbida, cremosa", allergens: [],
      ingredients: ["40 g di riso", "100 g di zucca a cubetti", "brodo vegetale non salato"],
      steps: [
        "Cuoci la zucca a vapore finché è morbida e schiacciala leggermente.",
        "Tosta il riso per un minuto, poi cuocilo nel brodo vegetale aggiunto poco alla volta.",
        "A metà cottura unisci la zucca schiacciata e continua a mescolare.",
        "Servi tiepido, ben cremoso."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r907", title: "Polpette di legumi misti e carota", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: [],
      ingredients: ["80 g di legumi misti già cotti", "1/2 carota grattugiata", "un cucchiaio di pangrattato fine"],
      steps: [
        "Schiaccia i legumi con una forchetta, lasciando qualche pezzetto.",
        "Unisci la carota grattugiata e il pangrattato, amalgamando bene.",
        "Forma piccole polpette e cuoci a vapore per 12 minuti oppure in forno a 180°C per 15 minuti.",
        "Lascia intiepidire prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer, già cotte, fino a 1 mese."
    },
    {
      id: "r908", title: "Purè di fagiolini con ricotta", ageRange: "9-11", mealType: "Cena",
      prepTime: "20 min", texture: "Morbida e cremosa", allergens: ["latte"],
      ingredients: ["100 g di fagiolini", "2 cucchiai di ricotta fresca"],
      steps: [
        "Cuoci a vapore i fagiolini per 12-15 minuti, finché sono molto teneri.",
        "Schiaccia grossolanamente con una forchetta.",
        "Unisci la ricotta e amalgama bene prima di servire."
      ],
      conservazione: "Da consumare entro 24-48 ore, in frigorifero."
    },

    // ---------- 12–17 MESI ----------
    {
      id: "r1201", title: "Pasta al pomodoro fresco e basilico", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "25 min", texture: "Pezzi piccoli, da masticare", allergens: ["glutine"],
      ingredients: ["50 g di pasta corta", "2 pomodori maturi", "qualche foglia di basilico", "olio extravergine d'oliva"],
      steps: [
        "Scotta i pomodori, elimina la buccia e i semi, poi tagliali a dadini.",
        "Fai cuocere i pomodori a fuoco basso per 10 minuti con un filo d'olio.",
        "Cuoci la pasta e scolala al dente, tagliandola se necessario in pezzi più piccoli.",
        "Condisci con il sugo di pomodoro e qualche foglia di basilico spezzettata."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1202", title: "Polpette di carne al forno con purè", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "35 min", texture: "Morbida, pezzi più grandi", allergens: ["uovo", "glutine"],
      ingredients: ["150 g di carne macinata magra", "1 uovo piccolo", "pangrattato", "2 patate per il purè"],
      steps: [
        "Unisci carne, uovo e pangrattato, amalgamando bene.",
        "Forma polpette di media grandezza e cuoci in forno a 180°C per 18-20 minuti.",
        "Prepara un purè con le patate lessate e schiacciate.",
        "Servi le polpette con il purè, tagliando a metà i pezzi più grandi."
      ],
      conservazione: "In frigorifero per 2 giorni; polpette già cotte congelabili fino a 1 mese."
    },
    {
      id: "r1203", title: "Minestrone di verdure con pastina", ageRange: "12-17", mealType: "Cena",
      prepTime: "35 min", texture: "Morbida, con pezzi piccoli", allergens: ["glutine"],
      ingredients: ["carota, zucchina, patata, pisellini", "30 g di pastina", "olio extravergine d'oliva"],
      steps: [
        "Taglia le verdure a dadini piccoli e cuocile in acqua per 20 minuti.",
        "Aggiungi la pastina e cuoci fino a cottura ultimata.",
        "Condisci con un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1204", title: "Cous cous con verdurine e pollo", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "25 min", texture: "A pezzi piccoli", allergens: ["glutine"],
      ingredients: ["40 g di cous cous", "80 g di petto di pollo a cubetti", "carota e zucchina a dadini"],
      steps: [
        "Cuoci il pollo a cubetti in padella con un filo d'olio, finché ben cotto.",
        "Cuoci le verdure a vapore fino a renderle morbide.",
        "Prepara il cous cous secondo i tempi indicati sulla confezione.",
        "Unisci tutti gli ingredienti e mescola bene."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1205", title: "Frittata di verdure a cubetti", ageRange: "12-17", mealType: "Cena",
      prepTime: "20 min", texture: "Morbida, a pezzi", allergens: ["uovo"],
      ingredients: ["2 uova", "zucchina e carota a cubetti piccoli", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Cuoci le verdure a vapore per 10 minuti.",
        "Sbatti le uova e unisci le verdure.",
        "Cuoci in padella antiaderente a fuoco basso, girando a metà cottura.",
        "Taglia a quadrotti prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1206", title: "Riso con piselli e formaggio grattugiato", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida", allergens: ["latte"],
      ingredients: ["50 g di riso", "80 g di piselli", "un cucchiaio di formaggio grattugiato"],
      steps: [
        "Cuoci il riso in acqua non salata fino a cottura.",
        "Cuoci i piselli a vapore per 10 minuti e schiacciali leggermente.",
        "Unisci riso e piselli, spolvera con il formaggio grattugiato."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1207", title: "Hamburger di pesce fatto in casa", ageRange: "12-17", mealType: "Cena",
      prepTime: "25 min", texture: "Morbida, pezzi più grandi", allergens: ["pesce"],
      ingredients: ["120 g di filetto di nasello o merluzzo", "una patata lessa", "pangrattato fine"],
      steps: [
        "Trita grossolanamente il pesce con un coltello, controllando bene l'assenza di lische.",
        "Schiaccia la patata e uniscila al pesce con un po' di pangrattato.",
        "Forma piccoli hamburger e cuoci in padella antiaderente 4-5 minuti per lato.",
        "Lascia intiepidire prima di servire."
      ],
      conservazione: "Da consumare entro 24 ore; non ricongelare dopo la cottura."
    },
    {
      id: "r1208", title: "Lasagnette leggere alle verdure", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "40 min", texture: "Morbida", allergens: ["glutine", "latte"],
      ingredients: ["sfoglie di pasta fresca", "zucchine e carote a dadini", "besciamella leggera fatta in casa"],
      steps: [
        "Prepara le verdure stufate con un filo d'olio fino a renderle morbide.",
        "Prepara una besciamella leggera con latte, un cucchiaio di farina e poco burro.",
        "Alterna sfoglie, verdure e besciamella in una piccola teglia.",
        "Cuoci in forno a 180°C per circa 20 minuti.",
        "Lascia intiepidire e taglia a pezzi piccoli prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },

    // ---------- 18–24 MESI ----------
    {
      id: "r1801", title: "Pasta al ragù di carne leggero", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "40 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["60 g di pasta corta", "100 g di carne macinata magra", "passata di pomodoro", "carota e sedano a dadini"],
      steps: [
        "Soffriggi leggermente carota e sedano in poco olio.",
        "Aggiungi la carne macinata e rosola bene.",
        "Unisci la passata di pomodoro e cuoci a fuoco basso per 20 minuti.",
        "Cuoci la pasta, scola e condisci con il ragù."
      ],
      conservazione: "In frigorifero per 2 giorni; il ragù è congelabile fino a 1 mese."
    },
    {
      id: "r1802", title: "Pollo al forno con patate e carote", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "45 min", texture: "Pasto di famiglia", allergens: [],
      ingredients: ["150 g di petto di pollo", "2 patate", "2 carote", "olio extravergine d'oliva, rosmarino"],
      steps: [
        "Taglia pollo e verdure a pezzi di media grandezza.",
        "Condisci con un filo d'olio e rosmarino tritato.",
        "Cuoci in forno a 190°C per circa 30-35 minuti, girando a metà cottura.",
        "Taglia a pezzetti morbidi prima di servire al bambino."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r1803", title: "Zuppa di legumi con crostini morbidi", ageRange: "18-24", mealType: "Cena",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["150 g di legumi misti cotti", "carota, sedano, patata", "pane casereccio per crostini"],
      steps: [
        "Cuoci le verdure a dadini in acqua per 15 minuti.",
        "Aggiungi i legumi e cuoci altri 10 minuti.",
        "Frulla parzialmente la zuppa, lasciando alcuni pezzi interi.",
        "Servi con piccoli crostini di pane morbido."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1804", title: "Polpette di pesce con purè e piselli", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: ["pesce", "uovo"],
      ingredients: ["150 g di filetto di pesce bianco", "1 uovo", "pangrattato", "patate e piselli per il contorno"],
      steps: [
        "Trita il pesce e uniscilo a uovo e pangrattato.",
        "Forma polpette e cuoci in forno a 180°C per 15-18 minuti.",
        "Prepara il purè di patate e i piselli come contorno.",
        "Servi insieme, tagliando le polpette a metà."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1805", title: "Riso alla pescatora semplificato", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: ["pesce"],
      ingredients: ["60 g di riso", "100 g di filetto di pesce bianco sminuzzato", "passata di pomodoro leggera"],
      steps: [
        "Cuoci il pesce a vapore e sminuzzalo con una forchetta, controllando bene le lische.",
        "Cuoci il riso con poca passata di pomodoro diluita.",
        "Unisci il pesce al riso a fine cottura e mescola bene."
      ],
      conservazione: "Da consumare entro 24 ore."
    },
    {
      id: "r1806", title: "Parmigiana leggera di melanzane al forno", ageRange: "18-24", mealType: "Cena",
      prepTime: "45 min", texture: "Pasto di famiglia", allergens: ["latte"],
      ingredients: ["2 melanzane", "passata di pomodoro", "mozzarella", "parmigiano grattugiato"],
      steps: [
        "Taglia le melanzane a fette sottili e cuocile in forno (non fritte) finché morbide.",
        "Alterna in una teglia melanzane, passata, mozzarella a pezzetti e parmigiano.",
        "Cuoci in forno a 180°C per 20 minuti.",
        "Lascia intiepidire e taglia a pezzi piccoli."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r1807", title: "Gnocchi di patate al pomodoro", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "40 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["300 g di patate", "100 g di farina", "passata di pomodoro"],
      steps: [
        "Lessa le patate, schiacciale e impasta con la farina fino a ottenere un impasto morbido.",
        "Forma gli gnocchi e cuoci in acqua bollente finché vengono a galla.",
        "Condisci con la passata di pomodoro leggermente scaldata."
      ],
      conservazione: "In frigorifero per 1-2 giorni; gnocchi crudi congelabili fino a 1 mese."
    },
    {
      id: "r1808", title: "Torta salata di verdure e formaggio", ageRange: "18-24", mealType: "Cena",
      prepTime: "45 min", texture: "Pasto di famiglia", allergens: ["glutine", "uovo", "latte"],
      ingredients: ["pasta brisée o sfoglia", "zucchine e carote a dadini", "2 uova", "formaggio grattugiato"],
      steps: [
        "Stendi la pasta in una teglia foderata.",
        "Cuoci le verdure a vapore per 10 minuti.",
        "Sbatti le uova con il formaggio e unisci le verdure.",
        "Versa il composto sulla base di pasta e cuoci in forno a 180°C per 25-30 minuti."
      ],
      conservazione: "In frigorifero per 2 giorni."
    }
  ],

  /* ======================================================
     BONUS 2 — 30 ricette per tutta la famiglia
     (prima infornata: 12 ricette, in espansione)
     ====================================================== */
  familyRecipes: [
    {
      id: "f01", title: "Pasta al forno con verdure", ageRange: "12+", allergens: ["glutine", "latte"],
      ingredients: ["pasta corta", "zucchine, carote, piselli", "besciamella leggera", "formaggio grattugiato"],
      steps: [
        "Cuoci le verdure a dadini e la pasta separatamente.",
        "Unisci pasta, verdure e besciamella leggera.",
        "Versa in teglia, spolvera di formaggio e gratina in forno a 190°C per 15 minuti."
      ],
      notaFamiglia: "Per il resto della famiglia, aggiungi sale e un pizzico di pepe a parte, dopo aver prelevato la porzione del bambino."
    },
    {
      id: "f02", title: "Polpettone di carne e verdure", ageRange: "12+", allergens: ["uovo", "glutine"],
      ingredients: ["carne macinata mista", "carota e zucchina grattugiate", "uovo", "pangrattato"],
      steps: [
        "Unisci tutti gli ingredienti e amalgama bene.",
        "Forma un polpettone compatto e avvolgi in carta da forno.",
        "Cuoci a 180°C per 35-40 minuti."
      ],
      notaFamiglia: "La porzione degli adulti può essere insaporita con aglio, erbe aromatiche e un pizzico di sale in più."
    },
    {
      id: "f03", title: "Zuppa di ceci e rosmarino", ageRange: "12+", allergens: [],
      ingredients: ["ceci già cotti", "patata", "rosmarino", "brodo vegetale"],
      steps: [
        "Cuoci la patata a dadini nel brodo vegetale per 15 minuti.",
        "Aggiungi i ceci e il rosmarino, cuoci altri 10 minuti.",
        "Frulla parzialmente, lasciando alcuni ceci interi per la famiglia."
      ],
      notaFamiglia: "Per gli adulti, un filo d'olio a crudo e crostini di pane tostato completano il piatto."
    },
    {
      id: "f04", title: "Risotto alla zucca con parmigiano", ageRange: "12+", allergens: ["latte"],
      ingredients: ["riso", "zucca a cubetti", "brodo vegetale", "parmigiano grattugiato"],
      steps: [
        "Tosta il riso e cuoci aggiungendo il brodo poco alla volta.",
        "Unisci la zucca cotta e schiacciata a metà cottura.",
        "Manteca con il parmigiano a fuoco spento."
      ],
      notaFamiglia: "Gli adulti possono aggiungere una noce di burro in più e pepe nero a piacere."
    },
    {
      id: "f05", title: "Polpette di pesce al forno", ageRange: "12+", allergens: ["pesce", "uovo"],
      ingredients: ["filetto di pesce bianco", "uovo", "pangrattato", "prezzemolo"],
      steps: [
        "Trita il pesce e unisci uovo, pangrattato e prezzemolo.",
        "Forma polpette e disponile su una teglia foderata.",
        "Cuoci a 180°C per 15-18 minuti."
      ],
      notaFamiglia: "Per i grandi, servi con una spruzzata di limone e sale a piacere."
    },
    {
      id: "f06", title: "Frittata di verdure miste", ageRange: "12+", allergens: ["uovo"],
      ingredients: ["uova", "zucchine, carote, piselli", "olio extravergine d'oliva"],
      steps: [
        "Cuoci le verdure a vapore o in padella finché morbide.",
        "Sbatti le uova e unisci le verdure.",
        "Cuoci in padella antiaderente, girando a metà cottura."
      ],
      notaFamiglia: "La fetta per gli adulti può essere insaporita con sale, pepe ed erbe fresche."
    },
    {
      id: "f07", title: "Pasta e fagioli", ageRange: "12+", allergens: ["glutine"],
      ingredients: ["pasta corta o spezzata", "fagioli borlotti cotti", "sedano, carota, cipolla"],
      steps: [
        "Prepara un soffritto leggero di sedano, carota e cipolla.",
        "Aggiungi i fagioli e un po' di brodo, cuoci 15 minuti.",
        "Frulla parzialmente, aggiungi la pasta e completa la cottura."
      ],
      notaFamiglia: "Per i grandi, un filo d'olio a crudo e un po' di pepe arricchiscono il piatto."
    },
    {
      id: "f08", title: "Pollo alle erbe con contorno di verdure", ageRange: "12+", allergens: [],
      ingredients: ["petto di pollo", "rosmarino e timo", "verdure di stagione a pezzi"],
      steps: [
        "Condisci il pollo con le erbe aromatiche e un filo d'olio.",
        "Cuoci in padella o al forno fino a cottura completa.",
        "Cuoci le verdure a vapore come contorno."
      ],
      notaFamiglia: "La porzione degli adulti può includere sale, un pizzico di peperoncino e una spruzzata di limone."
    },
    {
      id: "f09", title: "Gnocchi di zucca fatti in casa", ageRange: "12+", allergens: ["glutine"],
      ingredients: ["zucca cotta e schiacciata", "farina", "un pizzico di noce moscata (facoltativo)"],
      steps: [
        "Impasta la zucca schiacciata con la farina fino a ottenere un composto morbido.",
        "Forma gli gnocchi e cuoci in acqua bollente finché salgono a galla.",
        "Condisci con burro fuso leggero o sugo di pomodoro."
      ],
      notaFamiglia: "Per gli adulti, salvia e burro fuso completano il piatto in modo più sfizioso."
    },
    {
      id: "f10", title: "Minestra di verdure di stagione", ageRange: "12+", allergens: [],
      ingredients: ["verdure di stagione miste", "patata", "brodo vegetale leggero"],
      steps: [
        "Taglia le verdure a pezzi piccoli.",
        "Cuoci nel brodo vegetale per 25-30 minuti.",
        "Frulla parzialmente, lasciando qualche pezzo per la consistenza."
      ],
      notaFamiglia: "Gli adulti possono aggiungere un filo d'olio a crudo e formaggio grattugiato."
    },
    {
      id: "f11", title: "Hamburger di legumi fatti in casa", ageRange: "12+", allergens: [],
      ingredients: ["legumi misti cotti", "carota grattugiata", "pangrattato", "un filo d'olio"],
      steps: [
        "Schiaccia i legumi e unisci carota e pangrattato.",
        "Forma gli hamburger e cuoci in padella antiaderente, pochi minuti per lato.",
        "Lascia intiepidire prima di servire al bambino."
      ],
      notaFamiglia: "Per i grandi, un panino integrale e verdure fresche completano il pasto."
    },
    {
      id: "f12", title: "Torta di mele senza zuccheri aggiunti", ageRange: "12+", allergens: ["glutine", "uovo"],
      ingredients: ["mele mature", "farina", "uova", "olio di semi leggero", "lievito per dolci"],
      steps: [
        "Taglia le mele a fettine sottili.",
        "Prepara un impasto morbido con farina, uova, olio e lievito.",
        "Versa l'impasto in una teglia, disponi le mele sopra e cuoci a 180°C per 35-40 minuti."
      ],
      notaFamiglia: "Dolcezza naturale data dalle mele: adatta a tutta la famiglia, senza zucchero aggiunto."
    }
  ],

  /* ======================================================
     CARDÁPIOS — Menù settimanali di esempio (per fascia d'età)
     ====================================================== */
  weeklyMenus: {
    "6-8": [
      { day: "Lunedì",    lunch: "r601", snack: "r604" },
      { day: "Martedì",   lunch: "r602", snack: "r606" },
      { day: "Mercoledì", lunch: "r603", snack: "r604" },
      { day: "Giovedì",   lunch: "r605", snack: "r606" },
      { day: "Venerdì",   lunch: "r607", snack: "r604" },
      { day: "Sabato",    lunch: "r608", snack: "r606" },
      { day: "Domenica",  lunch: "r601", snack: "r604" }
    ],
    "9-11": [
      { day: "Lunedì",    lunch: "r901", dinner: "r908" },
      { day: "Martedì",   lunch: "r903", dinner: "r904" },
      { day: "Mercoledì", lunch: "r906", dinner: "r908" },
      { day: "Giovedì",   lunch: "r902", dinner: "r904" },
      { day: "Venerdì",   lunch: "r907", dinner: "r908" },
      { day: "Sabato",    lunch: "r901", dinner: "r904" },
      { day: "Domenica",  lunch: "r906", dinner: "r908" }
    ],
    "12-17": [
      { day: "Lunedì",    lunch: "r1201", dinner: "r1205" },
      { day: "Martedì",   lunch: "r1204", dinner: "r1203" },
      { day: "Mercoledì", lunch: "r1206", dinner: "r1207" },
      { day: "Giovedì",   lunch: "r1202", dinner: "r1205" },
      { day: "Venerdì",   lunch: "r1208", dinner: "r1203" },
      { day: "Sabato",    lunch: "r1201", dinner: "r1207" },
      { day: "Domenica",  lunch: "r1204", dinner: "r1205" }
    ],
    "18-24": [
      { day: "Lunedì",    lunch: "r1801", dinner: "r1803" },
      { day: "Martedì",   lunch: "r1807", dinner: "r1806" },
      { day: "Mercoledì", lunch: "r1802", dinner: "r1804" },
      { day: "Giovedì",   lunch: "r1805", dinner: "r1808" },
      { day: "Venerdì",   lunch: "r1801", dinner: "r1803" },
      { day: "Sabato",    lunch: "r1807", dinner: "r1804" },
      { day: "Domenica",  lunch: "r1802", dinner: "r1806" }
    ]
  },

  /* ======================================================
     SUBSTITUIÇÕES — Lista di sostituzioni ingredienti
     ====================================================== */
  substitutions: [
    { ingredient: "Uovo", alternatives: ["ceci frullati", "ricotta"], note: "In caso di allergia accertata o non ancora introdotto; consulta il pediatra." },
    { ingredient: "Latte vaccino", alternatives: ["latte materno o formula di proseguimento"], note: "Il latte vaccino intero non è consigliato come bevanda prima dei 12 mesi." },
    { ingredient: "Glutine (pasta, pane)", alternatives: ["riso", "mais", "quinoa"], note: "Per intolleranza al glutine o in caso di familiarità con la celiachia." },
    { ingredient: "Pesce", alternatives: ["pollo", "legumi ben cotti e frullati"], note: "In caso di allergia accertata al pesce." },
    { ingredient: "Frutta a guscio", alternatives: ["semi macinati finemente (su indicazione pediatrica)"], note: "Mai offrire frutta a guscio intera prima dei 3-4 anni, rischio di soffocamento." },
    { ingredient: "Formaggio stagionato", alternatives: ["ricotta fresca", "formaggio fresco delicato"], note: "Preferire formaggi freschi e poco salati nei primi mesi di svezzamento." },
    { ingredient: "Zucchero", alternatives: ["frutta matura frullata", "nessuna sostituzione: evitare zuccheri aggiunti"], note: "Lo zucchero aggiunto non è raccomandato entro i 24 mesi." },
    { ingredient: "Sale", alternatives: ["erbe aromatiche", "un filo d'olio extravergine d'oliva"], note: "Il sale aggiunto non è raccomandato entro i 12 mesi e va limitato dopo." },
    { ingredient: "Miele", alternatives: ["purea di frutta matura"], note: "Il miele è controindicato prima dei 12 mesi per il rischio di botulismo infantile." },
    { ingredient: "Carne rossa", alternatives: ["pollo", "tacchino", "legumi"], note: "Per varietà nella dieta o preferenza familiare." },
    { ingredient: "Soia", alternatives: ["legumi diversi (ceci, lenticchie, fagioli)"], note: "In caso di allergia accertata alla soia." },
    { ingredient: "Sedano", alternatives: ["carota", "finocchio"], note: "In caso di allergia accertata al sedano." }
  ],

  /* ======================================================
     GUIDA — Articoli dell'introduzione alimentare
     ====================================================== */
  guides: [
    {
      id: "g1", title: "Quando iniziare: i segnali di prontezza",
      body: "Generalmente l'introduzione alimentare inizia intorno ai 6 mesi, quando il bambino mostra alcuni segnali di prontezza: riesce a stare seduto con un buon controllo del capo, mostra interesse verso il cibo degli adulti, perde il riflesso di estrusione della lingua ed è in grado di portare oggetti alla bocca in autonomia. Ogni bambino segue i propri tempi: in caso di dubbi, è sempre consigliabile confrontarsi con il pediatra di riferimento."
    },
    {
      id: "g2", title: "Consistenze: come procedere passo dopo passo",
      body: "Si parte generalmente da consistenze lisce e omogenee (puree, creme), per poi passare a consistenze più dense con piccoli pezzi morbidi intorno ai 9 mesi, fino ad arrivare, verso i 12 mesi, a pezzi più grandi che richiedono una masticazione più attiva. La progressione va adattata allo sviluppo individuale del bambino, osservando come gestisce il cibo in bocca."
    },
    {
      id: "g3", title: "Tagli e dimensioni sicure dei finger food",
      body: "I finger food vanno tagliati in forme e dimensioni sicure: bastoncini più lunghi della mano chiusa del bambino, così da poterli afferrare senza rischiare che l'intero pezzo finisca in bocca, oppure pezzi molto piccoli e morbidi, facilmente schiacciabili tra le dita. Evita sempre cibi duri, rotondi o scivolosi nella loro forma originale (come acini d'uva interi, pomodorini interi o frutta a guscio intera)."
    },
    {
      id: "g4", title: "Allergeni: come introdurli con attenzione",
      body: "Gli allergeni alimentari (uovo, latte, pesce, frutta a guscio, arachidi, soia, glutine, sedano) andrebbero introdotti uno alla volta, in piccola quantità, preferibilmente nella prima parte della giornata, per poter osservare eventuali reazioni nelle ore successive. In presenza di familiarità per allergie o reazioni sospette, è fondamentale parlarne con il pediatra prima di procedere."
    },
    {
      id: "g5", title: "Sicurezza a tavola: prevenire il soffocamento",
      body: "Il bambino deve sempre mangiare seduto, con la schiena dritta e sotto la supervisione di un adulto, mai sdraiato o in movimento. È importante conoscere le manovre di disostruzione pediatrica: questo contenuto è puramente educativo e non sostituisce un corso di primo soccorso pratico, che consigliamo vivamente di seguire."
    },
    {
      id: "g6", title: "Domande frequenti",
      body: "“Il bambino rifiuta un alimento, devo insistere?” — È normale che un nuovo sapore venga rifiutato più volte prima di essere accettato; si consiglia di riproporlo con calma, senza forzare. “Posso congelare le pappe?” — Sì, la maggior parte delle preparazioni si può congelare in porzioni singole fino a un mese, evitando di ricongelare dopo lo scongelamento. “Quanta acqua deve bere il bambino?” — Le esigenze variano con l'età e l'alimentazione: per indicazioni specifiche, rivolgiti al pediatra."
    }
  ],

  /* ======================================================
     CONSERVAZIONE — Guida rapida
     ====================================================== */
  conservationGuide: {
    title: "Conservazione e igiene in cucina",
    points: [
      "Lava sempre accuratamente le mani, gli utensili e le superfici prima di preparare i pasti del bambino.",
      "Raffredda rapidamente le preparazioni prima di riporle in frigorifero, idealmente entro due ore dalla cottura.",
      "Conserva in frigorifero (massimo 2-4°C) per non oltre 2 giorni, salvo diversa indicazione nella ricetta.",
      "Congela in porzioni singole, etichettate con il nome del piatto e la data di preparazione; consuma entro 1 mese.",
      "Scongela sempre in frigorifero o a bagnomaria, mai a temperatura ambiente.",
      "Riscalda bene e uniformemente, mescolando e controllando sempre la temperatura prima di servire al bambino."
    ]
  },

  /* ======================================================
     BONUS 1 — Guida al BLW e sicurezza a tavola
     ====================================================== */
  bonusBLW: {
    title: "Guida al BLW e sicurezza a tavola",
    sections: [
      {
        heading: "Che cos'è il Baby Led Weaning",
        text: "Il Baby Led Weaning (BLW) è un approccio all'introduzione alimentare in cui il bambino viene incoraggiato a nutrirsi in autonomia, afferrando con le mani pezzi di cibo adatti fin dai primi assaggi, invece di essere imboccato con cucchiaini di pappa. Può essere seguito in modo esclusivo o combinato con cucchiaini e puree, secondo le preferenze della famiglia."
      },
      {
        heading: "Tagli e consistenze appropriate",
        text: "I primi pezzi dovrebbero avere la forma e la lunghezza di un bastoncino, facili da afferrare con il pugno chiuso e abbastanza morbidi da schiacciarsi con due dita. Con la crescita, i pezzi possono diventare più piccoli e di consistenza più varia, seguendo sempre lo sviluppo della masticazione del bambino."
      },
      {
        heading: "Prevenzione del soffocamento",
        text: "Evita sempre cibi a rischio nella loro forma originale: acini d'uva e pomodorini interi, frutta a guscio intera, bastoncini di carota crudi e duri, würstel a rondelle, popcorn e caramelle. Taglia sempre nel senso della lunghezza gli alimenti piccoli e rotondi, e cuoci bene gli alimenti duri prima di offrirli."
      },
      {
        heading: "Conati e soffocamento: la differenza",
        text: "I conati di vomito sono un riflesso naturale e rumoroso con cui il bambino sposta il cibo troppo indietro in bocca; il bambino rimane generalmente vigile e in grado di tossire. Il soffocamento, invece, è silenzioso: il bambino non riesce a piangere, tossire o respirare normalmente e richiede un intervento immediato."
      },
      {
        heading: "Quando cercare aiuto",
        text: "In presenza di segni di soffocamento (silenzio improvviso, difficoltà respiratoria, colorito bluastro), contatta immediatamente il numero di emergenza del tuo paese. Questo contenuto ha finalità puramente educativa e non sostituisce in alcun modo un corso pratico di disostruzione pediatrica e primo soccorso, che raccomandiamo a tutti i genitori e caregiver."
      }
    ]
  },

  /* ======================================================
     BONUS 3 — Diario delle prime scoperte (modello)
     ====================================================== */
  bonusDiary: {
    title: "Diario delle prime scoperte",
    description: "Un diario, digitale e stampabile, per registrare gli alimenti offerti, le reazioni osservate, le preferenze del bambino e i piccoli grandi traguardi dell'introduzione alimentare.",
    fields: ["Data", "Alimento offerto", "Prima volta? (sì/no)", "Reazione / gradimento", "Note e osservazioni"],
    milestonesExamples: [
      "Primo assaggio di un nuovo alimento",
      "Primo utilizzo del cucchiaino in autonomia",
      "Primo finger food afferrato da solo",
      "Primo pasto interamente a tavola con la famiglia"
    ]
  },

  /* ======================================================
     ONBOARDING — Testi dell'app
     ====================================================== */
  onboarding: {
    welcomeTitle: "Benvenuta in Il Manuale della Mamma",
    welcomeSubtitle: "Tutto ciò che serve per accompagnare il tuo bambino alla scoperta del cibo, in un'unica app.",
    steps: [
      { question: "Quanti mesi ha il tuo bambino?", help: "Useremo questa informazione per mostrarti ricette e contenuti adatti alla sua fascia d'età." },
      { question: "Il tuo bambino ha preferenze o restrizioni alimentari?", help: "Facoltativo: potrai modificarlo in qualsiasi momento nelle impostazioni." },
      { question: "Ci sono allergie note in famiglia?", help: "Questa informazione serve solo a segnalarti gli alimenti da osservare con più attenzione; non sostituisce una valutazione medica." }
    ],
    disclaimer: "Le informazioni di questa app hanno scopo educativo e informativo. Non sostituiscono in alcun modo il parere del pediatra o del nutrizionista: in caso di allergie, difficoltà alimentari o dubbi specifici, rivolgiti sempre a un professionista sanitario."
  },

  /* ======================================================
     LEGALE / PRIVACY
     ====================================================== */
  legal: {
    disclaimer: "Il Manuale della Mamma fornisce contenuti educativi sull'introduzione alimentare e non sostituisce la consulenza di un pediatra o di un nutrizionista. In presenza di allergie, difficoltà di crescita o dubbi specifici, consulta sempre un professionista sanitario.",
    privacyNote: "Trattiamo i dati del tuo account e del profilo del bambino nel rispetto del Regolamento (UE) 2016/679 (GDPR), raccogliendo solo le informazioni necessarie al funzionamento dell'app. Puoi consultare l'informativa completa sulla privacy e gestire i tuoi consensi nella sezione Profilo dell'app."
  },

  /* ======================================================
     FAQ generali dell'app
     ====================================================== */
  faq: [
    { q: "A partire da quale età posso usare l'app?", a: "I contenuti sono pensati per bambini da 6 a 24 mesi, dai primi assaggi fino al pasto condiviso in famiglia." },
    { q: "Posso scaricare le ricette in PDF?", a: "Sì, ogni ricetta, menù settimanale e guida può essere scaricata o stampata in formato A4 dalla Centrale PDF." },
    { q: "Le ricette sono state validate da un professionista?", a: "I contenuti sono pensati per essere revisionati da un professionista abilitato in nutrizione infantile prima della pubblicazione definitiva." },
    { q: "Cosa faccio se il mio bambino ha un'allergia?", a: "Consulta sempre il pediatra prima di introdurre un alimento a rischio e usa la funzione Diario per tenere traccia delle reazioni osservate." }
  ]
};

/* Esporta i dati per l'uso in app.js */
if (typeof module !== "undefined") { module.exports = APP_DATA; }
