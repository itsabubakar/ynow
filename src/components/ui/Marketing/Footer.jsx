import { ChevronDown, RedLogoBig, YnowRedLogoSmall } from "@/assets/icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex items-start justify-start gap-8 bg-white px-4 py-16 lg:px-20 lg:py-[120px]">
      {/* Desktop footer nav */}
      <div className="mx-auto hidden w-[1440px] gap-10 xl:flex">
        <div className="inline-flex flex-col items-start justify-start gap-6 xl:w-[624px]">
          <Link to="/">
            <RedLogoBig />
          </Link>
          <div className="text-lg leading-7 font-normal text-gray-900 lg:w-[368px]">
            YNow Ltd., a UK-based startup, specializes in the Food & Beverage
            sector.
          </div>
        </div>
        <div className="flex h-[102px] items-start justify-start gap-[52px]">
          <div className="flex items-start justify-start gap-[72px]">
            <div className="inline-flex w-[120px] flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2 self-stretch">
                <div className="text-xl leading-[30px] font-semibold text-gray-900">
                  About
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-start gap-2 self-stretch">
                <Link
                  to={"/about-us"}
                  className="self-stretch text-sm leading-normal font-normal text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  to={"/what-we-do"}
                  className="text-sm leading-normal font-normal text-gray-900"
                >
                  What we do
                </Link>
              </div>
            </div>
            <div className="inline-flex w-[120px] flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2">
                <div className="text-xl leading-[30px] font-semibold text-gray-900">
                  Contact
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-start gap-2 self-stretch">
                <Link
                  to="/contact-us"
                  className="text-sm leading-normal font-normal text-gray-900"
                >
                  Contact Us
                </Link>
                <div className="text-sm leading-normal font-normal text-gray-900">
                  Enquiries
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-[253px] flex-col items-start justify-start gap-6">
            <div className="self-stretch text-xl leading-[30px] font-semibold text-gray-900">
              Find us on
            </div>
            <div className="inline-flex items-center justify-start gap-4">
              <div className="relative h-[47.54px] w-[47.54px]">
                <div className="bg-primary-900 absolute top-0 left-0 h-[47.54px] w-[47.54px] rounded-full" />
                <div
                  data-svg-wrapper
                  className="absolute top-[12px] left-[12px]"
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
              <div className="relative h-[47.54px] w-[47.54px]">
                <div className="bg-primary-900 absolute top-0 left-0 h-[47.54px] w-[47.54px] rounded-full" />
                <div
                  data-svg-wrapper
                  className="absolute top-[12px] left-[11.46px]"
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
              <div className="relative h-[47.54px] w-[47.54px]">
                <div className="bg-primary-900 absolute top-0 left-0 h-[47.54px] w-[47.54px] rounded-full" />
                <div
                  data-svg-wrapper
                  className="absolute top-[12px] left-[11.92px]"
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
              <div className="relative h-[47.54px] w-[47.54px]">
                <div className="bg-primary-900 absolute top-0 left-0 h-[47.54px] w-[47.54px] rounded-full" />
                <div
                  data-svg-wrapper
                  className="absolute top-[12px] left-[12px]"
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
      {/* Mobile footer nav */}
      <div className="w-full xl:hidden">
        <div className="mb-10 flex flex-col gap-3">
          <YnowRedLogoSmall />
          <p className="text-sm leading-tight font-normal text-gray-900">
            YNow Ltd., a UK-based startup, specializes in the Food & Beverage
            sector.
          </p>
        </div>

        <Disclosure as="div" className="group w-full">
          <DisclosureButton className="flex w-full justify-between border-y border-gray-300 py-4 text-start text-gray-900">
            About{" "}
            <ChevronDown className="ml-1 transition-transform duration-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top border-b border-b-gray-300 py-2 pl-2 text-sm text-gray-600 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              About Us
            </DisclosurePanel>
          </div>
        </Disclosure>
        <Disclosure as="div" className="group w-full">
          <DisclosureButton className="flex w-full justify-between border-b border-gray-300 py-4 text-start text-gray-900">
            Contact
            <ChevronDown className="ml-1 transition-transform duration-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top py-2 pl-2 text-sm text-gray-600 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              Contact Us
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </footer>
  );
};

export default Footer;
