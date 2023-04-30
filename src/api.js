import axios from 'axios';

export const fetchPictures = async () => {
  const response = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=34416785-706900f4c4344fdefb158122c&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data;
};
