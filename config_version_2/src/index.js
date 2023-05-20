import './styles/style.css';
import './styles/index.scss';
import picture from './images/repeat.svg'

const mult = function(a,b) {
  return a * b;
}

const addNewImage = function() {
  const pic = new Image();
  pic.src = picture;
  const elem = document.createElement('div');
  elem.classList.add('picture');
  elem.append(pic);
  document.body.querySelector('main').append(elem);
}

console.log(mult(23,12));
console.log(mult(13,12));
console.log(mult(14,121));

setTimeout(() => addNewImage(), 2000);