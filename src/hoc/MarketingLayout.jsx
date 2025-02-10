import { RedLogo } from "@/assets/images/logos";

const MarketingLayout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-20 px-20 w-full py-[18px] bg-white border-b border-gray-300 justify-between items-center inline-flex">
        <div data-svg-wrapper className="relative">
          <img src={RedLogo} />
        </div>
        <div className="justify-start items-center gap-6 flex">
          <div className="px-1 py-1.5 border-b border-[#0f1728] justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0f1728] text-base font-semibold font-['Inter'] leading-normal">
              Home
            </div>
          </div>
          <div className="px-1 py-1.5 justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0f1728] text-base font-semibold font-['Inter'] leading-normal">
              About Us
            </div>
          </div>
          <div className="px-1 py-1.5 justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0f1728] text-base font-semibold font-['Inter'] leading-normal">
              What We Do
            </div>
          </div>
          <div className="px-1 py-1.5 justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0f1728] text-base font-semibold font-['Inter'] leading-normal">
              Our Business
            </div>
          </div>
        </div>
        <div className="px-6 py-2.5 bg-primary-900 rounded-[500px] justify-center items-center gap-2.5 flex">
          <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
            Contact us
          </div>
        </div>
      </div>
      <div>{children}</div>

      {/* Footer */}
      <h2>footer</h2>
    </div>
  );
};

export default MarketingLayout;
