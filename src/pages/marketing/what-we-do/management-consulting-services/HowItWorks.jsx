import { ArrowRightDouble } from "@/assets/icons";

const HowItWorks = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1440px] pt-5 pb-16 lg:pt-10 lg:pb-20">
        <h2 className="mb-8 text-center text-3xl leading-[38px] font-semibold text-gray-900 lg:mb-[60px] lg:text-4xl lg:leading-[44px]">
          How It Works
        </h2>
        <div className="flex flex-wrap gap-4 px-4 lg:flex-row xl:px-0">
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-gray-300 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="relative flex flex-col gap-2 lg:mb-[120px] lg:flex-row lg:items-center">
              <div className="bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
                <p className="text-center text-xl leading-loose font-semibold text-white lg:text-2xl">
                  1
                </p>
              </div>
              <span>
                <ArrowRightDouble className="relative ml-2 rotate-90 lg:ml-0 lg:rotate-0" />
              </span>
            </div>
            <h2 className="mt-auto mb-2 text-lg leading-[28px] font-semibold text-gray-900 lg:mb-3 lg:text-xl lg:leading-[30px]">
              Submit Application
            </h2>
            <p className="text-sm leading-[20px] font-normal text-gray-600">
              Provide details about your expertise, services, and collaboration
              proposal
            </p>
          </div>
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-gray-300 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="flex flex-col gap-2 lg:mb-[120px] lg:items-center">
              <div className="bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
                <p className="text-center text-xl leading-loose font-semibold text-white lg:text-2xl">
                  2
                </p>
              </div>
              <ArrowRightDouble className="relative ml-2 rotate-90 lg:ml-0 lg:rotate-0" />
            </div>
            <h2 className="mt-auto mb-2 text-xl leading-[20px] font-semibold text-gray-900 lg:mb-3 lg:text-xl lg:leading-[30px]">
              Evaluation & Analysis
            </h2>
            <p className="text-sm leading-[20px] font-normal text-gray-600">
              Our team reviews your qualifications, experience, and alignment
              with our consulting needs
            </p>
          </div>
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-gray-300 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="flex flex-col gap-2 lg:mb-[120px] lg:items-center">
              <div className="bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
                <p className="text-center text-xl leading-loose font-semibold text-white lg:text-2xl">
                  3
                </p>
              </div>
              <ArrowRightDouble className="relative ml-2 rotate-90 lg:ml-0 lg:rotate-0" />
            </div>
            <h2 className="mt-auto mb-2 text-xl leading-[20px] font-semibold text-gray-900 lg:mb-3 lg:text-xl lg:leading-[30px]">
              Discussion & Alignment
            </h2>
            <p className="text-sm leading-[20px] font-normal text-gray-600">
              We schedule a meeting to discuss collaboration terms,
              expectations, and potential projects
            </p>
          </div>
          <div className="flex min-h-[280px] w-full flex-col rounded-2xl border border-gray-300 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="flex items-center gap-2 lg:mb-[120px]">
              <div className="bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
                <p className="text-center text-xl leading-loose font-semibold text-white lg:text-2xl">
                  4
                </p>
              </div>
            </div>
            <h2 className="mt-auto mb-2 text-lg leading-[20px] font-semibold text-gray-900 lg:mb-3 lg:text-xl lg:leading-[30px]">
              Agreement & Onboarding
            </h2>
            <p className="text-sm leading-[20px] font-normal text-gray-600">
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
