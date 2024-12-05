import React from "react";
import Section from "./Section";
import getUpcomingMovies from "../utils/getUpcomingMovies";

const UpcomingSection = async () => {
  const data = await getUpcomingMovies();
  return <Section data={data} title="Upcoming Movies"/>;
};

export default UpcomingSection;
