import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import getSearchMovies from "../utils/getSearchMovies";
import { InputForm } from "./components/InputForm";
import getMovies from "../utils/getMovies";

const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams.query || "";
  const movies = query ? await getSearchMovies(query) : await getMovies();
  return (
    <section className="max-w-screen-2xl mx-auto pt-24">
      <InputForm />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {movies.map((m) => (
          <Dialog key={m.id}>
            <DialogTrigger className="m-0 p-0">
              <Image
                alt="img"
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                width={500}
                height={500}
                className="rounded-3xl h-[350px]"
              />
            </DialogTrigger>
            <DialogContent className="flex bg-sky-50 flex-col max-w-[500px] h-[500px] p-0 m-0 border-none overflow-x-hidden rounded-3xl border outline outline-black ">
              <DialogTitle className="hidden">{m.title}</DialogTitle>
              <Image
                src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`}
                alt="img"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="w-full h-full overflow-y-auto px-3">
                <h1 className=" text-red-700 font-black text-2xl">
                  {m.title ? m.title : m.original_title}
                </h1>
                <p className="mb-3 text-sm bg-white w-fit px-[2px] py-[1px] font-bold text-black">
                  {m.release_date}
                </p>

                <p className="text-base italic text-slate-900 ">{m.overview}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default page;
