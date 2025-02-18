import { Moneybag, SearchBriefCase, Services, Stall } from "@/assets/icons";
import { BgPattern } from "@/assets/images";

const GetInTouch = () => {
  return (
    <div
      className="w-full h-[774px] bg-primary-900 flex-col items-center flex"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="max-w-[1440px] mx-auto mt-[100px] flex flex-col items-center">
        <div className="w-[890px] h-[164px] flex-col justify-center items-center gap-10 inline-flex">
          <div className="self-stretch h-[164px] flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch text-center text-[#f2f3f6] text-base font-medium  uppercase leading-normal tracking-wider">
              get in touch
            </div>
            <div className="self-stretch h-[124px] flex-col justify-center items-center gap-5 flex">
              <div className="w-[608px] text-center text-white text-4xl font-semibold  leading-[44px]">
                Let&apos;s Connect & Grow
              </div>
              <div className="w-[890px] text-center text-[#f2f3f6] text-xl font-normal  leading-[30px]">
                We&apos;re here to help! Whether you want to join our team,
                expand a franchise, invest, or seek expert consulting, our
                streamlined process makes it easy. Get started today!
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 pt-[60px]">
          <div className="w-[308px] h-[350px] px-7 py-8 bg-white rounded-2xl border border-[#cfd4dc] flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="relative">
              <SearchBriefCase />
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="self-stretch h-[86px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#0f1728] text-xl font-semibold  leading-[30px]">
                  Apply for a Job
                </div>
                <div className="self-stretch text-[#475466] text-sm font-normal  leading-tight">
                  Looking to join our team? Here’s how you can apply
                </div>
              </div>
              <div className="self-stretch text-[#c91235] text-sm font-bold  underline leading-normal">
                Apply Now
              </div>
            </div>
          </div>
          <div className="w-[308px] h-[350px] px-7 py-8 bg-white rounded-2xl border border-[#cfd4dc] flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="relative">
              <Stall />
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="self-stretch h-[116px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#0f1728] text-xl font-semibold  leading-[30px]">
                  Apply for Franchise Expansion
                </div>
                <div className="self-stretch text-[#475466] text-sm font-normal  leading-tight">
                  Are you a franchisee ready to expand your business? Let us
                  help you grow
                </div>
              </div>
              <div className="self-stretch text-[#c91235] text-sm font-bold  underline leading-normal">
                Apply For Franchise Expansion
              </div>
            </div>
          </div>
          <div className="w-[308px] h-[350px] px-7 py-8 bg-white rounded-2xl border border-[#cfd4dc] flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="relative">
              <Moneybag />
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="self-stretch h-[116px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#0f1728] text-xl font-semibold  leading-[30px]">
                  Apply for Investment Opportunities
                </div>
                <div className="self-stretch text-[#475466] text-sm font-normal  leading-tight">
                  Looking for an investment partner? We’re here to explore the
                  possibilities
                </div>
              </div>
              <div className="self-stretch text-[#c91235] text-sm font-bold  underline leading-normal">
                Apply For Investment
              </div>
            </div>
          </div>
          <div className="w-[308px] h-[350px] px-7 py-8 bg-white rounded-2xl border border-[#cfd4dc] flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="relative">
              <Services />
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="self-stretch h-[116px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#0f1728] text-xl font-semibold  leading-[30px]">
                  Apply for Management Consulting Services
                </div>
                <div className="self-stretch text-[#475466] text-sm font-normal  leading-tight">
                  Need expert management for your business? We&apos;ve got you
                  covered
                </div>
              </div>
              <div className="self-stretch text-[#c91235] text-sm font-bold  underline leading-normal">
                Apply For Consulting Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
