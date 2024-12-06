import React from "react";
import getPopularMovies from "../utils/getPopularMovies";
import Section from "./Section";

const PopularMoviesSection = async () => {
  const data = await getPopularMovies();
  return <Section data={data} title="Popular Movies" />;
};

export default PopularMoviesSection;
