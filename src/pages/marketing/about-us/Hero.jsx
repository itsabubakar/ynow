import {
  Cells,
  CellsSmall,
  Expertise,
  ExpertiseSmall,
  Target,
  TargetSmall,
} from "@/assets/icons";

const Hero = () => {
  return (
    <section className="flex justify-center px-4 pt-14 pb-16 lg:px-20 lg:py-20 xl:px-0">
      <div className="">
        <div className="flex flex-col items-center pb-8 lg:pb-[60px]">
          <h1 className="mb-3 text-center text-4xl leading-[44px] font-semibold lg:mb-6 lg:text-6xl lg:leading-[72px]">
            <span className="text-gray-900">Welcome to </span>
            <span className="text-primary-900">YNow Ltd.</span>
          </h1>
          <p className="max-w-[906px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
            At YNow Ltd., we are a UK-based startup specializing in the Food and
            Beverage industry. We proudly operate as part of the Contra
            Investment Group, a distinguished family-owned business with over 50
            years of success across the Middle East, Europe, and beyond
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex max-w-[1080px] flex-col items-start justify-center gap-5 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[416px] lg:gap-10 lg:p-10">
            <div className="relative hidden lg:block">
              <Target />
            </div>
            <div className="relative lg:hidden">
              <TargetSmall />
            </div>
            <div className="flex flex-col items-start justify-center lg:h-60">
              <h3 className="mb-2 text-lg leading-[28px] font-semibold text-gray-900 lg:mb-4 lg:text-2xl lg:leading-loose">
                Our Mission & Values
              </h3>
              <div className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                <p className="mb-6 lg:mb-5">
                  At YNow Ltd., we are dedicated to redefining the food and
                  beverage industry by delivering high-quality, sustainable, and
                  innovative products. Guided by Contra Investment Group&apos;s
                  founding principles of growth, innovation, and strong
                  partnerships, we focus on creating impactful opportunities
                  that align with the highest standards of excellence.
                </p>
                <p>
                  We strive to identify and invest in businesses that uphold our
                  core values of sustainability, financial performance, and
                  customer satisfaction. Our focus is on fostering growth in key
                  international markets, including the UK, Europe, the GCC, and
                  the United States. By integrating operational excellence with
                  strategic vision, we deliver innovative solutions that make a
                  lasting difference in the food and beverage landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex max-w-[1080px] flex-col items-start justify-center rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:max-h-[756px] lg:p-10">
            <div className="relative mb-10 hidden lg:block">
              <Cells />
            </div>
            <div className="relative mb-5 lg:hidden">
              <CellsSmall />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="mb-2 text-lg leading-[28px] font-semibold text-gray-900 lg:mb-4 lg:text-2xl lg:leading-loose">
                Our Business Model
              </h3>
              <p className="mb-6 text-sm leading-[20px] font-normal text-gray-600 lg:mb-4 lg:text-base lg:leading-normal">
                At YNow Ltd., our multidisciplinary team of financial experts,
                data analysts, and food and beverage specialists ensures we stay
                ahead of industry trends. With access to a global network of
                advisors and resources, we deliver operational excellence and
                innovative solutions that drive long-term success
              </p>
              <div className="">
                <ol className="flex max-w-[1000px] flex-col gap-y-5 text-sm lg:text-base">
                  <li>
                    <div className="flex gap-1">
                      <span className="leading-normal font-semibold text-[#0f1728]">
                        1.
                      </span>
                      <div className="flex flex-col">
                        <span className="leading-normal font-semibold text-[#0f1728]">
                          Expanding Franchise Brands:
                        </span>
                        <span className="leading-normal font-normal text-[#475466]">
                          {" "}
                          We invest in the expansion of franchise brands by
                          acquiring existing franchisees. Our primary focus is
                          on scaling these <br /> operations in the United
                          Kingdom and the United Arab Emirates, leveraging our
                          expertise and market insights to drive sustainable
                          growth. <br />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1">
                      <span className="leading-normal font-semibold text-[#0f1728]">
                        2.
                      </span>
                      <div className="flex flex-col">
                        <span className="leading-normal font-semibold text-[#0f1728]">
                          Acquiring Established Businesses:
                        </span>
                        <span className="leading-normal font-normal text-[#475466]">
                          We invest in the expansion of franchise brands by
                          acquiring existing franchisees. Our primary focus is
                          on scaling these <br /> operations in the United
                          Kingdom and the United Arab Emirates, leveraging our
                          expertise and market insights to drive sustainable
                          growth.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <ul className="list-disc pl-4">
                      <li className="text-gray-600 marker:text-gray-600">
                        Maintain a debt-to-turnover ratio of less than 20%.
                      </li>
                      <li className="text-gray-600 marker:text-gray-600">
                        Achieve a net profit margin (not EBITDA) of at least
                        17%.
                      </li>
                      <li className="text-gray-600 marker:text-gray-600">
                        By ensuring these businesses meet our rigorous
                        standards, we secure sustainable and profitable
                        investments for our portfolio.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex gap-1">
                      <span className="leading-normal font-semibold text-[#0f1728]">
                        3.
                      </span>
                      <div className="flex flex-col">
                        <span className="leading-normal font-semibold text-[#0f1728]">
                          Business Management Services:
                        </span>
                        <span className="leading-normal font-normal text-[#475466]">
                          We offer management services for business owners who
                          either have well-established operations or are facing
                          challenges. Whether due to limited resources,
                          strategic gaps, or other reasons, these businesses
                          benefit from our expertise. We manage operations on
                          behalf of the owners under fixed-fee or profit-sharing
                          arrangements, ensuring optimized performance and
                          profitability.
                        </span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="inline-flex max-w-[1080px] flex-col items-start justify-center gap-5 rounded-3xl border border-[#cfd4dc] bg-white px-6 py-7 lg:h-[296px] lg:gap-10 lg:p-10">
            <div className="relative hidden lg:block">
              <Expertise />
            </div>
            <div className="relative lg:hidden">
              <ExpertiseSmall />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 self-stretch lg:h-[120px] lg:gap-4">
              <h3 className="self-stretch text-xl leading-loose font-semibold text-gray-900 lg:text-2xl">
                Our Expertise
              </h3>
              <p className="self-stretch text-sm leading-normal font-normal text-gray-600 lg:text-base">
                At YNow Ltd., our multidisciplinary team of financial experts,
                data analysts, and food and beverage specialists ensures we stay
                ahead of industry trends. With access to a global network of
                advisors and resources, we deliver operational excellence and
                innovative solutions that drive long-term success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
