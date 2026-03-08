import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "p1",
    slug: "jolybell-ultra-black-tshirt",
    name: "Футболка Ultra Black",
    description:
      "Лімітована ultra black футболка лінійки B.O.M.J. Тонка, легка, з якісної тканини penye. Склад: 95% бавовна, 5% спандекс.",
    category: "Футболки",
    colors: ["Чорний"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["https://ultradruk.com/wp-content/uploads/2020/07/ultra-futbolka-muzhskaya-chernaya.png"],
    tags: ["jolybell", "black", "bomj", "cotton"],
    variants: [
      { id: "v1", sku: "JB-ULTRA-BLK-M", color: "Чорний", size: "M", price: 26, inStock: true },
    ],
  },
  {
    id: "p2",
    slug: "jolybell-oversize-tshirt-05",
    name: "Футболка Oversize 05",
    description:
      "Oversize-футболка вільного крою. Щільна якісна бавовна з додаванням спандексу для зносостійкості та кращої форми.",
    category: "Футболки",
    colors: ["Чорний"],
    sizes: ["S", "M", "L", "XL"],
    images: ["https://pullup.com.ua/wp-content/uploads/2024/05/futbolky-oversize-daral8.webp"],
    tags: ["jolybell", "oversize", "tshirt"],
    variants: [
      { id: "v2", sku: "JB-OVR05-BLK-M", color: "Чорний", size: "M", price: 13.31, inStock: true },
    ],
  },
  {
    id: "p3",
    slug: "jolybell-white-hoodie",
    name: "Худі White Hoodie",
    description:
      "Біле худі зі щільної тканини. Склад: 70% бавовна, 30% поліестер. Щільність 320 г/м².",
    category: "Худі",
    colors: ["Білий"],
    sizes: ["S", "M", "L", "XL"],
    images: ["https://toptime.com.ua/photos/products/awjh003/awjh003_AWH-FN.jpg"],
    tags: ["jolybell", "hoodie", "white", "warm"],
    variants: [
      { id: "v3", sku: "JB-WH-HOOD-M", color: "Білий", size: "M", price: 51.6, inStock: true },
    ],
  },
  {
    id: "p4",
    slug: "jolybell-hoodie-simple-zip",
    name: "Худі Hoodie Simple ZIP",
    description:
      "Худі вільного крою з преміальної тканини без начосу. Має кишені на блискавці, еластичні манжети та капюшон.",
    category: "Худі",
    colors: ["Чорний"],
    sizes: ["S", "M", "L", "XL"],
    images: ["https://optimusgang.com/wp-content/uploads/2024/07/%D0%A5%D1%83%D0%B4%D1%96_2-1-1200x1500.jpg"],
    tags: ["jolybell", "hoodie", "zip"],
    variants: [
      { id: "v4", sku: "JB-HSZIP-STD-M", color: "Уточнюється", size: "M", price: 51.6, inStock: true },
    ],
  },
  {
    id: "p5",
    slug: "jolybell-pants-bomj",
    name: "Штани Pants B.O.M.J",
    description:
      "Джогери з міцної преміальної тканини без начосу. Еластичний пояс зі шнурками, кишені на блискавці, додаткова задня кишеня.",
    category: "Штани",
    colors: ["Чорний"],
    sizes: ["S", "M", "L", "XL"],
    images: ["https://cdn.jolybell.com/images/kz262otd618jvzx.png?width=449&height=540&quality=90"],
    tags: ["jolybell", "pants", "joggers", "bomj"],
    variants: [
      { id: "v5", sku: "JB-PBOMJ-STD-M", color: "Уточнюється", size: "M", price: 28.05, inStock: true },
    ],
  },
  {
    id: "p6",
    slug: "jolybell-polo-simple-black",
    name: "Поло JOLY.POLO Simple Black",
    description:
      "Класичне чорне поло зі 100% бавовни. Щільність тканини — 190 г/м².",
    category: "Поло",
    colors: ["Чорний"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["https://cdn.jolybell.com/images/s9b016Z1QsTC5an.png?width=442&height=540&quality=90"],
    tags: ["jolybell", "polo", "black", "cotton"],
    variants: [
      { id: "v6", sku: "JB-POLO-BLK-M", color: "Чорний", size: "M", price: 34.65, inStock: true },
    ],
  },
  {
    id: "p7",
    slug: "jolybell-bag-duo",
    name: "Рюкзак JOLY.BAG Duo",
    description:
      "Місткий рюкзак із продуманою організацією простору. Підходить для щоденного використання та захисту електроніки, має багато кишень.",
    category: "Рюкзаки",
    colors: ["Чорний"],
    sizes: ["One Size"],
    images: ["https://cdn.jolybell.com/images/LAlFHgA2KQHheyf.png?width=540&height=540&quality=90"],
    tags: ["jolybell", "bag", "backpack", "duo"],
    variants: [
      { id: "v7", sku: "JB-DUO-OS", color: "Уточнюється", size: "One Size", price: 85.5, inStock: true },
    ],
  },
  {
  id: "p121",
  slug: "jolybell-vyshyvanka-rhombus",
  name: "Вишиванка Rhombus",
  description:
    "Класична вишиванка з орнаментом «ромби» — етнічний український мотив, що символізує здоровʼя, добробут та єдність. Легка та зручна сорочка з натуральної тканини, ідеальна як повсякденний одяг або вишуканий елемент костюму.",
  category: "Вишиванки",
  colors: ["Білий", "Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/rjM38ixualwwCmQ.png?width=566&height=540&quality=90",
    "https://cdn.jolybell.com/images/OB6HEoP4XquEbwB.png?width=476&height=540&quality=90"
  ],
  tags: ["jolybell", "vyshyvanka", "rhombus", "embroidery"],
  variants: [
    { id: "v121-s", sku: "JB-VYSH-RH-S", color: "Білий", size: "S", price: 85, inStock: true },
    { id: "v121-m", sku: "JB-VYSH-RH-M", color: "Білий", size: "M", price: 85, inStock: true },
    { id: "v121-l", sku: "JB-VYSH-RH-L", color: "Білий", size: "L", price: 85, inStock: false },
    { id: "v121-xl", sku: "JB-VYSH-RH-XL", color: "Білий", size: "XL", price: 85, inStock: true }
  ]
  },
  {
  id: "p120",
  slug: "jolybell-vyshyvanka-cross",
  name: "Вишиванка Cross",
  description:
    "Традиційна вишиванка з орнаментом «хрест» на грудях, пошита з приємної до тіла тканини Lacoste. Класичний етнічний мотив у стильному сучасному виконанні, що підкреслює українську культуру та індивідуальність.",
  category: "Вишиванки",
  colors: ["Білий", "Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/LiPrSxYYWcGmnCO.png?width=525&height=540&quality=90",
    "https://cdn.jolybell.com/images/Q0qOSjkR2h5GtL2.png?width=476&height=540&quality=90"
  ],
  tags: ["jolybell", "vyshyvanka", "cross", "embroidery"],
  variants: [
    { id: "v120-s", sku: "JB-VYSH-CROSS-S", color: "Білий", size: "S", price: 79, inStock: true },
    { id: "v120-m", sku: "JB-VYSH-CROSS-M", color: "Білий", size: "M", price: 79, inStock: true },
    { id: "v120-l", sku: "JB-VYSH-CROSS-L", color: "Білий", size: "L", price: 79, inStock: false },
    { id: "v120-xl", sku: "JB-VYSH-CROSS-XL", color: "Білий", size: "XL", price: 79, inStock: true }
  ]
  },
  {
  id: "p43",
  slug: "jolybell-joly-shirt-black",
  name: "JOLY.SHIRT Black",
  description:
    "Стильна чорна сорочка з високим коміром від бренду JolyBell. Мʼяка бавовняна тканина забезпечує комфорт і свободу рухів, а мінімалістичний дизайн підкреслює впевнений та елегантний стиль. Ідеальна як універсальний елемент гардеробу.",
  category: "Сорочки",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/Eqkkm6xjU3okEqX.png?width=420&height=540&quality=90",
    "https://cdn.jolybell.com/images/daetgGCeHT0vJqO.png?width=414&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "black", "shirt"],
  variants: [
    { id: "v43-s", sku: "JB-JOLY-SHIRT-BLK-S", color: "Чорний", size: "S", price: 55, inStock: true },
    { id: "v43-m", sku: "JB-JOLY-SHIRT-BLK-M", color: "Чорний", size: "M", price: 55, inStock: true },
    { id: "v43-l", sku: "JB-JOLY-SHIRT-BLK-L", color: "Чорний", size: "L", price: 55, inStock: true },
    { id: "v43-xl", sku: "JB-JOLY-SHIRT-BLK-XL", color: "Чорний", size: "XL", price: 55, inStock: false }
  ]
  },
  {
  id: "p44",
  slug: "jolybell-joly-shirt-black-classic",
  name: "JOLY.SHIRT Black Classic",
  description:
    "Елегантна чорна сорочка JOLY.SHIRT Black Classic з класичним коміром і прихованою застібкою. Мʼяка бавовняна тканина створює комфорт та витончений, чистий силует — ідеальний вибір для повсякденного стилю або особливих виходів.",
  category: "Сорочки",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/Z8Jt6pogPQcvFRE.png?width=411&height=540&quality=90",
    "https://cdn.jolybell.com/images/8i3uOJOqHYz1YIj.png?width=414&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "black", "classic", "cotton"],
  variants: [
    { id: "v44-s", sku: "JB-JOLY-SHIRT-BC-S", color: "Чорний", size: "S", price: 55, inStock: true },
    { id: "v44-m", sku: "JB-JOLY-SHIRT-BC-M", color: "Чорний", size: "M", price: 55, inStock: true },
    { id: "v44-l", sku: "JB-JOLY-SHIRT-BC-L", color: "Чорний", size: "L", price: 55, inStock: true },
    { id: "v44-xl", sku: "JB-JOLY-SHIRT-BC-XL", color: "Чорний", size: "XL", price: 55, inStock: false }
  ]
  },
  {
  id: "p45",
  slug: "jolybell-joly-shirt-white",
  name: "JOLY.SHIRT White",
  description:
    "Біла сорочка JOLY.SHIRT White з високим коміром та прихованою планкою застібки — елегантний вибір для тих, хто цінує сучасний мінімалістичний стиль. Виготовлена з дихаючої, якісної бавовняної тканини для комфорту протягом дня. Підходить як для повсякденного, так і для святкового образу.",  
  category: "Сорочки",
  colors: ["Білий"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/tjZvlHaqo6ZgyD0.png?width=419&height=540&quality=90",
    "https://cdn.jolybell.com/images/6v8Hjryld08R83K.png?width=414&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "white", "shirt", "cotton"],
  variants: [
    { id: "v45-s", sku: "JB-JOLY-SHIRT-WHT-S", color: "Білий", size: "S", price: 55, inStock: true },
    { id: "v45-m", sku: "JB-JOLY-SHIRT-WHT-M", color: "Білий", size: "M", price: 55, inStock: true },
    { id: "v45-l", sku: "JB-JOLY-SHIRT-WHT-L", color: "Білий", size: "L", price: 55, inStock: false },
    { id: "v45-xl", sku: "JB-JOLY-SHIRT-WHT-XL", color: "Білий", size: "XL", price: 55, inStock: true }
  ]
  },
  {
  id: "p46",
  slug: "jolybell-joly-shirt-white-classic",
  name: "JOLY.SHIRT White Classic",
  description:
    "Елегантна класична біла сорочка JOLY.SHIRT White Classic з класичним коміром та прихованою планкою застібки. Виготовлена з м’якого, високоякісного бавовняного матеріалу, легко гладиться і виглядає стильно як для повсякденних, так і для святкових образів.",
  category: "Сорочки",
  colors: ["Білий"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/HnuFX84XaYEuAaE.png?width=423&height=540&quality=90",
    "https://cdn.jolybell.com/images/zRzhejQOEvJQKYR.png?width=414&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "white", "classic", "cotton"],
  variants: [
    { id: "v46-s", sku: "JB-JOLY-SHIRT-WC-S", color: "Білий", size: "S", price: 49, inStock: true },
    { id: "v46-m", sku: "JB-JOLY-SHIRT-WC-M", color: "Білий", size: "M", price: 49, inStock: true },
    { id: "v46-l", sku: "JB-JOLY-SHIRT-WC-L", color: "Білий", size: "L", price: 49, inStock: false },
    { id: "v46-xl", sku: "JB-JOLY-SHIRT-WC-XL", color: "Білий", size: "XL", price: 49, inStock: true }
  ]
  },
  {
  id: "p47",
  slug: "jolybell-joly-shirt-black-classic-short",
  name: "JOLY.SHIRT Black Classic Short",
  description:
    "Сучасна чорна сорочка JOLY.SHIRT Black Classic Short з коротким рукавом, виконана з якісної бавовняної тканини. Прихована планка застібки створює чистий, стильний силует, що чудово підходить як для повсякденного, так і для святкового образу.",
  category: "Сорочки",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/gRF3ZMxFC1GQ9vz.png?width=383&height=540&quality=90",
    "https://cdn.jolybell.com/images/glyedvCLdSaqTEy.png?width=383&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "black", "classic", "short", "cotton"],
  variants: [
    { id: "v47-s", sku: "JB-JOLY-SHIRT-BCS-S", color: "Чорний", size: "S", price: 49, inStock: true },
    { id: "v47-m", sku: "JB-JOLY-SHIRT-BCS-M", color: "Чорний", size: "M", price: 49, inStock: true },
    { id: "v47-l", sku: "JB-JOLY-SHIRT-BCS-L", color: "Чорний", size: "L", price: 49, inStock: true },
    { id: "v47-xl", sku: "JB-JOLY-SHIRT-BCS-XL", color: "Чорний", size: "XL", price: 49, inStock: false }
  ]
  },
  {
  id: "p48",
  slug: "jolybell-joly-shirt-black-elegant",
  name: "JOLY.SHIRT Black Elegant",
  description:
    "Стильна чорна сорочка JOLY.SHIRT Black Elegant з елегантним кроєм і прихованою застібкою. Виготовлена з якісної бавовняної тканини, що дарує комфорт і витончений вигляд — універсальний варіант для офісу чи повсякденного стилю.",
  category: "Сорочки",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/c6QM6PHbdA4cxmG.png?width=394&height=540&quality=90",
    "https://cdn.jolybell.com/images/nD2XrmH8O9kXbRB.png?width=383&height=540&quality=90"
  ],
  tags: ["jolybell", "joly shirt", "black", "elegant", "cotton"],
  variants: [
    { id: "v48-s", sku: "JB-JOLY-SHIRT-BE-S", color: "Чорний", size: "S", price: 59, inStock: true },
    { id: "v48-m", sku: "JB-JOLY-SHIRT-BE-M", color: "Чорний", size: "M", price: 59, inStock: true },
    { id: "v48-l", sku: "JB-JOLY-SHIRT-BE-L", color: "Чорний", size: "L", price: 59, inStock: true },
    { id: "v48-xl", sku: "JB-JOLY-SHIRT-BE-XL", color: "Чорний", size: "XL", price: 59, inStock: false }
  ]
  },
  {
  id: "p99",
  slug: "jolybell-joly-shirt-square-classic",
  name: "JOLY.SHIRT Square Classic",
  description:
    "Класична сорочка JOLY.SHIRT Square Classic — стильна модель із квадратним кроєм, що підкреслює елегантність і сучасний мінімалістичний дизайн. Виготовлена з мʼякої бавовни для комфорту, ідеально підходить як для повсякденного образу, так і для особливих подій.",
  category: "Сорочки",
  colors: ["Білий", "Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/qh2h2hFnjdg2LVV.png?width=511&height=540&quality=90",
  ],
  tags: ["jolybell", "joly shirt", "square classic", "cotton", "shirt"],
  variants: [
    { id: "v99-s", sku: "JB-JOLY-SHIRT-SQCL-S", color: "Білий", size: "S", price: 59, inStock: true },
    { id: "v99-m", sku: "JB-JOLY-SHIRT-SQCL-M", color: "Білий", size: "M", price: 59, inStock: true },
    { id: "v99-l", sku: "JB-JOLY-SHIRT-SQCL-L", color: "Білий", size: "L", price: 59, inStock: false },
    { id: "v99-xl", sku: "JB-JOLY-SHIRT-SQCL-XL", color: "Білий", size: "XL", price: 59, inStock: true }
  ]
  },
  {
  id: "p88",
  slug: "jolybell-underwear-bomj-black",
  name: "Труси Underwear B.O.M.J Black",
  description:
    "Чорні труси Underwear B.O.M.J Black від бренду JolyBell — комфортна базова модель з приємної до тіла тканини для щоденного використання. Ергономічний крій і мʼякий еластичний пояс забезпечують зручність протягом дня.",
  category: "Труси",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/496NsJHgrHmat0I.png?width=540&height=540&quality=90",
    "https://cdn.jolybell.com/images/4SNpWJMh44RxnIO.png?width=540&height=540&quality=90"
  ],
  tags: ["jolybell", "underwear", "black", "bomj", "cotton"],
  variants: [
    { id: "v88-s", sku: "JB-UNDER-BOMJ-BLK-S", color: "Чорний", size: "S", price: 14.5, inStock: true },
    { id: "v88-m", sku: "JB-UNDER-BOMJ-BLK-M", color: "Чорний", size: "M", price: 14.5, inStock: true },
    { id: "v88-l", sku: "JB-UNDER-BOMJ-BLK-L", color: "Чорний", size: "L", price: 14.5, inStock: true },
    { id: "v88-xl", sku: "JB-UNDER-BOMJ-BLK-XL", color: "Чорний", size: "XL", price: 14.5, inStock: false }
  ]
  },
  {
  id: "p110",
  slug: "jolybell-underwear-jolybell-white",
  name: "Underwear Joly.Bell White",
  description:
    "Білі чоловічі/унісекс труси від JolyBell з високоякісної бавовняної тканини з еластаном для комфортної посадки та щоденного використання. Склад: 95% бавовна, 5% еластан. Мінімалістичний дизайн і тонкий пояс забезпечують комфорт протягом усього дня.",
  category: "Білизна",
  colors: ["Білий"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/abYVOpHsCGNouLm.png?width=540&height=540&quality=90",
    "https://cdn.jolybell.com/images/mxDTT1gyMYpgTrn.png?width=540&height=540&quality=90"
  ],
  tags: ["jolybell", "underwear", "white", "cotton"],
  variants: [
    { id: "v110-s", sku: "JB-UNDER-WHT-S", color: "Білий", size: "S", price: 18, inStock: true },
    { id: "v110-m", sku: "JB-UNDER-WHT-M", color: "Білий", size: "M", price: 18, inStock: true },
    { id: "v110-l", sku: "JB-UNDER-WHT-L", color: "Білий", size: "L", price: 18, inStock: true },
    { id: "v110-xl", sku: "JB-UNDER-WHT-XL", color: "Білий", size: "XL", price: 18, inStock: false }
  ]
},
{
  id: "p71",
  slug: "jolybell-black-cap",
  name: "Кепка Black Cap",
  description:
    "Стильна чорна кепка Black Cap від JolyBell із 100% бавовни — універсальний аксесуар для повсякденного образу. Легко поєднується з будь‑яким стилем і додає завершеного вигляду вашому вбранню.",
  category: "Кепки",
  colors: ["Чорний"],
  sizes: ["S (56–57 см)", "M (57–58 см)", "L (59–60 см)", "XL (62–63 см)", "2XL (64–65 см)"],
  images: [
    "https://cdn.jolybell.com/images/KItvb4ZIjZmWmQn.png?width=692&height=540&quality=90",
  ],
  tags: ["jolybell", "black", "cap", "cotton"],
  variants: [
    { id: "v71-s", sku: "JB-BLACK-CAP-S", color: "Чорний", size: "S (56–57 см)", price: 30, inStock: true },
    { id: "v71-m", sku: "JB-BLACK-CAP-M", color: "Чорний", size: "M (57–58 см)", price: 30, inStock: true },
    { id: "v71-l", sku: "JB-BLACK-CAP-L", color: "Чорний", size: "L (59–60 см)", price: 30, inStock: true },
    { id: "v71-xl", sku: "JB-BLACK-CAP-XL", color: "Чорний", size: "XL (62–63 см)", price: 30, inStock: false },
    { id: "v71-2xl", sku: "JB-BLACK-CAP-2XL", color: "Чорний", size: "2XL (64–65 см)", price: 30, inStock: true }
  ]
  },
  {
  id: "p82",
  slug: "jolybell-cap-zvezda",
  name: "Cap Star",
  description:
    "Стильна кепка Cap Star від JolyBell із машинною вишивкою логотипу. Виготовлена з якісної бавовняної тканини 100% cotton для комфортного носіння у повсякденному стилі.",
  category: "Головні убори",
  colors: ["Чорний"],
  sizes: ["S (56‑57 см)", "M (57‑58 см)", "L (59‑60 см)", "XL (62‑63 см)", "2XL (64‑65 см)"],
  images: [
    "https://cdn.jolybell.com/images/Vq38EOJbmk4bhCK.png?width=692&height=540&quality=90",
  ],
  tags: ["jolybell", "cap", "zvezda", "cotton", "embroidered"],
  variants: [
    { id: "v82-s", sku: "JB-CAP-ZVEZDA-S", color: "Чорний", size: "S (56‑57 см)", price: 35, inStock: true },
    { id: "v82-m", sku: "JB-CAP-ZVEZDA-M", color: "Чорний", size: "M (57‑58 см)", price: 35, inStock: true },
    { id: "v82-l", sku: "JB-CAP-ZVEZDA-L", color: "Чорний", size: "L (59‑60 см)", price: 35, inStock: true },
    { id: "v82-xl", sku: "JB-CAP-ZVEZDA-XL", color: "Чорний", size: "XL (62‑63 см)", price: 35, inStock: false },
    { id: "v82-2xl", sku: "JB-CAP-ZVEZDA-2XL", color: "Чорний", size: "2XL (64‑65 см)", price: 35, inStock: true }
  ]
  },
{
  id: "p104",
  slug: "jolybell-velor-pajamas",
  name: "Velor Pajamas",
  description:
    "Комфортна велюрова піжама JolyBell — мʼякий комплект з кофти й штанів із шкарпетковими кишенями. Ідеальний вибір для домашнього відпочинку, комфортного сну та затишних вечорів. Виготовлена з приємної до тіла велюрової тканини, що забезпечує тепло та мʼякість.",
  category: "Піжами",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/o3lymUrn4rkMkS7.png?width=271&height=540&quality=90",
  ],
  tags: ["jolybell", "pajamas", "velor", "loungewear"],
  variants: [
    { id: "v104-s", sku: "JB-PAJ-VELO-S", color: "Чорний", size: "S", price: 1650, inStock: true },
    { id: "v104-m", sku: "JB-PAJ-VELO-M", color: "Чорний", size: "M", price: 1650, inStock: true },
    { id: "v104-l", sku: "JB-PAJ-VELO-L", color: "Чорний", size: "L", price: 1650, inStock: true },
    { id: "v104-xl", sku: "JB-PAJ-VELO-XL", color: "Чорний", size: "XL", price: 1650, inStock: false }
  ]
  },
  {
  id: "p125",
  slug: "jolybell-polo-palm",
  name: "Polo Palm",
  description:
    "Класична поло‑футболка Polo Palm від JolyBell з якісної 100% бавовни щільністю 190 г/м². Тонка, але щільна тканина забезпечує комфорт та стиль у будь‑яку пору року. Ідеальний вибір як для повсякденного гардеробу, так і для більш формальних образів.",  
  category: "Поло",
  colors: ["Білий", "Чорний"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "https://cdn.jolybell.com/images/CU8zkqHzGH4tSKx.png?width=440&height=540&quality=90",
    "https://cdn.jolybell.com/images/AE10K8eMAYT4fvi.png?width=440&height=540&quality=90"
  ],
  tags: ["jolybell", "polo", "cotton", "palm"],
  variants: [
    { id: "v125-s", sku: "JB-POLO-PALM-S", color: "Білий", size: "S", price: 42, inStock: true },
    { id: "v125-m", sku: "JB-POLO-PALM-M", color: "Білий", size: "M", price: 42, inStock: true },
    { id: "v125-l", sku: "JB-POLO-PALM-L", color: "Білий", size: "L", price: 42, inStock: false },
    { id: "v125-xl", sku: "JB-POLO-PALM-XL", color: "Білий", size: "XL", price: 42, inStock: true },
    { id: "v125-xxl", sku: "JB-POLO-PALM-XXL", color: "Білий", size: "XXL", price: 42, inStock: true }
  ]
  },
  {
  id: "p20",
  slug: "jolybell-joly-polo-black",
  name: "JOLY.POLO Black",
  description:
    "Чорне поло JOLY.POLO Black з машинною вишивкою. Виготовлене з 100% бавовни високої якості з щільністю 190 г/м² — комфортний та стильний вибір для повсякденного та спортивного образу. Має класичний крій і добре поєднується з джинсами або шортами.",
  category: "Поло",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/lFjJxGtNAzUzK4S.png?width=439&height=540&quality=90",
    "https://cdn.jolybell.com/images/kT7MSRR9dy5yhEP.png?width=464&height=540&quality=90"
  ],
  tags: ["jolybell", "polo", "black", "cotton"],
  variants: [
    { id: "v20-s", sku: "JB-JOLY-POLO-BLK-S", color: "Чорний", size: "S", price: 42, inStock: true },
    { id: "v20-m", sku: "JB-JOLY-POLO-BLK-M", color: "Чорний", size: "M", price: 42, inStock: true },
    { id: "v20-l", sku: "JB-JOLY-POLO-BLK-L", color: "Чорний", size: "L", price: 42, inStock: true },
    { id: "v20-xl", sku: "JB-JOLY-POLO-BLK-XL", color: "Чорний", size: "XL", price: 42, inStock: false }
  ]
  },
  {
  id: "p21",
  slug: "jolybell-black-mirror-tee",
  name: "Футболка Black Mirror",
  description:
    "Стильна футболка Black Mirror від JolyBell із класичним кроєм та мінімалістичним дизайном. Виготовлена з мʼякого бавовняного матеріалу для максимального комфорту. Склад: 100% бавовна.",
  category: "Футболки",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "https://cdn.jolybell.com/images/fD93eb9Xoa8Nbwa.png?width=440&height=540&quality=90",
    "https://cdn.jolybell.com/images/Cv0eVh34KkN8P8H.png?width=467&height=540&quality=90"
  ],
  tags: ["jolybell", "black", "mirror", "cotton", "tshirt"],
  variants: [
    { id: "v21-s", sku: "JB-BLACK-MIRROR-S", color: "Чорний", size: "S", price: 26, inStock: true },
    { id: "v21-m", sku: "JB-BLACK-MIRROR-M", color: "Чорний", size: "M", price: 26, inStock: true },
    { id: "v21-l", sku: "JB-BLACK-MIRROR-L", color: "Чорний", size: "L", price: 26, inStock: true },
    { id: "v21-xl", sku: "JB-BLACK-MIRROR-XL", color: "Чорний", size: "XL", price: 26, inStock: false },
    { id: "v21-xxl", sku: "JB-BLACK-MIRROR-XXL", color: "Чорний", size: "XXL", price: 26, inStock: true }
  ]
  },
  {
  id: "p22",
  slug: "jolybell-joly-polo-simple-black",
  name: "JOLY.POLO Simple Black",
  description:
    "Класичне поло JOLY.POLO Simple Black з короткими рукавами та коміром на ґудзиках. Виконане з 100 % бавовни високої щільності 190 г/м², забезпечує комфорт і стиль у повсякденному образі.",
  category: "Поло",
  colors: ["Чорний"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/s9b016Z1QsTC5an.png?width=442&height=540&quality=90",
    "https://cdn.jolybell.com/images/1qb0pITRlCrlQ40.png?width=467&height=540&quality=90"
  ],
  tags: ["jolybell", "polo", "black", "cotton"],
  variants: [
    { id: "v22-xs", sku: "JB-JOLY-POLO-SMBLK-XS", color: "Чорний", size: "XS", price: 34.65, inStock: true },
    { id: "v22-s", sku: "JB-JOLY-POLO-SMBLK-S", color: "Чорний", size: "S", price: 34.65, inStock: true },
    { id: "v22-m", sku: "JB-JOLY-POLO-SMBLK-M", color: "Чорний", size: "M", price: 34.65, inStock: true },
    { id: "v22-l", sku: "JB-JOLY-POLO-SMBLK-L", color: "Чорний", size: "L", price: 34.65, inStock: false },
    { id: "v22-xl", sku: "JB-JOLY-POLO-SMBLK-XL", color: "Чорний", size: "XL", price: 34.65, inStock: true }
  ]
  },
  {
  id: "p23",
  slug: "jolybell-mops-black-tshirt",
  name: "Футболка M.O.P.S Black",
  description:
    "Стильна чорна футболка з принтом M.O.P.S від бренду JolyBell. Виготовлена з якісної бавовняної тканини для комфорту та міцності. Ідеальний варіант на кожен день.",
  category: "Футболки",
  colors: ["Чорний"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/PubXMkFZT7caOrw.png?width=441&height=540&quality=90",
    "https://cdn.jolybell.com/images/pqiBfmHCfWVbwF0.png?width=467&height=540&quality=90"
  ],
  tags: ["jolybell", "mops", "black", "tshirt", "cotton"],
  variants: [
    { id: "v23-xs", sku: "JB-MOPS-BLK-XS", color: "Чорний", size: "XS", price: 26, inStock: true },
    { id: "v23-s", sku: "JB-MOPS-BLK-S", color: "Чорний", size: "S", price: 26, inStock: true },
    { id: "v23-m", sku: "JB-MOPS-BLK-M", color: "Чорний", size: "M", price: 26, inStock: true },
    { id: "v23-l", sku: "JB-MOPS-BLK-L", color: "Чорний", size: "L", price: 26, inStock: false },
    { id: "v23-xl", sku: "JB-MOPS-BLK-XL", color: "Чорний", size: "XL", price: 26, inStock: true }
  ]
  },
  {
  id: "p101",
  slug: "jolybell-joly-polo-circle-black",
  name: "JOLY.POLO Circle Black",
  description:
    "Класична чорно‑полоса JOLY.POLO Circle Black з круглим принтом, виготовлена зі 100 % бавовни щільністю 190 г/м². Комфортна тканина та універсальний стиль роблять цю поло ідеальним вибором для щоденного носіння в поєднанні як з джинсами, так і зі шортами.",
  category: "Поло",
  colors: ["Чорний"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/Rfh55ZxgUPNeGuZ.png?width=441&height=540&quality=90",
    "https://cdn.jolybell.com/images/1tqLVxyGXd55a8i.png?width=465&height=540&quality=90"
  ],
  tags: ["jolybell", "polo", "black", "circle", "cotton"],
  variants: [
    { id: "v101-xs", sku: "JB-JOLY-POLO-CB-XS", color: "Чорний", size: "XS", price: 39, inStock: true },
    { id: "v101-s", sku: "JB-JOLY-POLO-CB-S", color: "Чорний", size: "S", price: 39, inStock: true },
    { id: "v101-m", sku: "JB-JOLY-POLO-CB-M", color: "Чорний", size: "M", price: 39, inStock: false },
    { id: "v101-l", sku: "JB-JOLY-POLO-CB-L", color: "Чорний", size: "L", price: 39, inStock: true },
    { id: "v101-xl", sku: "JB-JOLY-POLO-CB-XL", color: "Чорний", size: "XL", price: 39, inStock: true }
  ]
  },
  {
  id: "p100",
  slug: "jolybell-joly-polo-white",
  name: "JOLY.POLO White",
  description:
    "Стильна футболка‑поло JOLY.POLO White виконана з 100% високоякісної бавовни. Класичний крій із коміром і застібкою на гудзики робить її універсальним елементом гардеробу — підходить на кожен день та для Smart‑Casual образу.",
  category: "Поло",
  colors: ["Білий"],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/DQzRu5wlVjl7wwt.png?width=441&height=540&quality=90",
    "https://cdn.jolybell.com/images/CepIoEaoxdzMAIz.png?width=465&height=540&quality=90"
  ],
  tags: ["jolybell", "polo", "white", "cotton"],
  variants: [
    {
      id: "v100-s",
      sku: "JB-JOLY-POLO-WHT-S",
      color: "Білий",
      size: "S",
      price: 42,
      inStock: true
    },
    {
      id: "v100-m",
      sku: "JB-JOLY-POLO-WHT-M",
      color: "Білий",
      size: "M",
      price: 42,
      inStock: true
    },
    {
      id: "v100-l",
      sku: "JB-JOLY-POLO-WHT-L",
      color: "Білий",
      size: "L",
      price: 42,
      inStock: true
    },
    {
      id: "v100-xl",
      sku: "JB-JOLY-POLO-WHT-XL",
      color: "Білий",
      size: "XL",
      price: 42,
      inStock: false
    }
  ]
},
{
  id: "p49",
  slug: "jolybell-joly-bag-plus-black",
  name: "JOLY.BAG Plus Black",
  description:
    "Чорна сумка/рюкзак JOLY.BAG Plus Black з водовідштовхувального матеріалу, з амортизуючими вставками та відділенням під ноутбук до 17″. Стильний мінімалістичний дизайн і продумана функціональність для повсякденного використання або подорожей.",
  category: "Рюкзаки",
  colors: ["Чорний"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/3jvxhtEgPL5GwBl.png?width=437&height=540&quality=90",
    "https://cdn.jolybell.com/images/eyUQPMSKtC8GyPR.png?width=272&height=540&quality=90"
  ],
  tags: ["jolybell", "bag", "black", "plus", "backpack"],
  variants: [
    { id: "v49-os", sku: "JB-BAG-PLUS-BLK-OS", color: "Чорний", size: "One Size", price: 107, inStock: true }
  ]
},
{
  id: "p122",
  slug: "jolybell-military-civilian",
  name: "Military Civilian",
  description:
    "Практичний рюкзак Military Civilian з великими відділеннями та органайзерами. Має три основні кишені з блискавками, внутрішні органайзери для зручного розміщення гаджетів і аксесуарів, а також міцні плечові лямки для комфортного носіння в місті чи на природі.",
  category: "Рюкзаки",
  colors: ["Чорний", "Хакі"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/Wwws6927VGQU2Rv.png?width=540&height=540&quality=90",
    "https://cdn.jolybell.com/images/qx5BAvR3I8TxyHs.png?width=540&height=540&quality=90"
  ],
  tags: ["jolybell", "military", "civilian", "backpack", "bags"],
  variants: [
    { id: "v122-os", sku: "JB-MILITARY-CIV-OS", color: "Чорний", size: "One Size", price: 112, inStock: true }
  ]
},
{
  id: "p171",
  slug: "jolybell-joly-bag-leather",
  name: "JOLY.BAG Leather",
  description:
    "Стильна універсальна сумка‑рюкзак JOLY.BAG Leather з натуральної шкіри з легким блиском та брендовим тисненням JolyBell. Має місткі відділення, зручні кишені та якісну фурнітуру для щоденного використання.",
  category: "Сумки",
  colors: ["Коричневий"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/C3Id4nqvT18pidA.png?width=469&height=540&quality=90",
    "https://cdn.jolybell.com/images/p7ykK29GKR8qxbF.png?width=375&height=540&quality=90"
  ],
  tags: ["jolybell", "bag", "leather", "backpack", "accessory"],
  variants: [
    { id: "v171-1", sku: "JB-BAG-LEATHER-OS", color: "Коричневий", size: "One Size", price: 102, inStock: true }
  ]
  },
  {
  id: "p53",
  slug: "jolybell-joly-bag",
  name: "JOLY.BAG",
  description:
    "Міцна стильна сумка JOLY.BAG — універсальний аксесуар для щоденного використання. Просторий основний відділ для особистих речей та внутрішні кишені для організації дрібниць. Ідеально підходить для навчання, роботи або подорожей.",
  category: "Сумки",
  colors: ["Чорний"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/1QRmhyynLUWvK1L.png?width=464&height=540&quality=90",
    "https://cdn.jolybell.com/images/WPCEU3BZJBWGkW6.png?width=409&height=540&quality=90"
  ],
  tags: ["jolybell", "bag", "accessory", "joly bag"],
  variants: [
    { id: "v53-1", sku: "JB-JOLY-BAG-BLK", color: "Чорний", size: "One Size", price: 99, inStock: true }
  ]
  },
  {
  id: "p68",
  slug: "jolybell-joly-bag-urban-13-3",
  name: "JOLY.BAG Urban 13.3",
  description:
    "Стильна та функціональна сумка JOLY.BAG Urban 13.3 — ідеальна для щоденного використання та транспортування ноутбука до 13.3 дюймів, аксесуарів і важливих дрібниць. Водостійкий матеріал і надійна блискавка забезпечують захист ваших речей у місті чи подорожах.",
  category: "Рюкзаки",
  colors: ["Чорний"],
  sizes: [],
  images: [
    "https://cdn.jolybell.com/images/0ZceQUgWTAEPvzv.png?width=540&height=540&quality=90",
    "https://cdn.jolybell.com/images/u4yu9l0U1GPZ2RY.png?width=354&height=540&quality=90"
  ],
  tags: ["jolybell", "bag", "urban", "13.3", "backpack", "water-resistant"],
  variants: [
    { id: "v68-01", sku: "JB-BAG-URBN-13-3-BLK", color: "Чорний", size: "", price: 89, inStock: true }
  ]
},
{
  id: "p98",
  slug: "jolybell-joly-folio",
  name: "JOLY.FOLIO",
  description:
    "Стильний та функціональний органайзер‑folio від JolyBell для зручного перенесення ноутбука, планшета та документів. Має декілька відділень і кишень для аксесуарів, міцні матеріали та мінімалістичний дизайн для сучасного міського стилю.",
  category: "Сумки",
  colors: ["Чорний"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/tzWCB0i9K4TABVM.png?width=609&height=540&quality=90",
    "https://cdn.jolybell.com/images/0ULLRpWeRcpxp66.png?width=439&height=540&quality=90",
  ],
  tags: ["jolybell", "folio", "bag", "accessory"],
  variants: [
    { id: "v98-os", sku: "JB-JOLY-FOLIO-OS", color: "Чорний", size: "One Size", price: 110, inStock: true }
  ]
  },
  {
  id: "p96",
  slug: "jolybell-joly-bag-ursa",
  name: "JOLY.BAG Ursa",
  description:
    "Стильна і практична сумка‑тote bag JOLY.BAG Ursa з двома округлими ручками та блискавкою зверху. Має тиснений логотип спереду та зовнішню кишеню‑блискавку з відділенням для ручки багажу — ідеальний варіант для міста чи подорожей.",
  category: "Сумки",
  colors: ["Чорний"],
  sizes: [],
  images: [
    "https://cdn.jolybell.com/images/1irkNWU2xGt3cRG.png?width=349&height=540&quality=90",
    "https://cdn.jolybell.com/images/n3qSbG658w6QUt5.png?width=489&height=540&quality=90"
  ],
  tags: ["jolybell", "bag", "ursa", "tote"],
  variants: [
    { id: "v96-std", sku: "JB-BAG-URSA-STD", color: "Чорний", size: "", price: 95, inStock: true }
  ]
  },
  {
  id: "p159",
  slug: "jolybell-joly-pocket-black",
  name: "JOLY.Pocket Black",
  description:
    "Компактна, легка та водовідштовхувальна сумка‑пояс JOLY.Pocket Black. Ідеальна для повсякденних прогулянок, подорожей та активного способу життя — безпечне зберігання ваших речей за будь‑якої погоди.",
  category: "Рюкзаки",
  colors: ["Чорний"],
  sizes: ["One Size"],
  images: [
    "https://cdn.jolybell.com/images/G9ouQrWu7EYGFq4.png?width=455&height=540&quality=90",
  ],
  tags: ["jolybell", "pocket", "black", "bag", "accessory"],
  variants: [
    { id: "v159-os", sku: "JB-JOLY-POCKET-BLK-OS", color: "Чорний", size: "One Size", price: 75, inStock: true }
  ]
  },
  {
  id: "p85",
  slug: "jolybell-joly-bell-underwear-black",
  name: "Joly.Bell Black Underwear",
  description:
    "Класичні чорні труси Joly.Bell — базова модель нижньої білизни з мʼякої та приємної до тіла тканини. Ідеально підійдуть для щоденного використання, забезпечують комфорт та натуральне відчуття легкості.",
  category: "Труси",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://via.placeholder.com/600x600.png?text=JolyBell+Black+Underwear+Front",
    "https://via.placeholder.com/600x600.png?text=JolyBell+Black+Underwear+Back"
  ],
  tags: ["jolybell", "underwear", "black", "basic"],
  variants: [
    { id: "v85-s", sku: "JB-UNDER-BLK-S", color: "Чорний", size: "S", price: 14, inStock: true },
    { id: "v85-m", sku: "JB-UNDER-BLK-M", color: "Чорний", size: "M", price: 14, inStock: true },
    { id: "v85-l", sku: "JB-UNDER-BLK-L", color: "Чорний", size: "L", price: 14, inStock: true },
    { id: "v85-xl", sku: "JB-UNDER-BLK-XL", color: "Чорний", size: "XL", price: 14, inStock: false }
  ]
  },
{
  id: "p109",
  slug: "jolybell-black-hoodie",
  name: "Hoodie Black",
  description:
    "Класичне чорне худі від JolyBell з капюшоном, виготовлене з поєднання 70% бавовни та 30% поліестеру. Теплий та зручний виріб для щоденного стилю, ідеальний в прохолодну погоду та для повсякденних образів.",
  category: "Худі",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "https://cdn.jolybell.com/images/xvrILhJWs8s6fXN.png?width=549&height=540&quality=90",
    "https://cdn.jolybell.com/images/O1dyjFYmuogxPs9.png?width=550&height=540&quality=90"
  ],
  tags: ["jolybell", "black", "hoodie", "cotton", "streetwear"],
  variants: [
    { id: "v109-s", sku: "JB-HOODIE-BLK-S", color: "Чорний", size: "S", price: 52, inStock: true },
    { id: "v109-m", sku: "JB-HOODIE-BLK-M", color: "Чорний", size: "M", price: 52, inStock: true },
    { id: "v109-l", sku: "JB-HOODIE-BLK-L", color: "Чорний", size: "L", price: 52, inStock: true },
    { id: "v109-xl", sku: "JB-HOODIE-BLK-XL", color: "Чорний", size: "XL", price: 52, inStock: false },
    { id: "v109-xxl", sku: "JB-HOODIE-BLK-XXL", color: "Чорний", size: "XXL", price: 52, inStock: true }
  ]
  },
  {
  id: "p116",
  slug: "jolybell-product-116",
  name: "Назва товару 116",
  description:
    "Короткий опис товару 116 — стильний виріб від бренду JolyBell. Якісні матеріали, актуальний дизайн та комфорт при носінні.",
  category: "Худі",
  colors: ["Колір1", "Колір2"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/TxUcsqU1rtGPVxj.png?width=550&height=540&quality=90",
    "https://cdn.jolybell.com/images/V3ts7kqirAqvfnf.png?width=550&height=540&quality=90"
  ],
  tags: ["jolybell", "product116", "бренд"],
  variants: [
    { id: "v116-s", sku: "JB-P116-S", color: "Колір1", size: "S", price: 56, inStock: true },
    { id: "v116-m", sku: "JB-P116-M", color: "Колір1", size: "M", price: 56, inStock: true },
    { id: "v116-l", sku: "JB-P116-L", color: "Колір1", size: "L", price: 56, inStock: false },
    { id: "v116-xl", sku: "JB-P116-XL", color: "Колір1", size: "XL", price: 56, inStock: true }
  ]
  },
  {
  id: "p67",
  slug: "jolybell-black-shirt-67",
  name: "Чорна сорочка JOLYBELl",
  description:
    "Стильна чорна сорочка/футболка від бренду JolyBell — мінімалістичний дизайн, комфортна якісна тканина, універсальний варіант для щоденного носіння та формальних образів.",
  category: "Худі",
  colors: ["Чорний"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://cdn.jolybell.com/images/BXowq1JiqhdCUSE.png?width=434&height=540&quality=90",
    "https://cdn.jolybell.com/images/RC3OIKCPvkjZFqk.png?width=420&height=540&quality=90"
  ],
  tags: ["jolybell", "black", "shirt", "minimalist"],
  variants: [
    { id: "v67-s", sku: "JB-BLK-67-S", color: "Чорний", size: "S", price: 49, inStock: true },
    { id: "v67-m", sku: "JB-BLK-67-M", color: "Чорний", size: "M", price: 49, inStock: true },
    { id: "v67-l", sku: "JB-BLK-67-L", color: "Чорний", size: "L", price: 49, inStock: false },
    { id: "v67-xl", sku: "JB-BLK-67-XL", color: "Чорний", size: "XL", price: 49, inStock: true }
  ]
},
{
  id: "p58",
  slug: "jolybell-hoodie-simple-white",
  name: "Худі Simple White",
  description:
    "Стильне біле худі Simple White від JolyBell. Легке, тонке та зручне — без флісу, з натуральної тканини із домішком спандексу. Ідеально пасує до базового гардеробу для щоденного комфорту.",
  category: "Худі",
  colors: ["Білий"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "https://cdn.jolybell.com/images/tiftHI7hUjDaaWH.png?width=549&height=540&quality=90",
    "https://cdn.jolybell.com/images/aZPhHIdYYSqOTam.png?width=549&height=540&quality=90"
  ],
  tags: ["jolybell", "hoodie", "white", "cotton", "simple"],
  variants: [
    { id: "v58-s", sku: "JB-HOODIE-SIMPLE-WHT-S", color: "Білий", size: "S", price: 75, inStock: true },
    { id: "v58-m", sku: "JB-HOODIE-SIMPLE-WHT-M", color: "Білий", size: "M", price: 75, inStock: true },
    { id: "v58-l", sku: "JB-HOODIE-SIMPLE-WHT-L", color: "Білий", size: "L", price: 75, inStock: true },
    { id: "v58-xl", sku: "JB-HOODIE-SIMPLE-WHT-XL", color: "Білий", size: "XL", price: 75, inStock: false },
    { id: "v58-xxl", sku: "JB-HOODIE-SIMPLE-WHT-XXL", color: "Білий", size: "XXL", price: 75, inStock: true }
  ]
  },
  {
    id: "p8",
    slug: "jolybell-military-full",
    name: "Рюкзак Military Full",
    description:
      "Функціональний рюкзак із двосекційною конструкцією, багатьма кишенями та внутрішніми сітчастими відділеннями. Оснащений міцними двосторонніми блискавками YKK.",
    category: "Рюкзаки",
    colors: ["Чорний"],
    sizes: ["One Size"],
    images: ["https://cdn.jolybell.com/images/Yrn1fZrn2jdiyc6.png?width=540&height=540&quality=90"],
    tags: ["jolybell", "backpack", "military"],
    variants: [
      { id: "v8", sku: "JB-MILFULL-OS", color: "Уточнюється", size: "One Size", price: 140, inStock: true },
    ],
  },
];

export function getAllProducts() {
  return mockProducts;
}

export function getFeaturedProducts() {
  return mockProducts.slice(0, 4);
}

export function getProductBySlug(slug: string) {
  return mockProducts.find((p) => p.slug === slug) ?? null;
}

export type CatalogFilters = {
  q?: string;
  category?: string;
  color?: string;
  size?: string;
  sort?: "newest" | "price-asc" | "price-desc" | "name";
};

export function filterProducts(filters: CatalogFilters) {
  let items = [...mockProducts];

  if (filters.q) {
    const q = filters.q.toLowerCase();
    items = items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  }

  if (filters.category) {
    items = items.filter((p) => p.category === filters.category);
  }

  if (filters.color) {
    items = items.filter((p) => p.colors.includes(filters.color!));
  }

  if (filters.size) {
    items = items.filter((p) => p.sizes.includes(filters.size!));
  }

  switch (filters.sort) {
    case "price-asc":
      items.sort((a, b) => minPrice(a) - minPrice(b));
      break;
    case "price-desc":
      items.sort((a, b) => minPrice(b) - minPrice(a));
      break;
    case "name":
      items.sort((a, b) => a.name.localeCompare(b.name, "uk"));
      break;
    default:
      // newest (mock): оставляем порядок массива
      break;
  }

  return items;
}

export function minPrice(product: Product) {
  return Math.min(...product.variants.map((v) => v.price));
}

export function getCatalogMeta() {
  const categories = Array.from(new Set(mockProducts.map((p) => p.category)));
  const colors = Array.from(new Set(mockProducts.flatMap((p) => p.colors)));
  const sizes = Array.from(new Set(mockProducts.flatMap((p) => p.sizes)));
  return { categories, colors, sizes };
}