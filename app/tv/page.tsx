import { Metadata } from "next";
import Pagination from "../_components/Pagination";
import RoutesSection from "../_components/RoutesSection";
import getSearchTv from "../utils/getSearchTv";
import getTv from "../utils/getTv";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) => {
  const currentPage = parseInt((await searchParams).page) || 1;
  const query = (await searchParams).query || "";
  const Tv = query
    ? (await getSearchTv(query, currentPage)).results
    : (await getTv(currentPage)).results;
  const totalPages = query
    ? (await getSearchTv(query, currentPage)).total_pages
    : await (await getTv(currentPage)).total_pages
  return (
    <>
      <RoutesSection array={Tv} search="Tv" />;
      <Pagination CurrentPage={currentPage} total_pages={totalPages} />
    </>
  );
};
export default page;
export const metadata: Metadata = {
  title: "Tv",
  description: "SceneSeeker website",
};
