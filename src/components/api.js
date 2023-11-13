import axios from 'axios';

// let page = 1;
export const fetchPhoto = async (searchValue, currentPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '39280260-fdc3cfd05b2bfaaf6335e84c8',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: currentPage,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
return response.data;
};
