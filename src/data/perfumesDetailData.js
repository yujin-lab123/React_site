 const perfumeDetailData = [

  {
    id: 1,
    nameKo: "코튼 베일",
    nameEn: "Cotton Veil",
    size: "50ml",
    tags: ["Clean", "Musk", "Soft"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume1.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id01_01.jpg', alt: "새하얀 비누" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id01_02.jpg', alt: "부드러운 목화솜" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id01_03.jpg', alt: "얇은 베일" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id01_04.jpg', alt: "깨끗한 구름" },
    ],
    scentInfo: [
      {
        tag: "Clean",
        description: [
          "깨끗한 목화 섬유와 비누를 떠올리게 하며, 산뜻하고 정돈된 분위기를 만들어요.",
          "포근한 향에 가볍고 맑은 인상을 더할 때 잘 어울리는 향입니다.",
        ],
      },
      {
        tag: "Musk",
        description: [
          "머스크는 향의 중심을 잡아주면서 다른 향료를 부드럽게 감싸는 역할을 해요.",
          "포근하고 은은한 분위기를 만들어주며 강하게 튀기보다 자연스럽게 스며들어 세련되고 고급스러운 인상을 줘요.",
        ],
      },
      {
        tag: "Soft",
        description: [
          "자극적이지 않고 은은하게 퍼지는 부드러운 향을 뜻해요.",
          "깨끗한 비누나 코튼, 머스크 계열의 포근한 잔향을 떠올리게 하며, 매일 부담 없이 쓰기 좋은 데일리 향이에요.",
        ],
      },
    ],
    scentStory: {
      title: "포근하고 깨끗한 세탁물 같은 청순한 사람",
      story: [
        [
          "코튼 베일은 갓 세탁해 햇볕에 말린 흰 셔츠를 입고, 부드러운 미소를 짓는 청순한 사람 같아요.",
          "화려하게 꾸미기보다 깨끗한 피부와 단정한 옷차림이 어울리며, 곁에 있으면 포근하고 편안한 온기가 느껴지는 사람입니다.",
        ],
        [
          "흰 면 티셔츠와 연한 색 니트를 즐겨 입으며, 말투는 조용하고 행동은 차분해요.",
          "진한 화장이나 강한 액세서리보다 은은한 살냄새와 정돈된 머릿결이 더 잘 어울립니다.",
        ],
        [
          "낮을 크게 가리기보다 상대의 이야기를 편안하게 들어주고, 작은 배려를 자연스럽게 건네는 사람이에요.",
          "존재감이 없는 듯 하면서도 자꾸만 생각나는 깨끗함과 다정함이 기억에 남는 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 2,
    nameKo: "벨벳 시트러스",
    nameEn: "Velvet Citrus",
    size: "50ml",
    tags: ["Citrus", "Fresh", "Floral"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume2.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id02_01.jpg', alt: "반으로 자른 오렌지·귤" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id02_02.jpg', alt: "햇살이 비치는 물방울" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id02_03.jpg', alt: "복숭아빛 꽃잎" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id02_04.jpg', alt: "부드러운 벨벳 천" },
    ],
    scentInfo: [
      {
        tag: "Citrus",
        description: [
          "갓 껍질을 벗긴 오렌지와 자몽처럼 톡 터지는 상큼함을 담고 있어요.",
          "첫 향에서 밝고 경쾌한 에너지를 전해주며, 기분을 가볍게 끌어올려주는 향입니다.",
        ],
      },
      {
        tag: "Fresh",
        description: [
          "아침 햇살 아래 바람이 스치는 듯한 산뜻하고 청량한 느낌을 뜻해요.",
          "무겁지 않고 투명하게 퍼져서 낮 시간이나 더운 날에도 부담 없이 사용할 수 있어요.",
        ],
      },
      {
        tag: "Floral",
        description: [
          "시트러스의 톡 쏘는 느낌 뒤에 은은한 꽃향기가 부드럽게 이어져요.",
          "상큼함에 우아한 결을 더해 벨벳처럼 매끄럽고 사랑스러운 잔향을 만들어줍니다.",
        ],
      },
    ],
    scentStory: {
      title: "햇살 아래 반짝이는 상큼하고 사랑스러운 사람",
      story: [
        [
          "벨벳 시트러스는 아침 햇살이 가득 들어오는 카페 창가에서 환하게 웃고 있는 사람 같아요.",
          "밝은 에너지로 주변 분위기를 자연스럽게 살려주고, 처음 만나도 금세 편안해지게 만드는 매력이 있습니다.",
        ],
        [
          "복숭아빛 블라우스나 산뜻한 원피스처럼 화사한 옷을 좋아하고, 걸음걸이도 경쾌해요.",
          "작은 일에도 잘 웃고 리액션이 좋아서 함께 있으면 하루가 조금 더 밝아지는 느낌이에요.",
        ],
        [
          "가볍고 발랄해 보이지만 그 안에는 부드럽고 세심한 마음이 숨어 있어요.",
          "상큼한 첫인상 뒤에 오래 남는 다정함이 있는, 벨벳처럼 매끄러운 사람입니다.",
        ],
      ],
    },
  },

  {
    id: 3,
    nameKo: "세지 에어",
    nameEn: "Sage Air",
    size: "50ml",
    tags: ["Clean", "Fresh", "Woody"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume3.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id03_01.jpg', alt: "세이지 허브 잎" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id03_02.jpg', alt: "안개 낀 초록 숲" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id03_03.jpg', alt: "잔잔한 호숫가" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id03_04.jpg', alt: "나무 결·연한 원목" },
    ],
    scentInfo: [
      {
        tag: "Clean",
        description: [
          "잎사귀를 살짝 비볐을 때 나는 맑고 정갈한 허브 향이 중심이 돼요.",
          "잡내 없이 깔끔해서 공기까지 정리되는 듯한 차분한 인상을 줍니다.",
        ],
      },
      {
        tag: "Fresh",
        description: [
          "이른 아침 숲의 공기를 마시는 듯한 시원하고 상쾌한 느낌이에요.",
          "답답한 마음을 환기시켜주는 초록빛 청량감이 오래 이어집니다.",
        ],
      },
      {
        tag: "Woody",
        description: [
          "은은하게 깔리는 나무 향이 향의 중심을 안정감 있게 잡아줘요.",
          "허브의 산뜻함에 깊이를 더해 너무 가볍게 날아가지 않도록 붙잡아주는 역할을 합니다.",
        ],
      },
    ],
    scentStory: {
      title: "이른 아침 숲의 공기처럼 차분하고 맑은 사람",
      story: [
        [
          "세지 에어는 이른 아침 안개가 걷히는 숲길을 천천히 걷는 사람 같아요.",
          "서두르지 않고 자기만의 속도로 걸으면서도 주변을 세심하게 살피는 여유가 느껴집니다.",
        ],
        [
          "린넨 셔츠나 자연스러운 톤의 옷을 좋아하고, 꾸밈없는 모습이 가장 잘 어울려요.",
          "책상 위에는 작은 화분 하나, 손에는 따뜻한 허브티가 놓여 있는 모습이 자연스럽습니다.",
        ],
        [
          "감정을 크게 드러내지 않지만 함께 있으면 마음이 조용히 가라앉는 사람이에요.",
          "복잡한 하루 끝에 문득 떠올라 깊게 숨을 쉬게 만드는, 맑은 공기 같은 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 4,
    nameKo: "아이론 베티버",
    nameEn: "Iron Vetiver",
    size: "50ml",
    tags: ["Dry", "Smoky", "Woody"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume4.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id04_01.jpg', alt: "차가운 금속 질감" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id04_02.jpg', alt: "타오르는 연기" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id04_03.jpg', alt: "베티버 뿌리·마른 풀" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id04_04.jpg', alt: "어두운 나무 표면" },
    ],
    scentInfo: [
      {
        tag: "Dry",
        description: [
          "촉촉함보다는 바짝 마른 흙과 풀, 종이 같은 건조하고 깔끔한 질감을 뜻해요.",
          "달콤한 느낌 없이 담백하게 떨어져서 절제되고 단단한 분위기를 만들어줍니다.",
        ],
      },
      {
        tag: "Smoky",
        description: [
          "불이 꺼진 뒤 은은하게 남는 연기처럼 깊고 그윽한 여운을 담고 있어요.",
          "강렬하기보다 낮게 깔리는 스모키함이라 어른스럽고 신비로운 인상을 줍니다.",
        ],
      },
      {
        tag: "Woody",
        description: [
          "베티버 뿌리에서 나오는 묵직하고 흙내음 섞인 나무 향이 중심이에요.",
          "차가운 금속 같은 느낌과 어우러져 단단하면서도 안정감 있는 잔향을 남깁니다.",
        ],
      },
    ],
    scentStory: {
      title: "말수는 적지만 존재감이 묵직한 사람",
      story: [
        [
          "아이론 베티버는 조용히 서 있는데도 공간의 중심이 되는 사람 같아요.",
          "많은 말을 하지 않아도 한마디 한마디에 무게가 실려 있고, 눈빛에서 단단한 신뢰가 느껴집니다.",
        ],
        [
          "블랙이나 차콜 톤의 재킷, 잘 다려진 셔츠처럼 군더더기 없는 옷차림을 즐겨요.",
          "장식 없는 시계 하나만으로도 충분히 멋이 나는, 절제된 스타일의 소유자입니다.",
        ],
        [
          "차갑고 냉정해 보이지만 한번 마음을 열면 끝까지 곁을 지켜주는 사람이에요.",
          "쉽게 다가가기는 어렵지만 알면 알수록 깊이가 느껴지는 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 5,
    nameKo: "벨벳 아이리스",
    nameEn: "Velvet Iris",
    size: "50ml",
    tags: ["Floral", "Elegant", "Soft"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume5.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id05_01.jpg', alt: "연보라색 아이리스 꽃" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id05_02.jpg', alt: "파우더 가루·화장솜" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id05_03.jpg', alt: "실크 스카프" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id05_04.jpg', alt: "라벤더빛 노을 하늘" },
    ],
    scentInfo: [
      {
        tag: "Floral",
        description: [
          "아이리스 특유의 차분하고 파우더리한 꽃향기가 중심이에요.",
          "화려하게 피어나기보다 조용히 은은하게 번지는 고급스러운 플로럴입니다.",
        ],
      },
      {
        tag: "Elegant",
        description: [
          "절제되고 품위 있는 분위기를 만들어주는 향의 결을 뜻해요.",
          "과하지 않은 세련미가 있어서 격식 있는 자리나 차분한 모임에도 잘 어울려요.",
        ],
      },
      {
        tag: "Soft",
        description: [
          "벨벳을 쓰다듬는 듯 매끄럽고 부드럽게 피부 위에 안착하는 향이에요.",
          "날카로운 부분 없이 둥글게 마무리되어 편안하게 곁에 머무는 잔향을 남깁니다.",
        ],
      },
    ],
    scentStory: {
      title: "조용히 우아함이 배어나는 세련된 사람",
      story: [
        [
          "벨벳 아이리스는 라벤더빛 노을이 지는 시간, 조용히 클래식 음악을 듣고 있는 사람 같아요.",
          "크게 드러내지 않아도 몸짓 하나하나에 품위가 배어 있어 자연스럽게 시선을 끄는 인물입니다.",
        ],
        [
          "실크 블라우스나 부드러운 캐시미어 코트처럼 결이 고운 소재를 즐겨 입어요.",
          "액세서리는 작고 정교한 것 하나면 충분하며, 은은한 파우더 향이 옷차림을 완성해줍니다.",
        ],
        [
          "말투는 나긋하고 표정은 온화하지만 자신만의 취향과 기준이 분명한 사람이에요.",
          "만날수록 깊이가 느껴지고, 헤어진 뒤에도 잔잔한 여운이 오래 남는 우아한 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 6,
    nameKo: "슬레이트 리버",
    nameEn: "Slate River",
    size: "50ml",
    tags: ["Cool", "Woody", "Dry"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume6.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id06_01.jpg', alt: "강가의 매끈한 회색 돌" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id06_02.jpg', alt: "깊고 어두운 강물" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id06_03.jpg', alt: "젖은 나무 껍질" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id06_04.jpg', alt: "푸른 새벽 안개" },
    ],
    scentInfo: [
      {
        tag: "Cool",
        description: [
          "차가운 강물과 젖은 돌에서 느껴지는 시원하고 서늘한 공기를 담았어요.",
          "뜨겁지 않은 담담한 온도감이라 이성적이고 침착한 분위기를 만들어줍니다.",
        ],
      },
      {
        tag: "Woody",
        description: [
          "강가에 놓인 오래된 나무처럼 묵직하고 안정적인 우디 향이 바탕을 이뤄요.",
          "시원한 첫인상 아래에서 깊이를 더해주며 향이 가볍게 흩어지지 않도록 잡아줘요.",
        ],
      },
      {
        tag: "Dry",
        description: [
          "끈적임이나 달콤함 없이 깔끔하게 떨어지는 건조한 질감이에요.",
          "군더더기 없이 정돈된 잔향으로 단정하고 절제된 인상을 남깁니다.",
        ],
      },
    ],
    scentStory: {
      title: "차분한 강가처럼 단정하고 침착한 사람",
      story: [
        [
          "슬레이트 리버는 새벽 강가를 조용히 산책하며 생각을 정리하는 사람 같아요.",
          "감정에 쉽게 휩쓸리지 않고, 어떤 상황에서도 중심을 잃지 않는 든든함이 있습니다.",
        ],
        [
          "네이비나 그레이 톤의 깔끔한 옷을 즐겨 입고, 소재는 도시적이고 단정한 것을 선호해요.",
          "말은 정확하고 간결하며, 필요한 순간에만 정곡을 찌르는 한마디를 건네는 스타일입니다.",
        ],
        [
          "겉으로는 차분하고 서늘해 보이지만 속은 누구보다 깊고 성실한 사람이에요.",
          "잔잔히 흐르는 강물처럼 조용하지만 꾸준히 곁에 머물러주는 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 7,
    nameKo: "블룸 헤이즈",
    nameEn: "Bloom Haze",
    size: "50ml",
    tags: ["Floral", "Sweet", "Romantic"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume7.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id07_01.jpg', alt: "분홍빛 꽃다발" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id07_02.jpg', alt: "안개 낀 봄날 정원" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id07_03.jpg', alt: "핑크 리본·새틴" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id07_04.jpg', alt: "설탕 입힌 마카롱·디저트" },
    ],
    scentInfo: [
      {
        tag: "Floral",
        description: [
          "장미와 작약처럼 풍성하게 피어난 꽃다발을 떠올리게 하는 향이에요.",
          "여러 꽃향기가 겹겹이 어우러져 화사하고 여성스러운 분위기를 만들어줍니다.",
        ],
      },
      {
        tag: "Sweet",
        description: [
          "꽃잎 위에 살짝 내려앉은 설탕 시럽처럼 은은하게 달콤한 향이에요.",
          "느끼하지 않고 가볍게 퍼져서 기분 좋은 포근함을 전해줍니다.",
        ],
      },
      {
        tag: "Romantic",
        description: [
          "봄날 안개 속에서 설레는 순간을 마주한 듯 몽글몽글한 감정을 담고 있어요.",
          "데이트나 특별한 날에 사용하면 다정하고 사랑스러운 인상을 더해줘요.",
        ],
      },
    ],
    scentStory: {
      title: "봄날 안개 속 꽃처럼 사랑스러운 사람",
      story: [
        [
          "블룸 헤이즈는 봄비가 그친 뒤 안개 낀 정원에서 꽃을 고르는 사람 같아요.",
          "부드러운 표정과 다정한 말투에서 자연스럽게 설렘이 전해지는 인물입니다.",
        ],
        [
          "핑크빛 가디건이나 리본이 달린 블라우스처럼 사랑스러운 아이템이 잘 어울려요.",
          "작은 선물이나 손편지를 좋아하고, 기억하고 싶은 순간을 소중히 담아두는 로맨티스트입니다.",
        ],
        [
          "감성이 풍부해서 사소한 순간에도 쉽게 감동하고, 그 마음을 솔직하게 표현하는 사람이에요.",
          "곁에 있으면 평범한 하루가 조금 더 부드럽고 달콤하게 느껴지는 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 8,
    nameKo: "아쿠아 루메",
    nameEn: "Aqua Lume",
    size: "50ml",
    tags: ["Romantic", "Soft", "Clean"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume8.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id08_01.jpg', alt: "빛이 반짝이는 투명한 물결" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id08_02.jpg', alt: "푸른 수면 위 물방울" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id08_03.jpg', alt: "달빛이 비치는 밤바다" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id08_04.jpg', alt: "하늘색 실크·시폰" },
    ],
    scentInfo: [
      {
        tag: "Romantic",
        description: [
          "잔잔한 물결 위에 빛이 번지는 듯 몽환적이고 감성적인 분위기를 담았어요.",
          "차분하지만 마음 한켠을 설레게 하는 은은한 로맨틱함이 느껴집니다.",
        ],
      },
      {
        tag: "Soft",
        description: [
          "물결처럼 부드럽게 피부에 스며들어 자극 없이 편안하게 퍼지는 향이에요.",
          "은은한 잔향이 오래 이어져 곁에 있는 사람에게 다정한 인상을 남깁니다.",
        ],
      },
      {
        tag: "Clean",
        description: [
          "맑은 물과 시트러스, 깨끗한 공기를 떠올리게 하는 투명하고 정갈한 향이에요.",
          "무겁지 않고 깔끔해서 일상 어디서든 부담 없이 사용할 수 있어요.",
        ],
      },
    ],
    scentStory: {
      title: "투명한 물빛처럼 맑고 다정한 사람",
      story: [
        [
          "아쿠아 루메는 달빛이 잔잔한 호수 위로 번지는 밤, 조용히 미소 짓는 사람 같아요.",
          "맑고 투명한 분위기 속에 은근한 설렘을 품고 있어 자꾸 눈길이 가는 인물입니다.",
        ],
        [
          "하늘색 셔츠나 연한 블루 톤의 원피스처럼 청량하고 부드러운 색을 즐겨 입어요.",
          "말투는 차분하고 다정하며, 상대의 기분을 섬세하게 살피는 배려가 몸에 배어 있습니다.",
        ],
        [
          "감정을 과하게 드러내지 않지만 진심은 물처럼 투명하게 전해지는 사람이에요.",
          "함께 있으면 마음이 맑아지고, 은은한 여운이 오래 남는 로맨틱한 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 9,
    nameKo: "레디언트",
    nameEn: "Radiant",
    size: "50ml",
    tags: ["Floral", "Citrus", "Soft"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume9.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id09_01.jpg', alt: "창가에 드는 아침 햇살" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id09_02.jpg', alt: "연분홍 꽃잎" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id09_03.jpg', alt: "얇게 썬 레몬·자몽" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id09_04.jpg', alt: "반짝이는 은은한 빛망울" },
    ],
    scentInfo: [
      {
        tag: "Floral",
        description: [
          "햇살을 머금은 듯 화사하게 피어나는 연분홍빛 꽃향기가 중심이에요.",
          "밝고 생기 있는 분위기로 얼굴을 더 환하게 보이게 하는 듯한 향입니다.",
        ],
      },
      {
        tag: "Citrus",
        description: [
          "톡 튀는 시트러스가 향의 시작을 산뜻하고 반짝이게 열어줘요.",
          "꽃향기가 무겁게 느껴지지 않도록 가볍게 균형을 잡아주는 역할을 합니다.",
        ],
      },
      {
        tag: "Soft",
        description: [
          "끝으로 갈수록 파우더리하고 포근하게 정리되는 부드러운 잔향이에요.",
          "화사함 뒤에 편안하게 스며드는 온기가 있어 하루 종일 기분 좋게 남습니다.",
        ],
      },
    ],
    scentStory: {
      title: "환하게 빛나는 햇살 같은 사람",
      story: [
        [
          "레디언트는 창문 가득 아침 햇살이 들어오는 순간처럼 주변을 환하게 만드는 사람 같아요.",
          "특별히 꾸미지 않아도 표정과 분위기에서 자연스러운 생기가 반짝이는 인물입니다.",
        ],
        [
          "연분홍이나 크림빛 옷을 즐겨 입고, 가벼운 발걸음으로 하루를 시작해요.",
          "사람을 대할 때 먼저 인사를 건네고 밝게 웃어주는, 분위기 메이커 같은 존재입니다.",
        ],
        [
          "긍정적이고 명랑하지만 가볍기만 한 것이 아니라 따뜻한 마음씨를 함께 가진 사람이에요.",
          "곁에 있으면 힘든 하루도 한결 부드럽게 풀리는, 빛나는 에너지의 소유자입니다.",
        ],
      ],
    },
  },

  {
    id: 10,
    nameKo: "아쿠아 헤이즈",
    nameEn: "Aqua Haze",
    size: "50ml",
    tags: ["Citrus", "Fresh", "Clean"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume10.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id10_01.jpg', alt: "탁 트인 여름 바다" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id10_02.jpg', alt: "얼음 띄운 레모네이드" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id10_03.jpg', alt: "파도에 부서지는 물보라" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id10_04.jpg', alt: "푸른 하늘과 수평선" },
    ],
    scentInfo: [
      {
        tag: "Citrus",
        description: [
          "레몬과 베르가못이 시원하게 터지며 향의 시작을 청량하게 열어줘요.",
          "얼음 띄운 레모네이드처럼 입안이 상쾌해지는 듯한 산뜻함을 전해줍니다.",
        ],
      },
      {
        tag: "Fresh",
        description: [
          "바닷바람이 얼굴을 스치는 것처럼 시원하고 개운한 느낌이에요.",
          "더운 날씨나 활동적인 하루에 특히 잘 어울리는 가벼운 향입니다.",
        ],
      },
      {
        tag: "Clean",
        description: [
          "물기 머금은 맑은 공기처럼 잡스러운 느낌 없이 깨끗하게 마무리돼요.",
          "샤워 직후의 개운함을 떠올리게 하는 정돈된 잔향을 남겨줍니다.",
        ],
      },
    ],
    scentStory: {
      title: "여름 바닷바람처럼 시원하고 자유로운 사람",
      story: [
        [
          "아쿠아 헤이즈는 여름 아침 탁 트인 바다를 바라보며 크게 숨을 들이마시는 사람 같아요.",
          "가볍고 시원한 에너지로 주변의 답답함까지 날려주는 청량한 인물입니다.",
        ],
        [
          "흰 티셔츠에 청바지, 편안한 스니커즈처럼 간결하고 산뜻한 차림이 잘 어울려요.",
          "가만히 있기보다 산책이나 여행처럼 몸을 움직이는 시간을 좋아하는 활동적인 스타일이에요.",
        ],
        [
          "솔직하고 뒤끝이 없어서 함께 있으면 마음이 한결 가벼워지는 사람이에요.",
          "지나간 자리에 시원한 바람 한 줄기가 남는 듯한, 청량한 여운의 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 11,
    nameKo: "우드 티어리",
    nameEn: "Wood Theory",
    size: "50ml",
    tags: ["Woody", "Amber", "Warm"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume11.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id11_01.jpg', alt: "오래된 원목" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id11_02.jpg', alt: "황금빛 호박·앰버 원석" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id11_03.jpg', alt: "따뜻한 조명이 켜진 서재" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id11_04.jpg', alt: "김이 오르는 따뜻한 차" },
    ],
    scentInfo: [
      {
        tag: "Woody",
        description: [
          "오래된 서재의 원목 가구를 떠올리게 하는 깊고 차분한 나무 향이에요.",
          "시간이 지날수록 은은하게 우러나와 안정감과 신뢰감을 전해줍니다.",
        ],
      },
      {
        tag: "Amber",
        description: [
          "황금빛 수지에서 우러나오는 달콤하고 따뜻한 잔향이 향의 깊이를 더해줘요.",
          "나무 향을 부드럽게 감싸주어 묵직하면서도 포근한 분위기를 만들어냅니다.",
        ],
      },
      {
        tag: "Warm",
        description: [
          "난로 곁이나 따뜻한 담요처럼 몸과 마음이 데워지는 듯한 온기를 담았어요.",
          "쌀쌀한 계절에 특히 잘 어울리며 곁에 있는 사람에게 편안함을 전해줍니다.",
        ],
      },
    ],
    scentStory: {
      title: "오래된 서재의 온기를 가진 다정하고 깊이 있는 사람",
      story: [
        [
          "우드 티어리는 따뜻한 조명이 켜진 서재에서 책장을 넘기며 차를 마시는 사람 같아요.",
          "조용하지만 공간 전체를 아늑하게 만드는 온기를 지니고 있는 인물입니다.",
        ],
        [
          "브라운이나 베이지 톤의 니트, 질 좋은 울 코트처럼 시간이 지나도 멋스러운 옷을 즐겨 입어요.",
          "유행을 따르기보다 오래 아끼는 물건들을 곁에 두고 사용하는 취향이 확고한 사람입니다.",
        ],
        [
          "말수는 많지 않지만 이야기를 끝까지 들어주고, 필요한 순간에 따뜻한 조언을 건네줘요.",
          "함께 있을수록 깊이가 느껴지고, 기대어 쉬고 싶어지는 든든한 인물입니다.",
        ],
      ],
    },
  },

  {
    id: 12,
    nameKo: "엠버 오크",
    nameEn: "Amber Oak",
    size: "50ml",
    tags: ["Amber", "Smoky", "Musk"],
    mainImage: process.env.PUBLIC_URL+'/images/perfumes/perfume12.png',
    scentImages: [
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id12_01.jpg', alt: "깊은 밤 타오르는 모닥불" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id12_02.jpg', alt: "오크통·짙은 원목" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id12_03.jpg', alt: "짙은 호박색 위스키·앰버" },
      { src: process.env.PUBLIC_URL+'/images/perfume_detail/id12_04.jpg', alt: "어두운 가죽 질감" },
    ],
    scentInfo: [
      {
        tag: "Amber",
        description: [
          "짙은 호박색 수지에서 나오는 진하고 달콤한 온기가 향의 중심이에요.",
          "깊고 풍부하게 퍼지면서 관능적이고 고급스러운 분위기를 만들어줍니다.",
        ],
      },
      {
        tag: "Smoky",
        description: [
          "모닥불이 사그라든 뒤에 남는 은은한 연기처럼 그윽한 여운을 담고 있어요.",
          "오크 나무의 그을린 느낌과 어우러져 신비롭고 깊이 있는 인상을 줍니다.",
        ],
      },
      {
        tag: "Musk",
        description: [
          "마지막에 피부에 밀착되어 향을 부드럽게 마무리해주는 머스크가 중심을 잡아줘요.",
          "진한 향들을 둥글게 감싸서 자극적이지 않고 오래 남는 포근한 잔향을 만들어냅니다.",
        ],
      },
    ],
    scentStory: {
      title: "깊은 밤 모닥불 곁에 머무는 그윽한 사람",
      story: [
        [
          "엠버 오크는 깊은 밤 모닥불 앞에서 조용히 불꽃을 바라보는 사람 같아요.",
          "많은 말을 하지 않아도 분위기에서 깊이와 여유가 전해지는 인물입니다.",
        ],
        [
          "짙은 브라운 가죽 재킷이나 어두운 톤의 니트처럼 묵직하고 고급스러운 옷이 잘 어울려요.",
          "낮보다는 밤이 더 어울리고, 조명이 낮게 깔린 공간에서 가장 매력이 빛나는 스타일이에요.",
        ],
        [
          "신비로워 보여서 처음엔 다가가기 어렵지만, 한번 가까워지면 누구보다 따뜻한 사람이에요.",
          "떠난 자리에도 그윽한 온기가 오래 남는, 잊히지 않는 인물입니다.",
        ],
      ],
    },
  },
];

export default perfumeDetailData;