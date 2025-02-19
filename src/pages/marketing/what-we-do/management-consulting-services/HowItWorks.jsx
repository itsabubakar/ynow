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
              Provide details about your expertise, services, and collaboration
              proposal
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
              Evaluation & Assessment
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              Our team reviews your qualifications, experience, and alignment
              with our consulting needs
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
              Discussion & Alignment
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              We schedule a meeting to discuss collaboration terms,
              expectations, and potential projects
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
              Agreement & Onboarding
            </h2>
            <p className="text-gray-600 text-sm font-normal   leading-[20px]">
              Upon mutual agreement, we finalize the collaboration, define
              scope, and initiate the partnership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
