import React from "react";
import Section from "./Section";
import getTopRatedTv from "../utils/getTopRatedTv";

const TopRatedTvSection = async () => {
  const data = await getTopRatedTv();
  return <Section data={data} title="Top Rated TV Series" />;
};

export default TopRatedTvSection;
