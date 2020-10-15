import axios from 'axios';

export default axios.create({
   headers: {
      Authorization: 'Client-ID oVYqMO_Jd98OFCtawugtu_5qRLJIywxs9G70ZmdvMRk'
   }, 
   baseURL: 'https://api.unsplash.com'
});