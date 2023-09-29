'use strict';

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_1LAMYTSmu4VUyprbSx1yZrQQJLJOJVmLUcJYaYgAbOijQkthCvfSk2rKZrrjuDL5';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(
        'Oops! Something went wrong! Try reloading the page!',
        error
      );
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(
        'Oops! Something went wrong! Try reloading the page!',
        error
      );
      throw error;
    });
}
