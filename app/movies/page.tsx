import { Metadata } from "next";
import Pagination from "../_components/Pagination";
import RoutesSection from "../_components/RoutesSection";
import getMovies from "../utils/getMovies";
import getSearchMovies from "../utils/getSearchMovies";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) => {
  const currentPage = parseInt((await searchParams).page) || 1;
  const query = (await searchParams).query || "";
  const movies =
    query 
      ? (await getSearchMovies(query, currentPage)).results
      : (await getMovies(currentPage)).results;
  const totalPages =
    query 
      ? (await getSearchMovies(query, currentPage)).total_pages
      : (await getMovies(currentPage)).total_pages;
  return (
    <>
      <RoutesSection array={movies}  search="Movies" />
      <Pagination CurrentPage={currentPage} total_pages={totalPages} />
    </>
  );
};

export default page;
export const metadata: Metadata = {
  title: "Movies",
  description: "SceneSeeker website",
};
