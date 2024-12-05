import Hero from "./_components/Hero";
import OnTheAirSection from "./_components/OnTheAirSection";
import TrendingSection from "./_components/TrendingSection";
import UpcomingSection from "./_components/UpComingSection";

export default function Home() {
  return (
    <>
      <Hero />
        <TrendingSection />
        <UpcomingSection/>
        <OnTheAirSection/>
    </>
  );
}
