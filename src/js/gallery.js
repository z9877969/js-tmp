'use strict';
// https://unsplash.com/

import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

const mutationObserver = new MutationObserver(mutationRecord => {
  mutationRecord.forEach(mutation => {
    const galleryElements = [...mutation.addedNodes].filter(
      galleryNodeItem => galleryNodeItem.nodeName !== '#text'
    );

    setTimeout(() => {
      galleryElements.forEach(galleryElement => {
        galleryElement.classList.add('appear');
      });
    }, 0);
  });
});

mutationObserver.observe(galleryListEl, {
  childList: true,
});

unsplashApi
  .fetchRandomPhotos()
  .then(data => {
    galleryListEl.innerHTML = createGalleryCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onSearchFormSubmit = event => {
  event.preventDefault();

  unsplashApi.query = event.currentTarget.elements['user-search-query'].value
    .trim()
    .toLowerCase();
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      if (!data.results.length) {
        loadMoreBtnEl.classList.add('is-hidden');
        galleryListEl.innerHTML = '';
        return;
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnElClick = event => {
  unsplashApi.incrementPage();

  unsplashApi
    .fetchPhotos()
    .then(data => {
      console.log(data);

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );

      if (unsplashApi.page === data.total_pages) {
        event.target.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
