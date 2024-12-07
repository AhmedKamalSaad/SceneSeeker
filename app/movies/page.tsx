import RoutesSection from "../_components/RoutesSection";
import getMovies from "../utils/getMovies";
import getSearchMovies from "../utils/getSearchMovies";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  // await new Promise((resolve) =>  setTimeout(resolve, 2000))
  const query = (await searchParams).query || "";
  const movies = query ? await getSearchMovies(query) : await getMovies();
  return <RoutesSection array={movies} route="movies" search="Movies"/>;
};

export default page;
