import { Data } from "./types";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const getOnTheAir = async () => {
  const res = await fetch(
    `${BASE_URL}/tv/on_the_air?language=en-US&api_key=${API_KEY}`
  );
  const data = (await res.json()) as Data;
  return data.results;
};
export default getOnTheAir;
