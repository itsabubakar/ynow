import {
  Acquisition,
  ArrowLeft,
  ArrowRight,
  Development,
  Expansion,
  Management,
  Moneybag,
  PlayIcon,
  Profit,
  RedDish,
  RedLocation,
  RedStar,
  Revenue,
  SearchBriefCase,
  Services,
  Siri,
  Stall,
  Target,
} from "@/assets/icons";
import {
  BgPattern,
  Hessa,
  Hisham,
  HomepagePlaceholder,
  YouShushi,
} from "@/assets/images";
import { GrayLogo } from "@/assets/images/logos";
import MarketingLayout from "@/hoc/MarketingLayout";

function HomePage() {
  return (
    <MarketingLayout>
      <div className="mt-20 flex flex-col items-center">
        {/* Header */}
        <p className="text-center mb-4 text-gray-600 text-base font-medium  uppercase leading-[24px] tracking-wider">
          Who We Are
        </p>
        {/* Subheader */}
        <h1 className="text-center max-w-[954px] mb-6">
          <span className="text-gray-900 text-6xl font-semibold  leading-[72px]">
            Growing Together in the{" "}
          </span>
          <span className="text-primary-900 text-6xl font-bold  leading-[72px]">
            Food & Beverage{" "}
          </span>
          <span className="text-gray-900 text-6xl font-semibold  leading-[72px]">
            Industry
          </span>
        </h1>
        <h2 className="w-[906px] pb-[60px] text-center text-gray-600 text-xl font-normal  leading-[30px]">
          YNow Ltd., a UK-based startup, specializes in the Food & Beverage
          sector. As part of Contra Investment Group, a family-owned business
          with 50+ years of success across the Middle East, Europe, and beyond,
          we drive innovation and growth
        </h2>

        {/* Video Player */}
        <div className="relative">
          <div className="absolute pl-10 pr-[34px] py-[37px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-900">
            <PlayIcon />
          </div>
          <img className="rounded-2xl" src={HomepagePlaceholder} />
        </div>

        {/* Stats */}
        <div className="w-full flex justify-center border-b border-gray-300">
          <div className="max-w-[1440px] h-[232px] px-20 pt-20 pb-[60px]  justify-center items-center gap-10 inline-flex">
            <div className="w-[260px] flex-col justify-center items-center gap-2 inline-flex">
              <h3 className="text-center text-gray-900 text-3xl font-semibold  leading-[38px]">
                £80K - £250K
              </h3>
              <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                <h4 className="self-stretch text-center text-gray-600 text-lg font-normal  leading-7">
                  Min Investment Range
                </h4>
                <p className="self-stretch text-center text-gray-600 text-xs font-normal  leading-[18px]">
                  Franchise Development & Expansion
                </p>
              </div>
            </div>
            <div className="w-[260px] flex-col justify-center items-center gap-2 inline-flex">
              <h3 className="self-stretch text-center text-gray-900 text-3xl font-semibold  leading-[38px]">
                17% or higher
              </h3>
              <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                <h4 className="self-stretch text-center text-gray-600 text-lg font-normal  leading-7">
                  Net Profit Margin{" "}
                </h4>
                <p className="self-stretch text-center text-gray-600 text-xs font-normal  leading-[18px]">
                  Franchise Development & Expansion
                </p>
              </div>
            </div>
            <div className="w-[260px] flex-col justify-center items-center gap-2 inline-flex">
              <h3 className="self-stretch text-center text-gray-900 text-3xl font-semibold  leading-[38px]">
                £2.5 million
              </h3>
              <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                <h4 className="self-stretch text-center text-gray-600 text-lg font-normal  leading-7">
                  Min. Annual Revenue
                </h4>
                <p className="self-stretch text-center text-gray-600 text-xs font-normal  leading-[18px]">
                  Business Acquisitions & Investments
                </p>
              </div>
            </div>
            <div className="w-[260px] flex-col justify-center items-center gap-2 inline-flex">
              <h3 className="self-stretch text-center text-gray-900 text-3xl font-semibold  leading-[38px]">
                £1 to £7 million
              </h3>
              <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                <h4 className="self-stretch text-center text-gray-600 text-lg font-normal  leading-7">
                  Deal Value
                </h4>
                <p className="self-stretch text-center text-gray-600 text-xs font-normal  leading-[18px]">
                  Business Acquisitions & Investments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="max-w-[1440px] h-[792px] p-20 flex-col justify-start items-center gap-[60px] inline-flex">
          <div className="flex-col justify-center items-center gap-5 flex">
            <h3>
              <span className="text-gray-900 text-4xl font-semibold  leading-[44px]">
                About{" "}
              </span>
              <span className="text-primary-900 text-4xl font-semibold  leading-[44px]">
                YNow Ltd.
              </span>
              <span className="text-gray-900 text-4xl font-semibold  leading-[44px]">
                {" "}
                – Our Journey & Vision
              </span>
            </h3>
            <p className="w-[890px] text-center text-gray-600 text-xl font-normal  leading-[30px]">
              YNow Ltd. is a UK-based Food & Beverage startup under Contra
              Investment Group, a family-owned business with 50+ years of
              success across the Middle East, Europe, and beyond.
            </p>
          </div>
          <div className="justify-start items-center gap-10 inline-flex">
            <div className="w-[488px] p-[60px] rounded-3xl border border-gray-300 flex-col justify-center items-center gap-10 inline-flex">
              <div className="relative">
                <Siri />
              </div>
              <div className="self-stretch h-[168px] flex-col justify-center items-start gap-4 flex">
                <h3 className="self-stretch text-center text-gray-900 text-2xl font-semibold  leading-loose">
                  Welcome to YNow Ltd.
                </h3>
                <p className="self-stretch text-center text-gray-600 text-base font-normal  leading-normal">
                  At YNow Ltd., we are a UK-based startup specializing in the
                  Food and Beverage industry. We proudly operate as part of the
                  Contra Investment Group, a distinguished family-owned
                  business...
                </p>
              </div>
              <div className="text-center text-primary-900 text-base font-semibold  underline leading-normal">
                Learn more about us
              </div>
            </div>

            <div className="w-[488px] p-[60px] rounded-3xl border border-gray-300 flex-col justify-center items-center gap-10 inline-flex">
              <div className="relative">
                <Target />
              </div>
              <div className="self-stretch h-[168px] flex-col justify-center items-start gap-4 flex">
                <h3 className="self-stretch text-center text-gray-900 text-2xl font-semibold  leading-loose">
                  Our Mission & Values
                </h3>
                <p className="self-stretch text-center text-gray-600 text-base font-normal  leading-normal">
                  At YNow Ltd., we are dedicated to redefining the food and
                  beverage industry by delivering high-quality, sustainable, and
                  innovative products. Guided by Contra Investment Group&apos;s
                  founding principles of growth, innovation...
                </p>
              </div>
              <div className="text-center text-primary-900 text-base font-semibold  underline leading-normal">
                Learn more
              </div>
            </div>
          </div>
        </div>

        {/* Meet the team */}

        <div className="bg-[#f2f2f2] w-full flex justify-center">
          <div className=" h-[806px] max-w-[1280px] px-20 py-[100px] bg-[#f2f2f2] flex-col justify-start items-center gap-[60px] inline-flex">
            <div className=" h-[220px] flex-col justify-center items-center gap-10 flex">
              <div className=" h-[124px] flex-col justify-center items-center gap-5 flex">
                <h2 className="text-center">
                  <span className="text-gray-900 text-4xl font-semibold primary-900 leading-[44px]">
                    Meet the{" "}
                  </span>
                  <span className="text-primary-900 text-4xl font-semibold primary-900 leading-[44px]">
                    People
                  </span>
                  <span className="text-gray-900 text-4xl font-semibold primary-900 leading-[44px]">
                    {" "}
                    Driving Our Success
                  </span>
                </h2>
                <h3 className="w-[890px] text-center text-gray-600 text-xl font-normal primary-900 leading-[30px]">
                  YNow Ltd.&apos;s management team drives our vision to redefine
                  the food and beverage industry with unmatched expertise,
                  innovation, and strategic insight
                </h3>
              </div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="px-7 py-3.5 bg-primary-900 rounded-[500px] justify-center items-center gap-2.5 flex">
                  <button className="text-center text-white text-lg font-semibold primary-900 leading-7">
                    Meet Our Leadership Team
                  </button>
                </div>
                <div className="px-7 py-3.5 rounded-[500px] border border-primary-900 justify-center items-center gap-2.5 flex">
                  <button className="text-center text-primary-900 text-lg font-semibold primary-900 leading-7">
                    Other Key Team Members
                  </button>
                </div>
                <div className="px-7 py-3.5 rounded-[500px] border border-primary-900 justify-center items-center gap-2.5 flex">
                  <button className="text-center text-primary-900 text-lg font-semibold primary-900 leading-7">
                    Our Team at a Glance
                  </button>
                </div>
              </div>
            </div>

            {/* Leads */}
            <div className="flex gap-10">
              <div className="bg-white rounded-2xl w-[620px] justify-between h-[326px] flex">
                <div className="pt-8 pl-8 flex flex-col">
                  <h3 className="text-gray-900 mb-1 text-lg font-semibold  leading-7">
                    Hessa AlJoker
                  </h3>
                  <p className="text-gray-600 mb-6 text-base font-normal  leading-normal">
                    Chairman of YNow Ltd
                  </p>
                  <p className="w-[276px] text-gray-900 text-base font-normal  leading-normal">
                    Expert in investment, mega-project management, and finance,
                    driving strategic growth at YNow Ltd
                  </p>
                  <span className="mt-auto pl-1.5 pb-[28.45px]">
                    <img src={GrayLogo} />
                  </span>
                </div>

                <div className=" py-3 pr-3">
                  <img
                    className=" rounded-lg w-full h-full"
                    src={Hessa}
                    alt=""
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl w-[620px] justify-between h-[326px] flex">
                <div className="pt-8 pl-8 flex flex-col">
                  <h3 className="text-gray-900 mb-1 text-lg font-semibold  leading-7">
                    Hisham Naserdine
                  </h3>
                  <p className="text-gray-600 mb-6 text-base font-normal  leading-normal">
                    Managing Director
                  </p>
                  <p className="w-[276px] text-gray-900 text-base font-normal  leading-normal">
                    A seasoned leader in the food and beverage industry, driving
                    growth, innovation, and market expansion at YNow Ltd
                  </p>
                  <span className="mt-auto pl-1.5 pb-[28.45px]">
                    <img src={GrayLogo} />
                  </span>
                </div>

                <div className=" py-3 pr-3 ">
                  <img
                    className=" rounded-lg w-full bg-[#8F9896] h-full"
                    src={Hisham}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What we do */}

        <div className="max-w-[1440px] h-[900px] px-20 pt-[100px] pb-20 flex-col justify-start items-end gap-5 inline-flex">
          <div className="self-stretch justify-end items-center gap-5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
              <h2 className=" text-gray-600 text-base font-medium  uppercase leading-normal tracking-wider">
                WHAT WE DO
              </h2>
              <div className=" h-[198px] flex-col justify-center items-start gap-5 flex">
                <div className="w-[580px] justify-start items-center gap-2.5 inline-flex">
                  <h2 className="grow shrink basis-0">
                    <span className="text-gray-900  text-4xl font-semibold  leading-[44px]">
                      Helping businesses{" "}
                    </span>
                    <span className="text-primary-900  text-4xl font-semibold  leading-[44px]">
                      grow, expand,{" "}
                    </span>
                    <span className="text-gray-900  text-4xl font-semibold  leading-[44px]">
                      and succeed
                    </span>
                  </h2>
                </div>
                <div className="w-[580px] justify-start items-center gap-2.5 inline-flex">
                  <p className="grow shrink basis-0 text-gray-600 text-xl font-normal  leading-[30px]">
                    YNow Ltd. drives growth, creates opportunities, and delivers
                    value through three core pillars. Partner with us to achieve
                    your goals
                  </p>
                </div>
              </div>
            </div>

            <div className="justify-start items-center gap-5 flex">
              <div className="w-[308px] h-[350px] px-7 py-8 bg-primary-900 rounded-2xl flex-col justify-between items-start inline-flex">
                <span>
                  <Management />
                </span>
                <div className="self-stretch h-[200px] flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch h-[156px] flex-col justify-start items-start gap-4 flex">
                    <p className="self-stretch text-white text-xl font-semibold  leading-[30px]">
                      Management Consulting & Support Services
                    </p>
                    <div className="self-stretch text-gray-200 text-sm font-normal  leading-tight">
                      We help business owners retain ownership while optimizing
                      performance with expert management consulting.
                    </div>
                  </div>
                  <div className="self-stretch text-white text-sm font-bold  underline leading-normal">
                    Apply Now
                  </div>
                </div>
              </div>

              <div className="w-[308px] h-[350px] px-7 py-8 bg-gray-100  rounded-2xl flex-col justify-center items-center inline-flex">
                <span className="mb-4">
                  <Revenue />
                </span>
                <h2 className="self-stretch mb-1 text-center text-gray-900  text-xl font-semibold  leading-[30px]">
                  £2.5 million
                </h2>
                <p className="self-stretch mb-2.5 text-center text-gray-600 text-sm font-medium  leading-tight">
                  Min. Annual Revenue{" "}
                </p>
                <p className="self-stretch text-center text-gray-600 text-sm font-normal  leading-tight">
                  Business Acquisitions & Investments
                </p>
              </div>
            </div>
          </div>

          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="w-[308px] h-[350px] px-7 py-8 bg-gray-100  rounded-2xl flex-col justify-center items-center inline-flex">
              <span className="mb-4">
                <Development />
              </span>
              <h2 className="self-stretch mb-1 text-center text-gray-900  text-xl font-semibold  leading-[30px]">
                £80K - £250K min.
              </h2>
              <p className="self-stretch mb-2.5 text-center text-gray-600 text-sm font-medium  leading-tight">
                Investment Range
              </p>
              <p className="self-stretch text-center text-gray-600 text-sm font-normal  leading-tight">
                Franchise Development & Expansion
              </p>
            </div>

            <div className="grow shrink basis-0 h-[350px] px-7 py-8 bg-primary-900 rounded-2xl flex-col justify-between items-start inline-flex">
              <div className="relative">
                <Expansion />
              </div>
              <div className="self-stretch h-[180px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[136px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-white text-xl font-semibold  leading-[30px]">
                    Franchise Development & Expansion
                  </div>
                  <div className="self-stretch text-gray-200 text-sm font-normal  leading-tight">
                    We help established UK franchise brands expand, focusing on
                    growth in London and major cities.
                  </div>
                </div>
                <div className="self-stretch text-white text-sm font-bold  underline leading-normal">
                  Apply To Qualify
                </div>
              </div>
            </div>

            <div className="w-[308px] h-[350px] px-7 py-8 bg-gray-100  rounded-2xl flex-col justify-center items-center inline-flex">
              <span className="mb-4">
                <Profit />
              </span>
              <h2 className="self-stretch mb-1 text-center text-gray-900  text-xl font-semibold  leading-[30px]">
                17% or higher
              </h2>
              <p className="self-stretch mb-2.5 text-center text-gray-600 text-sm font-medium  leading-tight">
                Net Profit Margin
              </p>
              <p className="self-stretch text-center text-gray-600 text-sm font-normal  leading-tight">
                Franchise Development & Expansion
              </p>
            </div>

            <div className="grow shrink basis-0 h-[350px] px-7 py-8 bg-primary-900 rounded-2xl flex-col justify-between items-start inline-flex">
              <div className="relative">
                <Acquisition />
              </div>
              <div className="self-stretch h-[200px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[156px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-white text-xl font-semibold  leading-[30px]">
                    Business Acquisitions & Investments
                  </div>
                  <div className="self-stretch text-gray-200 text-sm font-normal  leading-tight">
                    We help business owners retain ownership while optimizing
                    performance with expert management consulting.
                  </div>
                </div>
                <div className="self-stretch text-white text-sm font-bold  underline leading-normal">
                  Apply Now For Investment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our business */}

        <div className="w-[1440px] h-[1178px] p-20 flex-col justify-start items-center gap-10 inline-flex">
          <div className="self-stretch h-[914px] flex-col justify-start items-center gap-[60px] flex">
            <div className="flex-col justify-start items-center gap-10 flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <h3 className="self-stretch text-center text-gray-600  text-base font-medium  uppercase leading-normal tracking-wider">
                  Our Businesses
                </h3>
                <div className="self-stretch h-[198px] flex-col justify-center items-center gap-5 flex">
                  <h2 className="w-[608px] text-center">
                    <span className="text-gray-900  text-4xl font-semibold  leading-[44px]">
                      Exceptional{" "}
                    </span>
                    <span className="text-primary-900  text-4xl font-semibold  leading-[44px]">
                      dining, quality,
                    </span>
                    <span className="text-gray-900  text-4xl font-semibold  leading-[44px]">
                      {" "}
                      and innovation
                    </span>
                  </h2>
                  <div className="w-[890px] text-center text-gray-600  text-xl font-normal  leading-[30px]">
                    At YNow Ltd., we&apos;re passionate about expanding our
                    portfolio and partnering with visionary restaurateurs. If
                    you&apos;re interested in collaborating or learning more
                    about our restaurants, get in touch today!
                  </div>
                </div>
              </div>
              <div className="px-7 py-3.5 bg-primary-900  rounded-[500px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-lg font-semibold  leading-7">
                  Contact us
                </div>
              </div>
            </div>

            <div className="self-stretch  justify-start items-center gap-4 inline-flex">
              <div className="  max-w-[780px] w-full  p-[60px] rounded-2xl border border-gray-300 flex-col justify-start items-start gap-[42px] inline-flex">
                <div className="self-stretch h-[134px] flex-col justify-start items-start gap-6 flex">
                  <h3 className="self-stretch text-black text-3xl font-semibold  leading-[38px]">
                    You Me Sushi
                  </h3>
                  <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                    <h4 className="self-stretch text-gray-900  text-base font-semibold  uppercase leading-normal tracking-wide">
                      A Culinary Delight
                    </h4>
                    <p className="self-stretch text-gray-600 text-sm font-normal  leading-tight">
                      Restaurant You Me Sushi brings a unique sushi experience
                      to the heart of London . Known for its authentic recipes
                      is has become a favorite among food enthusiasts.
                    </p>
                  </div>
                </div>
                <div className="h-56 flex-col justify-start items-start gap-7 flex">
                  <div className="justify-start items-center gap-7 inline-flex">
                    <div className="relative">
                      <RedDish />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <div className="text-gray-900  text-lg font-semibold  leading-7">
                        Signature Dishes
                      </div>
                      <div className="text-gray-600  text-base font-normal  leading-normal">
                        Japanese Fried Chicken
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-7 inline-flex">
                    <div className="relative">
                      <RedLocation />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <div className="text-gray-900  text-lg font-semibold  leading-7">
                        Locations
                      </div>
                      <div className="text-gray-600  text-base font-normal  leading-normal">
                        Operates in 2 prime locations across London
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-7 inline-flex">
                    <div className="relative">
                      <RedStar />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <div className="text-gray-900  text-lg font-semibold  leading-7">
                        Customer Experience
                      </div>
                      <div className="text-gray-600  text-base font-normal  leading-normal">
                        Rated 4.8 starts on major review platforms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[520px] bg-white rounded-xl flex-col justify-center items-center inline-flex overflow-hidden">
                <img
                  className="w-full min-w-[700px] max-w-[700px] h-[526px]"
                  src={YouShushi}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="border-primary-900 border p-5 rounded-2xl">
              <ArrowLeft />
            </button>
            <button className="border-primary-900 border p-5 rounded-2xl">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Get in touch */}

        <div
          className="w-full h-[870px] bg-primary-900 flex-col items-center flex"
          style={{ backgroundImage: `url(${BgPattern})` }}
        >
          <div className="max-w-[1440px] mx-auto mt-[100px] flex flex-col items-center">
            <div className="w-[890px] h-[260px] flex-col justify-center items-center gap-10 inline-flex">
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
              <div className="px-7 py-3.5 bg-white rounded-[500px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-black text-lg font-semibold  leading-7">
                  Contact Us
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
                      Looking for an investment partner? We’re here to explore
                      the possibilities
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
                      Need expert management for your business? We&apos;ve got
                      you covered
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
      </div>
    </MarketingLayout>
  );
}

export default HomePage;
