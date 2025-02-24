import { BgPattern } from "@/assets/images";

const OurCommitment = () => {
  return (
    <section
      className="bg-primary-900 flex w-full flex-col items-center px-4 py-16 lg:px-0 lg:py-[100px]"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="inline-flex flex-col items-center justify-start gap-10 lg:w-[982px]">
        <div className="flex flex-col items-center justify-center gap-3 self-stretch lg:h-[154px] lg:gap-5">
          <div className="self-stretch text-center text-3xl leading-[38px] font-semibold text-white lg:text-4xl lg:leading-[44px]">
            Our Commitment
          </div>
          <div className="self-stretch text-center text-sm leading-[20px] font-normal text-gray-100 lg:text-xl lg:leading-[30px]">
            At YNow Ltd., we go beyond business—we are partners in progress.
            From expanding franchises to managing operations, we create
            impactful opportunities driven by innovation, sustainability, and
            excellence, setting new standards in the food and beverage industry
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 rounded-[500px] bg-white px-7 py-3.5">
          <div className="text-center text-lg leading-7 font-semibold text-gray-900">
            Contact Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
