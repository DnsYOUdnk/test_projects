/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


function component(text) {
  var element = document.createElement('h1');
  element.textContent = text;
  return element;
}
var list = document.createElement('ol');
var count = 0;
var _int;
function addList(num) {
  if (count > 10) {
    clearInterval(_int);
    document.body.querySelector('ol').remove();
  } else {
    var li = document.createElement('li');
    var color = ['pink', 'green', 'orange', 'purple', 'blue', 'red', 'darkred', 'black', 'violet', 'darkblue'];
    li.style.color = color[num - 1];
    li.textContent = "number - ".concat(num);
    list.append(li);
  }
}
_int = setInterval(function () {
  return addList(++count);
}, 1000);
document.body.prepend(component('Проект собран с помощью Webpack 5.83.1'));
document.body.append(list);
/******/ })()
;