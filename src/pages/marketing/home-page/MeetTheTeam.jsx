import { Close, GrayLogoIcon, SmallLargeGrayIcon } from "@/assets/icons";
import LargeGrayLogo from "@/assets/icons/LargeGrayLogo";
import {
  Hessa,
  HessaFull,
  HessaMedium,
  HessaSmall,
  Hisham,
  HishamFull,
  HishamMedium,
  HishamSmall,
} from "@/assets/images";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useState } from "react";

const MeetTheTeam = () => {
  let [isFirstModalOpen, setFirstModalOpen] = useState(false);
  let [isSecondModalOpen, setSecondModalOpen] = useState(false);
  let [selectedIndex, setSelectedIndex] = useState(0);

  const LeaderShipTeam = () => {
    return (
      <>
        <Dialog
          open={isFirstModalOpen}
          onClose={() => setFirstModalOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="h-[60vh] overflow-y-auto rounded-xl bg-white pb-10 lg:h-[730px] lg:w-[1042px] lg:overflow-hidden lg:pb-0">
            <DialogTitle className="relative flex items-center justify-between rounded-t-xl bg-[#FFF3F6] py-[17px] lg:h-[178px] lg:pr-[58px]">
              {/* Desktop header */}
              <div className="hidden pl-[60px] lg:block">
                <h2 className="mb-1 text-4xl leading-[44px] font-semibold text-gray-900">
                  Hessa AlJoker
                </h2>
                <h3 className="text-xl leading-[30px] font-medium text-gray-600">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <span className="hidden lg:block">
                <LargeGrayLogo />
              </span>

              <span className="flex w-full justify-center lg:hidden">
                <SmallLargeGrayIcon />
              </span>
              <button
                onClick={() => setFirstModalOpen(false)}
                className="absolute top-0 right-0 z-10 cursor-pointer pt-3 pr-3 lg:pt-[17px] lg:pr-[18px]"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="relative -mt-18 flex flex-col items-center lg:-mt-0 lg:flex-row">
              {/* Mobile image */}
              <div className="z-20 lg:hidden">
                <img
                  className="relative z-30 max-w-[293px] object-contain"
                  src={HessaMedium}
                />
              </div>
              <div className="flex max-w-[535px] flex-col gap-[28px] px-4 pt-[33px] lg:pt-[32px] lg:pl-[60px]">
                <div>
                  {/* Mobile header */}
                  <h3 className="text-xl leading-[30px] font-semibold text-gray-900 lg:hidden">
                    Hessa AlJoker
                  </h3>
                  <h4 className="mb-5 text-sm leading-[20px] text-gray-600 lg:hidden">
                    Chairwoman of YNow Ltd
                  </h4>
                  <p className="text-sm leading-[20px] text-gray-900 lg:text-base lg:leading-[24px]">
                    Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                    member of Contra Investment Group. With extensive experience
                    in investment, managing mega-complex projects, and finance,
                    Hessa provides strategic oversight and guidance to ensure
                    the company&apos;s success.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-base lg:leading-[24px]">
                    Hessa&apos;s leadership is marked by:
                  </h3>

                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-900 lg:text-base">
                    <li>
                      Expertise in navigating complex investment landscapes and
                      driving financial growth.
                    </li>
                    <li>
                      Managing large-scale, multi-sector projects with precision
                      and efficiency.
                    </li>
                    <li>
                      Building strong partnerships and fostering collaboration
                      across diverse stakeholders
                    </li>
                  </ul>
                </div>
                <p className="w-full text-sm leading-[20px] font-normal lg:max-w-[535px] lg:pb-10 lg:text-base lg:leading-[24px]">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
              {/* Desktop image */}
              <div className="absolute -top-[166px] right-0 hidden pr-4 lg:block">
                <img className="h-[718px] w-[379px]" src={HessaFull} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <Dialog
          open={isSecondModalOpen}
          onClose={() => setSecondModalOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="h-[60vh] overflow-y-auto rounded-xl bg-white pb-10 lg:h-[738px] lg:w-[1042px] lg:overflow-hidden">
            <DialogTitle className="relative flex items-center justify-between rounded-t-xl bg-[#FFF3F6] py-[17px] lg:h-[178px] lg:pr-[58px]">
              {/* Desktop header */}
              <div className="hidden pl-[60px] lg:block">
                <h2 className="mb-1 text-4xl leading-[44px] font-semibold text-gray-900">
                  Hicham N. Karout
                </h2>
                <h3 className="text-xl leading-[30px] font-medium text-gray-600">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <span className="hidden lg:block">
                <LargeGrayLogo />
              </span>

              <span className="flex w-full justify-center lg:hidden">
                <SmallLargeGrayIcon />
              </span>
              <button
                onClick={() => setSecondModalOpen(false)}
                className="absolute top-0 right-0 z-10 cursor-pointer pt-3 pr-3 lg:pt-[17px] lg:pr-[18px]"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="relative -mt-20 flex flex-col items-center lg:-mt-0 lg:flex-row">
              {/* Mobile image */}
              <div className="z-20 lg:hidden">
                <img
                  className="relative z-30 max-w-[285px] object-contain"
                  src={HishamMedium}
                />
              </div>
              <div className="flex flex-col gap-[28px] px-4 pt-[33px] lg:pt-[32px] lg:pl-[60px]">
                <div className="w-full lg:max-w-[535px]">
                  {/* Mobile header */}
                  <h3 className="text-xl leading-[30px] font-semibold text-gray-900 lg:hidden">
                    Hicham N. Karout
                  </h3>
                  <h4 className="mb-5 text-sm leading-[20px] text-gray-600 lg:hidden">
                    Managing Director of YNow Ltd
                  </h4>
                  <p className="mb-2 text-sm leading-[20px] text-gray-900 lg:text-base lg:leading-[24px]">
                    Hicham N. Karout brings over 20 years of extensive
                    experience in the Food and Beverage industry across Europe
                    and the Middle East. As Managing Director of YNow Ltd.,
                    Hisham combines deep industry knowledge with exceptional
                    leadership skills to drive the company&apos;s growth and
                    operational excellence.
                  </p>
                  <p className="text-sm leading-[20px] text-gray-900 lg:text-base lg:leading-[24px]">
                    Hisham has a proven track record of turning challenges into
                    opportunities, spearheading business expansion, and
                    fostering innovative strategies that align with market
                    demands.
                  </p>
                </div>

                <div className="w-full lg:max-w-[535px]">
                  <h3 className="text-sm leading-[20px] font-semibold text-gray-900 lg:text-base lg:leading-[24px]">
                    His expertise includes:
                  </h3>

                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-900 lg:text-base">
                    <li>
                      Developing and scaling franchise operations across diverse
                      markets.
                    </li>
                    <li>
                      Leading high-performing teams to deliver operational
                      efficiency and customer satisfaction.
                    </li>
                    <li>
                      Identifying emerging trends and creating forward-thinking
                      solutions that keep YNow Ltd. ahead of the competition
                    </li>
                  </ul>
                </div>
                <p className="w-full text-sm leading-[20px] font-normal lg:max-w-[535px] lg:pb-10 lg:text-base lg:leading-[24px]">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
              {/* Desktop image */}
              <div className="hidden lg:absolute lg:-top-[90px] lg:right-0 lg:block">
                <img
                  className="h-[652px] w-[481px] object-contain"
                  src={HishamFull}
                />
              </div>
            </div>
          </DialogPanel>
        </Dialog>

        <div className="flex flex-col gap-5 px-4 pb-16 lg:gap-10 lg:px-0 lg:pb-[100px] xl:flex-row">
          <div className="flex max-w-[343px] flex-col-reverse justify-between rounded-2xl bg-white lg:h-[326px] lg:w-[620px] lg:max-w-full lg:flex-row">
            <div className="flex flex-col px-[13px] pt-5 lg:pt-8 lg:pl-8">
              <h3 className="mb-1 text-lg leading-7 font-semibold text-gray-900">
                Hessa AlJoker
              </h3>
              <p className="mb-5 text-base leading-normal font-normal text-gray-600 lg:mb-6">
                Chairman of YNow Ltd
              </p>
              <p className="text-sm leading-[20px] font-normal text-gray-900 lg:w-[276px] lg:text-base lg:leading-normal">
                Expert in investment, mega-project management, and finance,
                driving strategic growth at YNow Ltd
              </p>
              <button
                onClick={() => setFirstModalOpen(true)}
                className="text-primary-900 mt-3 w-fit cursor-pointer text-base leading-[24px] font-semibold lg:text-sm lg:leading-[20px]"
              >
                See details
              </button>
              <span className="mt-10 pb-[28.45px] pl-1.5 lg:mt-auto">
                <GrayLogoIcon />
              </span>
            </div>

            <div className="px-[13px] pt-4 lg:py-3 lg:pr-3">
              <img
                className="hidden h-full w-full rounded-lg lg:block"
                src={Hessa}
                alt=""
              />
              <img
                className="h-[216px] w-[317px] rounded-lg lg:hidden"
                src={HessaSmall}
                alt=""
              />
            </div>
          </div>

          <div className="flex max-w-[343px] flex-col-reverse justify-between rounded-2xl bg-white lg:h-[326px] lg:w-[620px] lg:max-w-full lg:flex-row">
            <div className="flex flex-col px-[13px] pt-5 lg:pt-8 lg:pl-8">
              <h3 className="mb-1 text-lg leading-7 font-semibold text-gray-900">
                Hicham N. Karout
              </h3>
              <p className="mb-5 text-base leading-normal font-normal text-gray-600 lg:mb-6">
                Managing Director
              </p>
              <p className="text-sm leading-[20px] font-normal text-gray-900 lg:w-[276px] lg:text-base lg:leading-normal">
                A seasoned leader in the food and beverage industry, driving
                growth, innovation, and market expansion at YNow Ltd
              </p>
              <button
                onClick={() => setSecondModalOpen(true)}
                className="text-primary-900 mt-3 w-fit cursor-pointer text-base leading-[24px] font-semibold lg:text-sm lg:leading-[20px]"
              >
                See details
              </button>
              <span className="mt-10 pb-[28.45px] pl-1.5 lg:mt-auto">
                <GrayLogoIcon />
              </span>
            </div>

            <div className="px-[13px] pt-4 lg:py-3 lg:pr-3">
              <img
                className="hidden h-full w-full rounded-lg bg-[#8F9896] lg:block"
                src={Hisham}
                alt=""
              />
              <img
                className="h-[216px] w-[317px] rounded-lg bg-[#8F9896] lg:hidden"
                src={HishamSmall}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const OtherKeyMembers = () => {
    return (
      <div className="pb-16 lg:pb-20">
        <div className="inline-flex max-w-[983px] flex-col items-start justify-start px-4 lg:h-[772px] lg:px-0">
          <div className="inline-flex flex-col items-start justify-start gap-y-4 lg:flex-row lg:gap-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[14px] pl-[15px] lg:px-[16.5px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                LJ
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3 border-b border-gray-300 pb-6 lg:gap-4 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Lars Jensen
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[10px] pl-[11px] lg:py-[13px] lg:pr-[10.50px] lg:pl-[11.50px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                MG
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3 border-b border-gray-300 pb-6 lg:gap-4 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Maria Gonzalez
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Director of Mergers & Acquisitions
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white p-3 lg:px-[13.5px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                AA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-6 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Ahmed Ali
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[13px] pl-[14px] lg:px-[14.50px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                JC
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  John Carter
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                John is an operations expert with over 15 years of experience in
                supply chain management and operational efficiency. He
                specializes in streamlining processes, reducing costs, and
                ensuring the seamless delivery of goods and services
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TeamAtAGlance = () => {
    return (
      <div className="pb-16 lg:pb-20">
        <div className="inline-flex max-w-[983px] flex-col items-start justify-start px-4 lg:h-[1632px] lg:px-0">
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-[13px] pr-[12.50px] pl-[13.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                HA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-6 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Hessa AlJoker
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start gap-5 lg:h-[264px]">
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                  member of Contra Investment Group. With extensive experience
                  in investment, managing mega-complex projects, and finance,
                  Hessa provides strategic oversight and guidance to ensure the
                  company&apos;s success.
                </p>
                <div className="flex flex-col items-start justify-start gap-2 lg:h-[104px]">
                  <p className="text-sm leading-[20px] font-semibold text-gray-600 lg:text-base lg:leading-normal">
                    Hessa&apos;s leadership is marked by:
                  </p>

                  <ul className="list-disc pl-5.5 text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                    <li>
                      Expertise in navigating complex investment landscapes and
                      driving financial growth.
                    </li>
                    <li className="">
                      Managing large-scale, multi-sector projects with precision
                      and efficiency.
                    </li>
                    <li>
                      Building strong partnerships and fostering collaboration
                      across diverse stakeholders.
                    </li>
                  </ul>
                </div>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-[13px] pr-[12.50px] pl-[13.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                HN
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-6 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Hicham N. Karout
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start gap-5 lg:h-[328px]">
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  Hicham N. Karout brings over 20 years of extensive experience
                  in the Food and Beverage industry across Europe and the Middle
                  East. As Managing Director of YNow Ltd., Hisham combines deep
                  industry knowledge with exceptional leadership skills to drive
                  the company&apos;s growth and operational excellence. <br />
                  Hisham has a proven track record of turning challenges into
                  opportunities, spearheading business expansion, and fostering
                  innovative strategies that align with market demands.
                </p>
                <div className="flex flex-col items-start justify-start gap-2 lg:h-[104px]">
                  <p className="text-base leading-normal font-semibold text-gray-600">
                    His expertise includes:
                  </p>
                  <ul className="list-disc pl-5.5 text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                    <li>
                      Developing and scaling franchise operations across diverse
                      markets.
                    </li>
                    <li>
                      Leading high-performing teams to deliver operational
                      efficiency and customer satisfaction.
                    </li>
                    <li>
                      Identifying emerging trends and creating forward-thinking
                      solutions that keep YNow Ltd. ahead of the competition.
                    </li>
                  </ul>
                </div>
                <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[14px] pl-[15px] lg:px-[16.5px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                LJ
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3 border-b border-gray-300 pb-6 lg:gap-4 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Lars Jensen
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[10px] pl-[11px] lg:py-[13px] lg:pr-[10.50px] lg:pl-[11.50px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                MG
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3 border-b border-gray-300 pb-6 lg:gap-4 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Maria Gonzalez
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Director of Mergers & Acquisitions
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white p-3 lg:px-[13.5px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                AA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-6 lg:pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  Ahmed Ali
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-y-4 pt-6 lg:flex-row lg:gap-7 lg:pt-7">
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-white py-3 pr-[13px] pl-[14px] lg:px-[14.50px] lg:py-[13px]">
              <p className="text-center text-base leading-[24px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                JC
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-lg leading-[28px] font-semibold text-gray-900 lg:text-xl lg:leading-[30px]">
                  John Carter
                </h2>
                <h3 className="text-sm leading-[20px] font-normal text-gray-600 lg:text-lg lg:leading-7">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="text-sm leading-[20px] font-normal text-gray-600 lg:text-base lg:leading-normal">
                John is an operations expert with over 15 years of experience in
                supply chain management and operational efficiency. He
                specializes in streamlining processes, reducing costs, and
                ensuring the seamless delivery of goods and services
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="flex w-full justify-center bg-[#f2f2f2] lg:px-20 lg:pt-[100px]">
        <div className="inline-flex min-w-screen flex-col items-center justify-start bg-[#f2f2f2] px-4 pt-16 lg:max-w-[1280px]">
          <div className="mb-8 flex flex-col items-center justify-center gap-3 lg:mb-10 lg:h-[124px] lg:gap-5">
            <h2 className="text-center text-3xl leading-[38px] font-semibold lg:text-4xl lg:leading-[44px]">
              <span className="text-gray-900">Meet the </span>
              <span className="text-primary-900">People</span>
              <span className="text-gray-900"> Driving Our Success</span>
            </h2>
            <h3 className="max-w-[890px] text-center text-sm leading-[20px] font-normal text-gray-600 lg:text-xl lg:leading-[30px]">
              YNow Ltd.&apos;s management team drives our vision to redefine the
              food and beverage industry with unmatched expertise, innovation,
              and strategic insight
            </h3>
          </div>
          {/* Tabs */}
          <TabGroup
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            className="flex w-screen flex-col items-center gap-10 lg:w-full lg:gap-[60px]"
          >
            {/* Scrollable Wrapper */}
            <div className="scrollbar-hide w-full overflow-x-scroll pl-4">
              <TabList className="flex max-w-full flex-nowrap items-center gap-4 whitespace-nowrap md:justify-center">
                {[
                  "Meet Our Leadership Team",
                  "Other Key Team Members",
                  "Our Team at a Glance",
                ].map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `flex h-14 w-fit items-center justify-center gap-2.5 rounded-[500px] px-7 py-4 transition-colors duration-400 outline-none lg:py-3.5 ${
                        selected
                          ? "bg-primary-900 text-white"
                          : "border-primary-900 text-primary-900 border"
                      }`
                    }
                  >
                    <span className="text-center text-base leading-7 font-semibold lg:text-lg">
                      {tab}
                    </span>
                  </Tab>
                ))}
                {/* Spacer element to add right padding */}
                <div className="-ml-2">
                  <span className="invisible">x</span>
                </div>
              </TabList>
            </div>

            <TabPanels>
              {[
                <LeaderShipTeam key="first-tab" />,
                <OtherKeyMembers key="second-tab" />,
                <TeamAtAGlance key="third-tab" />,
              ].map((content, index) => (
                <Transition
                  key={index}
                  show={selectedIndex === index}
                  enter="transition-opacity duration-800"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-800"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  unmount={false}
                >
                  <TabPanel>{content}</TabPanel>
                </Transition>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Leads */}
        </div>
      </section>
    </>
  );
};

export default MeetTheTeam;
