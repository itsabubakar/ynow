import { BgPattern } from "@/assets/images";

const OurCommitment = () => {
  return (
    <section
      className="w-full py-[100px] bg-primary-900 flex-col items-center flex"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="w-[982px] flex-col justify-start items-center gap-10 inline-flex">
        <div className="self-stretch h-[154px] flex-col justify-center items-center gap-5 flex">
          <div className="self-stretch text-center text-white text-4xl font-semibold  leading-[44px]">
            Our Commitment
          </div>
          <div className="self-stretch text-center text-gray-100 text-xl font-normal  leading-[30px]">
            At YNow Ltd., we go beyond business—we are partners in progress.
            From expanding franchises to managing operations, we create
            impactful opportunities driven by innovation, sustainability, and
            excellence, setting new standards in the food and beverage industry
          </div>
        </div>

        <div className="px-7 py-3.5 bg-white rounded-[500px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-gray-900 text-lg font-semibold  leading-7">
            Contact Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
