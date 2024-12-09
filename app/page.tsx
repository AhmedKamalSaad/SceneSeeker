import Hero from "./_components/Hero";
import {
  TrendingSection,
  UpcomingSection,
  OnTheAirSection,
  PopularMoviesSection,
  TopRatedTvSection,
} from "./utils";
export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingSection />
      <UpcomingSection />
      <OnTheAirSection />
      <PopularMoviesSection />
      <TopRatedTvSection />
    </main>
  );
}
