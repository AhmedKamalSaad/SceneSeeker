"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
interface Props {
  CurrentPage: number;
  total_pages: number;
}
const Pagination = ({ CurrentPage, total_pages }: Props) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  if (total_pages <= 1) return null;
  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    push("?" + params.toString());
  };
  return (
    <div className="my-8 mx-auto max-w-screen-2xl flex items-center justify-center gap-3">
      <Button onClick={() => changePage(CurrentPage-1)} className="rounded-full">Previous</Button>
     <p className="text-base text-white">Page {CurrentPage} of {total_pages}</p>
      <Button onClick={() => changePage(CurrentPage + 1)} className="rounded-full">Next</Button>
    </div>
  );
};

export default Pagination;
