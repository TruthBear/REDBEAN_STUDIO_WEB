
const list = document.getElementsByClassName('game-list')[0]
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;

let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

function hi(e){
  console.log(e.touches);
}

hi();