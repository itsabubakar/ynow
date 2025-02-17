import {
  ChevronDown,
  Consultancy,
  MoneyBagSmall,
  StallSmall,
} from "@/assets/icons";
import { RedLogo } from "@/assets/images/logos";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link, NavLink } from "react-router";

const MarketingLayout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <navbar className="  bg-white border-b border-gray-300 justify-center items-center flex">
        <div className="max-w-[1440px] w-full flex  justify-between items-center  h-20 px-20  py-[18px]">
          <NavLink to="/" className="relative">
            <img src={RedLogo} />
          </NavLink>

          <div className="justify-start items-center gap-6 flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-1 py-1.5 justify-center items-center h-9 flex border-b ${
                  isActive ? "border-gray-900" : "border-transparent"
                }`
              }
            >
              <span className="text-center text-gray-900 text-base font-semibold leading-normal">
                Home
              </span>
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `px-1 py-1.5 justify-center items-center h-9 flex border-b ${
                  isActive ? "border-gray-900" : "border-transparent"
                }`
              }
            >
              <span className="text-center text-gray-900 text-base font-semibold leading-normal">
                About Us
              </span>
            </NavLink>
            <Popover className="relative group ">
              <PopoverButton className="text-center cursor-pointer flex items-center text-gray-900 text-base font-semibold leading-normal">
                What We Do{" "}
                <ChevronDown className=" group-data-[open]:rotate-180" />
              </PopoverButton>
              <PopoverPanel
                anchor="top start"
                transition
                className=" [--anchor-gap:12px] [--anchor-offset:-52px] flex gap-2 bg-white border-gray-300 border rounded-xl shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] px-5 py-6 origin-top flex-col w-[605px] transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <NavLink
                  className="flex gap-4  p-3 hover:bg-gray-100 hover:rounded-lg"
                  href="/analytics"
                >
                  <div>
                    <StallSmall />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900  text-base font-semibold leading-[24px]">
                      Franchise Development & Expansion
                    </span>
                    <span className="text-sm font-normal leading-5 text-gray-600">
                      We specialize in expanding successful local and UK-based
                      franchise brands, helping them scale across London and
                      major cities
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  className="flex gap-4  p-3 hover:bg-gray-100 hover:rounded-lg"
                  href="/engagement"
                >
                  <div>
                    <MoneyBagSmall />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900  text-base font-semibold leading-[24px]">
                      Business Acquisitions & Investments
                    </span>
                    <span className="text-sm font-normal leading-5 text-gray-600">
                      We acquire and invest in established businesses or master
                      franchises with strong, sustainable growth potential
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  className="flex gap-4  p-3 hover:bg-gray-100 hover:rounded-lg"
                  href="/security"
                >
                  <div>
                    <Consultancy />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900  text-base font-semibold leading-[24px]">
                      Management Consulting & Support Services
                    </span>
                    <span className="text-sm font-normal leading-5 text-gray-600">
                      We invest in established businesses and master franchises
                      with strong, sustainable growth potential, meeting our
                      high investment standards
                    </span>
                  </div>
                </NavLink>
              </PopoverPanel>
            </Popover>

            <NavLink
              to="/our-business"
              className={({ isActive }) =>
                `px-1 py-1.5 justify-center items-center h-9 flex border-b ${
                  isActive ? "border-gray-900" : "border-transparent"
                }`
              }
            >
              <span className="text-center text-gray-900 text-base font-semibold leading-normal">
                Connect & Grow
              </span>
            </NavLink>
          </div>

          <NavLink
            to="/contact-us"
            className="px-6 py-2.5 bg-primary-900 rounded-[500px] justify-center items-center  flex"
          >
            <span className="text-center text-white text-base font-semibold  leading-normal">
              Contact us
            </span>
          </NavLink>
        </div>
      </navbar>

      {/* Body */}

      <main>{children}</main>

      {/* Footer */}
      <footer className="flex px-20 py-[120px] bg-white justify-start items-start gap-8 ">
        <div className="w-[1440px] flex mx-auto ">
          <div className="w-[624px] flex-col justify-start items-start gap-6 inline-flex">
            <Link to="/">
              <img src={RedLogo} />
            </Link>
            <div className="w-[368px] text-gray-900 text-lg font-normal  leading-7">
              YNow Ltd., a UK-based startup, specializes in the Food & Beverage
              sector.
            </div>
          </div>
          <div className="h-[102px] justify-start items-start gap-[52px] flex">
            <div className="justify-start items-start gap-[72px] flex">
              <div className="w-[120px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch  justify-start items-start gap-2 inline-flex">
                  <div className="text-gray-900 text-xl font-semibold  leading-[30px]">
                    About
                  </div>
                </div>
                <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <Link
                    to={"/about-us"}
                    className="self-stretch text-gray-900 text-sm font-normal  leading-normal"
                  >
                    About Us
                  </Link>
                  <Link
                    to={"/what-we-do"}
                    className="text-gray-900 text-sm font-normal  leading-normal"
                  >
                    What we do
                  </Link>
                </div>
              </div>
              <div className="w-[120px] flex-col justify-start items-start gap-4 inline-flex">
                <div className=" justify-start items-start gap-2 inline-flex">
                  <div className="text-gray-900 text-xl font-semibold  leading-[30px]">
                    Contact
                  </div>
                </div>
                <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <Link
                    to="/contact-us"
                    className="text-gray-900 text-sm font-normal  leading-normal"
                  >
                    Contact Us
                  </Link>
                  <div className="text-gray-900 text-sm font-normal  leading-normal">
                    Enquiries
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[253px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold  leading-[30px]">
                Find us on
              </div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-[47.54px] h-[47.54px] relative">
                  <div className="w-[47.54px] h-[47.54px] left-0 top-0 absolute bg-primary-900 rounded-full" />
                  <div
                    data-svg-wrapper
                    className="left-[12px] top-[12px] absolute"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#C91235" />
                      <path
                        d="M24 0V24H0V0H24Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M17.7671 3H20.8206L14.1495 10.6246L21.9975 21H15.8526L11.0397 14.7074L5.5326 21H2.47722L9.6126 12.8446L2.08398 3H8.38491L12.7354 8.75169L17.7671 3ZM16.6954 19.1723H18.3874L7.46552 4.73169H5.64983L16.6954 19.1723Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[47.54px] h-[47.54px] relative">
                  <div className="w-[47.54px] h-[47.54px] left-0 top-0 absolute bg-primary-900 rounded-full" />
                  <div
                    data-svg-wrapper
                    className="left-[11.46px] top-[12px] absolute"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        transform="translate(-0.000488281)"
                        fill="#C91235"
                      />
                      <path
                        d="M23.9995 0V24H-0.000488281V0H23.9995Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M16.4995 7.5H16.5015M14.9995 12C14.9995 13.6569 13.6564 15 11.9995 15C10.3427 15 8.99951 13.6569 8.99951 12C8.99951 10.3431 10.3427 9 11.9995 9C13.6564 9 14.9995 10.3431 14.9995 12ZM11.9995 20.5V20.5C14.3266 20.5 15.4901 20.5 16.4281 20.1816C18.1945 19.582 19.5815 18.195 20.1811 16.4286C20.4995 15.4906 20.4995 14.3271 20.4995 12V12C20.4995 9.67293 20.4995 8.5094 20.1811 7.57136C19.5815 5.80502 18.1945 4.41801 16.4281 3.81842C15.4901 3.5 14.3266 3.5 11.9995 3.5V3.5C9.67244 3.5 8.50891 3.5 7.57088 3.81842C5.80453 4.41801 4.41752 5.80502 3.81793 7.57136C3.49951 8.5094 3.49951 9.67293 3.49951 12V12C3.49951 14.3271 3.49951 15.4906 3.81793 16.4286C4.41752 18.195 5.80453 19.582 7.57088 20.1816C8.50891 20.5 9.67244 20.5 11.9995 20.5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[47.54px] h-[47.54px] relative">
                  <div className="w-[47.54px] h-[47.54px] left-0 top-0 absolute bg-primary-900 rounded-full" />
                  <div
                    data-svg-wrapper
                    className="left-[11.92px] top-[12px] absolute"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        transform="translate(0.000976562)"
                        fill="#C91235"
                      />
                      <path
                        d="M24.001 0V24H0.000976562V0H24.001Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.001 12C22.001 17.1122 18.1643 21.3283 13.2126 21.9278L13.2126 21.9276C13.2128 21.9276 13.213 21.9276 13.2132 21.9276V15.0553H15.9171L16.4771 11.9998H13.2088V10.9192C13.2088 9.30313 13.841 8.68313 15.481 8.68313C15.9888 8.68313 16.401 8.69535 16.6371 8.71924V5.9509C16.1888 5.82701 15.0971 5.70312 14.4649 5.70312C11.1249 5.70312 9.58489 7.27924 9.58489 10.6831V11.9998H7.521V15.0559H9.58489V21.7059H9.58544L9.58542 21.7061C5.22931 20.6256 2.00098 16.69 2.00098 12C2.00098 6.47722 6.4782 2 12.001 2C17.5238 2 22.001 6.47722 22.001 12Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[47.54px] h-[47.54px] relative">
                  <div className="w-[47.54px] h-[47.54px] left-0 top-0 absolute bg-primary-900 rounded-full" />
                  <div
                    data-svg-wrapper
                    className="left-[12px] top-[12px] absolute"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.627 0V24H0.626953V0H24.627Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M18.627 8.89984C16.3456 8.43616 14.627 6.41757 14.627 4V16C14.627 18.2091 12.8361 20 10.627 20C8.41781 20 6.62695 18.2091 6.62695 16C6.62695 14.1362 7.90173 12.5701 9.62695 12.126"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MarketingLayout;
