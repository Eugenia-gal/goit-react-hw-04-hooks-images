import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const apiKey = '21801737-49cda37636a05962c9a05323f';

function fetchImages(query, page) {
  return axios
    .get(baseURL, {
      params: {
        q: query,
        page: `${page}`,
        key: apiKey,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: '12',
      },
    })
    .then(response => response.data.hits);
}

export default fetchImages;
