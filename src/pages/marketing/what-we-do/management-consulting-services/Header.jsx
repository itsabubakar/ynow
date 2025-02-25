import { BulletPoint, BulletPointSmall } from "@/assets/icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <section className="flex justify-center">
      <div className="mt-14 mb-16 flex flex-col gap-8 px-5 lg:my-20 lg:gap-[60px] lg:px-20">
        <div className="flex flex-col items-center justify-start gap-3 lg:gap-6">
          <h1 className="text-center text-4xl leading-[44px] font-semibold lg:mb-6 lg:text-6xl lg:leading-[72px]">
            <span className="text-gray-900">Management </span>
            <span className="text-primary-900">Consulting</span>
            <span className="text-gray-900"> & </span>
            <span className="text-primary-900">Support</span>
            <span className="text-gray-900"> Services</span>
          </h1>
          <h2 className="max-w-[906px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
            We seek to acquire and invest in established businesses or master
            franchises with strong growth potential. Our focus is on sustainable
            and scalable opportunities that meet our rigorous investment
            standards
          </h2>
        </div>

        <div className="space-y-2">
          <div className="bg-light-gray flex flex-col items-start justify-between rounded-t-[20px] px-5 py-7 lg:h-[376px] lg:w-[1280px] lg:flex-row lg:p-10">
            <div className="inline-flex flex-col items-start justify-center lg:w-[505px]">
              <h2 className="mb-2 text-lg leading-[28px] font-semibold text-gray-900 lg:mb-4 lg:text-2xl lg:leading-loose">
                Our Business Model
              </h2>
              <p className="mb-10 text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                At YNow Ltd., we are more than just a business; we are a partner
                in progress. Whether expanding franchise brands, acquiring
                thriving businesses, or managing operations for others, our
                focus remains on creating impactful opportunities that align
                with our vision. By blending innovation, sustainability, and
                excellence, we are building a legacy of success that inspires
                trust and sets new standards in the food and beverage industry
              </p>
            </div>

            <div className="inline-flex flex-col items-start justify-start gap-5 lg:w-[615px]">
              <div className="inline-flex w-full items-center justify-start gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <h3 className="text-sm leading-tight font-normal text-gray-600">
                    Profit-Sharing Model
                  </h3>
                  <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    We manage your business and share in the profits
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
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <h3 className="text-sm leading-tight font-normal text-gray-600">
                    Fixed-Fee Arrangement
                  </h3>
                  <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Professional management services for a fixed fee
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
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 pb-4 lg:pb-5">
                  <h3 className="text-sm leading-tight font-normal text-gray-600">
                    Eligible Businesses
                  </h3>
                  <p className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Single-owner or multi-owner brands, including struggling or
                    well-established operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-gray flex flex-col items-start justify-between rounded-b-[20px] px-5 py-7 lg:h-[396px] lg:w-[1280px] lg:flex-row lg:p-10">
            <div className="inline-flex w-full flex-col items-start justify-center lg:w-[505px]">
              <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                Services We Provide
              </h2>
              <Link
                to={"/"}
                className="bg-primary-900 mt-5 mb-10 flex w-full items-center justify-center gap-2.5 rounded-[500px] px-7 py-3.5 text-center text-lg leading-7 font-semibold text-white lg:mt-10 lg:w-fit"
              >
                Apply now
              </Link>
            </div>

            <div className="inline-flex flex-col items-start justify-start gap-y-5 lg:w-[615px]">
              <div className="inline-flex w-full items-center justify-start gap-4 lg:h-[51px] lg:gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 self-stretch border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <p className="self-stretch text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Day-to-day operational management
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-4 lg:h-[51px] lg:gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2 self-stretch border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <p className="self-stretch text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Strategic planning and growth strategies
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-4 lg:h-[51px] lg:gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 self-stretch border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <p className="self-stretch text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Financial oversight and optimization
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-4 lg:h-[51px] lg:gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 self-stretch border-b border-[#cfd4dc] pb-4 lg:pb-5">
                  <p className="self-stretch text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Marketing, branding, and customer engagement strategies
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-4 lg:h-[51px] lg:gap-7">
                <span className="hidden lg:block">
                  <BulletPoint />
                </span>{" "}
                <span className="lg:hidden">
                  <BulletPointSmall />
                </span>
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2 self-stretch pb-5">
                  <p className="self-stretch text-sm leading-[20px] font-semibold text-gray-900 lg:text-lg lg:leading-7">
                    Recruitment and staff training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
