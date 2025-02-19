import { BgPattern } from "@/assets/images";
import { Link } from "react-router";

const Application = () => {
  return (
    <section
      className="w-full h-[420px] bg-primary-900 flex-col items-center flex"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="max-w-[1440px] mx-auto py-[100px] flex flex-col items-center">
        <h3 className="text-center mb-4 text-white text-4xl font-semibold    leading-[44px]">
          Interested in expanding your franchise
        </h3>
        <p className="text-center max-w-[780px] text-[#f2f3f6] text-xl font-normal    leading-[30px]">
          Click here to submit your franchise details. Our team will review and
          respond soon. Ensure all required information is included
        </p>

        <Link
          to={"/"}
          className="h-14 mt-11 px-7 py-3.5 bg-white rounded-[500px] text-center text-[#0f1728] text-lg font-semibold    leading-7 justify-center items-center gap-2.5 inline-flex"
        >
          Apply for franchise expansion
        </Link>
      </div>
    </section>
  );
};

export default Application;
