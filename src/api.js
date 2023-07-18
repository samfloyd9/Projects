import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID HN3HSmjybmmEsiRbV_eYORviXklWkU_wVEqWkyBJ_K8'
    },
    params: {
      query: term,
    }
  })
  
  return response.data.results;
};

export default searchImages;