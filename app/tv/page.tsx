import RoutesSection from "../_components/RoutesSection";
import getSearchTv from "../utils/getSearchTv";
import getTv from "../utils/getTv";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  // await new Promise((resolve) =>  setTimeout(resolve, 2000))
  const query = (await searchParams).query || "";
  const Tv = query ? await getSearchTv(query) : await getTv();
  return <RoutesSection array={Tv} route="tv" search="Tv"/>;
};
export default page;
