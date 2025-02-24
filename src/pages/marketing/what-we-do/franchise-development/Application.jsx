import { BgPattern } from "@/assets/images";
import { Link } from "react-router";

const Application = () => {
  return (
    <section
      className="bg-primary-900 flex w-full flex-col items-center lg:h-[420px]"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="flex max-w-[1440px] flex-col items-center px-4 py-16 lg:mx-auto lg:py-[100px]">
        <h3 className="mb-3 text-center text-3xl leading-[38px] font-semibold text-white lg:mb-4 lg:text-4xl lg:leading-[44px]">
          Interested in expanding your franchise
        </h3>
        <p className="max-w-[780px] text-center text-sm leading-[20px] font-normal text-[#f2f3f6] lg:text-xl lg:leading-[30px]">
          Click here to submit your franchise details. Our team will review and
          respond soon. Ensure all required information is included
        </p>

        <Link
          to={"/"}
          className="mt-10 inline-flex h-14 items-center justify-center gap-2.5 rounded-[500px] bg-white px-7 py-3.5 text-center text-lg leading-7 font-semibold text-[#0f1728] lg:mt-11"
        >
          Apply for franchise expansion
        </Link>
      </div>
    </section>
  );
};

export default Application;
