import React from "react";
import { InputForm } from "../_components/InputForm";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="max-w-screen-2xl mx-auto pt-24 px-3">
      <InputForm search="Tv"/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {skeletons.map((s) => (
          <Skeleton key={s} className="rounded-3xl h-[350px] bg-slate-900" />
        ))}
      </div>
    </section>
  );
}
