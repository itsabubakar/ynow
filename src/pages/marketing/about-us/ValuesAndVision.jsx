import {
  Excellence,
  Leaf,
  Lightbulb,
  Partnership,
  Shield,
} from "@/assets/icons";

const ValuesAndVision = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[1440px] h-[1370px] px-20 pt-[100px] pb-20 bg-white flex-col justify-center items-center  inline-flex">
        <div className="self-stretch h-[154px] flex-col justify-center items-center gap-5 mb-[60px] flex">
          <h2 className="text-center">
            <span className="text-gray-900 text-4xl font-semibold  leading-[44px]">
              Our{" "}
            </span>
            <span className="text-primary-900 text-4xl font-semibold  leading-[44px]">
              Vision
            </span>
            <span className="text-gray-900 text-4xl font-semibold  leading-[44px]">
              {" "}
              &{" "}
            </span>
            <span className="text-primary-900 text-4xl font-semibold  leading-[44px]">
              Values
            </span>
          </h2>
          <p className="max-w-[968px] text-center text-gray-600 text-xl font-normal  leading-[30px]">
            At YNow Ltd., we strive to revolutionize the food and beverage
            industry through innovation, sustainability, and customer-focused
            solutions. Our vision is to set new standards of excellence with
            bold ideas, cutting-edge strategies, and unwavering commitment to
            value
          </p>
        </div>
        <div className="h-[976px] flex-col justify-start items-start gap-5 flex">
          <div className=" justify-start items-center gap-5 inline-flex">
            <div className="grow h-[320px] shrink basis-0 p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start gap-10 inline-flex">
              <div className="relative">
                <Lightbulb />
              </div>
              <div className=" h-36 flex-col justify-center items-start gap-4 flex">
                <h3 className=" text-gray-900 text-2xl font-semibold  leading-loose">
                  Innovation with Purpose
                </h3>
                <p className=" text-gray-600 text-base font-normal  leading-normal">
                  We are passionate about staying ahead of industry trends,
                  creating forward-thinking solutions that not only meet
                  today&apos;s challenges but anticipate tomorrow&apos;s needs.
                  By combining creativity with practicality, we bring
                  transformative ideas to life
                </p>
              </div>
            </div>
            <div className="grow h-[320px] shrink basis-0 p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start gap-10 inline-flex">
              <div className="relative">
                <Shield />
              </div>
              <div className=" h-36 flex-col justify-center items-start gap-4 flex">
                <h3 className=" text-gray-900 text-2xl font-semibold  leading-loose">
                  Integrity in Action
                </h3>
                <p className=" text-gray-600 text-base font-normal  leading-normal">
                  Trust is the foundation of our business. We are committed to
                  transparency, ethical practices, and accountability, ensuring
                  every decision and partnership reflects our unwavering
                  commitment to doing the right thing
                </p>
              </div>
            </div>
          </div>
          <div className=" justify-start items-center gap-5 inline-flex">
            <div className="grow shrink h-[320px] basis-0 p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start gap-10 inline-flex">
              <div className="relative">
                <Leaf />
              </div>
              <div className=" h-36 flex-col justify-center items-start gap-4 flex">
                <h3 className=" text-gray-900 text-2xl font-semibold  leading-loose">
                  Sustainability for the Future
                </h3>
                <p className=" text-gray-600 text-base font-normal  leading-normal">
                  Our responsibility goes beyond profits. We champion
                  eco-friendly practices, support sustainable supply chains, and
                  invest in socially responsible initiatives to create a lasting
                  positive impact on the environment and society
                </p>
              </div>
            </div>
            <div className="grow shrink h-[320px] basis-0 p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-center items-start gap-10 inline-flex">
              <div className="relative">
                <Excellence />
              </div>
              <div className=" h-36 flex-col justify-center items-start gap-4 flex">
                <h3 className=" text-gray-900 text-2xl font-semibold  leading-loose">
                  Excellence as a Standard
                </h3>
                <p className=" text-gray-600 text-base font-normal  leading-normal">
                  We don&apos;t settle for average. From product quality to
                  operational efficiency, we hold ourselves to the highest
                  standards, ensuring that every aspect of our business reflects
                  our dedication to superior performance
                </p>
              </div>
            </div>
          </div>
          <div className=" justify-start items-start gap-5 inline-flex">
            <div className="w-[630px] h-[296px] p-10 bg-white rounded-3xl border border-gray-300 flex-col justify-start items-start gap-10 inline-flex">
              <div className="relative">
                <Partnership />
              </div>
              <div className=" h-[120px] flex-col justify-center items-start gap-4 flex">
                <h3 className=" text-gray-900 text-2xl font-semibold  leading-loose">
                  Partnerships that Matter
                </h3>
                <p className=" text-gray-600 text-base font-normal  leading-normal">
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
