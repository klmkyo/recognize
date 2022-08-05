OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Распознавание",
    "Smart media tagging for Nextcloud" : "Умная пометка медиафайлов для Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Это приложение просматривает Вашу коллецию медиафайлов и добавляет подходящие теги, автоматически создавая категории для ваших фотографий и музыки.\n\n* 📷 👪 Распознаёт лица на фотографиях контактов\n* 📷 🏔 Распознаёт животных, ландшафты, еду, транспорт, здания и другие объекты\n* 📷 🗼 Распознает памятники и монументы\n* 👂 🎵 Распознаёт жанры музыки\n* ⚡ Теги работают через Совместные теги в Nextcloud, позволяя использовать их любыми Вашими приложениями\n  * 👂 слушайте музыку с тегами через приложение аудиоплеера\n  * 📷 смотрите Ваши фотографии с тегами через приложение Фотографии\nПосле установки, добавление тегов можно включить через настройки администратора.\n\nТребования:\n- PHP 7.4 и выше\n- Приложение \"совместные теги\" включено\n- Для высокой скорости:\n  - Процессор: x86 64 бит (с поддержкой инструкций AVX)\n  - Система с glibc (обычно имеется на Linux; но не на Alpine linux и FreeBSD)\n- Для достаточной скорости (с использованием режима JavaScript)\n  - Процессор: x86 64 бит, arm64, armv7l (AVX необязателен)\n  - Система с glibc или musl (вкл. Alpine linux)\n- ~4ГБ свободной оперативной памяти (если памяти мало, удостоверьтесь, что у Вас включен файл подкачки)\n\nПриложение не отправляет никаких личных данных облачным поставщикам или подобным сервисам. Вся обработка производится на вашем сервере Nextcloud при помощи Tensorflow.js, запускаемом через Node.js, который идёт в комплекте с приложением.",
    "Status" : "Состояние",
    "Image tagging" : "Пометка изображений",
    "Audio tagging" : "Пометка аудиозаписей",
    "Video tagging" : "Пометка видеозаписей",
    "Reset" : "Сброс",
    "Manual operation" : "Ручное управление",
    "CPU cores" : "Ядра процессора",
    "Tensorflow plain mode" : "Обычный режим Tensorflow",
    "Node.js path" : "Путь к Node.js",
    "Failed to load settings" : "Не удалось загрузить настройки",
    "Failed to save settings" : "Не удалось сохранить настройки",
    "Face recognition" : "Распознавание лиц",
    "Cat" : "Кошка",
    "Animal" : "Животное",
    "Wildlife" : "Дикая природа",
    "Puma" : "Пума",
    "Leopard" : "Леопард",
    "Lion" : "Лев",
    "Wild cat" : "Дикая кошка",
    "Cheetah" : "Гепард",
    "Seashore" : "Берег моря",
    "Beach" : "Пляж",
    "Water" : "Вода",
    "Lakeside" : "Берег озера",
    "Flower" : "Цветок",
    "Plant" : "Растение",
    "Nature" : "Природа",
    "Window" : "Окно",
    "Architecture" : "Архитектура",
    "Stairs" : "Ступени",
    "Building" : "Здание",
    "Field" : "Поле",
    "Farm" : "Ферма",
    "Landscape" : "Ландшафт",
    "Portrait" : "Портрет",
    "Fashion" : "Мода",
    "People" : "Люди",
    "Ship" : "Корабль",
    "Vehicle" : "Транспортное средство",
    "Grasshopper" : "Кузнечик",
    "Insect" : "Насекомое",
    "Fish" : "Рыба",
    "Shark" : "Акула",
    "Chicken" : "Курица",
    "Bird" : "Птица",
    "Ostrich" : "Страус",
    "Owl" : "Сова",
    "Salamander" : "Саламандра",
    "Frog" : "Лягушка",
    "Turtle" : "Черепаха",
    "Reptile" : "Рептилия",
    "Lizard" : "Ящерица",
    "Chameleon" : "Хамелеон",
    "Crocodile" : "Крокодил",
    "Alligator" : "Аллигатор",
    "Scorpion" : "Скорпион",
    "Spider" : "Паук",
    "Duck" : "Утка",
    "Worm" : "Червь",
    "Shell" : "Ракушка",
    "Snail" : "Улитка",
    "Crab" : "Краб",
    "Lobster" : "Лобстер",
    "Cooking" : "Приготовление еды",
    "Penguin" : "Пингвин",
    "Whale" : "Кит",
    "Dog" : "Собака",
    "Wolf" : "Волк",
    "Fox" : "Лисица",
    "Bear" : "Медведь",
    "Beetle" : "Жук",
    "Butterfly" : "Бабочка",
    "Rabbit" : "Кролик",
    "Hippo" : "Гиппопотам",
    "Cow" : "Корова",
    "Buffalo" : "Бизон",
    "Sheep" : "Овца",
    "Ape" : "Обезьяна",
    "Monkey" : "Обезьяна",
    "Lemur" : "Лемур",
    "Elephant" : "Слон",
    "Music" : "Музыка",
    "Office" : "Офис",
    "Train" : "Поезд",
    "Car" : "Номер в авто",
    "Computer" : "Компьютер",
    "Clock" : "Часы",
    "Screen" : "Экран",
    "Library" : "Библиотека",
    "Display" : "Экран",
    "Bike" : "Bike",
    "Camping" : "Поход",
    "Food" : "Еда",
    "Camera" : "Камера",
    "Barbecue" : "Барбекю",
    "Theater" : "Театр",
    "Pizza" : "Пицца",
    "Info" : "Информация",
    "Document" : "Документ",
    "Bucket" : "Корзина",
    "Festival" : "Фестиваль",
    "Gas station" : "Заправка",
    "Parking" : "Парковка",
    "Gallery" : "Галерея",
    "Park" : "Парк"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
