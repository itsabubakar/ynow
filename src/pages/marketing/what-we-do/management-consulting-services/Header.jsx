import { BulletPoint } from "@/assets/icons";

const Header = () => {
  return (
    <section className="flex  justify-center">
      <div className=" my-20 px-20 flex-col  gap-[60px]  flex  ">
        <div className="  flex-col justify-start items-center gap-6 flex">
          <h1 className=" text-center max-w-[954px]">
            <span className="text-gray-900  text-6xl font-semibold   leading-[72px]">
              Management{" "}
            </span>
            <span className="text-primary-900  text-6xl font-semibold   leading-[72px]">
              Consulting
            </span>
            <span className="text-gray-900  text-6xl font-semibold   leading-[72px]">
              {" "}
              &{" "}
            </span>
            <span className="text-primary-900  text-6xl font-semibold   leading-[72px]">
              Support
            </span>
            <span className="text-gray-900  text-6xl font-semibold   leading-[72px]">
              Services
            </span>
          </h1>
          <h2 className="w-[906px] text-center text-gray-600  text-xl font-normal   leading-[30px]">
            We seek to acquire and invest in established businesses or master
            franchises with strong growth potential. Our focus is on sustainable
            and scalable opportunities that meet our rigorous investment
            standards
          </h2>
        </div>

        <div className="space-y-2">
          <div className=" w-[1280px] h-[376px] p-10 bg-light-gray rounded-t-[20px] justify-between items-start flex">
            <div className="w-[505px] flex-col justify-center items-start  inline-flex">
              <h2 className=" text-gray-900 mb-4  text-2xl font-semibold   leading-loose">
                Our Business Model
              </h2>
              <p className="mb-10 text-gray-600  text-base font-normal   leading-normal">
                At YNow Ltd., we are more than just a business; we are a partner
                in progress. Whether expanding franchise brands, acquiring
                thriving businesses, or managing operations for others, our
                focus remains on creating impactful opportunities that align
                with our vision. By blending innovation, sustainability, and
                excellence, we are building a legacy of success that inspires
                trust and sets new standards in the food and beverage industry
              </p>
            </div>

            <div className="w-[615px]  flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                    Profit-Sharing Model
                  </h3>
                  <p className=" text-gray-900  text-lg font-semibold   leading-7">
                    We manage your business and share in the profits
                  </p>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                    Fixed-Fee Arrangement
                  </h3>
                  <p className=" text-gray-900  text-lg font-semibold   leading-7">
                    Professional management services for a fixed fee
                  </p>
                </div>
              </div>
              <div className=" w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 pb-5  flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className=" text-gray-600  text-sm font-normal   leading-tight">
                    Eligible Businesses
                  </h3>
                  <p className=" text-gray-900  text-lg font-semibold   leading-7">
                    Single-owner or multi-owner brands, including struggling or
                    well-established operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[1280px] h-[396px] p-10 bg-light-gray rounded-b-[20px] justify-between items-start flex">
            <div className="w-[505px] flex-col justify-center items-start  inline-flex">
              <h2 className=" text-gray-900 mb-4  text-2xl font-semibold   leading-loose">
                Services We Provide
              </h2>
            </div>

            <div className="w-[615px] gap-y-5  flex-col justify-start items-start  inline-flex">
              <div className="h-[51px] w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 self-stretch pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#0f1728] text-lg font-semibold font-['Inter'] leading-7">
                    Day-to-day operational management
                  </div>
                </div>
              </div>
              <div className="h-[51px] w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 self-stretch pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#0f1728] text-lg font-semibold font-['Inter'] leading-7">
                    Strategic planning and growth strategies
                  </div>
                </div>
              </div>
              <div className="h-[51px] w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 self-stretch pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#0f1728] text-lg font-semibold font-['Inter'] leading-7">
                    Financial oversight and optimization
                  </div>
                </div>
              </div>
              <div className="h-[51px] w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 self-stretch pb-5 border-b border-[#cfd4dc] flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#0f1728] text-lg font-semibold font-['Inter'] leading-7">
                    Marketing, branding, and customer engagement strategies
                  </div>
                </div>
              </div>
              <div className="h-[51px] w-full justify-start items-center gap-7 inline-flex">
                <BulletPoint />
                <div className="grow shrink basis-0 self-stretch pb-5 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch text-[#0f1728] text-lg font-semibold font-['Inter'] leading-7">
                    Recruitment and staff training
                  </div>
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
