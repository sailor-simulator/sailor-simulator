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
    title_by: "На водным шляху пад мастом стырнач заўважыў знак пазначаны ніжэй. Што азначае гэты знак?",
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
    title_by: "Дзе капітан павінен прышвартаваць яхту, калі плыве ў напрамку паказанага ніжэй знака?",
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
    title_ru: "С какой стороны следзьмет обойти кардинальный знак внизу?",
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
        title_by: "толькі ўласнік яхты, нават калі ён не з'яўляецца капітанам яхты",
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
        title_by: "суднам маторным толькі калі матор працуе",
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
        title_by: "калі няма ўключанага рухавіка або пастаўленых парусоў, судна не з'яўляецца суднам на хаду",
        title_ru: "если нет включённого двигателя или поставленных парусов, судно не является судном на ходу",
        title_pl: "jeśli nie ma uruchomionego silnika lub postawionych żagli nie jest statkiem w drodze",
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
        is_correct: false
      },
      {
        id: 3,
        title_by: "няма значэння ў падветранасці і наветранасці яхты",
        title_ru: "нет значения в подветренной и наветренной стороне яхты",
        title_pl: "nie ma znaczenia na zawietrzność i nawietrzność jachtu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 11,
    title_by: "Пры правільна выбраных парусах на якім курсе адбываецца найбольшая сіла крэну?",
    title_ru: "При правильно поставленных парусах, на каком курсе возникает наибольшая сила крена?",
    title_pl: "Przy prawidłowo wybranych żaglach na jakim kursie występuje największa siła przechylająca?",
    answer_variants: [
      {
        id: 1,
        title_by: "бакштаг",
        title_ru: "бакштаг",
        title_pl: "baksztag",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "фордэвінд",
        title_ru: "фордевинд",
        title_pl: "fordewind",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "бейдевінд",
        title_ru: "бейдевинд",
        title_pl: "pełny bejdewind",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 12,
    title_by: "Які курс з'яўляецца вастрэйшым, а які паўнейшым?",
    title_ru: "Какой курс является острее, а какой полнее?",
    title_pl: "Który kurs jest ostrzejszy a który pełniejszy?",
    answer_variants: [
      {
        id: 1,
        title_by: "галфвінд з'яўляецца вастрэйшым, а бейдевінд паўнейшым",
        title_ru: "галфвинд является острее, а бейдевинд полнее",
        title_pl: "półwiatr jest ostrzejszy a bejdewind pełniejszy",
        has_selected: undefined,
        is_correct: null
      },
      {
        id: 2,
        title_by: "бакштаг з'яўляецца вастрэйшым, а галфвінд паўнейшым",
        title_ru: "бакштаг является острее, а галфвинд полнее",
        title_pl: "baksztag jest ostrzejszy a półwiatr pełniejszy",
        has_selected: undefined,
        is_correct: null
      },
      {
        id: 3,
        title_by: "бакштаг з'яўляецца вастрэйшым, а фордэвінд паўнейшым",
        title_ru: "бакштаг является острее, а фордевинд полнее",
        title_pl: "baksztag jest ostrzejszy a fordewind pełniejszy",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 13,
    title_by: "Калі яхта ідзе правым галсам?",
    title_ru: "Когда яхта идёт правым галсом?",
    title_pl: "Kiedy jacht płynie prawym halsem?",
    answer_variants: [
      {
        id: 1,
        title_by: "вецер дзьме ў левы борт",
        title_ru: "ветер дует в левый борт",
        title_pl: "wiatr wieje w lewa burtę",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "вецер дзьме ў правы борт",
        title_ru: "ветер дует в правый борт",
        title_pl: "wiatr wieje w prawa burtę",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "грот працуе на левым борце, а фок на правым",
        title_ru: "грот работает на левом борту, а передний парус на правом",
        title_pl: "grot pracuje na lewej burcie, a fok na prawej",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 14,
    title_by: "На курсе бейдевінд, падчас моцнага парыву ветру яхту занадта накрэніла. Што павінен зрабіць стырнач каб супрацьдзеяць крэну?",
    title_ru: "На курсе бейдевинд, при сильном порыве ветра яхту чрезмерно накренило. Что должен сделать рулевой, чтобы противодействовать крену?",
    title_pl: "Na kursie bejdewind, w trakcie silnego podmuchu wiatru, jacht nadmiernie się przechylił. Co musi zrobić sternik aby przeciwdziałać przechyłowi?",
    answer_variants: [
      {
        id: 1,
        title_by: "травіць парусы, прывесціся да ветру, адкрэняць на наветраным борце",
        title_ru: "травить паруса, привестись, откренять на наветренном борте",
        title_pl: "zluzować żagle, wyostrzyć, balastować na burcie nawietrznej",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "уваліцца да галфвінду, адкрэняць",
        title_ru: "увалиться до галфинда, откренять",
        title_pl: "odpaść do półwiatr i balastować",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "нічога не рабіць і пачакаць парыву ветру",
        title_ru: "ничего не делать и подождать порыва ветра",
        title_pl: "nic nie robić i przeczekać podmuch wiatru",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 15,
    title_by: "Рыфленне парусаў выклікае:",
    title_ru: "Рифление парусов вызывает:",
    title_pl: "Refowanie żagli powoduje:",
    answer_variants: [
      {
        id: 1,
        title_by: "павелічэнне наветранасці яхты",
        title_ru: "увеличение наветренности яхты",
        title_pl: "zwiększenie nawietrzności jachtu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "заніжэнне цэнтра цяжару і змяншэнне плошчы паруса",
        title_ru: "занижение центра тяжести и уменьшение площади паруса",
        title_pl: "obniżenie środka i zmniejszenie powierzchni ożaglowania",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "толькі змяншэнне плошчы паруса",
        title_ru: "только уменьшение площади паруса",
        title_pl: "tylko zmniejszenie powierzchni ożaglowania",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 16,
    title_by: "Вымпельны вецер дасягае найбуйнейшых і найменшых значэнняў на курсах:",
    title_ru: "Вымпельный ветер достигает наибольшего и наименьшего значения на курсах:",
    title_pl: "Wiatr pozorny osiąga największe i najmniejsze wartości na kursach:",
    answer_variants: [
      {
        id: 1,
        title_by: "найбуйнейшае - бейдевінд, найменшае - фордэвінд",
        title_ru: "наибольшее - бейдевинд, наименьшее - фордевинд",
        title_pl: "największe – bejdewind, najmniejsze – fordewind",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "найбуйнейшае - галфвінд, найменшае - бакштаг",
        title_ru: "наибольшее - галфвинд, наименьшее - бакштаг",
        title_pl: "największe – półwiatr, najmniejsze – baksztag",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "найбуйнейшае - бейдевінд, найменшае - бакштаг",
        title_ru: "наибольшее - бейдевинд, наименьшее - бакштаг",
        title_pl: "największe – bejdewind, najmniejsze – baksztag",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 17,
    title_by: "На яхце, што рухаецца, вымпельны вецер дзьме перпендыкулярна дыяметральнай плоскасці яхты. У такім выпадку, вецер сапраўдны адносна ветру вымпельнага дзьме ў напрамку бліжэй да:",
    title_ru: "На движущейся яхте, вымпельный ветер дует перпендикулярно диаметральной плоскости яхты. В таком случае, ветер истинный относительно ветра вымпельного дует в направлении ближе к:",
    title_pl: "Na poruszającym się jachcie wiatr pozorny wieje prostopadle do diametralnej jachtu. Czy w takim przypadku wiatr rzeczywisty w stosunku do wiatru pozornego wieje z kierunku zbliżonego do:",
    answer_variants: [
      {
        id: 1,
        title_by: "бейдевінду",
        title_ru: "бейдевинду",
        title_pl: "bejdewindowego",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "бакштагу",
        title_ru: "бакштагу",
        title_pl: "baksztagowego",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "не змяняе напрамку",
        title_ru: "не меняет направления",
        title_pl: "nie zmienia kierunku",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 18,
    title_by: "Сіла ўтрымання якара залежыць ад:",
    title_ru: "Cила держания якоря зависит от:",
    title_pl: "Silą trzymania kotwicy zależy od:",
    answer_variants: [
      {
        id: 1,
        title_by: "тыпу якара, тыпу дна, вугла, сфармаванага нахілам якарнага ланцуга",
        title_ru: "типа якоря, типа дна, угла, сформированным наклоном якорной цепи",
        title_pl: "rodzaju kotwicy, rodzaju dna, kata jaki tworzy opuszczony łańcuch kotwiczny z trzonem kotwicy",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "глыбіні воднай прасторы, тыпу якара, дрэйфу яхты",
        title_ru: "глубины водного пространства, типа якоря, дрейфа яхты",
        title_pl: "głębokości akwenu, rodzaju kotwicy, zanurzenia jachtu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "ад даўжыні выданага якарнага ланцуга, які павінен быць не меншы за 3 і большы за 5 глыбінь акваторыі ў месцы якарнай стаянкі",
        title_ru: "от длины отданой якорной цепи, которая должна быть не короче 3 и больше 5 глубин акватории в месте якорной стоянки",
        title_pl: "od długości wydanego łańcucha kotwicznego, który powinien być nie krótszy niż miedzy 3 i nie dłuższy niż 5 głębokości w miejscu kotwiczenia",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 19,
    title_by: "Яхта, якая ідзе з мора ў порт Гдыні, набліжаецца да паказанага ніжэй навігацыйнага знака, устаноўленага перад уваходам у порт. Што павінен зрабіць капітан?",
    title_ru: "Яхта, идущая с моря в порт Гдыни, приближается до представленного ниже навигационного знака, установленного перед входом в порт. Что должен сделать рулевой?",
    title_pl: "Jacht płynący z morza do portu w Gdyni, zbliżył się do przedstawionego niżej znaku nawigacyjnego ustawionego przed wejściem do portu. Co musi zrobić sternik?",
    "images": ["image6.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "прайсці знак левым бокам",
        title_ru: "пройти знак левым бортом",
        title_pl: "minąć znak lewa burta",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "прайсці знак правым бокам",
        title_ru: "пройти знак правым бортом",
        title_pl: "minąć znak prawa burta",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "трымацца на бяспечнай адлегласці ад знака",
        title_ru: "держаться на безопасном расстоянии от знака",
        title_pl: "trzymać się w bezpiecznej odległości od znaku",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 20,
    title_by: "Яхта, якая ідзе па плыні ракі, набліжаецца да паказаных ніжэй навігацыйных знакаў, усталяваных на беразе. Што павінен зрабіць капітан?",
    title_ru: "Яхта, идущая по течению реки, сближается с предоставленными ниже навигационными знаками, установленными на берегу. Что должен сделать рулевой?",
    title_pl: "Jacht płynący z prądem rzeki zbliża się do przedstawionych niżej znaków nawigacyjnych ustawionych na brzegu. Co musi zrobić sternik?",
    "images": ["image7.png", "image8.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "скіраваць судна ў бок левага берагу",
        title_ru: "направить судно в сторону левого берега",
        title_pl: "skierować się w stronę lewego brzegu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "трымацца на бяспечнай адлегласці ад знака",
        title_ru: "держаться в безопасном расстоянии от знака",
        title_pl: "trzymać się w bezpiecznej odległości od znaku",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "трымацца правага берагу",
        title_ru: "держаться правого берега",
        title_pl: "trzymać się prawego brzegu",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 21,
    title_by: "Залішне выбраныя парусы на курсе поўны бакштаг прывядуць да:",
    title_ru: "Излишне выбранные паруса на курсе полный бакштаг приведут к:",
    title_pl: "Nadmiernie wybrane żagle na kursie pełny baksztag powodują:",
    answer_variants: [
      {
        id: 1,
        title_by: "павелічэння хуткасці яхты і хуткасці перакульваючай сілы",
        title_ru: "увеличению скорости яхты и опрокидывающей силы",
        title_pl: "wzrost prędkości jachtu i siły przechylającej",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "змяньшэння хуткасці яхты",
        title_ru: "уменьшению скорости яхты",
        title_pl: "zmniejszenie prędkości jachtu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "павелічэння хуткасці яхты",
        title_ru: "увеличению скорости яхты",
        title_pl: "wzrost prędkości jachtu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 22,
    title_by: "Што мы робім з парусамі пры ўвальванні і прывядзенні для забеспячэння правільнай работы?",
    title_ru: "Что мы делаем с парусами при уваливании и приведении для обеспечения правильной работы?",
    title_pl: "Co robimy z żaglami przy odpadaniu i ostrzeniu aby zapewnić prawidłowa prace?",
    answer_variants: [
      {
        id: 1,
        title_by: "пры ўвальванні травім, пры прывядзенні выбіраем",
        title_ru: "при уваливании травим, при приведении выбираем",
        title_pl: "przy odpadaniu luzujemy, przy ostrzeniu wybieramy",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "пры ўвальванні выбіраем, пры прывядзенні травім",
        title_ru: "при уваливании выбираем, при приведении травим",
        title_pl: "przy odpadaniu wybieramy, przy ostrzeniu luzujemy",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "травім і выбіраем толькі з-за сілы ветру, а не пры прывядзенні або ўвальванні",
        title_ru: "травим и выбираем только из-за силы ветра, а не при приведении или уваливании",
        title_pl: "luzujemy i wybieramy tylko ze względu na się wiatru a nie przy ostrzeniu lub odpadaniu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 23,
    title_by: "Што азначае \"прывесціся\" і \"ўваліцца\"?",
    title_ru: "Что означает \"привестись\" и \"увалиться\"?",
    title_pl: "Co oznacza ostrzenie i odpadanie jachtu?",
    answer_variants: [
      {
        id: 1,
        title_by: "калі яхта прыводзіцца, яна ідзе ў бок ветру, калі ўвальваецца, то аддаляецца ад дзьмуючага ветру",
        title_ru: "когда яхта приводится, она идёт в сторону ветра, когда уваливается, то отдаляется от дующего ветра",
        title_pl: "kiedy jacht ostrzy to zbliża się, a kiedy odpada to oddala się do kierunku wiejącego wiatru",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "калі яхта прыводзіцца, то яна ідзе на поўным курсе, калі ўвальваецца - вяртаецца на востры курс",
        title_ru: "когда яхта приводится, то идёт на полном курсе, а когда уваливается - возвращается на острый курс",
        title_pl: "kiedy jacht ostrzy to przechodzi na kursy pełne, a kiedy odpada wraca na kursy ostre",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "тэрміны адносяцца толькі да морскіх яхтаў",
        title_ru: "термины касаются только морских яхт",
        title_pl: "termin dotyczy tylko jachtów morskich",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 24,
    title_by: "Якая з яхтаў будзе мець перавагу пры  праходзе?",
    title_ru: "Какая из яхт будет иметь право прохода?",
    title_pl: "Który z jachtów będzie miał pierwszeństwo drogi?",
    answer_variants: [
      {
        id: 1,
        title_by: "тая, што абганяе",
        title_ru: "обгоняющая",
        title_pl: "wyprzedzający",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "тая, што выходзіць з порта",
        title_ru: "выходящая из порта",
        title_pl: "wypływający z portu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "тая, што ідзе левым галсам",
        title_ru: "идущая левым галсом",
        title_pl: "płynący lewym halsem",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 25,
    title_by: "Які Рэгіянальны Ўрад Воднай Гаспадаркі забяспечвае надгляд за бяспекай суднаходства на Мазурскіх азёрах?",
    title_ru: "Какое Региональное Управление Водного Хозяйства обеспечивает надзор за безопасностью судоходства на Мазурских озерах?",
    title_pl: "Który Regionalny Zarząd Gospodarki Wodnej sprawuje nadzór na bezpieczeństwem żeglugi śródlądowej na akwenie Wielkich Jezior Mazurskich?",
    answer_variants: [
      {
        id: 1,
        title_by: "у Беластоку",
        title_ru: "в Белостоке",
        title_pl: "w Białymstoku",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "у Гіжыцка",
        title_ru: "в Гижицко",
        title_pl: "w Giżycku",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "у Варшаве",
        title_ru: "в Варшаве",
        title_pl: "w Warszawie",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 26,
    title_by: "Які вецер дзьме з найбольшай хуткасцю?",
    title_ru: "Какой ветер дует с наибольшей скоростью?",
    title_pl: "Który wiatr będzie wiał z największą prędkością?",
    answer_variants: [
      {
        id: 1,
        title_by: "10 м/с",
        title_ru: "10 м/с",
        title_pl: "10 m/s",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "25 км/гадз",
        title_ru: "25 км/ч",
        title_pl: "25 km/godz",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "14 вузлоў",
        title_ru: "14 узлов",
        title_pl: "14 węzłów",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 27,
    title_by: "Чым адрозніваецца шквал ад парыва ветру?",
    title_ru: "В чем разница между шквалом и порывом ветра?",
    title_pl: "Czym się różni szkwał od podmuchu wiatru?",
    answer_variants: [
      {
        id: 1,
        title_by: "шквал азначае нечаканае павелічэнне хуткасці ветру з магчымасцю змены напрамку да 180°",
        title_ru: "шквал означает внезапное увеличение скорости ветра с возможностью смены направления до 180°",
        title_pl: "szkwał oznacza nagły wzrost prędkości wiatru z możliwością zmiany kierunku  nawet o 180°",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "азначае адное і тое ж",
        title_ru: "означает одно и то же",
        title_pl: "oznaczają to samo",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "тэрмін шквал вызначае цыркуляцыю ветру над вадой, а парыў ветру - на зямлі",
        title_ru: "термин шквал определяет циркуляцию ветра над водой, а порыв ветра - на земле",
        title_pl: "pojęcie szkwał określa cyrkulacje wiatru nad woda a podmuch wiatru na ladzie",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 28,
    title_by: "Чым адрозніваецца дзённы брыз ад марскога?",
    title_ru: "В чем разница между дневным бризом и морским?",
    title_pl: "Czym się różni bryza dzienna od morskiej?",
    answer_variants: [
      {
        id: 1,
        title_by: "дзённы брыз дзьме апоўдні, а марскі дзьме ноччу",
        title_ru: "дневной бриз дует в полдень, а морской дует ночью",
        title_pl: "bryza dzienna wieje po południu a bryza morska w nocy",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "марскі брыз дзьме пры ўсходзе сонца, а дзённы дзьме апоўдні",
        title_ru: "морской бриз дует при восходе солнца, а дневной дует в полдень",
        title_pl: "bryza morska wieje po wschodzie słońca a bryza dzienna po południu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "дзённы і марскі брыз - адное і то жае",
        title_ru: "дневной и морской бриз - одно и то же",
        title_pl: "bryza dzienna i morska oznaczają to samo",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 29,
    title_by: "Хмары тыпу Cumulus, якія моцна пашыраюцца па вертыкалі, могуць прадказаць:",
    title_ru: "Cильно расширяющиеся вертикально облака типа Сumulus могут предсказать:",
    title_pl: "Silnie rozbudowujące się w pionie chmury typu Cumulus mogą prognozować:",
    answer_variants: [
      {
        id: 1,
        title_by: "павелічэнне сілы ветру або пагаршэнне надвор'я",
        title_ru: "увеличение силы ветра или ухудшение погоды",
        title_pl: "wzrost siły wiatru lub pogorszenie pogody",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "знікненне ветру і паляпшэнне надвор'я",
        title_ru: "исчезновение ветра и улучшение погоды",
        title_pl: "zanik wiatru i poprawę pogody",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "ападкі",
        title_ru: "осадки",
        title_pl: "opady ciągle",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 30,
    title_by: "Дзе мы можам чакаць зоны паскарэння ветру",
    title_ru: "Где мы можем ожидать зоны акселерации ветра?",
    title_pl: "Gdzie możemy się spodziewać «efektu dyszy»:",
    answer_variants: [
      {
        id: 1,
        title_by: "паміж выспамі і іншымі перашкодамі",
        title_ru: "между островами и другими объектами",
        title_pl: "pomiędzy wyspami i innymi przewężeniami",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "пры руху халоднага фронту",
        title_ru: "при движении холодного фронта",
        title_pl: "przy przesuwaniu się frontu chłodnego",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "падчас моцных дажджавых ападкаў",
        title_ru: "во время сильных дождевых осадков",
        title_pl: "w czasie silnych opadów deszczu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 31,
    title_by: "Метэаралагічныя GRIB'ы гэта:",
    title_ru: "Метеорологические GRIB’ы это:",
    title_pl: "Griby meteorologiczne to:",
    answer_variants: [
      {
        id: 1,
        title_by: "невялікіх памераў лічбавыя файлы, створаныя камп'ютарнымі сістэмамі, не правераныя сіноптыкам, змяшчаюць прагноз надвор'я, распрацаваны на падставе IT-мадэлі",
        title_ru: "небольших размеров цифровые файлы, сгенерированные через компьютерные системы, не проверенные через синоптика, содержащие погодные прогнозы основанные на IT модели",
        title_pl: "a. niewielkich rozmiarów pliki cyfrowe, wygenerowane przez systemy komputerowe, nie sprawdzone przez synoptyka, zwierające prognozę pogody opracowana w oparciu o informatyczny model pogody",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "невялікіх памераў лічбавыя файлы, створаны і правераныя сіноптыкам",
        title_ru: "небольших размеров цифровые файлы, сгенерированные и проверенные синоптиком",
        title_pl: "b. niewielkich rozmiarów pliki cyfrowe, wygenerowane i sprawdzone przez synoptyka",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "невялікіх памераў лічбавыя файлы, створаныя камп'ютарнымі сістэмамі, правераныя сіноптыкам, змяшчаюць прагноз надвор'я, распрацаваны на падставе IT-мадэлі",
        title_ru: "небольших размеров цифровые файлы, сгенерированные через компьютерные системы, проверенные через синоптика, содержащие погодные прогнозы основанные на IT модели",
        title_pl: "c. niewielkich rozmiarów pliki cyfrowe, wygenerowane przez systemy komputerowe, sprawdzone przez synoptyka, zwierające prognozę pogody opracowana w oparciu o informatyczny model pogody",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 32,
    title_by: "Шквалы і парывы ветру могуць быць разам з наступным тыпам хмараў:",
    title_ru: "Шквалы и порывы ветра могут быть вместе с следующим типом облаков:",
    title_pl: "Szkwały oraz silne podmuchy wiatru mogą towarzyszyć chmurom:",
    answer_variants: [
      {
        id: 1,
        title_by: "Cirrostratus (перыста-слаістыя)",
        title_ru: "Cirrostratus (перисто-слоистые)",
        title_pl: "Сirrostratus",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "Cumulonimbus (кучава-дажджавыя)",
        title_ru: "Cumulonimbus (кучево-дождевые)",
        title_pl: "Cumulonimbus",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "Stratus (слаістыя)",
        title_ru: "Stratus (слоистые)",
        title_pl: "Stratus",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 33,
    title_by: "Дзе цыклон і антыцыклон у сістэме нізкага ціску?",
    title_ru: "Где циклон и антициклон в системе низкого давления?",
    title_pl: "Gdzie w układzie niżowym występuje największe i najmniejsze ciśnienie atmosferyczne?",
    answer_variants: [
      {
        id: 1,
        title_by: "цыклон у цэнтры, антыцыклон звонку",
        title_ru: "циклон в центре, антициклон снаружи",
        title_pl: "najmniejsze w środku a największe na zewnątrz",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "антыцыклон у цэнтры, цыклон звонку",
        title_ru: "антициклон в центре, циклон снаружи",
        title_pl: "największe w środku a najmniejsze na zewnątrz",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "знутры і звонку нізкага ціску",
        title_ru: "внутри и снаружи низкого давления",
        title_pl: "w środku i na zewnątrz najmniejsze",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 34,
    title_by: "Пры вызначэнні тэхнічных параметраў яхты, сімвалы Lc і KLW азначаюць:",
    title_ru: "При определении технических параметров яхты, символы Lc и KLW означают:",
    title_pl: "Przy określaniu parametrów technicznych jachtu symbole Lc i KLW oznaczają:",
    answer_variants: [
      {
        id: 1,
        title_by: "Lc - максімальная асадка, KLW - канструктарская даўжыня ватэрлініі",
        title_ru: "Lc - максимальная осадка, KLW - конструкторская длина ватерлинии",
        title_pl: "Lc - zaniżenie maksymalne, KLW - konstrukcyjna długość linii wodnej",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "Lc - поўная даўжыня, KLW - канструктарская шырыня ватэрлініі",
        title_ru: "Lc - целая длина, KLW - конструкторская ширина ватерлинии",
        title_pl: "Lc - długość całkowita, KLW - konstrukcyjna szerokość linii wodnej",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "Lc - поўная шырыня, KLW - канструктарская максімальная шырыня",
        title_ru: "Lc - целая ширина, KLW - конструкторская максимальная ширина",
        title_pl: "Lc - szerokość całkowita, KLW - konstrukcyjna szerokość maksymalna",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 35,
    title_by: "Праектная катэгорыя яхтаў С вызначае запраектаваныя адзінкі для рэйсаў у берагавых водах, вялікіх залівах, залівах, азёрах і рэках, пры ўмове сілы ветру:",
    title_ru: "Проектная категория яхт С определяет запроектированные единицы для рейсов в прибрежных водах, больших заливах, наводнениях, озерах и реках, при условии силы ветра:",
    title_pl: "Kategoria projektowa jachtu C określa jednostki zaprojektowane do rejsów po wodach przybrzeżnych, dużych zatokach, zalewach, jeziorach i rzekach, w warunkach wiatru o sile:",
    answer_variants: [
      {
        id: 1,
        title_by: "да 6 балаў Бафорта і хваляў вышынёй да 2 метраў",
        title_ru: "до 6 баллов Бофорта и волн высотой до 2 метров",
        title_pl: "do 6 B i fali do 2 m",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "да 8 балаў Бафорта і хваляў вышынёй да 2 метраў",
        title_ru: "до 8 баллов Бофорта и волн высотой до 2 метров",
        title_pl: "do 8 B i fali do 2 m",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "да 4 балаў Бафорта і хваляў вышынёй да 1 метра",
        title_ru: "до 4 баллов Бофорта и волн высотой до 1 метра",
        title_pl: "do 4 B i fali do 1 m",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 36,
    title_by: "У марскіх водах, на якай адлегласці ад берагу żeglarz jachtowy не можа кіраваць яхтай даўжынёй да 12 метраў?",
    title_ru: "В морских водах, в какой дальности от берега żeglarz jachtowy не может управлять яхтой длиной до 12 метров?",
    title_pl: "Po wodach morskich, w jakiej odległości od brzegu, żeglarz jachtowy nie może prowadzić jachtu o długości  do 12 m?",
    answer_variants: [
      {
        id: 1,
        title_by: "далей за 4 мілі",
        title_ru: "дальше 4 миль",
        title_pl: "powyżej 4 mil",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "бліжэй за 2 мілі",
        title_ru: "до 2 миль",
        title_pl: "do 2 mil",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "бліжэй за 1 мілю",
        title_ru: "до 1 мили",
        title_pl: "do 1 mil",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 37,
    title_by: "Ці можа żeglarz jachtowy, які ідзе па Вісле, кіраваць двухмачтавай яхтай даўжынёй 20 метраў?",
    title_ru: "Идущий по Висле, может ли żeglarz jachtowy вести двухмачтовую яхту длиной 20 метров?",
    title_pl: "Czy po Wiśle, żeglarz jachtowy może prowadzić jacht żaglowy dwumasztowy o  długości 20 metrów?",
    answer_variants: [
      {
        id: 1,
        title_by: "не можа",
        title_ru: "не может",
        title_pl: "nie może",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "можа, пры ўмове наяўнасці рухавіка ўнутранага згарання",
        title_ru: "может, при условии, что есть двигатель внутреннего сгорания",
        title_pl: "może ale pod warunkiem posiadania silnika spalinowego",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "можа",
        title_ru: "может",
        title_pl: "może",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 38,
    title_by: "Які прававы акт вызначае аб'ём правоў на эксплуатацыю парусных яхтаў ва ўнутраных водах?",
    title_ru: "Какой правовой акт определяет объем полномочий на эксплуатацию парусных яхт во внутренних водах?",
    title_pl: "Jaki akt prawny określa zakres uprawnień do prowadzenia jachtów żaglowych po wodach śródlądowych?",
    answer_variants: [
      {
        id: 1,
        title_by: "Пастанаўленне MSiT ад 9 красавіка 2013 года аб турыстычнай воднай практыцы",
        title_ru: "Постановление MSiT от 9 апреля 2013 года касательно туристической водной практики",
        title_pl: "Rozporządzenie MSiT z dnia 09 kwietnia 2013 roku w sprawie uprawiania turystyki wodnej",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "Акт ад 25.06.2010 аб спорце",
        title_ru: "Акт от 25.06.2010 о спорте",
        title_pl: "Ustawa z dnia 25.06.2010 roku o sporcie",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "Пастанаўленне Міністра Інфраструктуры ад 28.04.2003 аб суднаходстве ва ўнутраных вадах",
        title_ru: "Постановление Министра Инфраструктуры от 28.04.2003 касательно cудоходства во внутренних водах",
        title_pl: "Rozporządzenie Ministra Infrastruktury a dnia 28.04.2003 r. W sprawie przepisów żeglugowych na śródlądowych drogach wodnych",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 39,
    title_by: "Якія мінімальныя ўзроставыя патрабаванні, каб прыступіць да экзамену на ступень żeglarza jachtowego?",
    title_ru: "Каковы минимальные возрастные требования, чтобы приступить к экзамену на ступень żeglarza jachtowego?",
    title_pl: "Jakie są minimalne wymagania wiekowe aby przystąpić do egzaminu na stopień żeglarza jachtowego?",
    answer_variants: [
      {
        id: 1,
        title_by: "поўныя 15 гадоў",
        title_ru: "полные 15 лет",
        title_pl: "ukończone 15 lat",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "поўныя 14 гадоў",
        title_ru: "полные 14 лет",
        title_pl: "ukończone 14 lat",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "поўныя 12 гадоў",
        title_ru: "полные 12 лет",
        title_pl: "ukończone 12 lat",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 40,
    title_by:  "Што з гэтага адносіцца да дынамічнага абсталявання?",
    title_ru: "Что входит в динамическое оборудование?",
    title_pl: "Czego nie zaliczamy do osprzętu stałego?",
    answer_variants: [
      {
        id: 1,
        title_by: "ванты",
        title_ru: "ванты",
        title_pl: "wanty",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "краспіцы",
        title_ru: "краспицы",
        title_pl: "salingi",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "гік",
        title_ru: "гик",
        title_pl: "bom",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 41,
    title_by: "Рыф-шкэнтэлі служаць для:",
    title_ru: "Риф-шкентели служат для:",
    title_pl: "Refsejzingi śluza do:",
    answer_variants: [
      {
        id: 1,
        title_by: "абвязвання зарыфленага паруса да гіка",
        title_ru: "обвязывания зарифлённого паруса к гику",
        title_pl: "obwiązywania zrefowanego żagla do bomu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "трымання шверта",
        title_ru: "держания шверта",
        title_pl: "kontrowania miecza",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "абароны швартавых канцоў ад пераціранняў",
        title_ru: "защиты швартовых концов от перетираний",
        title_pl: "zabezpieczenia przed przetarciem cum i szpringów",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 42,
    title_by: "Ці можна кіраваць яхтай 7 метраў без сертыфіката?",
    title_ru: "Можно ли управлять яхтой 7 метров без сертификата?",
    title_pl: "Czy bez patentu można prowadzić jacht żaglowy o długości 7 metrów?",
    answer_variants: [
      {
        id: 1,
        title_by: "нельга",
        title_ru: "нельзя",
        title_pl: "nie można",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "можна, але толькі пасля азнаямлення з воднымі шляхамі",
        title_ru: "можно, но при ознакомлении водных путей",
        title_pl: "można ale tylko po oznakowanych torach wodnych",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "можна",
        title_ru: "можно",
        title_pl: "można.",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 43,
    title_by: "Колькі конных сіл мае навясны рухавік Mercury 10kW?",
    title_ru: "Сколько лошадиных сил имеет навесной двигатель Mercury 10kW?",
    title_pl: "Ile koni mechanicznych ma silnik zaburtowy Mercury 10 kW?",
    answer_variants: [
      {
        id: 1,
        title_by: "15.4",
        title_ru: "15.4",
        title_pl: "15.4",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "13.6",
        title_ru: "13.6",
        title_pl: "13.6",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "10",
        title_ru: "10",
        title_pl: "10",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 44,
    title_by: "Як называюцца базавыя парусы на яхце тыпу шлюп?",
    title_ru: "Как называются базовые паруса на яхте типа шлюп?",
    title_pl: "Jak nazywają się podstawowe żagle na jachcie typu slup?",
    answer_variants: [
      { 
        id: 1, 
        title_by: "грот і стаксель", 
        title_ru: "грот и стаксель", 
        title_pl: "grot i fok", 
        has_selected: undefined, 
        is_correct: true 
      },
      { 
        id: 2, 
        title_by: "грот і генакер", 
        title_ru: "грот и генакер", 
        title_pl: "grot i genaker", 
        has_selected: undefined, 
        is_correct: false 
      },
      { 
        id: 3, 
        title_by: "грот і клівер", 
        title_ru: "грот и кливер", 
        title_pl: "grot i kliwer", 
        has_selected: undefined, 
        is_correct: false 
      }
    ]
  },
  {
    id: 45,
    title_by: "Як называюцца платы матэрыялу, з якіх сшыты парус?",
    title_ru: "Как называются платы материала, из которых сшит парус?",
    title_pl: "Jak nazywają się płaty materiału, z których uszyty jest żagiel?",
    answer_variants: [
      {
        id: 1,
        title_by: "лікі",
        title_ru: "лики",
        title_pl: "liki",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "бароды",
        title_ru: "бороды",
        title_pl: "broty",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "брыты",
        title_ru: "бриты",
        title_pl: "bryty",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 46,
    title_by: "Лэйзі Джэк гэта:",
    title_ru: "Лэйзи Джек это:",
    title_pl: "Lazy Jack to:",
    answer_variants: [
      {
        id: 1,
        title_by: "чахол для грота, прыладжаны да гіка і падвешаны вяроўкамі да мачты",
        title_ru: "чехол для грота, прикрепленный к гику и подвешенный веревками к мачте",
        title_pl: "pokrowiec na żagiel grot zamocowany do bomu I podwieszony do masztu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "прылада для закручвання стакселя",
        title_ru: "устройство для закрутки стакселя",
        title_pl: "urządzenie do rolowania foka",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "з'ёмны казырок над какпітам",
        title_ru: "съемный козырек над кокпитом",
        title_pl: "rozpinany daszek nad kokpitem",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 47,
    title_by: "Падчас руху на вадзе стырнач заўважыў адсутнасць працы сістэмы ахлаждэння рухавіка. Што ён павінен зрабіць?",
    title_ru: "В пути на воде под двигателем рулевой заметил отсутствие работы системы охлаждения двигателя. Как он должен поступить?",
    title_pl: "W trakcie plynęcia na silniku sternik zauważył brak chłodzenia silnika. Co powinen zrobić?",
    answer_variants: [
      {
        id: 1,
        title_by: "зменьшыць абароты і ісьці далей",
        title_ru: "уменьшить обороты и идти дальше",
        title_pl: "zmniejszyć obroty i pływać dalej",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "выключыць рухавік, каб не дапусціць яго перагрэва",
        title_ru: "выключить двигатель, чтобы не допустить перегрева",
        title_pl: "wyłączyć silnik aby nie dopuścić do przegrzania",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "абліць водай ў мэтах зніжэння тэмпературы рухавіка",
        title_ru: "облить водой в целях снижения температуры двигателя",
        title_pl: "polewać silnik wodą w celu zmniejszenia temperatury silnika",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 48,
    title_by: "Падчас работы рухавіка, пераключэнне перадач праводзіцца:",
    title_ru: "Во время работы двигателя, переключение передач производится:",
    title_pl: "Podczas pracy silnika zmianę biegów wykonujemy:",
    answer_variants: [
      { 
        id: 1, 
        title_by: "на нізкіх абаротах", 
        title_ru: "на низких оборотах", 
        title_pl: "na niskich oborotach", 
        has_selected: undefined, 
        is_correct: true 
      },
      { 
        id: 2, 
        title_by: "энергічна пацягнуць рычаг перадач і без змены абаротаў рухавіка", 
        title_ru: "энергично потянуть рычаг передач и без смены оборотов двигателя", 
        title_pl: "energicznie pociagając dżwignie biegów b bez zminay oborotow silnika", 
        has_selected: undefined, 
        is_correct: false 
      },
      { 
        id: 3, 
        title_by: "дадаць газу", 
        title_ru: "добавить газу", 
        title_pl: "dodając więcej gazu", 
        has_selected: undefined, 
        is_correct: false 
      }
    ]
  },
  {
    id: 49,
    title_by: "На курсе бакштаг адчуванне сілы сапраўднага ветру слабейшае або мацнейшае ў адносінах да вымпельнага ветру?",
    title_ru: "На курсе бакштаг чувство силы истинного ветра слабее или сильнее по отношению к вымпельному ветру?",
    title_pl: "Na kursie baksztag odczucie sily wiatru rzeczywistego jest słabsze czy silniejsze w stosunku do wiatru pozornego.",
    answer_variants: [
      { 
        id: 1, 
        title_by: "мацнейшае", 
        title_ru: "сильнее", 
        title_pl: "silniejsze", 
        has_selected: undefined, 
        is_correct: false 
      },
      { 
        id: 2, 
        title_by: "слабейшае", 
        title_ru: "слабее", 
        title_pl: "słabsze", 
        has_selected: undefined, 
        is_correct: true 
      },
      { 
        id: 3, 
        title_by: "не мае значэння", 
        title_ru: "не имеет значения", 
        title_pl: "nie ma znaczenia", 
        has_selected: undefined, 
        is_correct: false 
      }
    ]
  },
  {
    id: 50,
    title_by: "Правільна праведзеная рэанімацыя заключаецца ў:",
    title_ru: "Правильно проведённая реанимация заключается в:",
    title_pl: "Prawidłowo przeprowadzona resuscytacja polega na:",
    answer_variants: [
      { 
        id: 1, 
        title_by: "выкананні 30 кампрэсій і 2 штучных удыхаў", 
        title_ru: "выполнении 30 компрессий и 2 искусственных вдохов", 
        title_pl: "wykonywaniu 30 uciśnięć i 2 oddechów ratowniczych", 
        has_selected: undefined, 
        is_correct: true 
      },
      { 
        id: 2, 
        title_by: "выкананні рэанімацыі да моманту прыезду экіпажу хуткай дапамогі", 
        title_ru: "выполнении реанимации до момента приезда скорой помощи", 
        title_pl: "wykonywaniu resuscytacji do momentu przyjazdu służb ratunkowych", 
        has_selected: undefined, 
        is_correct: false 
      },
      { 
        id: 3, 
        title_by: "усе адказы правільныя", 
        title_ru: "все ответы верны", 
        title_pl: "wszystkie odpowiedzi są prawidłowe", 
        has_selected: undefined, 
        is_correct: false 
      }
    ]
  },
  {
    id: 51,
    title_by: "Якая тэмпература ахалоджвання ўнутраных органаў можа прывесці да глыбокага пераахалоджвання, што вядзе да біялагічнай смерці?",
    title_ru: "Какая температура охлаждения внутренних органов может привести к глубокому переохлаждению, ведущему к биологической смерти?",
    title_pl: "Jaka temperatura wychłodzena wnętrza ciała może doprowadzić do hipotermii głębokiej prowadzącej do śmierci biologicznej?",
    answer_variants: [
      { 
        id: 1,
        title_by: "35°C",
        title_ru: "35°C",
        title_pl: "35°C",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 2,
        title_by: "33°C",
        title_ru: "33°C",
        title_pl: "33°C",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 3,
        title_by: "22-27°C",
        title_ru: "22-27°C",
        title_pl: "22-27°C",
        has_selected: undefined,
        is_correct: true 
      }
    ]
  },
  {
    id: 52,
    title_by: "Ці дапускаецца пры апёках першай ступені абпалены ўчастак абліваць вадой?",
    title_ru: "Допускается ли при ожогах первой степени обожённый участок обливать водой?",
    title_pl: "Czy przy oparzeniach I stopnia należy ochodzić powierzchenie oparzoną polewając ją wodą?",
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
        title_by: "так, але з ачышчальным сродкам",
        title_ru: "да, но с очищающим средством",
        title_pl: "tulko wodą z detergentem",
        has_selected: undefined,
        is_correct: false 
      }
    ]
  },
  {
    id: 53,
    title_by: "Ці можна выкарыстоўваць ваду для тушэння палаючага бензіну?",
    title_ru: "Можно ли использовать воду для тушения горящего бензина?",
    title_pl: "Czy do gaszenia plonącej benzyny wolno używać wody?",
    answer_variants: [
      { 
        id: 1,
        title_by: "нельга",
        title_ru: "нельзя",
        title_pl: "nie wolno",
        has_selected: undefined,
        is_correct: true 
      },
      { 
        id: 2,
        title_by: "можна",
        title_ru: "можно",
        title_pl: "wolno",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 3,
        title_by: "можна, але пры ўмове, што бензін без дадатку масла",
        title_ru: "можно, но при условии что бензин без добавления масла",
        title_pl: "wolno używać pod warunkiem, że benzyna jest bez dodatku oleju",
        has_selected: undefined,
        is_correct: false 
      }
    ]
  },
  {
    id: 54,
    title_by: "Ферхолунг - гэта манёўр:",
    title_ru: "Ферхолунг - это манёвр:",
    title_pl: "Ferholung to manewr:",
    answer_variants: [
      { 
        id: 1,
        title_by: "разварот яхты на 180°",
        title_ru: "разворот яхты на 180°",
        title_pl: "obrócenia jachtu o 180°",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 2,
        title_by: "рух яхты па беразе з дапамогай вяровак і сіл экіпажу",
        title_ru: "движения яхты вдоль набережной с помощью веревок и сил команды",
        title_pl: "przesunięcia jachtu wzdluż nabrzeża przy pomocy lin i sil zalogi",
        has_selected: undefined,
        is_correct: true 
      },
      { 
        id: 3,
        title_by: "адыход ад набярэжнай на кармавым шпрынгу",
        title_ru: "отход от набережной на кормовом шпринге",
        title_pl: "odejścia od nabrzeża na springu rufowym",
        has_selected: undefined,
        is_correct: false 
      }
    ]
  },
  {
    id: 55,
    title_by: "Стырнач заўважыў матроса, які апісвае чырвоным сцягам кругі. Што гэта азначае?",
    title_ru: "Рулевой заметил матроса, который описывает красным флагом круги. Что это означает?",
    title_pl: "Sternik zauważyl żeglarza, który czerwoną flagą zatacza kręgi. Co to może oznaczać?",
    answer_variants: [
      { 
        id: 1,
        title_by: "сігнал выкліку дапамогі",
        title_ru: "сигнал вызова помощи",
        title_pl: "sygnał wzywania pomocy",
        has_selected: undefined,
        is_correct: true 
      },
      { 
        id: 2,
        title_by: "сігнал прывітання іншых матросаў",
        title_ru: "сигнал приветствия других матросов",
        title_pl: "gest pozdrawiający innych żeglarzy",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 3,
        title_by: "нічога не азначае",
        title_ru: "ничего не означает",
        title_pl: "nic nie oznacza",
        has_selected: undefined,
        is_correct: false 
      }
    ]
  },
  {
    id: 56,
    title_by: "Перад выхадам у канал, стырнач заўважыў знак, пазначаны ніжэй. Што ён азначае?",
    title_ru: "Перед выходом в канал, рулевой заметил знак ниже. Что он означает?",
    title_pl: "Przed wpłynięciem do kanału sternik zauważyl poniższy znak. Co on oznacza?",
    images: ["image9.png"],
    answer_variants: [
      { 
        id: 1,
        title_by: "прадпісанне выканання асаблівай асцярожнасці",
        title_ru: "предписание соблюдения особой осторожности",
        title_pl: "nakaz zachowania szczególnej ostrożności",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 2,
        title_by: "прадпісанне спынення судна",
        title_ru: "предписание остановки судна",
        title_pl: "nakaz zatrzymania statku",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 3,
        title_by: "прадпісанне падачы гукавога сігналу",
        title_ru: "предписание подачи звукового сигнала",
        title_pl: "nakaz nadawania sygnaly dżwiękowego",
        has_selected: undefined,
        is_correct: true 
      }
    ]
  },
  {
    id: 57,
    title_by: "Што азначае знак ніжэй?",
    title_ru: "Что означает знак ниже?",
    title_pl: "Co oznacza znak zamieszczony poniżej?",
    images: ["image10.png"],
    answer_variants: [
      { 
        id: 1,
        title_by: "лінія напружання над водным шляхам на адлегласці 12 метраў ад знака",
        title_ru: "линия напряжения над водным путём на расстоянии 12 метров от знака",
        title_pl: "linia napowietrzana nad drogą wodną w odleglości 12 metrow od znaku",
        has_selected: undefined,
        is_correct: false 
      },
      { 
        id: 2,
        title_by: "лінія напружання над водным шляхам на вышыні 12 метраў над узроўнем найвышэйшай вады",
        title_ru: "линия напряжения над водным путём на высоте 12 метров над уровнем наивысшей воды",
        title_pl: "linia napowietrzana nad drogą wodną na wysokości 12 metrów nad poziomem najwyższa wody",
        has_selected: undefined,
        is_correct: true 
      },
      { 
        id: 3,
        title_by: "лінія напружання над водным шляхам на вышыні 12 метраў над узроўнем найменшай вады",
        title_ru: "линия напряжения над водным путём на высоте 12 метров над уровнем наименьшей воды",
        title_pl: "linia napowietrzana nad drogą wodną na wysokości 12 metrów nad poziomem najniższej wody",
        has_selected: undefined,
        is_correct: false 
      }
    ]
  },
  {
    id: 58,
    title_by: "Дзве яхты ідуць аднолькавым галсам з аднолькавай хуткасцю. Першы - бейдевіндам, другі - бакштагам. Іх курсы могуць стварыць рызыку сутыкнення. Хто павінен саступіць?",
    title_ru: "Две яхты идут одинаковым галсом с одинаковой скоростью. Первый - бейдевиндом, второй - бакштагом. Их курсы могут создать риск столкновения. Кто должен уступить?",
    title_pl: "Dwa jachty płyną tym samym halsem i z taką samą predkoscią. Pierwszy bajdewindem a drugi baksztagiem. Kierunki ich przemieszczania się mogą wskazywać na ryzyko zderzenia. Który jacht powinien ustapić?",
    answer_variants: [
      {
        id: 1,
        title_by: "той, што ідзе бейдевіндам",
        title_ru: "идущий бейдевиндом",
        title_pl: "plynący bejdewindem",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "той, што ідзе бакштагам",
        title_ru: "идущий бакштагом",
        title_pl: "plynący baksztagiem",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "большая яхта саступае меньшай",
        title_ru: "большая яхта уступает меньшей",
        title_pl: "większy jacht ustępuje mniejszemu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 59,
    title_by: "Той, хто мае сертыфікат яхтавага матроса можа кіраваць:",
    title_ru: "Имеющий сертификат яхтенного матроса может управлять:",
    title_pl: "Osoba posiadająca patent żaglarza jachtowego może prowadzić:",
    answer_variants: [
      {
        id: 1,
        title_by: "толькі яхты з адной мачтай",
        title_ru: "только одномачтовые яхты",
        title_pl: "tylko jachty jendomasztowe",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "яхты з адной ці дзвюма мачтамі",
        title_ru: "одно- и двухмачтовые",
        title_pl: "jedno i dwumasztowe",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "колькасць мачт не мае значэння",
        title_ru: "количество мачт не имеет значения",
        title_pl: "ilość masztów nie ma znaczenia",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 60,
    title_by: "Ці можна прышвартаваць яхту ў канале, які злучае два возера?",
    title_ru: "Можно ли пришвартовать яхту в канале, соединяющем два озера?",
    title_pl: "Czy można zacumować jacht w kanale łączącym dwa jeziora?",
    answer_variants: [
      {
        id: 1,
        title_by: "так, але толькі ў абазначаных месцах",
        title_ru: "да, но только в обозначенных местах",
        title_pl: "tak, ale tylko w miejscach do tego wyznaczonych",
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
        title_by: "можна, але толькі ўдзень",
        title_ru: "можно, но только днём",
        title_pl: "można, ale tylko w dzień",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 61,
    title_by: "Падчас рэйсу, з пункту гледжання бяспекі, перамяшчэнні па палубе павінны адбывацца з:",
    title_ru: "Во время рейса, с точки зрения безопасности, перемещение по палубе следует делать с:",
    title_pl: "W trakcie żeglugi ze względów bezpieczeństwa, należy poruszać się po burcie:",
    answer_variants: [
      { 
        id: 1, 
        title_by: "падветранага боку", 
        title_ru: "подветренной стороны", 
        title_pl: "zawietrznej", 
        has_selected: undefined, 
        is_correct: false 
      },
      { 
        id: 2, 
        title_by: "наветранага боку", 
        title_ru: "наветренной стороны", 
        title_pl: "nawietrznej", 
        has_selected: undefined, 
        is_correct: true 
      },
      { 
        id: 3, 
        title_by: "не мае значэння", 
        title_ru: "не имеет значения", 
        title_pl: "nie ma to znaczenia", 
        has_selected: undefined, 
        is_correct: false 
      }
    ]
  },
  {
    id: 62,
    title_by: "У выпадку падзення за борт, рэзкія рухі чалавека ў халоднай вадзе прыводяць да:",
    title_ru: "В случае падения за борт, резкие движения человека в холодной воде вызовут:",
    title_pl: "W przypadku wypadnięcia za burtę gwałtowne poruszane się człowieka w zimnej wodzie powoduje:",
    answer_variants: [
      {
        id: 1,
        title_by: "скарачэння часу выжывання",
        title_ru: "сокращение времени выживания",
        title_pl: "skraca czas przeżycia",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "захавання цяпла і павелічэння часу выжывання",
        title_ru: "сохранение тепла и увеличение времени выживания",
        title_pl: "dostarcza organizmowi więcej ciepła i wydłuża czas przeżycia",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "аблягчэння падняцця чалавека з вады",
        title_ru: "облегчение подъема человека из воды",
        title_pl: "łatwiejsze wyciągnięcie człowieka",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 63,
    title_by: "Чым ніжэйшая тэмпература вады пры выпадзенні чалавека за борт, шансы выжывання будуць:",
    title_ru: "Чем ниже температура воды при выпадении человека за борт, шансы выживания будут:",
    title_pl: "Czym niższa temperatura wody przy wypadnięciu człowieka za burtę, szanse przeżycia będą:",
    answer_variants: [
      {
        id: 1,
        title_by: "вышэйшыя",
        title_ru: "выше",
        title_pl: "rosną",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "ніжэйшыя",
        title_ru: "ниже",
        title_pl: "maleją",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "не мае значэння",
        title_ru: "не имеет значения",
        title_pl: "nie ma znaczenia",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 64,
    title_by: "У мэтах забеспячэння бяспечнага плавання, пры парывах ветру з сілай 6 па шкале Бафорта неабходна:",
    title_ru: "В целях обеспечения безопасного судоходства, при порывах ветра с силой 6 по шкале Бофорта следует:",
    title_pl: "W celu poprawienia bezpieczeństwa żeglugi, przy podmuchach wiatru o sile 6B:",
    answer_variants: [
      {
        id: 1,
        title_by: "выканаць рыфленне",
        title_ru: "произвести рифление",
        title_pl: "refujemy żagle",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "ісці пад поўнымі парусамі і назіраць за паводзінамі яхты",
        title_ru: "идти под полными парусами и наблюдать поведение яхты",
        title_pl: "płyniemy na pełnych żaglach i obserwujemy zachowanie jachtu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "уваліцца да галфвінда",
        title_ru: "увалиться до галфвинда",
        title_pl: "przechodzimy do pólwiatru",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 65,
    title_by: "Паварот фордэвінд гэта:",
    title_ru: "Поворот фордевинд это:",
    title_pl: "Zwrot przed rufę to:",
    answer_variants: [
      {
        id: 1,
        title_by: "перасячэнне кармой лініі ветру ад бакштага аднаго галса да бакштага другога галса",
        title_ru: "пересечение кормой линии ветра от бакштага одного галса до бакштага другого галса",
        title_pl: "przejście rufą linii wiatru od baksztagu jednego halsu do baksztagu drugiego halsu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "перасячэнне носам або кармай лініі ветру, каб пры павароце вецер дзьмуў з процілегла борту",
        title_ru: "пересечение носом или кормой линии ветра, чтобы при повороте ветер дул с противоположного борта",
        title_pl: "przejście dziobem lub rufą linii wiatru aby po zworocie wiatr wial w przeciwleglą burte",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "перасячэнне лініі ветру ад бакштага да фордэвінда",
        title_ru: "пересечение линии ветра от бакштага до фордевинда",
        title_pl: "przejście linii wiatru od baksztago do bejdewindu",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 66,
    title_by: "На прышвартаваную яхту да набярэжнай дзьме вецер:",
    title_ru: "На пришвартованную яхту к набережной дует ветер:",
    title_pl: "Na jacht zacumowany do nabrzeża działa wiatr:",
    answer_variants: [
      {
        id: 1,
        title_by: "курсавы",
        title_ru: "курсовой",
        title_pl: "własny",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "вымпельны",
        title_ru: "вымпельный",
        title_pl: "pozorny",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "сапраўдны",
        title_ru: "истинный",
        title_pl: "rzeczywisty",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 67,
    title_by: "Падняцце шверта на вострых курсах прывядзе да:",
    title_ru: "Поднятие шверта на острых курсах приведёт к:",
    title_pl: "Podniesienie miecza na kursach ostrych powoduje:",
    answer_variants: [
      {
        id: 1,
        title_by: "павелічэння хуткасці яхты",
        title_ru: "увеличению скорости яхты",
        title_pl: "wzrost prędkości jachtu",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "павелічэння дрэйфу",
        title_ru: "увеличению дрейфа",
        title_pl: "zwiększenie dryfu",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "зніжэння цэнтру цяжару",
        title_ru: "снижению центра тяжести",
        title_pl: "obniżenie środka ciężkości",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 68,
    title_by: "На курсе галфвінд, павелічэнне стабільнасці яхты будзе ў выпадку:",
    title_ru: "На курсе галфвинд, увеличение стабильности яхты будет в случае:",
    title_pl: "Na kursie pólwiatr, zwiększenie stateczości jachtu uzyskamy w wyniku:",
    answer_variants: [
      {
        id: 1,
        title_by: "рыфлення і траўлення парусоў, адкрэньвання на наветраным борце",
        title_ru: "рифления и травления парусов, откренивания на наветренном борту",
        title_pl: "refowania i luzowania żagli, balastowania na burcie nawietrznej",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "выбірання парусоў",
        title_ru: "выбирания парусов",
        title_pl: "wybrania żagli",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "падняцця пяра руля і шверта",
        title_ru: "поднятия пера руля и шверта",
        title_pl: "podniesienia płetwy sterowej i miecza",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 69,
    title_by: "У якім парадку падымаюцца парусы на яхце тыпу шлюп?",
    title_ru: "В каком порядке поднимаются паруса на яхте типа шлюп?",
    title_pl: "W jakiej kolejności stawiamy żagle na jachcie typu slup?",
    answer_variants: [
      {
        id: 1,
        title_by: "ад пярэдніх парусоў",
        title_ru: "с передних парусов",
        title_pl: "od żagli przegnich",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "ад задніх парусоў",
        title_ru: "с задних парусов",
        title_pl: "od żagli tylnych",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "не мае значэння",
        title_ru: "не имеет значения",
        title_pl: "nie ma znaczenia",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 70,
    title_by: "Форпік будзе знаходзіцца ў наступнай частцы яхты:",
    title_ru: "Форпик будет находится в следующей части яхты:",
    title_pl: "Forpik znajduje sie w części jachtu:",
    answer_variants: [
      {
        id: 1,
        title_by: "у пярэдняй",
        title_ru: "в передней",
        title_pl: "w przedniej",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "у задняй",
        title_ru: "в задней",
        title_pl: "w tylnej",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "у цэнтры",
        title_ru: "в центре",
        title_pl: "w środkowej",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 71,
    title_by: "Як называецца вяроўка (швартов), якая злучае яхту з набярэжнай і працягваецца ад носа да кармы?",
    title_ru: "Как называется верёвка (швартов), которая соединяет яхту с набережной и идёт от носа к корме?",
    title_pl: "Jak nazywa się lina lącząca jacht z nabrzeżem i biegnąca od dziobu w kierunku rufy?",
    answer_variants: [
      {
        id: 1,
        title_by: "прыжымны",
        title_ru: "прижимной",
        title_pl: "brest",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "прадольны",
        title_ru: "продольный",
        title_pl: "cuma",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "шпрынг",
        title_ru: "шпринг",
        title_pl: "szpring",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 72,
    title_by: "Як называецца верх мачты?",
    title_ru: "Как называется верх мачты?",
    title_pl: "Jak nazywa się wierzcholek masztu?",
    answer_variants: [
      {
        id: 1,
        title_by: "нок",
        title_ru: "нок",
        title_pl: "nok",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "стопа",
        title_ru: "стопа",
        title_pl: "stopa",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "топ",
        title_ru: "топ",
        title_pl: "top",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 73,
    title_by: "Што такое рэйдавы пал?",
    title_ru: "Что такое рейдовый пал?",
    title_pl: "Co to jest dalba?",
    answer_variants: [
      {
        id: 1,
        title_by: "драўляны або бетонны столб, які стаіць на зямлі",
        title_ru: "деревянный либо бетонный столб, стоящий на земле",
        title_pl: "drewniany lub betonowy slup stojący na ladzie",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "драўляная або бетонная свая, ўбітая ў дно",
        title_ru: "деревянная либо бетонная свая, вбитая в дно",
        title_pl: "drewniany lub betonowy pal wbity w dno",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 3,
        title_by: "круглы буй, прывязаны да дна",
        title_ru: "круглый буй, привязанный ко дну",
        title_pl: "okrągła boja zakotowiczona do dna",
        has_selected: undefined,
        is_correct: false
      }
    ]
  },
  {
    id: 74,
    title_by: "Які з пазначаных ніжэй знакаў ставіцца пры выхадзе з канала?",
    title_ru: "Какой из расположенных знаков ниже ставится при выходе с канала?",
    title_pl: "Który z poniższych znaków stawiany jest wyjściu z kanalu?",
    images: ["image11.png"],
    answer_variants: [
      {
        id: 1,
        title_by: "толькі тып А",
        title_ru: "только тип А",
        title_pl: "tylko typu A",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 2,
        title_by: "толькі тып В",
        title_ru: "только тип В",
        title_pl: "tylko typu B",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "А з правага боку выхаду, В з левага боку выхаду",
        title_ru: "А с правой стороны выхода, В с левой стороны выхода",
        title_pl: "A z prawej strony wyjścia, B z lewej strony wyjścia",
        has_selected: undefined,
        is_correct: true
      }
    ]
  },
  {
    id: 75,
    title_by: "Які аварыйны нумар тэлефона ў Воднай Добраахвотнай Выратавальнай Службе на Мазурскіх азёрах і возеры Езёрак?",
    title_ru: "Какой аварийный номер телефона у Водной Добровольной Спасательной Службы на Мазурских озёрах и озера Езёрак?",
    title_pl: "Jaki jest numer telefonu alarmowego nad wodą Wodnego Ochotniczego Pogotowia Ratunkowego na szlaku Wielkich Jeziora Mazurskich i jeziorze Jeziorak.",
    answer_variants: [
      {
        id: 1,
        title_by: "601 100 100",
        title_ru: "601 100 100",
        title_pl: "601 100 100",
        has_selected: undefined,
        is_correct: true
      },
      {
        id: 2,
        title_by: "600 100 100",
        title_ru: "600 100 100",
        title_pl: "600 100 100",
        has_selected: undefined,
        is_correct: false
      },
      {
        id: 3,
        title_by: "601 100 000",
        title_ru: "601 100 300",
        title_pl: "601 100 300",
        has_selected: undefined,
        is_correct: false
      }
    ]
  }
]
