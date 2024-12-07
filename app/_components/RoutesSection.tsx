import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import CustomImage from "../movies/components/Image";
import { InputForm } from "../movies/components/InputForm";
import { Result } from "../utils/types";

const RoutesSection = ({ array }: { array: Result[] }) => {
  return (
    <section className="max-w-screen-2xl mx-auto pt-24 px-3">
      <InputForm />
      {array.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  mb-5">
          {array.map((m) => (
            <Dialog key={m.id}>
              <DialogTrigger className="m-0 p-0">
                <CustomImage
                  src={m.poster_path}
                  className="rounded-3xl h-[350px]"
                />
              </DialogTrigger>
              <DialogContent className="flex bg-sky-50 flex-col max-w-[500px] h-[500px] p-0 m-0 border-none overflow-x-hidden rounded-3xl border outline outline-black ">
                <DialogTitle className="hidden">{m.title}</DialogTitle>
                <CustomImage src={m.backdrop_path} className="w-full" />
                <div className="w-full h-full overflow-y-auto px-3">
                  <h1 className=" text-red-700 font-black text-2xl">
                    {m.title ? m.title : m.original_title}
                  </h1>
                  <p className="mb-3 text-sm bg-white w-fit px-[2px] py-[1px] font-bold text-black">
                    {m.release_date}
                  </p>

                  <p className="text-base italic text-slate-900 ">
                    {m.overview}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <section className="h-[90vh] w-full flex items-center justify-center">
          <h1 className="text-3xl font-black text-white text-center">
            Ooops no movies found.....
          </h1>
        </section>
      )}
    </section>
  );
};

export default RoutesSection;
