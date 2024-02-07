const popElements = document.getElementsByClassName('pop-before');
const popElementsCard = document.getElementsByClassName('pop-before-card')


// 사이트 처음 진입했을때 작동
setTimeout(()=>{
  popText()
},500)

// 스크롤 내리면 작동
window.addEventListener('scroll', popText);
window.addEventListener('scroll', popCard);




// pop-up 텍스트 함수 (아래에서 위로)
function popText() {
  for(item of popElements) {
    const elemetTop = item.getBoundingClientRect().top;
    // const elemetBottom = item.getBoundingClientRect().bottom;
    
  
    if (elemetTop < window.innerHeight) {
      item.classList.add('pop-text');
    }
  }
}

// pop-up 카드 함수 (아래서 위로)
function popCard() {
  for(item of popElementsCard) {
    const elemetTop = item.getBoundingClientRect().top;
    // const elemetBottom = item.getBoundingClientRect().bottom;
    
  
    if (elemetTop < window.innerHeight) {
      item.classList.add('pop-text');
    }
  }
}