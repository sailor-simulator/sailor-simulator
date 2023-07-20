import { IQuestion } from "../interfaces/question.interface";

export const QuestionsEnum: IQuestion[] = [
  {
    id: 1,
    title_by: "Што азначае такі знак перад уваходам у канал?",
    title_ru: "Что означает такой знак перед входом в канал?",
    title_pl: "Co oznacza taki znak przed wejściem do kanału?",
    images: ["image1.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "сачыце за хвалямі, якiя ствараюцца маторнымі лодкамі",
        title_ru: "следите за волнами, создаваемыми моторными лодками",
        title_pl: "uwaga na fale wytwarzane przez motorówki",
        is_correct: false,
        has_selected: undefined,
      },
      {
        id: 2,
        title_by: "забарона стварэння хваль",
        title_ru: "запрет создания волн",
        title_pl: "zakaz wytwarzania fali",
        is_correct: true,
        has_selected: undefined,
      },
      {
        id: 3,
        title_by: "месца з небяспечным хваляваннем",
        title_ru: "место с небезопасным волнением",
        title_pl: "miejsce o niebezpiecznym zafalowaniu",
        is_correct: false,
        has_selected: undefined,
      },
    ],
  },
  {
    id: 2,
    title_by: "Што павінен зрабіць стырнач яхты, калі заўважыць на курсе паказаныя ніжэй знакі?",
    title_ru: "Что должен сделать рулевой яхты, когда заметит на курсе знаки ниже?",
    title_pl: "Co musi zrobić sternik jachtu, kiedy na kursie zauważy poniższe znaki?",
    images: ["image2.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "прапусціць маторныя судны, якія ідуць з процілеглага боку",
        title_ru: "пропустить моторные судна, идущие с противоположной стороны",
        title_pl: "przepuścić jednostki motorowe płynące z naprzeciwka",
        is_correct: false,
        has_selected: undefined,
      },
      {
        id: 2,
        title_by: "не перасякаць межы, адзначаныя белым колерам",
        title_ru: "не пересекать границы, отмеченные белым цветом",
        title_pl: "nie przekraczać skrajni zaznaczonej białymi kolorami",
        is_correct: true,
        has_selected: undefined,
      },
      {
        id: 3,
        title_by: "перасякаць межы, адзначаныя чырвоным колерам",
        title_ru: "пересекать границы, отмеченные красным цветом",
        title_pl: "przekraczać skrajnie zaznaczona czerwonymi kolorami",
        is_correct: false,
        has_selected: undefined,
      },
    ],
  },
  {
    id: 3,
    title_by: "На водным шляху пад мастом стырнач заўважыў знак ніжэй. Што азначае гэты знак?",
    title_ru: "На водном пути под мостом рулевой заметил знак ниже. Что означает этот знак?",
    title_pl: "Na drodze wodnej pod mostem sternik zauważył poniższy znak. Co on oznacza?",
    images: ["image3.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "можна ісці толькі адным напрамкам і з боку знака",
        title_ru: "можно идти только одним направлением и со стороны знака",
        title_pl: "można płynąc tylko w jednym kierunku i od strony znaku",
        is_correct: false,
        has_selected: undefined,
      },
      {
        id: 2,
        title_by: "складаны водны шлях",
        title_ru: "сложный водный путь",
        title_pl: "utrudnienia na torze wodnym",
        is_correct: false,
        has_selected: undefined,
      },
      {
        id: 3,
        title_by: "рэкамендуецца праход у абодвух напрамках",
        title_ru: "рекомендуется проход в обоих направлениях",
        title_pl: "zalecane przejście w obydwu kierunkach",
        is_correct: true,
        has_selected: undefined,
      },
    ],
  },
  {
    id: 4,
    title_by: "Дзе капітан павінен прышвартаваць яхту, калі плыве ў напрамку ніжэйзгаданага знака?",
    title_ru: "Где рулевой должен пришвартоваться, если идет в направлении знака ниже?",
    title_pl: "Gdzie sternik musi zacumować jacht jeśli płynie w kierunku poniższego znaku?",
    images: ["image4.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "у любым месцы, знак азначае месца стаянкі",
        title_ru: "в любом месте, знак означает место стоянки",
        title_pl: "w dowolnym miejscu, znak oznacza miejsce postojowe",
        has_selected: undefined,
        is_correct: undefined
      },
      {
        id: 2,
        title_by: "забаронена швартаваць з правага боку знаку",
        title_ru: "нельзя швартовать с правой стороны знака",
        title_pl: "nie wolno parkować z prawej strony znaku",
        has_selected: undefined,
        is_correct: undefined
      },
      {
        id: 3,
        title_by: "дазваляецца швартаваць у напрамку правага боку знаку",
        title_ru: "можно швартовать в направлении справа от знака",
        title_pl: "wolno parkować od znaku w kierunku prawej strony",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 5,
    title_by: "З якога боку трэба абмінаць кардынальны знак знізу?",
    title_ru: "С какой стороны следует обойти кардинальный знак внизу?",
    title_pl: "Od której strony należy omijać poniższy znak kardynalny?",
    images: ['image5.png'],
    answer_variants: [
      {
        id: 1,
        title_by: "знак абмінуць з поўначы",
        title_ru: "знак обойти с севера",
        title_pl: "znak omijamy od północy",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "інфармуе нас пра небяспеку з паўночы, знак абмінаць з поўдня",
        title_ru: "информирует нас об опасности с севера, знак обойти c юга",
        title_pl: "informuje nas o niebezpieczeństwach znajdujących się od północnej strony, znak omijamy od południa",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "заўсёды абмінаем правым бортам",
        title_ru: "всегда обходим правым бортом",
        title_pl: "zawsze omijamy prawa burta",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 6,
    title_by: "Хто адказвае за бяспеку яхты і экаіпажу?",
    title_ru: "Кто отвечает за безопасность яхты и команды?",
    title_pl: "Kto odpowiada za bezpieczeństwo jachtu i załogi?",
    answer_variants: [
      {
        id: 1,
        title_by: "кожны адказвае за сябе",
        title_ru: "каждый отвечает за себя",
        title_pl: "każdy odpowiada za siebie",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "працаўнік судна, які з'яўляецца капітанам на яхце",
        title_ru: "работник судна, который является капитаном на яхте",
        title_pl: "kierownik statku czyli osoba, która jest kapitanem na jachcie",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "толькі і выключна ўласнік яхты, нават калі ён не з'яўляецца капітанам яхты",
        title_ru: "только хозяин яхты, даже если он не является капитаном яхты",
        title_pl: "tylko i wyłącznie właściciel jachtu, nawet jeśli nie jest kapitanem jachtu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 7,
    title_by: "Яхта, якая плыве пад парусамі і на маторы лічыцца:",
    title_ru: "Яхта, идущая под парусами и на моторе считается:",
    title_pl: "Jacht płynący pod żaglami i na silniku jest uważany za:",
    answer_variants: [
      {
        id: 1,
        title_by: "суднам парусным",
        title_ru: "судном парусным",
        title_pl: "statek żaglowy",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "суднам маторным",
        title_ru: "судном моторным",
        title_pl: "statek mechaniczny",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "суднам маторнным толькі калі матор працуе",
        title_ru: "судном моторным, но только когда двигатель работает",
        title_pl: "statek mechaniczny tylko wtedy gdy silnik pracuje na biegu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 8,
    title_by: "Ці ёсць судна, якое цягне за сабой якар, суднам на хаду?",
    title_ru: "Является ли судно, сорвавшее якорь, судном на ходу?",
    title_pl: "Czy statek, który ciągnie za sobą kotwice jest statkiem w drodze?",
    answer_variants: [
      {
        id: 1,
        title_by: "так",
        title_ru: "да",
        title_pl: "tak",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "не",
        title_ru: "нет",
        title_pl: "nie",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "калі няма ўключанага матора або пастаўленых парсусоў, судна не з'яўляецца суднам на хаду",
        title_ru: "если нет включённого двигателя или поставленных парусов, судно не является судном на ходу",
        title_pl: "jeśli nie ma uruchomionego silnika lub postawionych żagli nie jest statkiem w drodze.",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 9,
    title_by: "Элементы стаячага такелажу на яхце тыпу шлюп, гэта:",
    title_ru: "Элементы стоячего такелажа на яхте типа шлюп, это:",
    title_pl: "Liny olinowania stałego na jachcie typu slup, to:",
    answer_variants: [
      {
        id: 1,
        title_by: "штаг, ванты, фалы",
        title_ru: "штаг, ванты, фалы",
        title_pl: "sztag, wanty, fały",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "ахтэрштаг, ванты, штаг",
        title_ru: "ахтерштаг, ванты, штаг",
        title_pl: "achtersztag, wanty, sztag",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "нірал, ахтерштаг, фал шверта",
        title_ru: "нирал, ахтерштаг, фал шверта",
        title_pl: "kontrafał, achtersztag, fal płatwy mieczowej",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 10,
    title_by: "На курсе бейдевінд моцна выбраны пярэдні парус і патраўлены грот выклікаюць:",
    title_ru: "На курсе бейдевинд сильно выбранный передний парус и потравленный грот вызывают:",
    title_pl: "Na kursie bejdewind za mocno wybrany fok i poluzowany grot powoduje:",
    answer_variants: [
      {
        id: 1,
        title_by: "павелічэнне падветранасці",
        title_ru: "увеличение подветренности",
        title_pl: "wzrost zawietrzności jachtu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "павелічэнне наветранасці",
        title_ru: "увеличение наветренности",
        title_pl: "wzrost nawietrzności jachtu",
        has_selected: undefined,
        is_correct: null
      },
      {
        id: 3,
        title_by: "няма значэння ў падветранасці і наветранасці яхты",
        title_ru: "нет значения в подветренной и наветренной стороне яхты",
        title_pl: "nie ma znaczenia na zawietrzność i nawietrzność jachtu",
        has_selected: undefined,
        is_correct: null
      }
    ]
  }
  
  
]
