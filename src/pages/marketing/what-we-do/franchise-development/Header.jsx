import { BulletPoint, BulletPointSmall } from "@/assets/icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-14 mb-16 flex flex-col gap-8 px-5 lg:my-20 lg:gap-[60px] lg:px-20">
        <div className="flex flex-col items-center justify-start gap-3 lg:gap-6">
          <h1 className="text-center text-4xl leading-[44px] font-semibold lg:mb-6 lg:text-6xl lg:leading-[72px]">
            <span className="text-gray-900">Franchise </span>
            <span className="text-primary-900">Development</span>
            <span className="text-gray-900"> & </span>
            <span className="text-primary-900">Expansion</span>
          </h1>
          <h2 className="max-w-[906px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
            We specialize in identifying and expanding well-established local or
            UK-based franchise brands. Our goal is to support proven concepts in
            scaling their presence across the UK, particularly in London and
            other major cities
          </h2>
        </div>

        <div className="bg-light-gray flex flex-col items-start justify-between gap-y-10 rounded-[20px] px-5 py-7 lg:h-[616px] lg:w-[1280px] lg:flex-row lg:p-10">
          <div className="inline-flex flex-col items-start justify-center lg:w-[505px]">
            <h2 className="mb-2 text-2xl leading-[28px] font-semibold text-gray-900 lg:mb-4 lg:text-lg lg:leading-loose">
              Investment Criteria
            </h2>
            <p className="mb-5 text-sm leading-normal font-normal text-gray-600 lg:mb-10 lg:text-base">
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
              className="bg-primary-900 flex w-full items-center justify-center gap-2.5 rounded-[500px] px-7 py-3.5 text-center text-lg leading-7 font-semibold text-white lg:w-fit"
            >
              Apply now
            </Link>
          </div>

          <div className="inline-flex flex-col items-start justify-start gap-5 lg:w-[615px]">
            <div className="inline-flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-3 lg:pb-5">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Brand Type
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                  Local or UK-based franchise brands with a well-proven concept
                </p>
              </div>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-3 lg:pb-5">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Investment Range
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                  Minimum: £80,000; Maximum: £250,000.{" "}
                </p>
              </div>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-3 lg:pb-5">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Expected Turnover
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                  £1 million+ annually
                </p>
              </div>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-3 lg:pb-5">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Net Profit Margin{" "}
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                  17% or higher
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-3 lg:pb-5">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Target Locations
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                  London and other major cities across the UK
                </p>
              </div>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-7">
              <span className="hidden lg:block">
                <BulletPoint />
              </span>{" "}
              <span className="lg:hidden">
                <BulletPointSmall />
              </span>
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <h3 className="text-sm leading-tight font-normal text-gray-600">
                  Franchise/Royalty Fees
                </h3>
                <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
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
