'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

document.querySelectorAll('.section').forEach(section => {
  section.style.backgroundColor = randomColor();
});
