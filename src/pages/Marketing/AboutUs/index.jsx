import MarketingLayout from "@/hoc/MarketingLayout";
import Hero from "./Hero";
import MeetTheTeam from "./MeetTheTeam";
import ValuesAndVision from "./ValuesAndVision";
import OurCommitment from "./OurCommitment";

const AboutUS = () => {
  return (
    <>
      <MarketingLayout>
        <Hero />
        <MeetTheTeam />
        <ValuesAndVision />
        <OurCommitment />
      </MarketingLayout>
    </>
  );
};

export default AboutUS;
