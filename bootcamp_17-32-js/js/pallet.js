'use strict';
const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

palletItemEl.forEach(element => {
  const color = randomColor();

  element.style.backgroundColor = color;
  element.dataset.color = color;
});

const onPalletElClick = event => {
  const palletEl = event.target;

  if (palletEl.nodeName !== 'LI') {
    return;
  }

  const currentColor = palletEl.dataset.color;
  const outputEl = palletEl.querySelector('.pallet__item-color');

  outputEl.textContent = currentColor;
};

palletEl.addEventListener('click', onPalletElClick);
