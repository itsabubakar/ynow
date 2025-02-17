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
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60  transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="w-[1042px] h-[720px] space-y-4 bg-white rounded-xl">
            <DialogTitle className="bg-[#FFF3F6] h-[178px] flex items-center justify-between rounded-xl relative">
              <div className="pl-[60px]">
                <h2 className="text-gray-900 font-semibold text-4xl leading-[44px] mb-1">
                  Hessa AlJoker
                </h2>
                <h3 className="text-gray-600 font-medium text-xl leading-[30px]">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <img
                className="w-[404px] h-[129px] pr-[58px]"
                src={LargeGrayLogo}
                alt="logo"
              />
              <button
                onClick={() => setFirstModalOpen(false)}
                className="absolute z-10 top-0 right-0 pt-[17px] pr-[18px] cursor-pointer"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="flex relative">
              <div className="pt-[32px] pl-[60px] max-w-[535px] flex flex-col gap-[28px]">
                <p className="text-gray-900 text-base ">
                  Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                  member of Contra Investment Group. With extensive experience
                  in investment, managing mega-complex projects, and finance,
                  Hessa provides strategic oversight and guidance to ensure the
                  company&apos;s success.
                </p>
                <div className="">
                  <h3 className="font-semibold text-base leading-[24px] text-gray-900">
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
                <p className="text-base font-normal leading-[24px] ">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
              <div className="absolute -top-[173px] right-0 pr-4 ">
                <img className="w-[379px] h-[700px]" src={HessaFull} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <Dialog
          open={isSecondModalOpen}
          onClose={() => setSecondModalOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/60  transition duration-300 ease-out data-[closed]:opacity-0"
        >
          <DialogPanel className="w-[1042px] h-[738px] space-y-4 bg-white rounded-xl">
            <DialogTitle className="bg-[#FFF3F6] h-[178px] flex items-center justify-between rounded-xl relative">
              <div className="pl-[60px]">
                <h2 className="text-gray-900 font-semibold text-4xl leading-[44px] mb-1">
                  Hicham N. Karout
                </h2>
                <h3 className="text-gray-600 font-medium text-xl leading-[30px]">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <img
                className="w-[404px] h-[129px] pr-[58px]"
                src={LargeGrayLogo}
                alt="logo"
              />
              <button
                onClick={() => setSecondModalOpen(false)}
                className="absolute z-10 top-0 right-0 pt-[17px] pr-[18px] cursor-pointer"
              >
                <Close />
              </button>
            </DialogTitle>
            <div className="flex relative">
              <div className="pt-[32px] pl-[60px] flex flex-col gap-[28px]">
                <div className=" w-[535px]">
                  <p className="text-gray-900 text-base mb-2">
                    Hisham Naserdine brings over 20 years of extensive
                    experience in the Food and Beverage industry across Europe
                    and the Middle East. As Managing Director of YNow Ltd.,
                    Hisham combines deep industry knowledge with exceptional
                    leadership skills to drive the company&apos;s growth and
                    operational excellence.
                  </p>
                  <p className="text-gray-900 text-base ">
                    Hisham has a proven track record of turning challenges into
                    opportunities, spearheading business expansion, and
                    fostering innovative strategies that align with market
                    demands.
                  </p>
                </div>

                <div className=" w-[535px] ">
                  <h3 className="font-semibold text-base leading-[24px] text-gray-900">
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
                <p className="text-base w-[535px] font-normal leading-[24px] pb-10">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
              <div className="absolute -top-[80px] right-0 ">
                <img className="w-[481px] h-[625px]" src={HishamFull} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
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
              <button
                onClick={() => setFirstModalOpen(true)}
                className="text-primary-900 font-semibold leading-[20px] text-sm w-fit mt-3 cursor-pointer"
              >
                See details
              </button>
              <span className="mt-auto pl-1.5 pb-[28.45px]">
                <img src={GrayLogo} />
              </span>
            </div>

            <div className=" py-3 pr-3">
              <img className=" rounded-lg w-full h-full" src={Hessa} alt="" />
            </div>
          </div>

          <div className="bg-white rounded-2xl w-[620px] justify-between h-[326px] flex">
            <div className="pt-8 pl-8 flex flex-col">
              <h3 className="text-gray-900 mb-1 text-lg font-semibold  leading-7">
                Hicham N. Karout
              </h3>
              <p className="text-gray-600 mb-6 text-base font-normal  leading-normal">
                Managing Director
              </p>
              <p className="w-[276px] text-gray-900 text-base font-normal  leading-normal">
                A seasoned leader in the food and beverage industry, driving
                growth, innovation, and market expansion at YNow Ltd
              </p>
              <button
                onClick={() => setSecondModalOpen(true)}
                className="text-primary-900 font-semibold leading-[20px] text-sm w-fit mt-3 cursor-pointer"
              >
                See details
              </button>
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
      </>
    );
  };

  const OtherKeyMembers = () => {
    return (
      <div>
        <div className="w-[983px] h-[772px] flex-col justify-start items-start inline-flex">
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[16.50px] py-[13px] bg-primary-300 rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold   leading-[30px]">
                LJ
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b  border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold   leading-[30px]">
                  Lars Jensen
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal   leading-7">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal   leading-normal">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="pl-[11.50px] pr-[10.50px] py-[13px] bg-primary-300 rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold   leading-[30px]">
                MG
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b  border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <p className="  text-gray-900  text-xl font-semibold   leading-[30px]">
                  Maria Gonzalez
                </p>
                <h2 className="  text-gray-600  text-lg font-normal   leading-7">
                  Director of Mergers & Acquisitions
                </h2>
              </div>
              <p className="  text-gray-600  text-base font-normal   leading-normal">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[13.50px] py-[13px] bg-primary-300 rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold   leading-[30px]">
                AA
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b  border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold   leading-[30px]">
                  Ahmed Ali
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal   leading-7">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal   leading-normal">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[14.50px] py-[13px] bg-primary-300 rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold   leading-[30px]">
                JC
              </p>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold   leading-[30px]">
                  John Carter
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal   leading-7">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal   leading-normal">
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
        <div className="w-[983px] h-[1632px] flex-col justify-start items-start inline-flex">
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="pl-[13.50px] pr-[12.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                HA
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  Hessa AlJoker
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Chairwoman of YNow Ltd
                </h3>
              </div>
              <div className="  h-[264px] flex-col justify-start items-start gap-5 flex">
                <p className="  text-gray-600  text-base font-normal    leading-normal">
                  Hessa AlJoker serves as Chairman of YNow Ltd. and is a board
                  member of Contra Investment Group. With extensive experience
                  in investment, managing mega-complex projects, and finance,
                  Hessa provides strategic oversight and guidance to ensure the
                  company&apos;s success.
                </p>
                <div className="  h-[104px] flex-col justify-start items-start gap-2 flex">
                  <p className="  text-gray-900  text-base font-semibold    leading-normal">
                    Hessa&apos;s leadership is marked by:
                  </p>

                  <ul className="list-disc pl-5.5">
                    <li className="text-gray-900  text-base font-normal    leading-normal">
                      Expertise in navigating complex investment landscapes and
                      driving financial growth.
                    </li>
                    <li className="text-gray-900  text-base font-normal    leading-normal">
                      Managing large-scale, multi-sector projects with precision
                      and efficiency.
                    </li>
                    <li className="text-gray-900  text-base font-normal    leading-normal">
                      Building strong partnerships and fostering collaboration
                      across diverse stakeholders.
                    </li>
                  </ul>
                </div>
                <p className="  text-gray-600  text-base font-normal    leading-normal">
                  Her vision, combined with her deep understanding of global
                  markets, positions YNow Ltd. for sustained growth and
                  long-term impact.
                </p>
              </div>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="pl-[13.50px] pr-[12.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                HN
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  Hicham N. Karout
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Managing Director of YNow Ltd
                </h3>
              </div>
              <div className="  h-[328px] flex-col justify-start items-start gap-5 flex">
                <p className="  text-gray-600  text-base font-normal    leading-normal">
                  Hicham N. Karout brings over 20 years of extensive experience
                  in the Food and Beverage industry across Europe and the Middle
                  East. As Managing Director of YNow Ltd., Hisham combines deep
                  industry knowledge with exceptional leadership skills to drive
                  the company&apos;s growth and operational excellence. <br />
                  Hisham has a proven track record of turning challenges into
                  opportunities, spearheading business expansion, and fostering
                  innovative strategies that align with market demands.
                </p>
                <div className="  h-[104px] flex-col justify-start items-start gap-2 flex">
                  <p className="  text-gray-900  text-base font-semibold leading-normal">
                    His expertise includes:
                  </p>
                  <ul className="list-disc pl-5.5">
                    <li className="text-gray-900  text-base font-normal leading-normal">
                      Developing and scaling franchise operations across diverse
                      markets.
                    </li>
                    <li className="text-gray-900  text-base font-normal leading-normal">
                      Leading high-performing teams to deliver operational
                      efficiency and customer satisfaction.
                    </li>
                    <li className="text-gray-900  text-base font-normal leading-normal">
                      Identifying emerging trends and creating forward-thinking
                      solutions that keep YNow Ltd. ahead of the competition.
                    </li>
                  </ul>
                </div>
                <p className="  text-gray-600  text-base font-normal    leading-normal">
                  With his vision and expertise, Hisham is instrumental in
                  ensuring YNow Ltd. establishes a strong foothold in the UK,
                  GCC, and beyond
                </p>
              </div>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[16.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                LJ
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  Lars Jensen
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Head of Expansion Strategy
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal    leading-normal">
                Lars brings 15 years of experience in business development and
                franchise expansion across Europe and Asia. His expertise lies
                in identifying growth opportunities, negotiating strategic
                partnerships, and driving franchise scalability in competitive
                markets
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="pl-[11.50px] pr-[10.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                MG
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  Maria Gonzalez
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Director of Mergers & Acquisitions
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal    leading-normal">
                Maria is a seasoned M&A specialist with over a decade of
                experience in leading acquisitions, integrations, and corporate
                restructuring. She has successfully managed multi-million-dollar
                deals, ensuring seamless transitions and maximizing value for
                all stakeholders
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[13.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                AA
              </p>
            </div>
            <div className="grow shrink basis-0 pb-7 border-b border-gray-300  flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  Ahmed Ali{" "}
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Chief Financial Officer
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal    leading-normal">
                With a strong background in corporate finance, Ahmed has over 12
                years of experience managing financial operations for
                multinational companies. His expertise includes financial
                planning, risk management, and optimizing profitability across
                diverse sectors
              </p>
            </div>
          </div>
          <div className="  pt-7 justify-start items-start gap-7 inline-flex">
            <div className="px-[14.50px] py-[13px] bg-primary-300  rounded-full justify-center items-center flex overflow-hidden">
              <p className="text-center text-gray-900  text-xl font-semibold    leading-[30px]">
                JC
              </p>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <h2 className="  text-gray-900  text-xl font-semibold    leading-[30px]">
                  John Carter
                </h2>
                <h3 className="  text-gray-600  text-lg font-normal    leading-7">
                  Operations & Logistics Manager
                </h3>
              </div>
              <p className="  text-gray-600  text-base font-normal    leading-normal">
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
      <div className="bg-[#f2f2f2] w-full flex justify-center">
        <div className="  max-w-[1280px] px-20 py-[100px] bg-[#f2f2f2] flex-col justify-start items-center inline-flex">
          <div className="mb-10 h-[124px] flex-col justify-center items-center gap-5 flex">
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
            <TabList className="justify-start items-center gap-4 inline-flex">
              {[
                "Meet Our Leadership Team",
                "Other Key Team Members",
                "Our Team at a Glance",
              ].map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `px-7 py-3.5  rounded-[500px] h-14 justify-center items-center gap-2.5 flex transition-colors duration-400 ${
                      selected
                        ? "bg-primary-900 text-white"
                        : "border-primary-900 border text-primary-900"
                    }`
                  }
                >
                  <button className="text-center  text-lg font-semibold leading-7">
                    {tab}
                  </button>
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
