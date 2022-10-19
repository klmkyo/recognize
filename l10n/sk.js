OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Rozpoznávanie",
    "Smart media tagging for Nextcloud" : "Inteligentné označovanie médií pre Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Táto aplikácia prechádza vašou zbierkou médií a pridáva vhodné štítky, pričom automaticky kategorizuje vaše fotografie a hudbu.\n\n* 📷 👪 Rozpoznáva tváre z fotografií kontaktov\n* 📷 🏔 Rozpoznáva zvieratá, krajinu, jedlá, vozidlá, budovy a iné predmety\n* 📷 🗼 Rozpoznáva orientačné body a pamiatky\n* 👂 🎵 Rozpoznáva hudobné žánre\n* ⚡ Označovanie funguje prostredníctvom Collaborative Tags spoločnosti Nextcloud, čo umožňuje prístup ktorejkoľvek z vašich aplikácií\n* 👂 počúvajte svoju označenú hudbu pomocou aplikácie audioprehrávača\n* 📷 zobrazte svoje označené fotografie pomocou aplikácie Fotografie\n\nPo inštalácii môžete povoliť označovanie v nastaveniach správcu.\n\nPožiadavky:\n- PHP 7.4 a vyššie\n- Povolená aplikácia „Kolaboratívne štítky“\n- Pre natívnu rýchlosť:\n- Procesor: x86 64-bit (s podporou inštrukcií AVX)\n- Systém s glibc (zvyčajne normou na Linuxe; Alpine linux a FreeBSD *nie sú* takéto systémy)\n- Pre sub-native rýchlosť (pomocou režimu JavaScript)\n- Procesor: x86 64-bit, arm64, armv7l (nie je potrebný AVX)\n- Systém s glibc alebo musl (vrátane Alpine linux)\n- ~4 GB voľnej pamäte RAM (ak ju obmedzujete, uistite sa, že máte k dispozícii nejaký swap)\n\nAplikácia neposiela žiadne citlivé údaje poskytovateľom cloudu ani podobným službám. Všetko spracovanie sa vykonáva na vašom počítači Nextcloud pomocou Tensorflow.js spusteného v Node.js, ktorý je súčasťou tejto aplikácie.",
    "Status" : "Stav",
    "The machine learning models have been downloaded successfully." : "Modely strojového učenia boli úspešne stiahnuté.",
    "The machine learning models still need to be downloaded." : "Stále je potrebné stiahnuť modely strojového učenia.",
    "The app is installed and will automatically classify files in background processes." : "Aplikácia je nainštalovaná a automaticky klasifikuje súbory v procese na pozadí.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Momentálne nie je vybratá žiadna z nižšie uvedených možností označovania štítkom. Aplikácia momentálne nebude robiť nič.",
    "Image tagging" : "Taggovanie obrázku",
    "Face recognition is working. " : "Rozpoznávanie tváre je funkčné.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Počas rozpoznávania tváre sa vyskytla chyba, skontrolujte záznam o chybách Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čaká sa na správy o stave rozpoznávania tváre. Ak táto správa pretrváva dlhšie ako 30 minút, skontrolujte záznam o chybách Nextcloud.",
    "Face recognition:" : "Rozpoznávanie tváre:",
    "Queued files" : "Súbory vo fronte",
    "Last classification: " : "Posledná klasifikácia:",
    "Object recognition is working." : "Rozpoznávanie objektov je funkčné.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Počas rozpoznávania objektu sa vyskytla chyba, skontrolujte záznam o chybách Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čaká sa na správy o stave rozpoznávania objetku. Ak táto správa pretrváva dlhšie ako 30 minút, skontrolujte záznam o chybách Nextcloud.",
    "Object recognition:" : "Rozpoznávanie objektov:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Povoliť rozpoznávanie tváre (zoskupuje obrázky podľa ľudí, ktorí sa na nich zobrazujú v aplikácii Fotky)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Povoliť rozpoznávanie objektov (napr. jedlo, vozidlá, krajina)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Povoliť rozpoznávanie orientačných bodov (napr. Eiffelova veža, Golden Gate Bridge)",
    "Audio tagging" : "Taggovanie audia",
    "Audio recognition is working." : "Rozpoznávanie audia je funkčné.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Počas rozpoznávania audia sa vyskytla chyba, skontrolujte záznam o chybách Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čaká sa na správy o stave rozpoznávania audia. Ak táto správa pretrváva dlhšie ako 30 minút, skontrolujte záznam o chybách Nextcloud.",
    "Music genre recognition:" : "Rozpoznávanie hudobného žánru:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Povoliť rozpoznávanie hudobných žánrov (napr. pop, rock, folk, metal, new age)",
    "Video tagging" : "Taggovanie videa",
    "Video recognition is working." : "Rozpoznávanie videa je funkčné.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Počas rozpoznávania videa sa vyskytla chyba, skontrolujte záznam o chybách Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Čaká sa na správy o stave rozpoznávania videa. Ak táto správa pretrváva dlhšie ako 30 minút, skontrolujte záznam o chybách Nextcloud.",
    "Video recognition:" : "Rozpoznávanie videa:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Povoliť rozpoznávanie ľudskej činnosti (napr. pretláčanie rukou, driblovanie v basketbale, hula hooping)",
    "Reset" : "Resetovať",
    "Reset tags for classified files" : "Obnoviť značky pre klasifikované súbory",
    "Rescan all files" : "Znova skenovať všetky súbory",
    "Terminal commands" : "Príkazy terminálu",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Ak chcete spustiť úplnú klasifikáciu manuálne, spustite nasledujúci príkaz na serverovom termináli.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Ak chcete stiahnuť všetky modely pred vykonaním klasifikačných úloh, spustite nasledujúci príkaz na serverovom termináli.",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Pomocou nasledujúceho príkazu môžete odstrániť všetky štítky, ku ktorým už nie sú priradené žiadne súbory:",
    "CPU cores" : "CPU jadrá",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "V predvolenom nastavení sa použijú všetky dostupné jadrá CPU, čo môže spôsobiť značné zaťaženie vášho systému. Aby ste tomu zabránili, môžete obmedziť množstvo použitých jadier CPU.",
    "Number of CPU Cores (0 for no limit)" : "Počet CPU jadier (0 pre žiadny limit)",
    "Tensorflow plain mode" : "Jednoduchý režim Tensorflow",
    "Checking CPU" : "Kontrolujem CPU",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Váš systém podporuje natívne operácie TensorFlow, nepotrebujete WASM mód.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Režim WASM bol aktivovaný automaticky, pretože váš stroj nepodporuje natívnu prevádzku TensorFlow:",
    "Enable WASM mode" : "Povoliť WASM mód",
    "Node.js path" : "Cesta k Node.js",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Ak dodaný binárny súbor Node.js vo vašom systéme z nejakého dôvodu nefunguje, môžete nastaviť cestu k vlastnému binárnemu súboru node.js. V súčasnosti je podporovaný Node v14.17 a novšie vydania v14.",
    "Your server does not support AVX instructions" : "Váš server nepodporuje AVX inštrukcie",
    "Your server does not have an x86 64-bit CPU" : "Váš server nemá x86 64-bitové CPU",
    "Your server uses musl libc" : "Váš server používa muls libc",
    "Failed to load settings" : "Nepodarilo sa načítať nastavenia",
    "Failed to save settings" : "Nepodarilo sa uložiť nastavenia",
    "never" : "nikdy",
    "{time} ago" : "Pred {time} ",
    "Cat" : "Mačka",
    "Animal" : "Zviera",
    "Wildlife" : "Divoká príroda",
    "Nature" : "Príroda",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Lev",
    "Wild cat" : "Divoká mačka",
    "Cheetah" : "Gepard",
    "Seashore" : "Morské pobrežie",
    "Beach" : "Pláž",
    "Water" : "Voda",
    "Lakeside" : "Pri jazere",
    "Flower" : "Kvetina",
    "Plant" : "Rastlina",
    "Window" : "Okno",
    "Architecture" : "Architektúra",
    "Stairs" : "Schody",
    "Building" : "Budova",
    "Field" : "Pole",
    "Farm" : "Farma",
    "Landscape" : "Na šírku",
    "Portrait" : "Na výšku",
    "People" : "Ľudia",
    "Fashion" : "Móda",
    "Ship" : "Loď",
    "Vehicle" : "Vozidlo",
    "Grasshopper" : "Kobylka",
    "Insect" : "Hmyz",
    "Fish" : "Ryba",
    "Shark" : "Žralok",
    "Chicken" : "Kura",
    "Bird" : "Vták",
    "Ostrich" : "Pštros",
    "Owl" : "Sova",
    "Salamander" : "Salamander",
    "Frog" : "Žaba",
    "Turtle" : "Korytnačka",
    "Reptile" : "Plaz",
    "Lizard" : "Jašterica",
    "Chameleon" : "Chameleon",
    "Crocodile" : "Krokodíl",
    "Alligator" : "Aligátor",
    "Scorpion" : "Škorpión",
    "Spider" : "Pavúk",
    "Duck" : "Kačica",
    "Worm" : "Červ",
    "Shell" : "Škrupina",
    "Snail" : "Slimák",
    "Crab" : "Krab",
    "Lobster" : "Homár",
    "Cooking" : "Varenie",
    "Penguin" : "Tučniak",
    "Whale" : "Veľryba",
    "Dog" : "Pes",
    "Wolf" : "Vlk",
    "Fox" : "Líška",
    "Bear" : "Medveď",
    "Beetle" : "Chrobák",
    "Butterfly" : "Motýľ",
    "Rabbit" : "Zajac",
    "Hippo" : "Hroch",
    "Cow" : "Krava",
    "Buffalo" : "Byvol",
    "Sheep" : "Ovca",
    "Ape" : "Op",
    "Monkey" : "Opica",
    "Lemur" : "Lemur",
    "Elephant" : "Slon",
    "Panda" : "Panda",
    "Instrument" : "Nástroj",
    "Music" : "Hudba",
    "Aircraft" : "Lietadlo",
    "Airport" : "Letisko",
    "Tractor" : "Traktor",
    "Weapon" : "Zbraň",
    "Backpack" : "Batoh",
    "Shop" : "Obchod",
    "Office" : "Office",
    "Outdoor" : "Outdoor",
    "Living" : "Život",
    "Tower" : "Veža",
    "Drinks" : "Nápoje",
    "Beverage" : "Nápoj",
    "Food" : "Jedlo",
    "Shelter" : "Prístrešok",
    "Furniture" : "Nábytok",
    "Book" : "Kniha",
    "Train" : "Vlak",
    "Butcher" : "Mäsiar",
    "Car" : "Auto",
    "Historic" : "Historické",
    "Boat" : "Loď",
    "Electronics" : "Elektronika",
    "Indoor" : "Indoor",
    "Church" : "Kostol",
    "Shoe" : "Topánka",
    "Candle" : "Sviečka",
    "Coffee" : "Káva",
    "Keyboard" : "Klávesnica",
    "Computer" : "Počítač",
    "Helmet" : "Helma",
    "Wall" : "Stena",
    "Clock" : "Hodiny",
    "Dining" : "Stolovanie",
    "Kitchen" : "Kuchyňa",
    "Snow" : "Sneh",
    "Dome" : "Kupola",
    "Screen" : "Obrazovka",
    "Flag" : "Vlajka",
    "Truck" : "Nákladné auto",
    "Store" : "Obchod",
    "Tool" : "Nástroj",
    "Pumpkin" : "Tekvica",
    "Vegetables" : "Zelenina",
    "Photography" : "Fotografia",
    "Library" : "Knižnica",
    "Display" : "Zobrazenie",
    "Bag" : "Taška",
    "Cup" : "Pohár",
    "Rocks" : "Skaly",
    "Bus" : "Autobus",
    "Bowl" : "Misa",
    "Monitor" : "Monitor",
    "Bike" : "Bycikel",
    "Scooter" : "Skúter",
    "Camping" : "Táborenie",
    "Cart" : "Vozík",
    "Piggy bank" : "Pokladnička",
    "Bottle" : "Flaška",
    "Plate" : "Tanier",
    "Camera" : "Kamera",
    "Camper" : "Rekreant",
    "Barbecue" : "Grilovanie",
    "Basket" : "Košík",
    "Diving" : "Potápanie",
    "Snowmobile" : "Snežný skúter",
    "Bridge" : "Most",
    "Couch" : "Gauč",
    "Theater" : "Divadlo",
    "Spoon" : "Lyžička",
    "Comic" : "Smiešne",
    "Soup" : "Polievka",
    "Dessert" : "Dezert",
    "Bakery" : "Pečivo",
    "Fruit" : "Ovocie",
    "Pasta" : "Cestoviny",
    "Meat" : "Mäso",
    "Pizza" : "Pizza",
    "Wine" : "Víno",
    "Alpine" : "Vysokohorské",
    "Mountains" : "Hory",
    "Sand" : "Piesok",
    "Wool" : "Vlna",
    "Glass" : "Sklo",
    "Moment" : "Momentka",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Hlavolam",
    "Heritage" : "Dedičstvo",
    "Safe" : "Bezpečie",
    "Bucket" : "Sektor",
    "Baby" : "Dieťa",
    "Cradle" : "Kolíska",
    "Patio" : "Terasa",
    "Mountain" : "Vrch",
    "Radio telescope" : "Rádioteleskop",
    "Theme park" : "Tématický park",
    "Festival" : "Festival",
    "Event" : "Udalosť",
    "Monument" : "Pamätník",
    "Balloon" : "Balón",
    "Crib" : "Postieľka",
    "Fan" : "Ventilátor",
    "Gas station" : "Čerpacia stanica",
    "Wood" : "Drevo",
    "Bench" : "Lavica",
    "Parking" : "Parkovanie",
    "Traffic" : "Doprava",
    "Public transport" : "Verejná doprava",
    "Umbrella" : "Dáždnik",
    "Stage" : "Divadlo",
    "Toy" : "Hračka",
    "Vase" : "Váza",
    "Mailbox" : "Poštová schránka",
    "Sign" : "Podpísať",
    "Gallery" : "Galéria",
    "Park" : "Park"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");