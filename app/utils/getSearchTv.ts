import { Data } from "./types";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const getSearchTv = async (searchText: string) => {
  const res = await fetch(
    `${BASE_URL}/search/tv?query='${searchText}'&include_adult=false&language=en-US&api_key=${API_KEY}`
  );
  const data = (await res.json()) as Data;
  return data.results;
};
export default getSearchTv;
