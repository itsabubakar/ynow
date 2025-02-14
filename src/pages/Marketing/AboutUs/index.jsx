import MarketingLayout from "@/hoc/MarketingLayout";
import Hero from "./Hero";

const AboutUS = () => {
  return (
    <>
      <MarketingLayout>
        <section className="flex justify-center px-20 xl:px-0">
          <Hero />
        </section>
      </MarketingLayout>
    </>
  );
};

export default AboutUS;
