import React from "react";
import Section from "./Section";
import getOnTheAir from "../utils/getOnTheAir";

const OnTheAirSection = async () => {
  const data = await getOnTheAir();
  return <Section data={data} title="On The Air"/>;
};

export default OnTheAirSection;
