import React from "react";
import getPopularMovies from "../utils/getPopularMovies";
import Image from "next/image";

const Hero = async () => {
  const movies = await getPopularMovies();
  const topMovie = movies[1];
  return (
    <div className="w-full h-[100vh] bg-red-700 relative">
      <div className="absolute bg-black/50 z-10 top-0 w-full h-full flex justify-start items-end text-white px-14">
        <div className="flex flex-col pb-56 ">
          <h1 className="text-5xl font-bold tracking-wider mb-1">
            {topMovie.title}
          </h1>
          <p className="mb-3 text-sm bg-white w-fit px-[2px] py-[1px] font-bold text-red-900">
            {topMovie.release_date}
          </p>
          <p className="max-w-[400px] text-base italic text-slate-400">
            {topMovie.overview}
          </p>
        </div>
      </div>
      <Image
        priority
        fill
        alt="Hero"
        className="object-cover object-center"
        src={`https://image.tmdb.org/t/p/original${topMovie.backdrop_path}`}
      />
    </div>
  );
};

export default Hero;
