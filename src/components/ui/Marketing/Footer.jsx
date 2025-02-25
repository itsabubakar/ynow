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
      <div className="flex w-full flex-col xl:hidden">
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
        {/* Socials */}
        <div className="mx-auto inline-flex h-12 items-center justify-center gap-5 pt-10">
          <div className="relative h-12 w-12">
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-[#c91235]" />
            <div
              data-svg-wrapper
              className="absolute top-[12.12px] left-[12.12px]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24.231"
                  height="24.231"
                  transform="translate(0.615234 0.115479)"
                  fill="#C91235"
                />
                <path
                  d="M24.8463 0.115479V24.3465H0.615234V0.115479H24.8463Z"
                  fill="white"
                  fillOpacity="0.01"
                />
                <path
                  d="M18.5528 3.14429H21.6357L14.9004 10.8423L22.824 21.3175H16.6199L11.7606 14.9644L6.20056 21.3175H3.11577L10.3198 13.0837L2.71875 3.14429H9.08032L13.4727 8.95134L18.5528 3.14429ZM17.4708 19.4723H19.1791L8.15209 4.89265H6.31892L17.4708 19.4723Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="relative h-12 w-12">
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-[#c91235]" />
            <div
              data-svg-wrapper
              className="absolute top-[12.12px] left-[11.57px]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24.231"
                  height="24.231"
                  transform="translate(0.0673828 0.115479)"
                  fill="#C91235"
                />
                <path
                  d="M24.2984 0.115479V24.3465H0.0673828V0.115479H24.2984Z"
                  fill="white"
                  fillOpacity="0.01"
                />
                <path
                  d="M16.7257 7.68767H16.7277M15.2113 12.231C15.2113 13.9038 13.8552 15.2599 12.1824 15.2599C10.5096 15.2599 9.15353 13.9038 9.15353 12.231C9.15353 10.5582 10.5096 9.20211 12.1824 9.20211C13.8552 9.20211 15.2113 10.5582 15.2113 12.231ZM12.1824 20.8128V20.8128C14.586 20.8128 15.7879 20.8128 16.7536 20.4734C18.4709 19.8699 19.8213 18.5194 20.4248 16.8022C20.7642 15.8364 20.7642 14.6346 20.7642 12.231V12.231C20.7642 9.82735 20.7642 8.62553 20.4248 7.6598C19.8213 5.94253 18.4709 4.59209 16.7536 3.98857C15.7879 3.64917 14.586 3.64917 12.1824 3.64917V3.64917C9.77877 3.64917 8.57695 3.64917 7.61121 3.98857C5.89395 4.59209 4.5435 5.94253 3.93999 7.6598C3.60059 8.62553 3.60059 9.82735 3.60059 12.231V12.231C3.60059 14.6346 3.60059 15.8364 3.93999 16.8022C4.5435 18.5194 5.89395 19.8699 7.61121 20.4734C8.57695 20.8128 9.77877 20.8128 12.1824 20.8128Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative h-12 w-12">
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-[#c91235]" />
            <div
              data-svg-wrapper
              className="absolute top-[12.12px] left-[12.03px]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24.231"
                  height="24.231"
                  transform="translate(0.530273 0.115479)"
                  fill="#C91235"
                />
                <path
                  d="M24.7613 0.115479V24.3465H0.530273V0.115479H24.7613Z"
                  fill="white"
                  fillOpacity="0.01"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.7423 12.231C22.7423 17.3925 18.8687 21.6491 13.8694 22.2544L13.8693 22.2542C13.8696 22.2542 13.8698 22.2542 13.87 22.2542V15.3158H16.5999L17.1653 12.2308H13.8655V11.1399C13.8655 9.50819 14.5038 8.88222 16.1596 8.88222C16.6722 8.88222 17.0884 8.89456 17.3268 8.91868V6.1237C16.8742 5.99862 15.772 5.87354 15.1337 5.87354C11.7615 5.87354 10.2067 7.46482 10.2067 10.9015V12.2308H8.12296V15.3163H10.2067V22.0304H10.2073L10.2073 22.0306C5.80921 20.9396 2.5498 16.9662 2.5498 12.231C2.5498 6.65508 7.07012 2.13477 12.6461 2.13477C18.222 2.13477 22.7423 6.65508 22.7423 12.231Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="relative h-12 w-12">
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-[#c91235]" />
            <div
              data-svg-wrapper
              className="absolute top-[12.12px] left-[12.12px]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8463 0.115479V24.3465H0.615234V0.115479H24.8463Z"
                  fill="white"
                  fillOpacity="0.01"
                />
                <path
                  d="M18.7884 9.10106C16.485 8.63292 14.7499 6.59489 14.7499 4.15405V16.2696C14.7499 18.5 12.9418 20.3081 10.7114 20.3081C8.48095 20.3081 6.67285 18.5 6.67285 16.2696C6.67285 14.3878 7.95989 12.8066 9.70173 12.3583"
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
    </footer>
  );
};

export default Footer;
