import React from "react";
import Section from "./Section";
import getTrending from "../utils/getTrending";

const TrendingSection = async () => {
  const data = await getTrending();
  return <Section data={data} title="Trending"/>;
};

export default TrendingSection;
