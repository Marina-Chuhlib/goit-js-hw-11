import axios from 'axios';
import { page, perPage } from './index';

const API_URL = 'https://pixabay.com/api/';
const KEY = '31925489-f049a5b460fb8a2a8423fe357';

export async function getPictures(item) {
  try {
    const response = await axios.get(
      `${API_URL}?key=${KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    // console.log(response.data.hits);
    return response;
  } catch (error) {
    throw new Error('Error', error.message);
  }
}

// export async function getPictures(item) {
//   axios
//     .get(
//       `${API_URL}?key=${KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`
//     )

//     .then(response => {
//       response;
//     });
// }
