"use client";

import Image from "next/image";
import React, { useState } from "react";

const CustomImage = ({ src ,className}: { src: string , className:string}) => {
  const [image, setimage] = useState(
    `https://image.tmdb.org/t/p/w500${src}`
  );
  return (
    <Image
      src={image}
      onError={() => setimage("/noImage.jpg")}
      alt="img"
      width={500}
      height={300}
      className={className}
    />
  );
};

export default CustomImage;
