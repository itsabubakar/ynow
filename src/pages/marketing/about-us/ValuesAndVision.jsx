import {
  Excellence,
  ExcellenceSmall,
  Leaf,
  LeafSmall,
  Lightbulb,
  LightbulbSmall,
  Partnership,
  PartnershipSmall,
  Shield,
  ShieldSmall,
} from "@/assets/icons";

const ValuesAndVision = () => {
  return (
    <section className="flex justify-center">
      <div className="inline-flex w-[1440px] flex-col items-center justify-center bg-white px-4 pt-16 pb-16 lg:h-[1370px] lg:px-20 lg:pt-[100px] lg:pb-20">
        <div className="mb-8 flex flex-col items-center justify-center gap-5 self-stretch lg:mb-[60px] lg:h-[154px]">
          <h2 className="mb-3 text-center text-4xl leading-[44px] font-semibold lg:mb-6 lg:text-6xl lg:leading-[72px]">
            <span className="text-gray-900">Our </span>
            <span className="text-primary-900">Vision</span>
            <span className="text-gray-900"> & </span>
            <span className="text-primary-900">Values</span>
          </h2>
          <p className="max-w-[968px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
            At YNow Ltd., we strive to revolutionize the food and beverage
            industry through innovation, sustainability, and customer-focused
            solutions. Our vision is to set new standards of excellence with
            bold ideas, cutting-edge strategies, and unwavering commitment to
            value
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 lg:h-[976px]">
          <div className="flex flex-col items-center justify-start gap-5 lg:flex-row">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-7 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[320px] lg:gap-10 lg:p-10">
              <div className="relative hidden lg:block">
                <Lightbulb />
              </div>
              <div className="relative lg:hidden">
                <LightbulbSmall />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:h-36 lg:gap-4">
                <h3 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                  Innovation with Purpose
                </h3>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  We are passionate about staying ahead of industry trends,
                  creating forward-thinking solutions that not only meet
                  today&apos;s challenges but anticipate tomorrow&apos;s needs.
                  By combining creativity with practicality, we bring
                  transformative ideas to life
                </p>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-7 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[320px] lg:gap-10 lg:p-10">
              <div className="relative hidden lg:block">
                <Shield />
              </div>
              <div className="relative lg:hidden">
                <ShieldSmall />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:h-36 lg:gap-4">
                <h3 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                  Integrity in Action
                </h3>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Trust is the foundation of our business. We are committed to
                  transparency, ethical practices, and accountability, ensuring
                  every decision and partnership reflects our unwavering
                  commitment to doing the right thing
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-5 lg:flex-row">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-7 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[320px] lg:gap-10 lg:p-10">
              <div className="relative hidden lg:block">
                <Leaf />
              </div>
              <div className="relative lg:hidden">
                <LeafSmall />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:h-36 lg:gap-4">
                <h3 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                  Sustainability for the Future
                </h3>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Our responsibility goes beyond profits. We champion
                  eco-friendly practices, support sustainable supply chains, and
                  invest in socially responsible initiatives to create a lasting
                  positive impact on the environment and society
                </p>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-7 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[320px] lg:gap-10 lg:p-10">
              <div className="relative hidden lg:block">
                <Excellence />
              </div>
              <div className="relative lg:hidden">
                <ExcellenceSmall />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:h-36 lg:gap-4">
                <h3 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                  Excellence as a Standard
                </h3>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  We don&apos;t settle for average. From product quality to
                  operational efficiency, we hold ourselves to the highest
                  standards, ensuring that every aspect of our business reflects
                  our dedication to superior performance
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-5 lg:flex-row">
            <div className="inline-flex flex-col items-start justify-start gap-7 rounded-3xl border border-gray-300 bg-white px-6 py-7 lg:h-[296px] lg:gap-10 lg:p-10 xl:w-[630px]">
              <div className="relative hidden lg:block">
                <Partnership />
              </div>
              <div className="relative lg:hidden">
                <PartnershipSmall />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 lg:h-[120px] lg:gap-4">
                <h3 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
                  Partnerships that Matter
                </h3>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Collaboration is key to our success. We value meaningful
                  relationships with franchisees, business owners, and industry
                  stakeholders, working together to drive mutual growth and
                  create shared success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndVision;
