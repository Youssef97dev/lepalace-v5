import { Tab, TabPanel, TabPanels, TabGroup, TabList } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

const categories = [
  {
    id: "1",
    name: "RESTAURANT",
    imageSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/eqwcinq59ce4ye5gmu6n",
  },
  {
    id: "2",
    name: "DINING",
    imageSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mjwnl2xxinsqnkgxc943",
  },
  {
    id: "3",
    name: "CLUB",
    imageSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-25_wtt0k2",
  },
];

const DesktopContent = () => {
  return (
    <div className="relative lg:flex h-full w-full justify-center hidden">
      <div className="w-full max-w-full h-full ">
        <TabGroup>
          <TabPanels className="">
            {categories.map(({ imageSrc, id }) => (
              <TabPanel key={id} className="relative">
                <Image
                  src={imageSrc}
                  height={1000}
                  width={1000}
                  alt="Le Palace"
                  className="w-full h-screen object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </TabPanel>
            ))}
          </TabPanels>
          <TabList className="absolute bottom-0 left-0 z-50 flex justify-evenly items-center w-full">
            {categories.map(({ name, id }) => (
              <Tab
                key={id}
                className="w-full data-[hover]:border-b-[6px] data-[hover]:border-b-background duration-100 transition-all"
              >
                <div
                  className={`w-full mb-8 py-6 text-background border-r border-gray-500 text-[22px] leading-[22px] font-thin  ${
                    name === "CLUB" ? "border-none" : "border-r"
                  }`}
                >
                  {name}
                </div>
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
    </div>
  );
};

export default DesktopContent;
