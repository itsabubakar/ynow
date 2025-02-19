import { BulletPoint } from "@/assets/icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex  justify-center ">
      <div className=" my-20 px-20 flex-col  gap-[60px]  flex  ">
        <div className="  flex-col justify-start items-center gap-6 flex">
          <h1 className=" text-center max-w-[954px]">
            <span className="text-gray-900  text-6xl font-semibold   leading-[72px]">
              Franchise{" "}
            </span>
            <span className="text-primary-900  text-6xl font-semibold   leading-[72px]">
              Development
            </span>
            <span className="text-gray-900  text-6xl font-semibold   leading-[72px]">
              {" "}
              &{" "}
            </span>
            <span className="text-primary-900  text-6xl font-semibold   leading-[72px]">
              Expansion
            </span>
          </h1>
          <h2 className="w-[906px] text-center text-gray-600  text-xl font-normal   leading-[30px]">
            We specialize in identifying and expanding well-established local or
            UK-based franchise brands. Our goal is to support proven concepts in
            scaling their presence across the UK, particularly in London and
            other major cities
          </h2>
        </div>

        <div className=" w-[1280px] h-[616px] p-10 bg-light-gray rounded-[20px] justify-between items-start flex">
          <div className="w-[505px] flex-col justify-center items-start  inline-flex">
            <h2 className=" text-gray-900 mb-4  text-2xl font-semibold   leading-loose">
              Investment Criteria
            </h2>
            <p className="mb-10 text-gray-600  text-base font-normal   leading-normal">
              At YNow Ltd., we are more than just a business; we are a partner
              in progress. Whether expanding franchise brands, acquiring
              thriving businesses, or managing operations for others, our focus
              remains on creating impactful opportunities that align with our
              vision. By blending innovation, sustainability, and excellence, we
              are building a legacy of success that inspires trust and sets new
              standards in the food and beverage industry.
            </p>
            <Link
              to={"/"}
              className="text-center text-white text-lg font-semibold   leading-7 px-7 py-3.5 bg-primary-900  rounded-[500px] justify-center items-center gap-2.5 flex"
            >
              Apply now
            </Link>
          </div>

          <div className="w-[615px]  flex-col justify-start items-start gap-5 inline-flex">
            <div className="w-full justify-start items-center gap-7 inline-flex">
              <BulletPoint />
              <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Brand Type
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  Local or UK-based franchise brands with a well-proven concept
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-7 inline-flex">
              <BulletPoint />
              <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Investment Range
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  Minimum: £80,000; Maximum: £250,000.{" "}
                </p>
              </div>
            </div>
            <div className=" w-full justify-start items-center gap-7 inline-flex">
              <BulletPoint />
              <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Expected Turnover
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  £1 million+ annually
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-7 inline-flex">
              <BulletPoint />
              <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Net Profit Margin{" "}
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  17% or higher
                </p>
              </div>
            </div>
            <div className=" justify-start items-center gap-7 w-full flex">
              <BulletPoint />
              <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Target Locations
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  London and other major cities across the UK
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-7 inline-flex">
              <BulletPoint />
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                  Franchise/Royalty Fees
                </h3>
                <p className=" text-gray-900  text-lg font-semibold   leading-7">
                  4% of turnover with no hidden costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
