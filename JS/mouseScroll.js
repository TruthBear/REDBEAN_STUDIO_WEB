const body = document.querySelector('body');

body.addEventListener('wheel', (e)=>{
  const delta = Math.sign(e.deltaY);
  const distance = 100;

  const newPosition = body.scrollTop + (delta * distance);

  body.scrollTo({
    top:newPosition,
    behavior: "smooth",
  });

  e.preventDefault();
})

const list = document.getElementsByClassName('game-list')[0]
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth