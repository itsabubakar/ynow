import { Cells, Expertise, Target } from "@/assets/icons";

const Hero = () => {
  return (
    <section className="flex justify-center px-20 xl:px-0">
      <div className="py-20">
        <div className=" pb-[60px] flex flex-col items-center">
          <h1 className="text-center mb-6">
            <span className="text-gray-900 text-6xl font-semibold  leading-[72px]">
              Welcome to{" "}
            </span>
            <span className="text-primary-900 text-6xl font-semibold  leading-[72px]">
              YNow Ltd.
            </span>
          </h1>
          <p className="max-w-[906px] text-center text-gray-600 text-xl font-normal  leading-[30px]">
            At YNow Ltd., we are a UK-based startup specializing in the Food and
            Beverage industry. We proudly operate as part of the Contra
            Investment Group, a distinguished family-owned business with over 50
            years of success across the Middle East, Europe, and beyond
          </p>
        </div>

        <div className="flex flex-col  items-center gap-4">
          <div className="h-[416px] max-w-[1080px] p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start gap-10 inline-flex">
            <div className="relative">
              <Target />
            </div>
            <div className=" h-60 flex-col justify-center items-start  flex">
              <div className=" text-gray-900 text-2xl font-semibold  leading-loose mb-4">
                Our Mission & Values
              </div>
              <div className=" text-gray-600 text-base font-normal  leading-normal">
                <p className="mb-5">
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

          <div className="max-h-[756px]  p-10 max-w-[1080px]  bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start  inline-flex">
            <div className="relative mb-10">
              <Cells />
            </div>
            <div className="  flex-col justify-center items-start  flex">
              <div className=" text-[#0f1728] text-2xl font-semibold  leading-loose">
                Our Business Model
              </div>
              <p className=" text-[#475466] text-base font-normal  leading-normal mb-4">
                At YNow Ltd., our multidisciplinary team of financial experts,
                data analysts, and food and beverage specialists ensures we stay
                ahead of industry trends. With access to a global network of
                advisors and resources, we deliver operational excellence and
                innovative solutions that drive long-term success
              </p>
              <div className="">
                <ol className="flex gap-y-5 flex-col  max-w-[1000px]">
                  <li>
                    <div className="flex gap-1">
                      <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                        1.
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                          Expanding Franchise Brands:
                        </span>
                        <span className="text-[#475466] text-base font-normal  leading-normal">
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
                      <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                        2.
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                          Acquiring Established Businesses:
                        </span>
                        <span className="text-[#475466] text-base font-normal  leading-normal">
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
                      <li className="marker:text-gray-600 text-gray-600">
                        Maintain a debt-to-turnover ratio of less than 20%.
                      </li>
                      <li className="marker:text-gray-600 text-gray-600">
                        Achieve a net profit margin (not EBITDA) of at least
                        17%.
                      </li>
                      <li className="marker:text-gray-600 text-gray-600">
                        By ensuring these businesses meet our rigorous
                        standards, we secure sustainable and profitable
                        investments for our portfolio.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex gap-1">
                      <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                        3.
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#0f1728] text-base font-semibold  leading-normal">
                          Business Management Services:
                        </span>
                        <span className="text-[#475466] text-base font-normal  leading-normal">
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

          <div className="h-[296px] max-w-[1080px] p-10 bg-white rounded-3xl border border-[#cfd4dc] flex-col justify-center items-start gap-10 inline-flex">
            <div className="relative">
              <Expertise />
            </div>
            <div className="self-stretch h-[120px] flex-col justify-center items-start gap-4 flex">
              <h2 className="self-stretch text-gray-900 text-2xl font-semibold  leading-loose">
                Our Expertise
              </h2>
              <p className="self-stretch text-gray-600 text-base font-normal  leading-normal">
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
