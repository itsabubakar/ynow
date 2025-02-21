import MeetTheTeam from "./MeetTheTeam";
import WhatWeDo from "./WhatWeDo";
import Hero from "./Hero";
import About from "./About";
import { useScrollToTop } from "@/hooks";
import OurBusiness from "./OurBusiness";
import GetInTouch from "./GetInTouch";
import Navbar from "./Navbar";
import { Footer } from "@/components/ui/Marketing";
import Stats from "./Stats";

function HomePage() {
  const ScrollButton = useScrollToTop(40);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Hero />
        <Stats />
        <About />
        <MeetTheTeam />
        <WhatWeDo />
        <OurBusiness />
        <GetInTouch />
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default HomePage;
