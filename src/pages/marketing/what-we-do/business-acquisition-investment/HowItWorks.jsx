import { ArrowRightDouble } from "@/assets/icons";

const HowItWorks = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1440px] pt-10 pb-20">
        <h2 className="text-center mb-[60px] text-gray-900 text-4xl font-semibold  leading-[44px]">
          How It Works
        </h2>
        <div className="flex gap-4">
          <div className="w-[308px] h-[350px] border border-gray-300 rounded-2xl px-7 py-8">
            <div className="flex items-center gap-2 mb-[120px]">
              <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center">
                <p className="text-center text-white text-2xl font-semibold   leading-loose">
                  1
                </p>
              </div>
              <ArrowRightDouble />
            </div>
            <h2 className="text-gray-900 mb-3 text-xl font-semibold   leading-[30px]">
              Submit Application
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              Provide details about the investment opportunity, including
              business model, financials, and growth potential
            </p>
          </div>
          <div className="w-[308px] h-[350px] border border-gray-300 rounded-2xl px-7 py-8">
            <div className="flex items-center gap-2 mb-[120px]">
              <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center">
                <p className="text-center text-white text-2xl font-semibold   leading-loose">
                  2
                </p>
              </div>
              <ArrowRightDouble />
            </div>
            <h2 className="text-gray-900 mb-3 text-xl font-semibold   leading-[30px]">
              Evaluation & Analysis
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              Our team reviews market feasibility, financial viability, and
              potential risks to assess the opportunity
            </p>
          </div>
          <div className="w-[308px] h-[350px] border border-gray-300 rounded-2xl px-7 py-8">
            <div className="flex items-center gap-2 mb-[120px]">
              <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center">
                <p className="text-center text-white text-2xl font-semibold   leading-loose">
                  3
                </p>
              </div>
              <ArrowRightDouble />
            </div>
            <h2 className="text-gray-900 mb-3 text-xl font-semibold   leading-[30px]">
              Discussion & Meeting
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              We engage in discussions to clarify details, explore synergies,
              and address key questions
            </p>
          </div>
          <div className="w-[308px] h-[350px] border border-gray-300 rounded-2xl px-7 py-8">
            <div className="flex items-center gap-2 mb-[120px]">
              <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center">
                <p className="text-center text-white text-2xl font-semibold   leading-loose">
                  4
                </p>
              </div>
            </div>
            <h2 className="text-gray-900 mb-3 text-xl font-semibold   leading-[30px]">
              Decision & Offer
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              Based on our assessment, we provide feedback, make an offer, or
              outline the next steps for collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
