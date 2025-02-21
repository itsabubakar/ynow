import { HeroVideo } from "@/assets/videos";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error("Autoplay failed:", err));
    }
  }, []);

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="relative -mt-20 w-full">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="h-[526px] w-full object-cover object-bottom"
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
        >
          <source src={HeroVideo} type="video/webm" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-black/0 via-[71.94%] to-transparent"></div>
      </div>

      <h1 className="mt-20 text-center text-2xl leading-loose font-bold text-[#c91235]">
        YNOW LTD | A LEADER IN THE FOOD & BEVERAGE INDUSTRY
      </h1>
      {/* Subheader */}
      <h2 className="mt-3 max-w-[714px] text-center text-sm leading-tight font-normal text-[#475466]">
        YNow Ltd., a UK-based startup, specializes in the Food & Beverage
        sector. As part of Contra Investment Group, a family-owned business with
        50+ years of success across the Middle East, Europe, and beyond, we
        drive innovation and growth
      </h2>
      {/* <h2 className="max-w-[906px] px-4 pb-8 text-center text-sm leading-[20px] font-normal text-gray-600 lg:pb-[60px] lg:text-xl lg:leading-[30px]">
        YNow Ltd., a UK-based startup, specializes in the Food & Beverage
        sector. As part of Contra Investment Group, a family-owned business with
        50+ years of success across the Middle East, Europe, and beyond, we
        drive innovation and growth
      </h2> */}
    </section>
  );
};

export default Hero;
