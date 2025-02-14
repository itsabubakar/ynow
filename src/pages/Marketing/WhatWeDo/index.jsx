import MarketingLayout from "@/hoc/MarketingLayout";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useState } from "react";

const WhatWeDo = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  const FirstTab = () => {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        explicabo, quo natus ab itaque, eum nisi odit illum sapiente
        consequuntur facilis eos tempora, quidem commodi suscipit aut nostrum
        vero quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Sed error, enim illo nostrum blanditiis ex distinctio dicta consequatur
        corrupti tenetur sit exercitationem repellat, nesciunt minima et?
        Suscipit doloremque voluptatibus similique. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sed error, enim illo nostrum blanditiis ex
        distinctio dicta consequatur corrupti tenetur sit exercitationem
        repellat, nesciunt minima et? Suscipit doloremque voluptatibus
        similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
        error, enim illo nostrum blanditiis ex distinctio dicta consequatur
        corrupti tenetur sit exercitationem repellat, nesciunt minima et?
        Suscipit doloremque voluptatibus similique. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sed error, enim illo nostrum blanditiis ex
        distinctio dicta consequatur corrupti tenetur sit exercitationem
        repellat, nesciunt minima et? Suscipit doloremque voluptatibus
        similique.
      </div>
    );
  };

  return (
    <MarketingLayout>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex space-x-2 bg-gray-100 p-2 rounded-lg">
          {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `px-4 py-2 text-sm font-semibold rounded-md transition duration-300 ${
                  selected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-4">
          {[
            <FirstTab key={"first-tab"} />,
            "Content for Tab 2",
            "Content for Tab 3 lorem mmmmmmmmmmmmmmm mmmmm",
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
              <TabPanel className="p-4 bg-white rounded-lg ">
                {content}
              </TabPanel>
            </Transition>
          ))}
        </TabPanels>
      </TabGroup>
    </MarketingLayout>
  );
};

export default WhatWeDo;
