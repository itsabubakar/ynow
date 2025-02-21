import { Siri, Target } from "@/assets/icons";

const About = () => {
  return (
    <section className="inline-flex max-w-[1440px] flex-col items-center justify-start gap-[60px] px-4 pt-10 pb-16 lg:h-[792px] lg:p-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-center text-3xl leading-[38px] font-semibold lg:text-4xl lg:leading-[44px]">
          <span className="text-gray-900">About </span>
          <span className="text-primary-900">YNow Ltd.</span>
          <span className="text-gray-900"> – Our Journey & Vision</span>
        </h3>
        <p className="max-w-[890px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
          YNow Ltd. is a UK-based Food & Beverage startup under Contra
          Investment Group, a family-owned business with 50+ years of success
          across the Middle East, Europe, and beyond.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start gap-10 lg:flex-row">
        <div className="flex max-w-[488px] min-w-[343px] flex-col items-center justify-center gap-y-5 rounded-3xl border border-gray-300 px-6 py-7 lg:gap-10 lg:p-[60px]">
          <div className="relative">
            <Siri />
          </div>
          <div className="flex h-[168px] flex-col items-start justify-center gap-4 self-stretch">
            <h3 className="self-stretch text-center text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
              Welcome to YNow Ltd.
            </h3>
            <p className="self-stretch text-center text-sm leading-normal font-normal text-gray-600 lg:text-base lg:leading-[24px]">
              At YNow Ltd., we are a UK-based startup specializing in the Food
              and Beverage industry. We proudly operate as part of the Contra
              Investment Group, a distinguished family-owned business...
            </p>
          </div>
          <div className="text-primary-900 text-center text-base leading-[24px] font-semibold underline lg:leading-normal">
            Learn more about us
          </div>
        </div>

        <div className="flex max-w-[488px] min-w-[343px] flex-col items-center justify-center gap-y-5 rounded-3xl border border-gray-300 px-6 py-7 lg:gap-10 lg:p-[60px]">
          <div className="relative">
            <Target />
          </div>
          <div className="flex h-[168px] flex-col items-start justify-center gap-4 self-stretch">
            <h3 className="self-stretch text-center text-lg leading-[28px] font-semibold text-gray-900 lg:text-2xl lg:leading-loose">
              Our Mission & Values
            </h3>
            <p className="self-stretch text-center text-sm leading-normal font-normal text-gray-600 lg:text-base lg:leading-[24px]">
              At YNow Ltd., we are dedicated to redefining the food and beverage
              industry by delivering high-quality, sustainable, and innovative
              products. Guided by Contra Investment Group&apos;s founding
              principles of growth, innovation...
            </p>
          </div>
          <div className="text-primary-900 text-center text-base leading-[24px] font-semibold underline lg:leading-normal">
            Learn more
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
