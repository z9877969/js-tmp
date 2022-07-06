'use strict';

export class JsonPlaceholderApi {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() {
    this.page = 1;
    this.total_pages = 100 / 10;
  }

  fetchPosts() {
    const searchParams = new URLSearchParams({
      _limit: 10,
      _page: this.page,
    });

    return fetch(`${this.#BASE_URL}/posts?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }
}
