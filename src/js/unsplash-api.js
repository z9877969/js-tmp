'use strict';

export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 12,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/search/photos?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }

  fetchRandomPhotos() {
    const searchParams = new URLSearchParams({
      count: 12,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/photos/random?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }

  incrementPage() {
    this.page += 1;
  }
}
