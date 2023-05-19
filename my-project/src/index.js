import './main.scss';
import './fonts/fonts.scss';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}


const list = document.createElement('ol');

let count = 0;
let int;

function addList(num) {
  if(count > 10) {
    clearInterval(int);
    document.body.querySelector('ol').remove();
  } else {
    const li = document.createElement('li');
    const color = ['pink', 'green', 'orange', 'purple', 'blue', 'red', 'darkred', 'black', 'violet', 'darkblue']
    li.style.color = color[num - 1];
    li.textContent = `number - ${num}`;
    list.append(li);
  }
}

int = setInterval(() => addList(++count), 1000);

document.body.prepend(component('Проект собран с помощью Webpack 5.83.1'));
document.body.append(list);