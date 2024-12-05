import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Result } from "../utils/types";
import Image from "next/image";

const Section = ({ data, title }: { data: Result[]; title: string }) => {
  return (
    <section className="max-w-screen-2xl mx-auto py-8">
      <h1 className="text-4xl mb-8 tracking-widest  font-extrabold text-center text-white">{title}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="px-5 w-full max-w-screen-2xl"
      >
        <CarouselContent >
            {data.map((d) => (
              <CarouselItem key={d.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5 h-[300px]">
                  <Image
                    alt="img"
                    src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                    width={500}
                    height={500}
                    className="rounded-3xl h-[300px] w-full"
                  />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Section;
