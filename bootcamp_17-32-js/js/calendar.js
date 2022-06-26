'use strict';
const calendarEl = document.querySelector('.calendar');
let prevTdEl = null;

const onCalendarElclick = event => {
  const calendarEl = event.target;

  if (calendarEl.nodeName !== 'TD' || calendarEl.textContent === '') {
    return;
  }

  if (!prevTdEl) {
    calendarEl.classList.add('active');
    prevTdEl = calendarEl;

    return;
  }

  if (prevTdEl === calendarEl) {
    calendarEl.classList.toggle('active');

    return;
  }

  calendarEl.classList.add('active');
  prevTdEl.classList.remove('active');

  prevTdEl = calendarEl;
};

calendarEl.addEventListener('click', onCalendarElclick);
