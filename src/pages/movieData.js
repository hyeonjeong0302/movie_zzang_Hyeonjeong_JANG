const movieList = [
 //ranking
  {
    id: 'ranking01',
    image: process.env.PUBLIC_URL + '/images/ranking01.jpg',
    title: '범죄도시3',
    buy: true,
    rent: false,
    price: '16,390 coin',
    category: 'ranking'
  },
  {
    id: 'ranking02',
    image: process.env.PUBLIC_URL + '/images/ranking02.jpg',
    title: '가디언즈 오브 갤럭시: Volume 3(세트: 1~3편)',
    buy: true,
    rent: false,
    price: '18,600 coin',
    category: 'ranking'
  },
  {
    id: 'ranking03',
    image: process.env.PUBLIC_URL + '/images/ranking03.jpg',
    title: '가디언즈 오브 갤럭시: Volume 3',
    buy: true,
    rent: false,
    price: '10,900 coin',
    category: 'ranking'
  },
  {
    id: 'ranking04',
    image: process.env.PUBLIC_URL + '/images/ranking04.jpg',
    title: '스파이더맨: 뉴 유니버스',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking05',
    image: process.env.PUBLIC_URL + '/images/ranking05.jpg',
    title: '범죄도시3',
    buy: false,
    rent: true,
    price: '11,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking06',
    image: process.env.PUBLIC_URL + '/images/ranking06.jpg',
    title: '범죄도시2',
    buy: false,
    rent: true,
    price: '2,750 coin',
    category: 'ranking'
  },

  {
    id: 'ranking07',
    image: process.env.PUBLIC_URL + '/images/ranking07.jpg',
    title: '범죄도시2',
    buy: true,
    rent: false,
    price: '6,050 coin',
    category: 'ranking'
  },
  {
    id: 'ranking08',
    image: process.env.PUBLIC_URL + '/images/ranking08.png',
    title: '해리 포터와 비밀의 방(2편)',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking09',
    image: process.env.PUBLIC_URL + '/images/ranking09.jpg',
    title: '분노의 질주: 라이드 오어 다이',
    buy: true,
    rent: false,
    price: '14,900 coin',
    category: 'ranking'
  },
  {
    id: 'ranking10',
    image: process.env.PUBLIC_URL + '/images/ranking10.jpg',
    title: '아바타: 물의 길(부가영상 제공)',
    buy: true,
    rent: false,
    price: '10,900 coin',
    category: 'ranking'
  },
  {
    id: 'ranking11',
    image: process.env.PUBLIC_URL + '/images/ranking11.jpg',
    title: '소울(패키지: 자막판+더빙판+코멘터리+부가영상)',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },
  {
    id: 'ranking12',
    image: process.env.PUBLIC_URL + '/images/ranking12.jpg',
    title: '빅 히어로(패키지: 자막판+더빙판)',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },

  {
    id: 'ranking13',
    image: process.env.PUBLIC_URL + '/images/ranking13.jpg',
    title: '인터스텔라',
    buy: true,
    rent: false,
    price: '4,950 coin',
    category: 'ranking'
  },
  {
    id: 'ranking14',
    image: process.env.PUBLIC_URL + '/images/ranking14.jpg',
    title: '해리 포터와 마법사의 돌(1편)',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking15',
    image: process.env.PUBLIC_URL + '/images/ranking15.jpg',
    title: '길소뜸',
    buy: true,
    rent: false,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking16',
    image: process.env.PUBLIC_URL + '/images/ranking16.jpg',
    title: '분노의 질주: 라이드 오어 다이',
    buy: false,
    rent: true,
    price: '10,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking17',
    image: process.env.PUBLIC_URL + '/images/ranking17.jpg',
    title: '극장판 짱구는 못말려: 동물소환 닌자 배꼽수비대',
    buy: false,
    rent: true,
    price: '11,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking18',
    image: process.env.PUBLIC_URL + '/images/ranking18.jpg',
    title: '슈퍼 마리오 브라더스',
    buy: false,
    rent: true,
    price: '5,000 coin',
    category: 'ranking'
  },

  {
    id: 'ranking19',
    image: process.env.PUBLIC_URL + '/images/ranking19.jpg',
    title: '존 웍4',
    buy: false,
    rent: true,
    price: '7,700 coin',
    category: 'ranking'
  },
  {
    id: 'ranking20',
    image: process.env.PUBLIC_URL + '/images/ranking20.jpg',
    title: '리바운드',
    buy: false,
    rent: true,
    price: '5,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking21',
    image: process.env.PUBLIC_URL + '/images/ranking21.jpg',
    title: '카운트',
    buy: true,
    rent: false,
    price: '10,890 coin',
    category: 'ranking'
  },
  {
    id: 'ranking22',
    image: process.env.PUBLIC_URL + '/images/ranking22.jpg',
    title: '다음 소희',
    buy: true,
    rent: false,
    price: '10,890 coin',
    category: 'ranking'
  },
  {
    id: 'ranking23',
    image: process.env.PUBLIC_URL + '/images/ranking23.jpg',
    title: '상견니',
    buy: true,
    rent: false,
    price: '5,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking24',
    image: process.env.PUBLIC_URL + '/images/ranking24.jpg',
    title: '10일간의 애인',
    buy: false,
    rent: true,
    price: '2,750 coin',
    category: 'ranking'
  },

  {
    id: 'ranking25',
    image: process.env.PUBLIC_URL + '/images/ranking25.png',
    title: '장화신은 고양이: 끝내주는 모험(패키지: 자막판+더빙판)',
    buy: true,
    rent: false,
    price: '7,700 coin',
    category: 'ranking'
  },
  {
    id: 'ranking26',
    image: process.env.PUBLIC_URL + '/images/ranking26.jpg',
    title: '영웅',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },
  {
    id: 'ranking27',
    image: process.env.PUBLIC_URL + '/images/ranking27.jpg',
    title: '원피스 필름 레드',
    buy: true,
    rent: false,
    price: '10,890 coin',
    category: 'ranking'
  },
  {
    id: 'ranking28',
    image: process.env.PUBLIC_URL + '/images/ranking28.jpg',
    title: '올빼미',
    buy: false,
    rent: true,
    price: '2,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking29',
    image: process.env.PUBLIC_URL + '/images/ranking29.jpg',
    title: '올빼미',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking30',
    image: process.env.PUBLIC_URL + '/images/ranking30.png',
    title: '폴: 600미터',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },

  {
    id: 'ranking31',
    image: process.env.PUBLIC_URL + '/images/ranking31.jpg',
    title: '애프터: 에버 해피',
    buy: false,
    rent: true,
    price: '2,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking32',
    image: process.env.PUBLIC_URL + '/images/ranking32.jpg',
    title: '명탐정 코난: 할로윈의 신부',
    buy: false,
    rent: true,
    price: '2,750coin',
    category: 'ranking'
  },
  {
    id: 'ranking33',
    image: process.env.PUBLIC_URL + '/images/ranking33.jpg',
    title: '헤어질 결심',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },
  {
    id: 'ranking34',
    image: process.env.PUBLIC_URL + '/images/ranking34.jpg',
    title: '탑건: 매버릭',
    buy: false,
    rent: true,
    price: '2,750 coin',
    category: 'ranking'
  },
  {
    id: 'ranking35',
    image: process.env.PUBLIC_URL + '/images/ranking35.jpg',
    title: '마녀(魔女) Part2. The Other One',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking36',
    image: process.env.PUBLIC_URL + '/images/ranking36.jpg',
    title: '배드 가이즈',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },

  {
    id: 'ranking37',
    image: process.env.PUBLIC_URL + '/images/ranking37.jpg',
    title: '이상한 나라의 수학자',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },
  {
    id: 'ranking38',
    image: process.env.PUBLIC_URL + '/images/ranking38.jpg',
    title: '씽2게더',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking39',
    image: process.env.PUBLIC_URL + '/images/ranking39.jpg',
    title: '죽을 때까지',
    buy: true,
    rent: false,
    price: '1,400 coin',
    category: 'ranking'
  },
  {
    id: 'ranking40',
    image: process.env.PUBLIC_URL + '/images/ranking40.jpg',
    title: '극장판 도라에몽: 진구의 신공룡',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking41',
    image: process.env.PUBLIC_URL + '/images/ranking41.jpg',
    title: '모가디슈',
    buy: true,
    rent: false,
    price: '3,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking42',
    image: process.env.PUBLIC_URL + '/images/ranking42.jpg',
    title: '더빙크루즈 패밀리: 뉴 에이지',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },

  {
    id: 'ranking43',
    image: process.env.PUBLIC_URL + '/images/ranking43.jpg',
    title: '명탐정 코난: 비색의 탄환',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking44',
    image: process.env.PUBLIC_URL + '/images/ranking44.jpg',
    title: '조제, 호랑이 그리고 물고기들',
    buy: false,
    rent: true,
    price: '1,400 coin',
    category: 'ranking'
  },
  {
    id: 'ranking45',
    image: process.env.PUBLIC_URL + '/images/ranking45.png',
    title: '극장판 귀멸의 칼날: 무한열차편(7일)',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking46',
    image: process.env.PUBLIC_URL + '/images/ranking46.jpg',
    title: '극장판 바다 탐험대 옥토넛 : 대산호초 보호작전(패키지: 자막판+더빙판)',
    buy: true,
    rent: false,
    price: '2,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking47',
    image: process.env.PUBLIC_URL + '/images/ranking47.jpg',
    title: '테슬라',
    buy: true,
    rent: false,
    price: '1,400 coin',
    category: 'ranking'
  },
  {
    id: 'ranking48',
    image: process.env.PUBLIC_URL + '/images/ranking48.jpg',
    title: '하이큐!! 땅 VS 하늘',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },

  {
    id: 'ranking49',
    image: process.env.PUBLIC_URL + '/images/ranking49.jpg',
    title: '아직 사랑하고 있습니까?',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking50',
    image: process.env.PUBLIC_URL + '/images/ranking50.jpg',
    title: '너를 만난 여름',
    buy: true,
    rent: false,
    price: '1,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking51',
    image: process.env.PUBLIC_URL + '/images/ranking51.png',
    title: '조커',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking52',
    image: process.env.PUBLIC_URL + '/images/ranking52.jpg',
    title: '커런트 워',
    buy: true,
    rent: false,
    price: ',1200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking53',
    image: process.env.PUBLIC_URL + '/images/ranking53.jpg',
    title: '미드소마(감독판)',
    buy: true,
    rent: false,
    price: '1,400 coin',
    category: 'ranking'
  },
  {
    id: 'ranking54',
    image: process.env.PUBLIC_URL + '/images/ranking54.jpg',
    title: '로제타',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },

  {
    id: 'ranking55',
    image: process.env.PUBLIC_URL + '/images/ranking55.png',
    title: '어스',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking56',
    image: process.env.PUBLIC_URL + '/images/ranking56.jpg',
    title: '말모이',
    buy: false,
    rent: true,
    price: '1,400 coin',
    category: 'ranking'
  },
  {
    id: 'ranking57',
    image: process.env.PUBLIC_URL + '/images/ranking57.jpg',
    title: '위시업',
    buy: true,
    rent: false,
    price: '1,320 coin',
    category: 'ranking'
  },
  {
    id: 'ranking58',
    image: process.env.PUBLIC_URL + '/images/ranking58.jpg',
    title: '모털 엔진',
    buy: true,
    rent: false,
    price: '5,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking59',
    image: process.env.PUBLIC_URL + '/images/ranking59.jpg',
    title: '초이스',
    buy: true,
    rent: false,
    price: '4,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking60',
    image: process.env.PUBLIC_URL + '/images/ranking60.jpg',
    title: '에브리데이',
    buy: true,
    rent: false,
    price: '1,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking61',
    image: process.env.PUBLIC_URL + '/images/ranking61.jpg',
    title: '더 시크릿 하우스',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking62',
    image: process.env.PUBLIC_URL + '/images/ranking62.png',
    title: '미션 임파서블: 폴아웃',
    buy: false,
    rent: true,
    price: '1,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking63',
    image: process.env.PUBLIC_URL + '/images/ranking63.jpg',
    title: '부르고뉴, 와인에서 찾은 인생',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking64',
    image: process.env.PUBLIC_URL + '/images/ranking64.png',
    title: '콜 미 바이 유어 네임',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking65',
    image: process.env.PUBLIC_URL + '/images/ranking65.jpg',
    title: '50가지 그림자: 해방',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking66',
    image: process.env.PUBLIC_URL + '/images/ranking66.jpg',
    title: '패딩턴 2',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking67',
    image: process.env.PUBLIC_URL + '/images/ranking67.png',
    title: '원더',
    buy: true,
    rent: false,
    price: '6,050 coin',
    category: 'ranking'
  },
  {
    id: 'ranking68',
    image: process.env.PUBLIC_URL + '/images/ranking68.jpg',
    title: '원더',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking69',
    image: process.env.PUBLIC_URL + '/images/ranking69.jpg',
    title: '위대한 쇼맨',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking70',
    image: process.env.PUBLIC_URL + '/images/ranking70.jpg',
    title: '범죄도시',
    buy: true,
    rent: false,
    price: '6,50 coin',

    category: 'ranking'
  },
  {
    id: 'ranking71',
    image: process.env.PUBLIC_URL + '/images/ranking71.jpg',
    title: '50가지 그림자: 심연',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking72',
    image: process.env.PUBLIC_URL + '/images/ranking72.jpg',
    title: '모아나(패키지상품 : 더빙판 추가증정, 코멘터리+부가영상 제공)',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking73',
    image: process.env.PUBLIC_URL + '/images/ranking73.jpg',
    title: '미스 페레그린과 이상한 아이들의 집(부가영상 제공)',
    buy: true,
    rent: false,
    price: '5,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking74',
    image: process.env.PUBLIC_URL + '/images/ranking74.jpg',
    title: '서프러제트',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking75',
    image: process.env.PUBLIC_URL + '/images/ranking75.png',
    title: '내부자들: 디 오리지널',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking76',
    image: process.env.PUBLIC_URL + '/images/ranking76.jpg',
    title: '인턴',
    buy: true,
    rent: false,
    price: '4,950 coin',
    category: 'ranking'
  },
  {
    id: 'ranking77',
    image: process.env.PUBLIC_URL + '/images/ranking77.jpg',
    title: '맨 프럼 어스',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking78',
    image: process.env.PUBLIC_URL + '/images/ranking78.png',
    title: '자막인사이드 아웃(패키지상품 : 더빙판 + 부가영상 추가증정)',
    buy: true,
    rent: false,
    price: '7,150 coin',
    category: 'ranking'
  },
  {
    id: 'ranking79',
    image: process.env.PUBLIC_URL + '/images/ranking79.jpg',
    title: '정사4',
    buy: true,
    rent: false,
    price: '2,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking80',
    image: process.env.PUBLIC_URL + '/images/ranking80.jpg',
    title: '네이든',
    buy: false,
    rent: true,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking81',
    image: process.env.PUBLIC_URL + '/images/ranking81.jpg',
    title: '엑시덴탈 러브',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking82',
    image: process.env.PUBLIC_URL + '/images/ranking82.jpg',
    title: '잡식가족의 딜레마',
    buy: true,
    rent: false,
    price: '2,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking83',
    image: process.env.PUBLIC_URL + '/images/ranking83.jpg',
    title: '다이노 타임',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking84',
    image: process.env.PUBLIC_URL + '/images/ranking84.jpg',
    title: '그레이의 50가지 그림자(부가영상 제공)',
    buy: true,
    rent: false,
    price: '5,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking85',
    image: process.env.PUBLIC_URL + '/images/ranking85.jpg',
    title: '그레이의 50가지 그림자',
    buy: false,
    rent: true,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking86',
    image: process.env.PUBLIC_URL + '/images/ranking86.jpg',
    title: '개를 훔치는 완벽한 방법',
    buy: false,
    rent: true,
    price: '2,750 coin',
    category: 'ranking'
  },
  {
    id: 'ranking87',
    image: process.env.PUBLIC_URL + '/images/ranking87.jpg',
    title: '맵 투 더 스타',
    buy: true,
    rent: false,
    price: '6,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking88',
    image: process.env.PUBLIC_URL + '/images/ranking88.png',
    title: '국제시장(본편)',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking89',
    image: process.env.PUBLIC_URL + '/images/ranking89.png',
    title: '꾸뻬씨의 행복여행',
    buy: true,
    rent: false,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking90',
    image: process.env.PUBLIC_URL + '/images/ranking90.jpg',
    title: '컬러풀 웨딩즈',
    buy: true,
    rent: false,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking91',
    image: process.env.PUBLIC_URL + '/images/ranking91.jpg',
    title: '미녀 파이터',
    buy: true,
    rent: false,
    price: '1,200 coin',
    category: 'ranking'
  },
  {
    id: 'ranking92',
    image: process.env.PUBLIC_URL + '/images/ranking92.jpg',
    title: '곤충왕국',
    buy: false,
    rent: true,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking93',
    image: process.env.PUBLIC_URL + '/images/ranking93.jpg',
    title: '인간중독',
    buy: true,
    rent: false,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking94',
    image: process.env.PUBLIC_URL + '/images/ranking94.jpg',
    title: '트리쉬나',
    buy: false,
    rent: true,
    price: '1,500 coin',
    category: 'ranking'
  },
  {
    id: 'ranking95',
    image: process.env.PUBLIC_URL + '/images/ranking95.png',
    title: '우아한 거짓말',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking96',
    image: process.env.PUBLIC_URL + '/images/ranking96.jpg',
    title: '[극장판] 그날 본 꽃의 이름을 우리는 아직 모른다',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
  {
    id: 'ranking97',
    image: process.env.PUBLIC_URL + '/images/ranking97.jpg',
    title: '로렌스 애니웨이',
    buy: true,
    rent: false,
    price: '1,000 coin',
    category: 'ranking'
  },
  {
    id: 'ranking98',
    image: process.env.PUBLIC_URL + '/images/ranking98.jpg',
    title: '컨저링',
    buy: false,
    rent: true,
    price: '1,300 coin',
    category: 'ranking'
  },
  {
    id: 'ranking99',
    image: process.env.PUBLIC_URL + '/images/ranking99.jpg',
    title: '관상',
    buy: false,
    rent: true,
    price: '1,200 coin',

    category: 'ranking'
  },
  {
    id: 'ranking100',
    image: process.env.PUBLIC_URL + '/images/ranking100.jpg',
    title: '감기',
    buy: false,
    rent: true,
    price: '1,540 coin',
    category: 'ranking'
  },
];

export default movieList;