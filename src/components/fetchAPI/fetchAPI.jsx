

// 'use strict';

// import axios from "axios";



// export class UnsplashAPI {
//   #BASE_URL = 'https://pixabay.com/api/';
//   #API_KEY = '35037895-f6564ffc1e5d4db0bbe999e92';
//   q = inputData;
//   page;
//   count = 12;
    
//    async fetchImage() {
//      try {
//        return await axios.get(`${this.#BASE_URL}`, {
//         params: {
//           q: this.q,
//           page: this.page,
//           per_page: this.count,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: true,
//           key: this.#API_KEY,
//         },
//       });
//      } catch (err) {
//        throw new Error(err.message);
//      }
      
//   }
// }

import axios from 'axios'; 
 
export async function fetchImages(inputData, page) { 
  const searchParams = new URLSearchParams({ 
    key: '35037895-f6564ffc1e5d4db0bbe999e92', 
    q: inputData, 
    image_type: 'photo', 
    orientation: 'horizontal', 
    safesearch: 'true', 
    per_page: 12, 
    page, 
  }); 
  const images = await axios.get(`https://pixabay.com/api/?${searchParams}`); 
 
  return images.data; 
}