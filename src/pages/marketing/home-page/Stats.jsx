const Stats = () => {
  return (
    <div className="flex w-full justify-center border-b border-gray-300">
      <div className="flex max-w-[1440px] flex-col flex-wrap items-center justify-center gap-8 px-4 pb-14 lg:flex-row lg:gap-10 lg:px-20 lg:pt-12 lg:pb-[60px]">
        <div className="inline-flex w-[260px] flex-col items-center justify-center gap-2">
          <h3 className="text-center text-2xl leading-[32px] font-medium text-gray-900 lg:text-2xl lg:leading-[32px]">
            £80K - £250K
          </h3>
          <div className="flex h-[46px] flex-col items-start justify-start self-stretch">
            <h4 className="self-stretch text-center text-base leading-7 font-normal text-gray-600">
              Min Investment Range
            </h4>
            <p className="self-stretch text-center text-xs leading-[18px] font-normal text-gray-600">
              Franchise Development & Expansion
            </p>
          </div>
        </div>
        <div className="inline-flex w-[260px] flex-col items-center justify-center gap-2">
          <h3 className="text-center text-2xl leading-[32px] font-medium text-gray-900 lg:text-2xl lg:leading-[32px]">
            17% or higher
          </h3>
          <div className="flex h-[46px] flex-col items-start justify-start self-stretch">
            <h4 className="self-stretch text-center text-base leading-7 font-normal text-gray-600">
              Net Profit Margin{" "}
            </h4>
            <p className="self-stretch text-center text-xs leading-[18px] font-normal text-gray-600">
              Franchise Development & Expansion
            </p>
          </div>
        </div>
        <div className="inline-flex w-[260px] flex-col items-center justify-center gap-2">
          <h3 className="text-center text-2xl leading-[32px] font-medium text-gray-900 lg:text-2xl lg:leading-[32px]">
            £2.5 million
          </h3>
          <div className="flex h-[46px] flex-col items-start justify-start self-stretch">
            <h4 className="self-stretch text-center text-base leading-7 font-normal text-gray-600">
              Min. Annual Revenue
            </h4>
            <p className="self-stretch text-center text-xs leading-[18px] font-normal text-gray-600">
              Business Acquisitions & Investments
            </p>
          </div>
        </div>
        <div className="inline-flex w-[260px] flex-col items-center justify-center gap-2">
          <h3 className="text-center text-2xl leading-[32px] font-medium text-gray-900 lg:text-2xl lg:leading-[32px]">
            £1 to £7 million
          </h3>
          <div className="flex h-[46px] flex-col items-start justify-start self-stretch">
            <h3 className="self-stretch text-center text-base leading-7 font-normal text-gray-600">
              Deal Value
            </h3>
            <p className="self-stretch text-center text-xs leading-[18px] font-normal text-gray-600">
              Business Acquisitions & Investments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
