'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const textEl = document.querySelector('.text');
const divEl = document.querySelector('.div');
const sectionEl = document.querySelector('.section');

const onTextElClick = event => {
  console.group('Listener on P');

  console.log('Target: ', event.target);
  console.log('CurrentTarget: ', event.currentTarget);

  console.groupEnd();
};

const onDivElClick = event => {
  console.group('Listener on DIV');

  console.log('Target: ', event.target);
  console.log('CurrentTarget: ', event.currentTarget);

  console.groupEnd();
};

const onSectionElClick = event => {
  console.group('Listener on Section');

  console.log('Target: ', event.target);
  console.log('CurrentTarget: ', event.currentTarget);

  console.groupEnd();
};

textEl.addEventListener('click', onTextElClick);
divEl.addEventListener('click', onDivElClick, { capture: true });
sectionEl.addEventListener('click', onSectionElClick);
