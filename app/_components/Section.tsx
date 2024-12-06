"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <section className="max-w-screen-2xl mx-auto py-10 overflow-hidden">
      <h1 className="text-4xl mb-10 tracking-widest  font-extrabold text-center text-white/75">
        {title}
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="px-5 max-w-screen-2xl w-[70%] sm:w-[80%] md:w-[85%] lg:w-[90%] mx-auto"
      >
        <CarouselContent>
          {data.map((d) => (
            <CarouselItem
              key={d.id}
              className=" sm:basis-1/2 md:basis-1/4 lg:basis-1/6 h-[350px]   "
            >
              <Dialog onOpenChange={() => console.log(d.title)}>
                <DialogTrigger className="m-0 p-0">
                  <Image
                    alt="img"
                    src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                    width={500}
                    height={500}
                    className="rounded-3xl h-[350px]"
                  />
                </DialogTrigger>
                <DialogContent className="flex bg-sky-50 flex-col max-w-[500px] h-[500px] p-0 m-0 border-none overflow-x-hidden rounded-3xl border outline outline-black ">
                  <DialogTitle className="hidden">{d.title}</DialogTitle>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${d.backdrop_path}`}
                    alt="img"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <div className="w-full h-full overflow-y-auto px-3">
                    <h1 className=" text-red-700 font-black text-2xl">
                      {d.title ? d.title : d.original_title}
                    </h1>
                    <p className="mb-3 text-sm bg-white w-fit px-[2px] py-[1px] font-bold text-black">
                      {d.release_date}
                    </p>

                    <p className="text-base italic text-slate-900 " >
                      {d.overview}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
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
