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
    {
      id: "r609", title: "Purea di zucchine e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia e omogenea", allergens: [],
      ingredients: ["1 zucchina media", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Lava e taglia a pezzetti la zucchina e la patata.",
        "Cuoci a vapore per 15 minuti, finché risultano molto tenere.",
        "Frulla con un filo d'acqua di cottura fino a ottenere una crema liscia.",
        "Aggiungi un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r610", title: "Crema di finocchi e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "25 min", texture: "Liscia", allergens: [],
      ingredients: ["1/2 finocchio piccolo", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Lava e taglia il finocchio e la patata a pezzetti.",
        "Cuoci a vapore per 18-20 minuti, finché sono molto morbidi.",
        "Frulla con acqua di cottura fino a consistenza liscia.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r611", title: "Purea di prugne cotte", ageRange: "6-8", mealType: "Merenda",
      prepTime: "15 min", texture: "Liscia", allergens: [],
      ingredients: ["3 prugne mature"],
      steps: [
        "Lava le prugne, tagliale a metà e rimuovi il nocciolo.",
        "Cuoci a vapore o in poca acqua per 8-10 minuti, finché sono morbide.",
        "Frulla o schiaccia con una forchetta fino a ottenere una purea liscia."
      ],
      conservazione: "In frigorifero per 2 giorni, in contenitore chiuso.",
      notaFamiglia: "Utile in caso di stitichezza lieve; proponila con moderazione, osservando la reazione del bambino."
    },
    {
      id: "r612", title: "Crema di avena con mela", ageRange: "6-8", mealType: "Colazione",
      prepTime: "15 min", texture: "Liscia e cremosa", allergens: ["glutine"],
      ingredients: ["2 cucchiai di fiocchi d'avena fini", "1/2 mela", "acqua o latte materno/di proseguimento"],
      steps: [
        "Cuoci la mela a pezzetti a vapore per 8 minuti, finché è morbida.",
        "Fai cuocere i fiocchi d'avena in poca acqua per 5 minuti, mescolando.",
        "Frulla avena e mela insieme fino a ottenere una crema liscia.",
        "Allunga con acqua o latte fino alla consistenza desiderata."
      ],
      conservazione: "Da consumare preferibilmente fresca; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r613", title: "Purè di cavolfiore e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "25 min", texture: "Liscia", allergens: [],
      ingredients: ["100 g di cimette di cavolfiore", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore cavolfiore e patata per 15-18 minuti, finché sono teneri.",
        "Frulla con acqua di cottura fino a ottenere una crema liscia.",
        "Aggiungi un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r614", title: "Vellutata di zucca e carota", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia e vellutata", allergens: [],
      ingredients: ["100 g di zucca", "1 carota piccola", "olio extravergine d'oliva"],
      steps: [
        "Lava, sbuccia e taglia a cubetti zucca e carota.",
        "Cuoci a vapore per 15-18 minuti, finché sono morbide.",
        "Frulla con acqua di cottura fino a ottenere una vellutata liscia.",
        "Condisci con un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r615", title: "Crema di ceci passati", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "25 min", texture: "Liscia", allergens: [],
      ingredients: ["50 g di ceci già cotti", "1/2 carota piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci la carota a vapore per 12 minuti.",
        "Frulla i ceci con la carota e un filo d'acqua fino a ottenere una crema liscia.",
        "Passa al setaccio per eliminare eventuali bucce, se necessario.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r616", title: "Purea di pesca cotta", ageRange: "6-8", mealType: "Merenda",
      prepTime: "15 min", texture: "Liscia", allergens: [],
      ingredients: ["1 pesca matura"],
      steps: [
        "Sbuccia e taglia a pezzetti la pesca.",
        "Cuoci a vapore per 6-8 minuti, finché è morbida.",
        "Frulla o schiaccia con una forchetta fino a ottenere una purea liscia."
      ],
      conservazione: "In frigorifero per 2 giorni, in contenitore chiuso."
    },
    {
      id: "r617", title: "Crema di spinaci e patata", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "20 min", texture: "Liscia", allergens: [],
      ingredients: ["50 g di spinaci freschi", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Lava bene gli spinaci e cuocili a vapore con la patata a cubetti per 15 minuti.",
        "Frulla con acqua di cottura fino a ottenere una crema liscia.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese.",
      notaFamiglia: "Le verdure a foglia verde vanno proposte con moderazione nei primi mesi; non superare 1-2 porzioni a settimana e chiedi conferma al pediatra in caso di dubbi."
    },
    {
      id: "r618", title: "Purè di patata dolce (americana)", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "25 min", texture: "Liscia e cremosa", allergens: [],
      ingredients: ["1 patata dolce piccola", "olio extravergine d'oliva"],
      steps: [
        "Lava, sbuccia e taglia a cubetti la patata dolce.",
        "Cuoci a vapore per 15-18 minuti, finché è morbida.",
        "Frulla con acqua di cottura fino a ottenere una crema liscia.",
        "Aggiungi un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r619", title: "Crema di orzo perlato con carota", ageRange: "6-8", mealType: "Pranzo",
      prepTime: "35 min", texture: "Liscia e cremosa", allergens: ["glutine"],
      ingredients: ["30 g di orzo perlato", "1 carota piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci l'orzo in acqua non salata per 25-30 minuti, finché è molto morbido.",
        "Cuoci la carota a vapore per 15 minuti.",
        "Frulla orzo e carota insieme fino a ottenere una crema liscia e omogenea.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r620", title: "Purea di albicocche cotte", ageRange: "6-8", mealType: "Merenda",
      prepTime: "15 min", texture: "Liscia", allergens: [],
      ingredients: ["3 albicocche mature"],
      steps: [
        "Lava le albicocche, tagliale a metà e rimuovi il nocciolo.",
        "Cuoci a vapore per 6-8 minuti, finché sono morbide.",
        "Frulla o schiaccia con una forchetta fino a ottenere una purea liscia."
      ],
      conservazione: "In frigorifero per 2 giorni, in contenitore chiuso."
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
    {
      id: "r909", title: "Polpettine di salmone e patate", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "30 min", texture: "Morbida, a piccoli pezzi", allergens: ["pesce"],
      ingredients: ["80 g di filetto di salmone fresco", "1 patata piccola", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore il salmone per 10 minuti, controllando che non ci siano lische.",
        "Lessa o cuoci a vapore la patata fino a renderla morbida, poi schiacciala.",
        "Sfalda il salmone con una forchetta e uniscilo alla patata.",
        "Forma piccole polpettine morbide con le mani inumidite."
      ],
      conservazione: "In frigorifero per 1-2 giorni; non si consiglia il congelamento del pesce già cotto."
    },
    {
      id: "r910", title: "Pastina con pomodoro e ricotta", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "20 min", texture: "Morbida, pezzi piccoli", allergens: ["glutine", "latte"],
      ingredients: ["30 g di pastina", "2 cucchiai di passata di pomodoro", "1 cucchiaio di ricotta fresca"],
      steps: [
        "Cuoci la pastina in acqua non salata fino a renderla molto morbida.",
        "Scalda leggermente la passata di pomodoro.",
        "Scola la pastina e condisci con pomodoro e ricotta, mescolando bene."
      ],
      conservazione: "Da consumare preferibilmente fresca; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r911", title: "Crema di lenticchie con pastina", ageRange: "9-11", mealType: "Cena",
      prepTime: "30 min", texture: "Densa, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["40 g di lenticchie decorticate", "20 g di pastina", "olio extravergine d'oliva"],
      steps: [
        "Cuoci le lenticchie in acqua non salata per 20 minuti, finché sono morbide.",
        "Cuoci la pastina separatamente fino a renderla morbida.",
        "Frulla grossolanamente le lenticchie, lasciando qualche pezzetto, e unisci la pastina.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r912", title: "Farinata morbida di ceci", ageRange: "9-11", mealType: "Merenda",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: [],
      ingredients: ["3 cucchiai di farina di ceci", "acqua q.b.", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Mescola la farina di ceci con acqua fino a ottenere una pastella liscia senza grumi.",
        "Versa in una piccola teglia unta d'olio.",
        "Cuoci in forno a 200°C per 15-18 minuti, finché risulta soda ma morbida.",
        "Taglia a listarelle morbide prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r913", title: "Purè di zucca con formaggio morbido", ageRange: "9-11", mealType: "Cena",
      prepTime: "20 min", texture: "Morbida e cremosa", allergens: ["latte"],
      ingredients: ["150 g di zucca", "1 cucchiaio di formaggio morbido tipo stracchino"],
      steps: [
        "Cuoci la zucca a vapore per 15 minuti, finché è morbida.",
        "Schiaccia grossolanamente con una forchetta.",
        "Unisci il formaggio morbido e amalgama fino a ottenere una crema densa."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r914", title: "Bocconcini di pollo con purè di carota", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: [],
      ingredients: ["80 g di petto di pollo", "2 carote medie", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore il pollo per 15-18 minuti, finché è ben cotto e tenero.",
        "Cuoci a vapore le carote fino a renderle morbide, poi schiacciale con una forchetta.",
        "Taglia il pollo a bocconcini piccoli e morbidi, adatti alle capacità del bambino.",
        "Servi insieme, con un filo d'olio a crudo."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r915", title: "Risotto alla zucchina con parmigiano", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "30 min", texture: "Cremosa, a piccoli pezzi", allergens: ["latte"],
      ingredients: ["40 g di riso per risotti", "1 zucchina piccola", "brodo vegetale non salato", "un cucchiaino di parmigiano grattugiato"],
      steps: [
        "Taglia la zucchina a dadini piccoli.",
        "Tosta il riso un minuto, poi cuoci aggiungendo brodo vegetale poco alla volta, unendo la zucchina a metà cottura.",
        "Mantieni la cottura cremosa, mescolando spesso.",
        "A fine cottura, manteca con il parmigiano."
      ],
      conservazione: "Da consumare preferibilmente fresco; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r916", title: "Polpette di tonno e patate", ageRange: "9-11", mealType: "Cena",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: ["pesce"],
      ingredients: ["60 g di tonno al naturale ben sgocciolato", "1 patata piccola lessata", "un cucchiaino di olio extravergine d'oliva"],
      steps: [
        "Schiaccia la patata lessata fino a renderla una purea morbida.",
        "Sfalda il tonno con una forchetta e uniscilo alla patata.",
        "Amalgama bene e forma piccole polpette morbide.",
        "Puoi servirle a temperatura ambiente, senza ulteriore cottura se il tonno è già cotto."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r917", title: "Vellutata di verdure con crostini morbidi", ageRange: "9-11", mealType: "Cena",
      prepTime: "25 min", texture: "Morbida, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["zucchina, carota e patata in parti uguali", "1 fetta di pane morbido", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore le verdure fino a renderle molto morbide.",
        "Frulla grossolanamente, lasciando una consistenza con piccoli pezzi.",
        "Taglia il pane a cubetti piccoli e morbidi da aggiungere sopra.",
        "Completa con un filo d'olio a crudo."
      ],
      conservazione: "In frigorifero per 1-2 giorni; in freezer fino a 1 mese (senza il pane)."
    },
    {
      id: "r918", title: "Cous cous morbido con verdurine", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "20 min", texture: "Morbida, a piccoli pezzi", allergens: ["glutine"],
      ingredients: ["30 g di cous cous", "carota e zucchina a dadini piccoli", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore le verdurine fino a renderle molto tenere.",
        "Prepara il cous cous versando acqua calda e lasciando riposare coperto per 5 minuti, poi sgrana con una forchetta.",
        "Unisci le verdurine al cous cous e completa con un filo d'olio."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r919", title: "Polpettine di ricotta e spinaci", ageRange: "9-11", mealType: "Cena",
      prepTime: "25 min", texture: "Morbida, a piccoli pezzi", allergens: ["latte"],
      ingredients: ["50 g di spinaci cotti e ben strizzati", "3 cucchiai di ricotta fresca", "un cucchiaio di pangrattato fine"],
      steps: [
        "Trita finemente gli spinaci cotti.",
        "Uniscili alla ricotta e al pangrattato, amalgamando bene.",
        "Forma piccole polpettine morbide e cuoci in forno a 180°C per 12-15 minuti."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r920", title: "Purè di fave decorticate", ageRange: "9-11", mealType: "Pranzo",
      prepTime: "25 min", texture: "Morbida e cremosa", allergens: [],
      ingredients: ["80 g di fave fresche decorticate", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Cuoci le fave e la patata in acqua non salata per 15-18 minuti, finché sono molto morbide.",
        "Schiaccia con una forchetta o frulla grossolanamente.",
        "Aggiungi un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni.",
      notaFamiglia: "In caso di favismo (deficit di G6PD) in famiglia, non proporre le fave e consulta il pediatra prima di introdurle."
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
    {
      id: "r1209", title: "Polpette di pollo e verdure al forno", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "35 min", texture: "Pezzi piccoli, da masticare", allergens: ["uovo"],
      ingredients: ["150 g di pollo macinato", "carota e zucchina grattugiate", "1 uovo", "pangrattato fine"],
      steps: [
        "Unisci pollo macinato, verdure grattugiate, uovo e pangrattato in una ciotola.",
        "Amalgama bene e forma piccole polpette.",
        "Disponi su una teglia foderata e cuoci in forno a 190°C per 20 minuti, girandole a metà cottura."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1210", title: "Pasta al pesto leggero di basilico", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "20 min", texture: "Pezzi piccoli, da masticare", allergens: ["glutine", "latte", "frutta a guscio"],
      ingredients: ["pasta corta", "foglie di basilico fresco", "un cucchiaino di pinoli", "parmigiano grattugiato", "olio extravergine d'oliva"],
      steps: [
        "Frulla basilico, pinoli, parmigiano e olio fino a ottenere un pesto cremoso, senza aglio crudo.",
        "Cuoci la pasta in acqua non salata fino a renderla morbida.",
        "Condisci la pasta scolata con il pesto, mescolando bene e aggiungendo un filo di acqua di cottura se serve."
      ],
      conservazione: "Da consumare preferibilmente fresca; il pesto si conserva in frigorifero per 2 giorni."
    },
    {
      id: "r1211", title: "Vellutata di zucca con crostini integrali", ageRange: "12-17", mealType: "Cena",
      prepTime: "25 min", texture: "Morbida, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["zucca", "1 patata piccola", "pane integrale", "olio extravergine d'oliva"],
      steps: [
        "Cuoci zucca e patata a vapore fino a renderle morbide.",
        "Frulla fino a ottenere una vellutata liscia.",
        "Tosta leggermente il pane integrale e taglialo a cubetti piccoli da aggiungere sopra.",
        "Completa con un filo d'olio."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese (senza i crostini)."
    },
    {
      id: "r1212", title: "Risotto alla zucca e salvia", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "30 min", texture: "Cremosa, a piccoli pezzi", allergens: ["latte"],
      ingredients: ["riso per risotti", "zucca a dadini", "una foglia di salvia", "brodo vegetale non salato", "parmigiano grattugiato"],
      steps: [
        "Cuoci la zucca a vapore fino a renderla morbida e schiacciane metà.",
        "Tosta il riso, poi cuoci aggiungendo brodo poco alla volta insieme alla zucca e alla salvia.",
        "A fine cottura, manteca con il parmigiano."
      ],
      conservazione: "Da consumare preferibilmente fresco; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r1213", title: "Polpette di ceci e verdure al forno", ageRange: "12-17", mealType: "Cena",
      prepTime: "30 min", texture: "Pezzi piccoli, da masticare", allergens: [],
      ingredients: ["ceci già cotti", "carota grattugiata", "un cucchiaio di farina", "olio extravergine d'oliva"],
      steps: [
        "Schiaccia i ceci con una forchetta o frullali grossolanamente.",
        "Unisci la carota grattugiata e la farina, amalgamando fino a ottenere un composto compatto.",
        "Forma piccole polpette e cuoci in forno a 190°C per 18-20 minuti, girandole a metà cottura."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1214", title: "Pasta con sugo di verdure miste", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "25 min", texture: "Pezzi piccoli, da masticare", allergens: ["glutine"],
      ingredients: ["pasta corta", "zucchina, carota e passata di pomodoro", "olio extravergine d'oliva"],
      steps: [
        "Taglia le verdure a dadini piccoli e falle stufare con un filo d'olio per 10 minuti.",
        "Aggiungi la passata di pomodoro e cuoci altri 10 minuti.",
        "Cuoci la pasta, scolala e condiscila con il sugo di verdure."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese (solo il sugo)."
    },
    {
      id: "r1215", title: "Involtini di pollo morbidi con purè", ageRange: "12-17", mealType: "Cena",
      prepTime: "35 min", texture: "Pezzi piccoli, da masticare", allergens: [],
      ingredients: ["fettine sottili di petto di pollo", "spinaci cotti", "patate", "olio extravergine d'oliva"],
      steps: [
        "Disponi un po' di spinaci cotti su ogni fettina di pollo e arrotola a formare un involtino.",
        "Cuoci in padella con un filo d'olio, coperto, per 15-18 minuti, finché il pollo è ben cotto.",
        "Prepara un purè di patate morbido come accompagnamento.",
        "Taglia gli involtini a fettine piccole prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r1216", title: "Zuppa di farro e verdure", ageRange: "12-17", mealType: "Cena",
      prepTime: "40 min", texture: "Morbida, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["farro perlato", "carota, sedano e zucchina", "brodo vegetale non salato", "olio extravergine d'oliva"],
      steps: [
        "Cuoci il farro in brodo vegetale per circa 20 minuti, finché è morbido.",
        "Aggiungi le verdure a dadini piccoli e continua la cottura per 10-12 minuti.",
        "Completa con un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1217", title: "Polpette di merluzzo e patate al forno", ageRange: "12-17", mealType: "Cena",
      prepTime: "30 min", texture: "Pezzi piccoli, da masticare", allergens: ["pesce"],
      ingredients: ["filetto di merluzzo", "patate lessate", "prezzemolo tritato", "olio extravergine d'oliva"],
      steps: [
        "Cuoci a vapore il merluzzo per 10 minuti, controllando che non ci siano lische, poi sfaldalo.",
        "Schiaccia le patate lessate e uniscile al merluzzo con un po' di prezzemolo.",
        "Forma piccole polpette e cuoci in forno a 190°C per 15 minuti."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1218", title: "Risotto con piselli e zucchine", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "30 min", texture: "Cremosa, a piccoli pezzi", allergens: ["latte"],
      ingredients: ["riso per risotti", "piselli", "zucchina a dadini", "brodo vegetale non salato", "parmigiano grattugiato"],
      steps: [
        "Tosta il riso, poi cuoci aggiungendo brodo poco alla volta insieme a piselli e zucchina.",
        "Mescola spesso fino a cottura ultimata e consistenza cremosa.",
        "Manteca con il parmigiano a fine cottura."
      ],
      conservazione: "Da consumare preferibilmente fresco; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r1219", title: "Frittata di zucchine e formaggio morbido", ageRange: "12-17", mealType: "Cena",
      prepTime: "20 min", texture: "Pezzi piccoli, da masticare", allergens: ["uovo", "latte"],
      ingredients: ["2 uova", "1 zucchina piccola grattugiata", "un cucchiaio di formaggio morbido", "olio extravergine d'oliva"],
      steps: [
        "Sbatti le uova con il formaggio morbido.",
        "Unisci la zucchina grattugiata e mescola bene.",
        "Cuoci in padella antiaderente con un filo d'olio, a fuoco basso, girando la frittata a metà cottura.",
        "Taglia a listarelle morbide prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1220", title: "Pasta e ceci delicata", ageRange: "12-17", mealType: "Pranzo",
      prepTime: "30 min", texture: "Morbida, con piccoli pezzi", allergens: ["glutine"],
      ingredients: ["pastina o pasta corta", "ceci già cotti", "brodo vegetale non salato", "olio extravergine d'oliva", "rosmarino"],
      steps: [
        "Frulla metà dei ceci con un po' di brodo fino a ottenere una crema; lascia l'altra metà intera.",
        "Cuoci la pasta direttamente nel brodo con la crema di ceci e un rametto di rosmarino.",
        "Unisci i ceci interi a fine cottura e completa con un filo d'olio."
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
    },
    {
      id: "r1809", title: "Pasta al forno con zucchine e provola", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "40 min", texture: "Pasto di famiglia", allergens: ["glutine", "latte"],
      ingredients: ["pasta corta", "zucchine a dadini", "provola dolce a cubetti", "besciamella leggera"],
      steps: [
        "Cuoci le zucchine a vapore o in padella con un filo d'olio fino a renderle morbide.",
        "Cuoci la pasta al dente e condiscila con besciamella, zucchine e metà della provola.",
        "Versa in una teglia, copri con la provola rimasta e gratina in forno a 190°C per 15 minuti."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r1810", title: "Polpette di lenticchie e carote al forno", ageRange: "18-24", mealType: "Cena",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: [],
      ingredients: ["lenticchie già cotte", "carota grattugiata", "pangrattato", "olio extravergine d'oliva"],
      steps: [
        "Schiaccia le lenticchie con una forchetta fino a ottenere un composto denso.",
        "Unisci la carota grattugiata e il pangrattato, amalgamando bene.",
        "Forma polpette e cuoci in forno a 190°C per 20 minuti, girandole a metà cottura."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1811", title: "Risotto alla milanese delicato", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "30 min", texture: "Pasto di famiglia", allergens: ["latte"],
      ingredients: ["riso per risotti", "una bustina di zafferano", "brodo vegetale non salato", "una noce di burro", "parmigiano grattugiato"],
      steps: [
        "Tosta il riso, poi cuoci aggiungendo brodo vegetale poco alla volta.",
        "Sciogli lo zafferano in un mestolo di brodo caldo e uniscilo a metà cottura.",
        "A fine cottura, manteca con burro e parmigiano."
      ],
      conservazione: "Da consumare preferibilmente fresco; si conserva in frigorifero per 24 ore."
    },
    {
      id: "r1812", title: "Spezzatino di pollo con patate e piselli", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "45 min", texture: "Pasto di famiglia", allergens: [],
      ingredients: ["petto o coscia di pollo a pezzetti", "patate a cubetti", "piselli", "passata di pomodoro", "olio extravergine d'oliva"],
      steps: [
        "Rosola il pollo in padella con un filo d'olio per qualche minuto.",
        "Aggiungi le patate, i piselli e la passata di pomodoro.",
        "Copri con un po' d'acqua e cuoci a fuoco basso per 25-30 minuti, finché tutto è morbido."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1813", title: "Lasagna leggera di verdure", ageRange: "18-24", mealType: "Cena",
      prepTime: "50 min", texture: "Pasto di famiglia", allergens: ["glutine", "latte"],
      ingredients: ["sfoglie di pasta fresca", "zucchine, carote e spinaci", "besciamella leggera", "parmigiano grattugiato"],
      steps: [
        "Cuoci le verdure a vapore o in padella fino a renderle morbide.",
        "Alterna sfoglie, verdure, besciamella e un po' di parmigiano in una teglia.",
        "Cuoci in forno a 180°C per circa 25 minuti, finché la superficie è dorata.",
        "Lascia intiepidire e taglia a pezzi prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1814", title: "Orecchiette con cime di rapa delicate", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "30 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["orecchiette", "cime di rapa", "olio extravergine d'oliva", "un pezzetto di patata (facoltativo, per addolcire)"],
      steps: [
        "Cuoci le cime di rapa in acqua bollente per 10 minuti, poi scolale, tenendo da parte l'acqua di cottura.",
        "Cuoci le orecchiette nella stessa acqua, unendo le cime di rapa negli ultimi minuti.",
        "Scola e condisci con un filo d'olio; frulla una piccola parte con la patata se il sapore risulta troppo intenso per il bambino."
      ],
      conservazione: "In frigorifero per 2 giorni."
    },
    {
      id: "r1815", title: "Polpette di manzo al sugo", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "40 min", texture: "Pasto di famiglia", allergens: ["uovo", "glutine"],
      ingredients: ["carne di manzo macinata", "un uovo", "pangrattato", "passata di pomodoro", "olio extravergine d'oliva"],
      steps: [
        "Amalgama carne, uovo e pangrattato, poi forma piccole polpette.",
        "Rosola le polpette in padella con un filo d'olio.",
        "Aggiungi la passata di pomodoro e cuoci coperto a fuoco basso per 20 minuti."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1816", title: "Minestra di farro e legumi misti", ageRange: "18-24", mealType: "Cena",
      prepTime: "40 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["farro perlato", "legumi misti già cotti", "carota e sedano", "brodo vegetale non salato"],
      steps: [
        "Cuoci il farro in brodo vegetale per 20 minuti.",
        "Aggiungi i legumi e le verdure a dadini, continuando la cottura per 10-15 minuti.",
        "Completa con un filo d'olio a crudo prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1817", title: "Filetto di platessa al forno con patate", ageRange: "18-24", mealType: "Cena",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: ["pesce"],
      ingredients: ["filetto di platessa", "patate a fette sottili", "olio extravergine d'oliva", "prezzemolo"],
      steps: [
        "Disponi le patate a fette in una teglia con un filo d'olio e cuoci in forno a 190°C per 15 minuti.",
        "Aggiungi il filetto di platessa sopra le patate, con un filo d'olio e prezzemolo.",
        "Continua la cottura per altri 12-15 minuti, controllando che non ci siano lische prima di servire."
      ],
      conservazione: "In frigorifero per 1-2 giorni."
    },
    {
      id: "r1818", title: "Pasta con ragù di verdure e lenticchie", ageRange: "18-24", mealType: "Pranzo",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: ["glutine"],
      ingredients: ["pasta corta", "lenticchie già cotte", "carota, sedano e passata di pomodoro", "olio extravergine d'oliva"],
      steps: [
        "Trita finemente carota e sedano e falli stufare con un filo d'olio per 5 minuti.",
        "Aggiungi le lenticchie e la passata di pomodoro, cuoci a fuoco basso per 15-20 minuti.",
        "Cuoci la pasta, scolala e condiscila con il ragù di verdure e lenticchie."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese (solo il sugo)."
    },
    {
      id: "r1819", title: "Vellutata di carciofi", ageRange: "18-24", mealType: "Cena",
      prepTime: "35 min", texture: "Pasto di famiglia", allergens: [],
      ingredients: ["2 carciofi puliti", "1 patata piccola", "olio extravergine d'oliva"],
      steps: [
        "Pulisci bene i carciofi, eliminando le foglie più dure, e tagliali a pezzetti.",
        "Cuoci carciofi e patata a vapore per 20 minuti, finché sono molto morbidi.",
        "Frulla fino a ottenere una vellutata liscia, regolando la densità con acqua di cottura.",
        "Completa con un filo d'olio prima di servire."
      ],
      conservazione: "In frigorifero per 2 giorni; in freezer fino a 1 mese."
    },
    {
      id: "r1820", title: "Torta salata di zucca e ricotta", ageRange: "18-24", mealType: "Cena",
      prepTime: "45 min", texture: "Pasto di famiglia", allergens: ["glutine", "uovo", "latte"],
      ingredients: ["pasta brisée", "zucca a cubetti", "ricotta fresca", "un uovo", "parmigiano grattugiato"],
      steps: [
        "Cuoci la zucca a vapore fino a renderla morbida, poi schiacciala leggermente.",
        "Mescola la zucca con ricotta, uovo e parmigiano fino a ottenere un composto omogeneo.",
        "Stendi la pasta brisée in una teglia, versa il composto e cuoci in forno a 180°C per 30 minuti."
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
    },
    {
      id: "f13", title: "Zuppa di farro e ceci", ageRange: "12+", allergens: ["glutine"],
      ingredients: ["farro perlato", "ceci già cotti", "carota, sedano e rosmarino", "brodo vegetale"],
      steps: [
        "Cuoci il farro nel brodo vegetale per 20 minuti.",
        "Aggiungi i ceci, le verdure a dadini e il rosmarino.",
        "Continua la cottura per altri 10-15 minuti e servi con un filo d'olio."
      ],
      notaFamiglia: "Per gli adulti, aggiusta di sale e pepe a parte dopo aver prelevato la porzione del bambino."
    },
    {
      id: "f14", title: "Polpette di melanzane al forno", ageRange: "12+", allergens: ["uovo", "glutine", "latte"],
      ingredients: ["melanzane", "pangrattato", "un uovo", "parmigiano grattugiato"],
      steps: [
        "Cuoci le melanzane a vapore o al forno fino a renderle morbide, poi schiacciale.",
        "Unisci pangrattato, uovo e parmigiano, amalgamando bene.",
        "Forma polpette e cuoci in forno a 190°C per 20 minuti."
      ],
      notaFamiglia: "La porzione degli adulti può essere insaporita con aglio e basilico in più."
    },
    {
      id: "f15", title: "Risotto ai funghi delicato", ageRange: "12+", allergens: ["latte"],
      ingredients: ["riso per risotti", "funghi champignon freschi", "brodo vegetale", "parmigiano grattugiato"],
      steps: [
        "Pulisci e taglia finemente i funghi, falli stufare con un filo d'olio.",
        "Tosta il riso, poi cuoci aggiungendo brodo poco alla volta insieme ai funghi.",
        "Manteca con il parmigiano a fine cottura."
      ],
      notaFamiglia: "Per il bambino, assicurati che i funghi siano tagliati molto piccoli e ben cotti."
    },
    {
      id: "f16", title: "Pollo alla cacciatora leggera", ageRange: "12+", allergens: [],
      ingredients: ["pollo a pezzi", "passata di pomodoro", "carota, sedano e cipolla", "olio extravergine d'oliva"],
      steps: [
        "Rosola il pollo con un filo d'olio insieme alle verdure tritate finemente.",
        "Aggiungi la passata di pomodoro e un po' d'acqua.",
        "Cuoci coperto a fuoco basso per 30-35 minuti, finché il pollo è ben cotto e morbido."
      ],
      notaFamiglia: "La porzione degli adulti può essere insaporita con un pizzico di peperoncino o sale in più."
    },
    {
      id: "f17", title: "Torta salata di zucchine e patate", ageRange: "12+", allergens: ["glutine", "uovo", "latte"],
      ingredients: ["pasta brisée", "zucchine e patate a fette sottili", "2 uova", "formaggio grattugiato"],
      steps: [
        "Stendi la pasta in una teglia foderata.",
        "Cuoci a vapore zucchine e patate per 10 minuti.",
        "Sbatti le uova con il formaggio, unisci le verdure e versa sulla base di pasta.",
        "Cuoci in forno a 180°C per 30 minuti."
      ],
      notaFamiglia: "Ottima anche fredda, pratica da portare fuori casa per tutta la famiglia."
    },
    {
      id: "f18", title: "Minestrone della nonna", ageRange: "12+", allergens: [],
      ingredients: ["verdure di stagione miste", "patata", "legumi a scelta", "brodo vegetale o acqua"],
      steps: [
        "Taglia tutte le verdure a dadini piccoli.",
        "Cuoci in acqua o brodo per 30-35 minuti, finché le verdure sono molto morbide.",
        "Frulla una parte per rendere il minestrone più cremoso, lasciando qualche pezzetto."
      ],
      notaFamiglia: "Si presta a molte varianti in base alla stagione: un classico versatile per tutta la famiglia."
    },
    {
      id: "f19", title: "Polpette di salmone e patate al forno", ageRange: "12+", allergens: ["pesce"],
      ingredients: ["filetto di salmone", "patate lessate", "prezzemolo", "pangrattato"],
      steps: [
        "Cuoci a vapore il salmone, controllando che non ci siano lische, poi sfaldalo.",
        "Schiaccia le patate lessate e uniscile al salmone con prezzemolo e pangrattato.",
        "Forma polpette e cuoci in forno a 190°C per 18-20 minuti."
      ],
      notaFamiglia: "Per gli adulti, un filo di limone a crudo prima di servire dà freschezza in più."
    },
    {
      id: "f20", title: "Pasta al forno con ricotta e spinaci", ageRange: "12+", allergens: ["glutine", "latte"],
      ingredients: ["pasta corta", "spinaci cotti", "ricotta fresca", "parmigiano grattugiato"],
      steps: [
        "Cuoci gli spinaci e tritali, poi mescolali con la ricotta.",
        "Cuoci la pasta al dente e condiscila con il composto di ricotta e spinaci.",
        "Versa in una teglia, spolvera di parmigiano e gratina in forno a 190°C per 15 minuti."
      ],
      notaFamiglia: "Un piatto completo e pratico, apprezzato da tutta la famiglia."
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
