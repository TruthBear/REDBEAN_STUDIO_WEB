// 뉴스 데이터
const newsData = [
  {
    title: "마블 스파이더맨 리마스터: playstation4 pro와 playstation5 그래픽 비교",
    date: "nov 11, 2020",
    image: "./asset/images/news-1.png"
  },
  {
    title: "playstation4 마블 스파이더맨 파 프롬 홈 슈트 게임 플레이",
    date: "Jul 3, 2019",
    image: "./asset/images/news-2.jpeg"
  },
  {
    title: "인퍼머스: 세컨드 선 1주년 기념",
    date: "mar 22, 2015",
    image: "./asset/images/news-3.jpeg"
  },
]


// 게임 데이터
const gameData = [
  {
    title: "marvel spider-man",
    image: "./asset/images/cover-spiderman.png"
  },
  {
    title: "infamous second son",
    image: "./asset/images/cover-infamous.png"
  },
  {
    title: "sleeping dogs",
    image: "./asset/images/cover-sleepingdog.png"
  },
  {
    title: "batman arkham city",
    image: "./asset/images/cover-batman.png"
  },
  {
    title: "ProtoType",
    image: "./asset/images/cover-prototype.png"
  },

  // pc모드에서 게임목록 포커싱을 위한 더미 데이터
  {
    title: "",
  },
];

// about 사진 
const aboutData = [
  {
    image: "./asset/images/about-1.jpeg",
  },
  {
    image: "./asset/images/about-2.jpeg",
  },
  {
    image: "./asset/images/about-3.jpeg",
  },
  {
    image: "./asset/images/about-4.jpeg",
  },
  {
    image: "./asset/images/about-5.jpeg",
  },
  {
    image: "./asset/images/about-6.jpeg",
  },
]

const newsList = document.getElementsByClassName('news-list')[0];
const gameList = document.getElementsByClassName('game-list')[0];
const aboutList = document.getElementsByClassName('about-list')[0];


// 뉴스페이지 목록 출력
newsData.map(item => paintNewsList(item));
// 게임페이지 목록 출력
gameData.map(item => paintGameList(item));
// about페이지 이미지 출력
aboutData.map(item => paintAboutList(item))

// 뉴스페이지 목록 출력 함수
function paintNewsList(obj) {
  const newsItem = document.createElement('li');
  newsItem.classList.add('news-item');
  newsItem.classList.add('pop-before-card');

  const newsCard = document.createElement('div');
  newsCard.classList.add('news-card');

  const newsCardImg = document.createElement('div');
  newsCardImg.classList.add('news-card-img');

  const img = document.createElement('img');
  img.setAttribute("src", obj.image);

  const newsCardTitle = document.createElement('div');
  newsCardTitle.classList.add('news-card-title');

  const date = document.createElement('div');
  date.innerText = obj.date;

  const title = document.createElement('span');
  title.classList.add('font-l');
  title.innerText = obj.title;

  newsCardImg.appendChild(img);

  newsCardTitle.appendChild(date);
  newsCardTitle.appendChild(title);

  newsCard.appendChild(newsCardImg);
  newsCard.appendChild(newsCardTitle);

  newsItem.appendChild(newsCard);

  newsList.appendChild(newsItem);
}

// 게임페이지 목록 출력 함수
function paintGameList(obj) {
  const gameItem = document.createElement('li');
  gameItem.classList.add('game-item');
  gameItem.classList.add('pop-before-card');


  const gameCard = document.createElement('div');
  gameCard.classList.add('game-card');
  
  const gameCardImg = document.createElement('div');
  gameCardImg.classList.add('game-card-img');

  const img = document.createElement('img');
  img.setAttribute("src", obj.image);

  const gameCardTitle = document.createElement('div');
  gameCardTitle.classList.add('game-card-title');
  gameCardTitle.innerText = obj.title;
  
  gameCardImg.appendChild(img);
  gameCardImg.appendChild(gameCardTitle);
  
  gameCard.appendChild(gameCardImg);
  gameItem.appendChild(gameCard);

  gameList.appendChild(gameItem);
}

// about 페이지 이미지 출력 함수
function paintAboutList(obj) {
  const aboutItem = document.createElement('li');
  aboutItem.classList.add('about-item');

  const aboutImg = document.createElement('div');
  aboutImg.classList.add('about-img');

  const img =document.createElement('img');
  img.setAttribute("src", obj.image);

  aboutImg.appendChild(img);
  aboutItem.appendChild(aboutImg);
  aboutList.appendChild(aboutItem);
}