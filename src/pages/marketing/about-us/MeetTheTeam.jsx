import { Close } from "@/assets/icons";
import { Hessa, HessaFull, Hisham, HishamFull } from "@/assets/images";
import { GrayLogo, LargeGrayLogo } from "@/assets/images/logos";
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
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60 transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="h-[720px] w-[1042px] space-y-4 rounded-xl bg-white">
            <DialogTitle className="relative flex h-[178px] items-center justify-between rounded-xl bg-[#FFF3F6]">
              <div className="pl-[60px]">
                <h2 className="mb-1 text-4xl leading-[44px] font-semibold text-gray-900">
                  Hessa AlJoker
                </h2>
                <h3 className="text-xl leading-[30px] font-medium text-gray-600">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <img
                className="h-[129px] w-[404px] pr-[58px]"
                src={LargeGrayLogo}
                alt="logo"
              />
              <button
                onClick={() => setFirstModalOpen(false)}
                className="absolute top-0 right-0 z-10 cursor-pointer pt-[17px] pr-[18px]"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="relative flex">
              <div className="flex max-w-[535px] flex-col gap-[28px] pt-[32px] pl-[60px]">
                <p className="text-base text-gray-900">
                  Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                  member of Contra Investment Group. With extensive experience
                  in investment, managing mega-complex projects, and finance,
                  Hessa provides strategic oversight and guidance to ensure the
                  company&apos;s success.
                </p>
                <div className="">
                  <h3 className="text-base leading-[24px] font-semibold text-gray-900">
                    Hessa&apos;s leadership is marked by:
                  </h3>

                  <ul className="mt-2 list-disc pl-5">
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
                <p className="text-base leading-[24px] font-normal">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
              <div className="absolute -top-[173px] right-0 pr-4">
                <img className="h-[700px] w-[379px]" src={HessaFull} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <Dialog
          open={isSecondModalOpen}
          onClose={() => setSecondModalOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60 transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="h-[738px] w-[1042px] space-y-4 rounded-xl bg-white">
            <DialogTitle className="relative flex h-[178px] items-center justify-between rounded-xl bg-[#FFF3F6]">
              <div className="pl-[60px]">
                <h2 className="mb-1 text-4xl leading-[44px] font-semibold text-gray-900">
                  Hicham N. Karout
                </h2>
                <h3 className="text-xl leading-[30px] font-medium text-gray-600">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <img
                className="h-[129px] w-[404px] pr-[58px]"
                src={LargeGrayLogo}
                alt="logo"
              />
              <button
                onClick={() => setSecondModalOpen(false)}
                className="absolute top-0 right-0 z-10 cursor-pointer pt-[17px] pr-[18px]"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="relative flex">
              <div className="flex flex-col gap-[28px] pt-[32px] pl-[60px]">
                <div className="w-[535px]">
                  <p className="mb-2 text-base text-gray-900">
                    Hicham N. Karout brings over 20 years of extensive
                    experience in the Food and Beverage industry across Europe
                    and the Middle East. As Managing Director of YNow Ltd.,
                    Hisham combines deep industry knowledge with exceptional
                    leadership skills to drive the company&apos;s growth and
                    operational excellence.
                  </p>
                  <p className="text-base text-gray-900">
                    Hisham has a proven track record of turning challenges into
                    opportunities, spearheading business expansion, and
                    fostering innovative strategies that align with market
                    demands.
                  </p>
                </div>

                <div className="w-[535px]">
                  <h3 className="text-base leading-[24px] font-semibold text-gray-900">
                    His expertise includes:
                  </h3>

                  <ul className="mt-2 list-disc pl-5">
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
                <p className="w-[535px] pb-10 text-base leading-[24px] font-normal">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
              <div className="absolute -top-[80px] right-0">
                <img className="h-[625px] w-[481px]" src={HishamFull} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <div className="flex gap-10">
          <div className="flex h-[326px] w-[620px] justify-between rounded-2xl bg-white">
            <div className="flex flex-col pt-8 pl-8">
              <h3 className="mb-1 text-lg leading-7 font-semibold text-gray-900">
                Hessa AlJoker
              </h3>
              <p className="mb-6 text-base leading-normal font-normal text-gray-600">
                Chairman of YNow Ltd
              </p>
              <p className="w-[276px] text-base leading-normal font-normal text-gray-900">
                Expert in investment, mega-project management, and finance,
                driving strategic growth at YNow Ltd
              </p>
              <button
                onClick={() => setFirstModalOpen(true)}
                className="text-primary-900 mt-3 w-fit cursor-pointer text-sm leading-[20px] font-semibold"
              >
                See details
              </button>
              <span className="mt-auto pb-[28.45px] pl-1.5">
                <img src={GrayLogo} />
              </span>
            </div>

            <div className="py-3 pr-3">
              <img className="h-full w-full rounded-lg" src={Hessa} alt="" />
            </div>
          </div>

          <div className="flex h-[326px] w-[620px] justify-between rounded-2xl bg-white">
            <div className="flex flex-col pt-8 pl-8">
              <h3 className="mb-1 text-lg leading-7 font-semibold text-gray-900">
                Hicham N. Karout
              </h3>
              <p className="mb-6 text-base leading-normal font-normal text-gray-600">
                Managing Director
              </p>
              <p className="w-[276px] text-base leading-normal font-normal text-gray-900">
                A seasoned leader in the food and beverage industry, driving
                growth, innovation, and market expansion at YNow Ltd
              </p>
              <button
                onClick={() => setSecondModalOpen(true)}
                className="text-primary-900 mt-3 w-fit cursor-pointer text-sm leading-[20px] font-semibold"
              >
                See details
              </button>
              <span className="mt-auto pb-[28.45px] pl-1.5">
                <img src={GrayLogo} />
              </span>
            </div>

            <div className="py-3 pr-3">
              <img
                className="h-full w-full rounded-lg bg-[#8F9896]"
                src={Hisham}
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
      <div>
        <div className="inline-flex h-[772px] w-[983px] flex-col items-start justify-start">
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[16.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                LJ
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Lars Jensen
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full py-[13px] pr-[10.50px] pl-[11.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                MG
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-xl leading-[30px] font-semibold text-gray-900">
                  Maria Gonzalez
                </p>
                <h2 className="text-lg leading-7 font-normal text-gray-600">
                  Director of Mergers & Acquisitions
                </h2>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[13.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                AA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Ahmed Ali
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[14.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                JC
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  John Carter
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
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
      <div>
        <div className="inline-flex h-[1632px] w-[983px] flex-col items-start justify-start">
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full py-[13px] pr-[12.50px] pl-[13.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                HA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Hessa AlJoker
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <div className="flex h-[264px] flex-col items-start justify-start gap-5">
                <p className="text-base leading-normal font-normal text-gray-600">
                  Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                  member of Contra Investment Group. With extensive experience
                  in investment, managing mega-complex projects, and finance,
                  Hessa provides strategic oversight and guidance to ensure the
                  company&apos;s success.
                </p>
                <div className="flex h-[104px] flex-col items-start justify-start gap-2">
                  <p className="text-base leading-normal font-semibold text-gray-600">
                    Hessa&apos;s leadership is marked by:
                  </p>

                  <ul className="list-disc pl-5.5">
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Expertise in navigating complex investment landscapes and
                      driving financial growth.
                    </li>
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Managing large-scale, multi-sector projects with precision
                      and efficiency.
                    </li>
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Building strong partnerships and fostering collaboration
                      across diverse stakeholders.
                    </li>
                  </ul>
                </div>
                <p className="text-base leading-normal font-normal text-gray-600">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full py-[13px] pr-[12.50px] pl-[13.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                HN
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Hicham N. Karout
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <div className="flex h-[328px] flex-col items-start justify-start gap-5">
                <p className="text-base leading-normal font-normal text-gray-600">
                  Hicham N. Karout brings over 20 years of extensive experience
                  in the Food and Beverage industry across Europe and the Middle
                  East. As Managing Director of YNow Ltd., Hisham combines deep
                  industry knowledge with exceptional leadership skills to drive
                  the company&apos;s growth and operational excellence. <br />
                  Hisham has a proven track record of turning challenges into
                  opportunities, spearheading business expansion, and fostering
                  innovative strategies that align with market demands.
                </p>
                <div className="flex h-[104px] flex-col items-start justify-start gap-2">
                  <p className="text-base leading-normal font-semibold text-gray-600">
                    His expertise includes:
                  </p>
                  <ul className="list-disc pl-5.5">
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Developing and scaling franchise operations across diverse
                      markets.
                    </li>
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Leading high-performing teams to deliver operational
                      efficiency and customer satisfaction.
                    </li>
                    <li className="text-base leading-normal font-normal text-gray-600">
                      Identifying emerging trends and creating forward-thinking
                      solutions that keep YNow Ltd. ahead of the competition.
                    </li>
                  </ul>
                </div>
                <p className="text-base leading-normal font-normal text-gray-600">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[16.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                LJ
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Lars Jensen
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full py-[13px] pr-[10.50px] pl-[11.50px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                MG
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Maria Gonzalez
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Director of Mergers & Acquisitions
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[13.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                AA
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4 border-b border-gray-300 pb-7">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  Ahmed Ali{" "}
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-7 pt-7">
            <div className="bg-primary-300 flex items-center justify-center overflow-hidden rounded-full px-[14.50px] py-[13px]">
              <p className="text-center text-xl leading-[30px] font-semibold text-gray-900">
                JC
              </p>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-1">
                <h2 className="text-xl leading-[30px] font-semibold text-gray-900">
                  John Carter
                </h2>
                <h3 className="text-lg leading-7 font-normal text-gray-600">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="text-base leading-normal font-normal text-gray-600">
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
      <div className="flex w-full justify-center bg-[#f2f2f2]">
        <div className="inline-flex max-w-[1280px] flex-col items-center justify-start bg-[#f2f2f2] px-20 py-[100px]">
          <div className="mb-10 flex h-[124px] flex-col items-center justify-center gap-5">
            <h2 className="text-center">
              <span className="primary-900 text-4xl leading-[44px] font-semibold text-gray-900">
                Meet the{" "}
              </span>
              <span className="text-primary-900 primary-900 text-4xl leading-[44px] font-semibold">
                People
              </span>
              <span className="primary-900 text-4xl leading-[44px] font-semibold text-gray-900">
                {" "}
                Driving Our Success
              </span>
            </h2>
            <h3 className="primary-900 w-[890px] text-center text-xl leading-[30px] font-normal text-gray-600">
              YNow Ltd.&apos;s management team drives our vision to redefine the
              food and beverage industry with unmatched expertise, innovation,
              and strategic insight
            </h3>
          </div>
          {/* Tabs */}
          <TabGroup
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            className="flex flex-col items-center gap-[60px]"
          >
            <TabList className="inline-flex items-center justify-start gap-4">
              {[
                "Meet Our Leadership Team",
                "Other Key Team Members",
                "Our Team at a Glance",
              ].map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `flex h-14 items-center justify-center gap-2.5 rounded-[500px] px-7 py-3.5 transition-colors duration-400 ${
                      selected
                        ? "bg-primary-900 text-white outline-0"
                        : "border-primary-900 text-primary-900 border"
                    }`
                  }
                >
                  <span className="text-center text-lg leading-7 font-semibold">
                    {tab}
                  </span>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {[
                <LeaderShipTeam key={"first-tab"} />,
                <OtherKeyMembers key={"second-tab"} />,
                <TeamAtAGlance key={"third-tab"} />,
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
      </div>
    </>
  );
};

export default MeetTheTeam;
