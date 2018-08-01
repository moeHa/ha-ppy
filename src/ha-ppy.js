import './style.styl';

const EYES_LIMIT = 5;
const $eyes = document.querySelectorAll('.eyeball')
const $frog = document.querySelector('#frog')

let isHappy = false;

function moveEyes(rateX, rateY) {
  return function($eye, index) {
    const offsetX = +!isHappy && EYES_LIMIT * 2 * rateX - EYES_LIMIT
    const offsetY = +!isHappy && EYES_LIMIT * 2 * rateY - EYES_LIMIT
    $eye.style.marginLeft = `${offsetX}px`;
    $eye.style.marginTop = `${offsetY}px`;
  }
}

document.addEventListener('mousemove', e => {
  const h = window.innerHeight
  const w = window.innerWidth
  const {clientX, clientY} = e
  const rateX = clientX / w;
  const rateY = clientY / h;
  $eyes.forEach(moveEyes(rateX, rateY));
})

$frog.addEventListener('mousedown', e => {
  isHappy = true
  $eyes.forEach(moveEyes(0, 0));
  $frog.classList.add('happy')
})

$frog.addEventListener('mouseup', e => {
  isHappy = false
  $frog.classList.remove('happy')
})