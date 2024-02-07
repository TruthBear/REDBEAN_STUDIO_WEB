const popElements = document.getElementsByClassName('pop-before');
const popElementsCard = document.getElementsByClassName('pop-before-card')
const popJobs = document.getElementsByClassName('pop-before-job');
const headerList = document.getElementsByClassName('header-list')[0];
const logoWrap = document.getElementsByClassName('logo-wrap')[0];
const hamburger = document.getElementsByClassName('hamburger-btn')[0];



// y값 200넘을시 메뉴와 헤더 숨김
window.addEventListener('scroll', function(){
  let scrollYValue = this.window.scrollX || this.window.pageYOffset
  if(scrollYValue > 200) {
    logoWrap.style.opacity = 0
    headerList.style.opacity = 0
  } else {
    headerList.style.opacity = 1
    logoWrap.style.opacity = 1
  }




})

console.log(window.screenX)


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


// 커리어 페이지 무한반복 팝업
function showJobsSequentially() {
  let index = 0;

  function showNextJob() {

    for(item of popJobs) {
      item.classList.remove('pop-text')
    }
    popJobs[index].classList.add('pop-text');

    index = (index + 1) % popJobs.length;
  }

  showNextJob();
  setInterval(showNextJob, 5000); // Adjust the interval time as needed (5000ms = 5 seconds)
}

showJobsSequentially();
