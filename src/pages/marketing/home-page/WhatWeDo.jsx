import {
  Acquisition,
  Development,
  DevelopmentSmall,
  Expansion,
  Management,
  Profit,
  ProfitSmall,
  Revenue,
  RevenueSmall,
} from "@/assets/icons";

const WhatWeDo = () => {
  return (
    <section className="inline-flex max-w-[1440px] flex-col items-end justify-start gap-5 px-4 pt-16 pb-16 lg:px-0 lg:pt-[100px] lg:pb-20 2xl:h-[900px] 2xl:px-20">
      <div className="inline-flex flex-col items-center justify-end gap-8 self-stretch lg:gap-5 2xl:flex-row">
        <div className="inline-flex shrink grow basis-0 flex-col justify-center gap-1 lg:items-start lg:gap-4">
          <h2 className="text-center text-xs leading-[20px] font-medium tracking-wider text-gray-600 uppercase lg:text-left lg:text-base lg:leading-normal">
            WHAT WE DO
          </h2>

          <div className="flex flex-col justify-center gap-3 text-center lg:h-[198px] lg:items-start lg:gap-5 lg:text-left">
            <div className="inline-flex max-w-[580px] items-center justify-start gap-2.5">
              <h2 className="shrink grow basis-0 text-3xl leading-[38px] font-semibold lg:text-4xl lg:leading-[44px]">
                <span className="text-gray-900">Helping businesses </span>
                <span className="text-primary-900">grow, expand, </span>
                <span className="text-gray-900">and succeed</span>
              </h2>
            </div>
            <div className="inline-flex max-w-[580px] items-center justify-start gap-2.5">
              <p className="shrink grow basis-0 text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
                YNow Ltd. drives growth, creates opportunities, and delivers
                value through three core pillars. Partner with us to achieve
                your goals
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-5 lg:flex-row">
          <div className="bg-primary-900 inline-flex h-[316px] w-[343px] flex-col items-start justify-between rounded-2xl px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <span>
              <Management />
            </span>
            <div className="flex flex-col items-start justify-start gap-5 self-stretch lg:h-[200px]">
              <div className="flex flex-col items-start justify-start gap-2 self-stretch lg:h-[156px] lg:gap-4">
                <p className="self-stretch text-lg leading-[28px] font-semibold text-white lg:text-xl lg:leading-[30px]">
                  Management Consulting & Support Services
                </p>
                <div className="self-stretch text-sm leading-[20px] font-normal text-gray-200 lg:leading-tight">
                  We help business owners retain ownership while optimizing
                  performance with expert management consulting.
                </div>
              </div>
              <div className="self-stretch text-sm leading-normal font-bold text-white underline">
                Apply Now
              </div>
            </div>
          </div>

          <div className="inline-flex h-[316px] w-[343px] flex-col items-center justify-center rounded-2xl bg-gray-100 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <span className="mb-4 hidden lg:block">
              <Revenue />
            </span>
            <span className="mb-4 lg:hidden">
              <RevenueSmall />
            </span>
            <h2 className="self-stretch text-center text-xl leading-[30px] font-semibold text-gray-900 lg:mb-1">
              £2.5 million
            </h2>
            <p className="mb-2.5 self-stretch text-center text-sm leading-normal font-medium text-gray-600 lg:leading-tight">
              Min. Annual Revenue{" "}
            </p>
            <p className="self-stretch text-center text-sm leading-normal font-normal text-gray-600 lg:leading-tight">
              Business Acquisitions & Investments
            </p>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-center justify-start gap-4 self-stretch lg:flex-row">
        <div className="flex flex-col-reverse items-center justify-start gap-5 lg:gap-4 xl:flex-row">
          <div className="inline-flex h-[316px] w-[343px] flex-col items-center justify-center rounded-2xl bg-gray-100 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <span className="mb-4 hidden lg:block">
              <Development />
            </span>
            <span className="mb-2.5 lg:hidden">
              <DevelopmentSmall />
            </span>
            <h2 className="self-stretch text-center text-xl leading-[30px] font-semibold text-gray-900 lg:mb-1">
              £80K - £250K min.
            </h2>
            <p className="mb-2.5 self-stretch text-center text-sm leading-normal font-medium text-gray-600 lg:leading-tight">
              Investment Range
            </p>
            <p className="self-stretch text-center text-sm leading-normal font-normal text-gray-600 lg:leading-tight">
              Franchise Development & Expansion
            </p>
          </div>

          <div className="bg-primary-900 inline-flex h-[316px] w-[343px] shrink grow flex-col items-start justify-between rounded-2xl px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="relative">
              <Expansion />
            </div>
            <div className="flex flex-col items-start justify-start gap-5 self-stretch lg:h-[200px]">
              <div className="flex flex-col items-start justify-start gap-2 self-stretch lg:h-[156px] lg:gap-4">
                <p className="self-stretch text-lg leading-[28px] font-semibold text-white lg:text-xl lg:leading-[30px]">
                  Franchise Development & Expansion
                </p>
                <div className="self-stretch text-sm leading-[20px] font-normal text-gray-200 lg:leading-tight">
                  We help established UK franchise brands expand, focusing on
                  growth in London and major cities.
                </div>
              </div>
              <div className="self-stretch text-sm leading-normal font-bold text-white underline">
                Apply To Qualify
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-start gap-5 lg:gap-4 xl:flex-row">
          <div className="inline-flex h-[316px] w-[343px] flex-col items-center justify-center rounded-2xl bg-gray-100 px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <span className="mb-4 hidden lg:block">
              <Profit />
            </span>
            <span className="mb-2.5 lg:hidden">
              <ProfitSmall />
            </span>
            <h2 className="mb-1 self-stretch text-center text-xl leading-[30px] font-semibold text-gray-900">
              17% or higher
            </h2>
            <p className="mb-2.5 self-stretch text-center text-sm leading-tight font-medium text-gray-600">
              Net Profit Margin
            </p>
            <p className="self-stretch text-center text-sm leading-tight font-normal text-gray-600">
              Franchise Development & Expansion
            </p>
          </div>

          <div className="bg-primary-900 inline-flex h-[316px] w-[343px] shrink grow flex-col items-start justify-between rounded-2xl px-7 py-8 lg:h-[350px] lg:w-[308px]">
            <div className="relative">
              <Acquisition />
            </div>
            <div className="flex flex-col items-start justify-start gap-5 self-stretch lg:h-[200px]">
              <div className="flex flex-col items-start justify-start gap-2 self-stretch lg:h-[156px] lg:gap-4">
                <p className="self-stretch text-lg leading-[28px] font-semibold text-white lg:text-xl lg:leading-[30px]">
                  Business Acquisitions & Investments
                </p>
                <div className="self-stretch text-sm leading-[20px] font-normal text-gray-200 lg:leading-tight">
                  We help business owners retain ownership while optimizing
                  performance with expert management consulting.
                </div>
              </div>
              <div className="self-stretch text-sm leading-normal font-bold text-white underline">
                Apply Now For Investment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
