'use strict';
const messagesWrapper = document.querySelector('.js-messages-wrapper');

const onMessageClick = event => {
  const messageCloseBtnEl = event.target;

  if (messageCloseBtnEl.nodeName !== 'BUTTON') {
    return;
  }

  const currentMessageEl = messageCloseBtnEl.closest('.message');

  currentMessageEl.remove();
};

messagesWrapper.addEventListener('click', onMessageClick);
