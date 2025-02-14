import { Hessa, Hisham } from "@/assets/images";
import { GrayLogo } from "@/assets/images/logos";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useState } from "react";

const MeetTheTeam = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  const LeaderShipTeam = () => {
    return (
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
            <img className=" rounded-lg w-full h-full" src={Hessa} alt="" />
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
    );
  };

  const OtherKeyMembers = () => {
    return (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illum
        consectetur dolor, inventore et unde rerum adipisci ratione sequi,
        officiis cum quas tempore culpa molestiae ipsa iusto sit voluptatum aut.
      </div>
    );
  };

  const TeamAtAGlance = () => {
    return (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illum
        consectetur dolor, inventore et unde rerum adipisci ratione sequi,
        officiis cum quas tempore culpa molestiae ipsa iusto sit voluptatum aut.
      </div>
    );
  };

  return (
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
            food and beverage industry with unmatched expertise, innovation, and
            strategic insight
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
                  `px-7 py-3.5  rounded-[500px] justify-center items-center gap-2.5 flex transition-colors duration-400 ${
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
                <TabPanel c>{content}</TabPanel>
              </Transition>
            ))}
          </TabPanels>
        </TabGroup>
        {/* Leads */}
      </div>
    </div>
  );
};

export default MeetTheTeam;
