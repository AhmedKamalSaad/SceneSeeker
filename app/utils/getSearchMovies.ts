import { Data } from "./types";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const getSearchMovies = async (searchText: string, page: number) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query='${searchText}'&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
  );
  const data = (await res.json()) as Data;
  return  data;
};
export default getSearchMovies;
