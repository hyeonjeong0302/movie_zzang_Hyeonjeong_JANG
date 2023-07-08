const movieList = [
  //ranking
  {
    id: "ranking01",
    image: process.env.PUBLIC_URL + "/images/ranking01.jpg",
    title: "존 윅 4",
    buy: true,
    rent: false,
    price: "16,390 coin",
    category: "ranking",
  },
  {
    id: "ranking02",

    image: process.env.PUBLIC_URL + "/images/ranking02.jpg",
    title: "분노의 질주: 라이드 오어 다이",
    buy: true,
    rent: false,
    price: "14,990 coin",
    category: "ranking",
  },
  {
    id: "ranking03",
    image: process.env.PUBLIC_URL + "/images/ranking03.jpg",
    title: "슈퍼 마리오 브라더스(패키지: 자막판+더빙판)",
    buy: true,
    rent: false,
    price: "18,900 coin",
    category: "ranking",
  },
  {
    id: "ranking04",
    image: process.env.PUBLIC_URL + "/images/ranking04.jpg",
    title: "존 윅 4",
    buy: false,
    rent: true,
    price: "11,000 coin",
    category: "ranking",
  },
  {
    id: "ranking05",
    image: process.env.PUBLIC_URL + "/images/ranking05.jpg",
    title: "범죄도시2",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking06",
    image: process.env.PUBLIC_URL + "/images/ranking06.jpg",
    title: "곤충왕국 3D",
    buy: false,
    rent: true,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking07",
    image: process.env.PUBLIC_URL + "/images/ranking07.jpg",
    title: "분노의 질주: 라이드 오어 다이",
    buy: false,
    rent: true,
    price: "10,000 coin",
    category: "ranking",
  },
  {
    id: "ranking08",
    image: process.env.PUBLIC_URL + "/images/ranking08.png",
    title: "리바운드",
    buy: true,
    rent: false,
    price: "9,900 coin",
    category: "ranking",
  },
  {
    id: "ranking09",
    image: process.env.PUBLIC_URL + "/images/ranking09.jpg",
    title: "스파이더맨: 뉴 유니버스",
    buy: false,
    rent: true,
    price: "1,300 coin",
    category: "ranking",
  },
  {
    id: "ranking10",
    image: process.env.PUBLIC_URL + "/images/ranking10.jpg",
    title: "범죄도시",
    buy: false,
    rent: true,
    price: "1,540 coin",
    category: "ranking",
  },
  {
    id: "ranking11",
    image: process.env.PUBLIC_URL + "/images/ranking11.jpg",
    title: "드림",
    buy: true,
    rent: false,
    price: "16,390 coin",
    category: "ranking",
  },
  {
    id: "ranking12",
    image: process.env.PUBLIC_URL + "/images/ranking12.jpg",
    title: "라이스보이 슬립스",
    buy: true,
    rent: false,
    price: "10,890 coin",
    category: "ranking",
  },
  {
    id: "ranking13",
    image: process.env.PUBLIC_URL + "/images/ranking13.jpg",
    title: "아바타: 물의 길(부가영상 제공)",
    buy: true,
    rent: false,
    price: "10,900 coin",
    category: "ranking",
  },
  {
    id: "ranking14",
    image: process.env.PUBLIC_URL + "/images/ranking14.jpg",
    title: "해리포터 20주년 기념: 리턴 투 호그와트(세트: 해리포터 1~8편 포함)",
    buy: true,
    rent: false,
    price: "20,000 coin",
    category: "ranking",
  },
  {
    id: "ranking15",
    image: process.env.PUBLIC_URL + "/images/ranking15.jpg",
    title: "던전 앤 드래곤: 도적들의 명예",
    buy: true,
    rent: false,
    price: "10,890 coin",
    category: "ranking",
  },
  {
    id: "ranking16",
    image: process.env.PUBLIC_URL + "/images/ranking16.jpg",
    title: "앤드맨과 와스프: 퀀텀매니아",
    buy: true,
    rent: false,
    price: "10,900 coin",
    category: "ranking",
  },
  {
    id: "ranking17",
    image: process.env.PUBLIC_URL + "/images/ranking17.jpg",
    title: "에브리씽 에브리웨어 올 앳 원스",
    buy: true,
    rent: false,
    price: "7,150 coin",
    category: "ranking",
  },
  {
    id: "ranking18",
    image: process.env.PUBLIC_URL + "/images/ranking18.jpg",
    title: "명탐정 코난: 할로윈의 신부",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking19",
    image: process.env.PUBLIC_URL + "/images/ranking19.jpg",
    title: "007 노 타임 투 다이",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking20",
    image: process.env.PUBLIC_URL + "/images/ranking20.jpg",
    title: "완벽한 파트너(감독판)",
    buy: true,
    rent: false,
    price: "2,000 coin",
    category: "ranking",
  },
  {
    id: "ranking21",
    image: process.env.PUBLIC_URL + "/images/ranking21.jpg",
    title: "김복남 살인사건의 전말",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking22",
    image: process.env.PUBLIC_URL + "/images/ranking22.jpg",
    title: "셔트 아일랜드",
    buy: false,
    rent: true,
    price: "1,500 coin",
    category: "ranking",
  },
  {
    id: "ranking23",
    image: process.env.PUBLIC_URL + "/images/ranking23.jpg",
    title: "두사부일체",
    buy: false,
    rent: true,
    price: "1,500 coin",
    category: "ranking",
  },
  {
    id: "ranking24",
    image: process.env.PUBLIC_URL + "/images/ranking24.jpg",
    title: "펄프 픽션",
    buy: false,
    rent: true,
    price: "1,600 coin",
    category: "ranking",
  },
  {
    id: "ranking25",
    image: process.env.PUBLIC_URL + "/images/ranking25.png",
    title: "잭 스나이더의 저스티스 리그(부가영상 제공)",
    buy: true,
    rent: false,
    price: "4,950 coin",
    category: "ranking",
  },
  {
    id: "ranking26",
    image: process.env.PUBLIC_URL + "/images/ranking26.jpg",
    title: "라이드 온",
    buy: true,
    rent: false,
    price: "14,900 coin",
    category: "ranking",
  },
  {
    id: "ranking27",
    image: process.env.PUBLIC_URL + "/images/ranking27.jpg",
    title: "슈가 앤 스타",
    buy: true,
    rent: false,
    price: "4,500 coin",
    category: "ranking",
  },
  {
    id: "ranking28",
    image: process.env.PUBLIC_URL + "/images/ranking28.jpg",
    title: "슈퍼 마리오 브라더스",
    buy: false,
    rent: true,
    price: "10,000 coin",
    category: "ranking",
  },
  {
    id: "ranking29",
    image: process.env.PUBLIC_URL + "/images/ranking29.jpg",
    title: "리바운드",
    buy: false,
    rent: true,
    price: "7,000 coin",
    category: "ranking",
  },
  {
    id: "ranking30",
    image: process.env.PUBLIC_URL + "/images/ranking30.png",
    title: "이니셰린의 밴시",
    buy: false,
    rent: true,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking31",
    image: process.env.PUBLIC_URL + "/images/ranking31.jpg",
    title: "샤잠! 신들의 분노",
    buy: false,
    rent: true,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking32",
    image: process.env.PUBLIC_URL + "/images/ranking32.jpg",
    title: "단순한 열정",
    buy: true,
    rent: false,
    price: "2,500coin",
    category: "ranking",
  },
  {
    id: "ranking33",
    image: process.env.PUBLIC_URL + "/images/ranking33.jpg",
    title: "영웅",
    buy: true,
    rent: false,
    price: "7,150 coin",
    category: "ranking",
  },
  {
    id: "ranking34",
    image: process.env.PUBLIC_URL + "/images/ranking34.jpg",
    title: "본즈 앤 올",
    buy: true,
    rent: false,
    price: "7,150 coin",
    category: "ranking",
  },
  {
    id: "ranking35",
    image: process.env.PUBLIC_URL + "/images/ranking35.jpg",
    title: "수프와 이데올로기",
    buy: true,
    rent: false,
    price: "2,500 coin",
    category: "ranking",
  },
  {
    id: "ranking36",
    image: process.env.PUBLIC_URL + "/images/ranking36.jpg",
    title: "에브리씽 에브리웨어 올 앳 원스",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking37",
    image: process.env.PUBLIC_URL + "/images/ranking37.jpg",
    title: "극장판 짱구는 못말려: 수수께끼! 꽃피는 천하떡잎학교",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking38",
    image: process.env.PUBLIC_URL + "/images/ranking38.jpg",
    title: "애프터: 에버 해피",
    buy: false,
    rent: true,
    price: "2,500 coin",
    category: "ranking",
  },
  {
    id: "ranking39",
    image: process.env.PUBLIC_URL + "/images/ranking39.jpg",
    title: "육사오(6/45)",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking40",
    image: process.env.PUBLIC_URL + "/images/ranking40.jpg",
    title: "멘",
    buy: false,
    rent: true,
    price: "2,500 coin",
    category: "ranking",
  },
  {
    id: "ranking41",
    image: process.env.PUBLIC_URL + "/images/ranking41.jpg",
    title: "토르: 러브 앤 썬더(패키지: 자막판+더빙판+부가영상+코멘터리)",
    buy: true,
    rent: false,
    price: "7,150 coin",
    category: "ranking",
  },
  {
    id: "ranking42",
    image: process.env.PUBLIC_URL + "/images/ranking42.jpg",
    title: "탑건: 매버릭",
    buy: false,
    rent: true,
    price: "2,750 coin",
    category: "ranking",
  },
  {
    id: "ranking43",
    image: process.env.PUBLIC_URL + "/images/ranking43.jpg",
    title: "루이스 웨인: 사랑을 그린 고양이 화가",
    buy: true,
    rent: false,
    price: "2,500 coin",
    category: "ranking",
  },
  {
    id: "ranking44",
    image: process.env.PUBLIC_URL + "/images/ranking44.jpg",
    title: "더 배트맨(부가영상 제공)",
    buy: true,
    rent: false,
    price: "4,950 coin",
    category: "ranking",
  },
  {
    id: "ranking45",
    image: process.env.PUBLIC_URL + "/images/ranking45.png",
    title: "인민을 위해 복무하라",
    buy: true,
    rent: false,
    price: "2,500 coin",
    category: "ranking",
  },
  {
    id: "ranking46",
    image: process.env.PUBLIC_URL + "/images/ranking46.jpg",
    title: "듄",
    buy: true,
    rent: false,
    price: "4,950 coin",
    category: "ranking",
  },
  {
    id: "ranking47",
    image: process.env.PUBLIC_URL + "/images/ranking47.jpg",
    title: "배틀로얄: 러버스",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking48",
    image: process.env.PUBLIC_URL + "/images/ranking48.jpg",
    title: "위왓치유",
    buy: false,
    rent: true,
    price: "1,400 coin",
    category: "ranking",
  },
  {
    id: "ranking49",
    image: process.env.PUBLIC_URL + "/images/ranking49.jpg",
    title: "분노의 질주: 더 얼티메이트",
    buy: false,
    rent: true,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking50",
    image: process.env.PUBLIC_URL + "/images/ranking50.jpg",
    title: "더 파더",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking51",
    image: process.env.PUBLIC_URL + "/images/ranking51.png",
    title: "라스트 레터",
    buy: true,
    rent: false,
    price: "1,400 coin",
    category: "ranking",
  },
  {
    id: "ranking52",
    image: process.env.PUBLIC_URL + "/images/ranking52.jpg",
    title: "원더 우먼 1984(부가영상 제공)",
    buy: true,
    rent: false,
    price: "4,950 coin",
    category: "ranking",
  },
  {
    id: "ranking53",
    image: process.env.PUBLIC_URL + "/images/ranking53.jpg",
    title: "보이콰이어",
    buy: true,
    rent: false,
    price: "6,050 coin",
    category: "ranking",
  },
  {
    id: "ranking54",
    image: process.env.PUBLIC_URL + "/images/ranking54.jpg",
    title: "시동",
    buy: false,
    rent: true,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking55",
    image: process.env.PUBLIC_URL + "/images/ranking55.png",
    title: "타이페이 스토리",
    buy: false,
    rent: true,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking56",
    image: process.env.PUBLIC_URL + "/images/ranking56.jpg",
    title: "날씨의 아이",
    buy: true,
    rent: false,
    price: "1,400 coin",
    category: "ranking",
  },
  {
    id: "ranking57",
    image: process.env.PUBLIC_URL + "/images/ranking57.jpg",
    title: "날씨의 아이",
    buy: true,
    rent: false,
    price: "1,400 coin",
    category: "ranking",
  },
  {
    id: "ranking58",
    image: process.env.PUBLIC_URL + "/images/ranking58.jpg",
    title: "조커",
    buy: false,
    rent: true,
    price: "1,300 coin",
    category: "ranking",
  },
  {
    id: "ranking59",
    image: process.env.PUBLIC_URL + "/images/ranking59.jpg",
    title: "가장 보통의 연애",
    buy: false,
    rent: true,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking60",
    image: process.env.PUBLIC_URL + "/images/ranking60.jpg",
    title: "우리집",
    buy: true,
    rent: false,
    price: "3,500 coin",
    category: "ranking",
  },
  {
    id: "ranking61",
    image: process.env.PUBLIC_URL + "/images/ranking61.jpg",
    title: "알라딘(패키지: 자막판+더빙판+싱어롱+부가영상)",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking62",
    image: process.env.PUBLIC_URL + "/images/ranking62.png",
    title: "호텔 뭄바이",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking63",
    image: process.env.PUBLIC_URL + "/images/ranking63.jpg",
    title: "아사코",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking64",
    image: process.env.PUBLIC_URL + "/images/ranking64.png",
    title:
      "주먹왕 랄프 2: 인터넷 속으로(패키지상품 : 더빙판+부가영상 추가증정)",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking65",
    image: process.env.PUBLIC_URL + "/images/ranking65.jpg",
    title: "아이 필 프리티",
    buy: true,
    rent: false,
    price: "1,500 coin",
    category: "ranking",
  },
  {
    id: "ranking66",
    image: process.env.PUBLIC_URL + "/images/ranking66.jpg",
    title: "쓰리 빌보드",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking67",
    image: process.env.PUBLIC_URL + "/images/ranking67.png",
    title: "리틀 포레스트",
    buy: false,
    rent: true,
    price: "1,650 coin",
    category: "ranking",
  },
  {
    id: "ranking68",
    image: process.env.PUBLIC_URL + "/images/ranking68.jpg",
    title: "세이프 오브 워터: 사랑의 모양",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking69",
    image: process.env.PUBLIC_URL + "/images/ranking69.jpg",
    title: "50가지 그림자: 해방",
    buy: false,
    rent: true,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking70",
    image: process.env.PUBLIC_URL + "/images/ranking70.jpg",
    title: "숲속의 부부",
    buy: true,
    rent: false,
    price: "1,200 coin",

    category: "ranking",
  },
  {
    id: "ranking71",
    image: process.env.PUBLIC_URL + "/images/ranking71.jpg",
    title: "블레이드 러너(파이널컷)",
    buy: true,
    rent: false,
    price: "4,950 coin",
    category: "ranking",
  },
  {
    id: "ranking72",
    image: process.env.PUBLIC_URL + "/images/ranking72.jpg",
    title: "공동정범",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking73",
    image: process.env.PUBLIC_URL + "/images/ranking73.jpg",
    title: "코코(패키지: 자막판+더빙판+부가영상)",
    buy: true,
    rent: false,
    price: "7,150 coin",
    category: "ranking",
  },
  {
    id: "ranking74",
    image: process.env.PUBLIC_URL + "/images/ranking74.jpg",
    title: "원더",
    buy: false,
    rent: true,
    price: "1,540 coin",
    category: "ranking",
  },
  {
    id: "ranking75",
    image: process.env.PUBLIC_URL + "/images/ranking75.png",
    title: "더 크리스마스",
    buy: true,
    rent: false,
    price: "5,000 coin",
    category: "ranking",
  },
  {
    id: "ranking76",
    image: process.env.PUBLIC_URL + "/images/ranking76.jpg",
    title:
      "스타워즈: 라스트 제다이(패키지상품 : 더빙판 + 부가영상 + 코멘터리 추가증정)",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking77",
    image: process.env.PUBLIC_URL + "/images/ranking77.jpg",
    title: "블레이더 러너 2049",
    buy: false,
    rent: true,
    price: "1,300 coin",
    category: "ranking",
  },
  {
    id: "ranking78",
    image: process.env.PUBLIC_URL + "/images/ranking78.png",
    title: "포크레인",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking79",
    image: process.env.PUBLIC_URL + "/images/ranking79.jpg",
    title: "박열",
    buy: false,
    rent: true,
    price: "1,650 coin",
    category: "ranking",
  },
  {
    id: "ranking80",
    image: process.env.PUBLIC_URL + "/images/ranking80.jpg",
    title: "자막킹 오브 프리즘 프라이드 더 히어로",
    buy: false,
    rent: true,
    price: "4,500 coin",
    category: "ranking",
  },
  {
    id: "ranking81",
    image: process.env.PUBLIC_URL + "/images/ranking81.jpg",
    title: "파운더",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking82",
    image: process.env.PUBLIC_URL + "/images/ranking82.jpg",
    title: "사랑받지 못한 여자",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking83",
    image: process.env.PUBLIC_URL + "/images/ranking83.jpg",
    title: "모아나(패키지상품 : 더빙판 추가증정, 코멘터리+부가영상 제공)",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking84",
    image: process.env.PUBLIC_URL + "/images/ranking84.jpg",
    title: "씽(패키지: 자막판+더빙판+부가영상)",
    buy: true,
    rent: false,
    price: "5,000 coin",
    category: "ranking",
  },
  {
    id: "ranking85",
    image: process.env.PUBLIC_URL + "/images/ranking85.jpg",
    title: "판도라",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking86",
    image: process.env.PUBLIC_URL + "/images/ranking86.jpg",
    title: "랑데부",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking87",
    image: process.env.PUBLIC_URL + "/images/ranking87.jpg",
    title: "불청객-반가운 손님",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking88",
    image: process.env.PUBLIC_URL + "/images/ranking88.png",
    title: "최악의 하루",
    buy: true,
    rent: false,
    price: "1,200 coin",
    category: "ranking",
  },
  {
    id: "ranking89",
    image: process.env.PUBLIC_URL + "/images/ranking89.png",
    title: "아노말리사",
    buy: true,
    rent: false,
    price: "5,500 coin",
    category: "ranking",
  },
  {
    id: "ranking90",
    image: process.env.PUBLIC_URL + "/images/ranking90.jpg",
    title: "바닷마을 다이어리",
    buy: true,
    rent: false,
    price: "6,500 coin",
    category: "ranking",
  },
  {
    id: "ranking91",
    image: process.env.PUBLIC_URL + "/images/ranking91.jpg",
    title: "파더 앤 도터",
    buy: false,
    rent: true,
    price: "1,540 coin",
    category: "ranking",
  },
  {
    id: "ranking92",
    image: process.env.PUBLIC_URL + "/images/ranking92.jpg",
    title: "크림슨 피크",
    buy: true,
    rent: false,
    price: "5,000 coin",
    category: "ranking",
  },
  {
    id: "ranking93",
    image: process.env.PUBLIC_URL + "/images/ranking93.jpg",
    title: "인턴",
    buy: false,
    rent: true,
    price: "1,300 coin",
    category: "ranking",
  },
  {
    id: "ranking94",
    image: process.env.PUBLIC_URL + "/images/ranking94.jpg",
    title: "덫: 치명적인 유혹",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking95",
    image: process.env.PUBLIC_URL + "/images/ranking95.png",
    title: "미션 임파서블: 로그네이션",
    buy: false,
    rent: true,
    price: "1,500 coin",
    category: "ranking",
  },
  {
    id: "ranking96",
    image: process.env.PUBLIC_URL + "/images/ranking96.jpg",
    title: "알로, 슈티",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking97",
    image: process.env.PUBLIC_URL + "/images/ranking97.jpg",
    title: "연평해전",
    buy: true,
    rent: false,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking98",
    image: process.env.PUBLIC_URL + "/images/ranking98.jpg",
    title: "투 나잇 스탠드",
    buy: false,
    rent: true,
    price: "1,000 coin",
    category: "ranking",
  },
  {
    id: "ranking99",
    image: process.env.PUBLIC_URL + "/images/ranking99.jpg",
    title: "스물",
    buy: true,
    rent: false,
    price: "1,000 coin",

    category: "ranking",
  },
  {
    id: "ranking100",
    image: process.env.PUBLIC_URL + "/images/ranking100.jpg",
    title: "그라운드의 이방인",
    buy: true,
    rent: false,
    price: "1,400 coin",
    category: "ranking",
  },
];

export default movieList;