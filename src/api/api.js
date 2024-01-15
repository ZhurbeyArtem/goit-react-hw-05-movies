import  axios  from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGZkNzk1MmM1ZWQ3NWE1ZmQ0YzgxZGJhYWM3NzA0OSIsInN1YiI6IjY1YTRmNjcwZDA1YTAzMDBiZmE5YmIyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5jkiw2-ViRgcJyM2Ojke3lemVF5NcVUSOR6_6Iz99xU',
  },
  // Другие настройки, если необходимо
});

export const trends = async () => {
  const {data} = await axiosInstance.get('/trending/movie/day?language=en-US');
  return data.results
}

export const movieDetails = async (id) => {
  const {data} = await axiosInstance.get(`/movie/${id}`)
  return data
}
export const movieActors = async (id) => {
    const { data } = await axiosInstance.get(`/movie/${id}/credits`);
    return data;
}
export const movieReviews = async (id) => {
    const { data } = await axiosInstance.get(`/movie/${id}/reviews`);
    return data;
}
export const search = async (query) => {
  const {data} = await axiosInstance.get('/search/movie', {
    params: {
      query
    }
  });
     return data.results;
 }