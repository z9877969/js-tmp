'use strict';
// https://jsonplaceholder.typicode.com/

import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

jsonPlaceholderApi.fetchPosts().then(data => {
  postsWrapperEl.innerHTML = createPostsCards(data);
});

const onLoadMoreBtnElClick = event => {
  jsonPlaceholderApi.incrementPage();

  jsonPlaceholderApi.fetchPosts().then(data => {
    postsWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));

    if (jsonPlaceholderApi.page === jsonPlaceholderApi.total_pages) {
      event.target.style.display = 'none';
    }
  });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
