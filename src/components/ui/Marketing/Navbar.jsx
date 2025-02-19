import {
  ChevronDown,
  Consultancy,
  Hamburger,
  MoneyBagSmall,
  RedLogo,
  StallSmall,
  Suitcase,
} from "@/assets/icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-300 flex justify-center items-center relative">
      <div className="max-w-[1440px] relative  w-full flex justify-between items-center h-20 px-6 md:px-20 py-[18px]">
        <NavLink to="/" className="relative">
          <RedLogo />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-start items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-1 py-1.5 flex items-center border-b transition duration-200 ${
                isActive ? "border-gray-900" : "border-transparent"
              }`
            }
          >
            <span className="text-gray-900 text-base font-semibold leading-normal">
              Home
            </span>
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `px-1 py-1.5 flex items-center border-b transition duration-200 ${
                isActive ? "border-gray-900" : "border-transparent"
              }`
            }
          >
            <span className="text-gray-900 text-base font-semibold leading-normal">
              About Us
            </span>
          </NavLink>

          {/* What We Do Dropdown */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center text-gray-900 text-base font-semibold leading-normal">
              What We Do{" "}
              <ChevronDown className="ml-1 group-data-[open]:rotate-180 transition-transform duration-200" />
            </PopoverButton>
            <PopoverPanel
              anchor="top start"
              transition
              className="absolute left-0 mt-2 w-[605px] bg-white border border-gray-300 rounded-xl shadow-lg px-5 py-6 flex flex-col gap-2 
            transition-all duration-200 ease-out opacity-0 scale-95 group-data-[open]:opacity-100 group-data-[open]:scale-100"
            >
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/what-we-do/franchise-development-expansion"
              >
                <StallSmall />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Franchise Development & Expansion
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Expanding franchise brands across London and major cities.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/what-we-do/business-acquisition-investment"
              >
                <MoneyBagSmall />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Business Acquisitions & Investments
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Investing in businesses with strong growth potential.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/what-we-do/management-consulting-services"
              >
                <Consultancy />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Management Consulting & Support
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Providing expert consulting for sustainable business growth.
                  </span>
                </div>
              </NavLink>
            </PopoverPanel>
          </Popover>

          {/* Connect & Grow Dropdown */}
          <Popover className="relative group">
            <PopoverButton className="flex items-center text-gray-900 text-base font-semibold leading-normal">
              Connect & Grow{" "}
              <ChevronDown className="ml-1 group-data-[open]:rotate-180 transition-transform duration-200" />
            </PopoverButton>
            <PopoverPanel
              anchor="top start"
              transition
              className="absolute left-0 mt-2 w-[605px] bg-white border border-gray-300 rounded-xl shadow-lg px-5 py-6 flex flex-col gap-2 
            transition-all duration-200 ease-out opacity-0 scale-95 group-data-[open]:opacity-100 group-data-[open]:scale-100"
            >
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/apply-job"
              >
                <Suitcase />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Apply for a Job
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Explore career opportunities with us.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/apply-franchise"
              >
                <StallSmall />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Apply for Franchise Expansion
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Grow your franchise with expert support.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg"
                to="/apply-investment"
              >
                <MoneyBagSmall />
                <div>
                  <span className="text-gray-900 text-base font-semibold">
                    Apply for Investment Opportunities
                  </span>
                  <span className="text-sm text-gray-600 block">
                    Find an investment partner.
                  </span>
                </div>
              </NavLink>
            </PopoverPanel>
          </Popover>
        </div>

        {/* Contact Button */}
        <NavLink
          to="/contact-us"
          className="hidden md:flex px-6 py-2.5 bg-primary-900 rounded-full text-white font-semibold"
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="sr-only">Open mobile menu</span>
          <Hamburger />
        </button>
        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white z-50 border-b border-gray-300 shadow-md flex flex-col items-center gap-6 py-6 
    transition-all duration-500 ease-in-out transform ${
      isMobileMenuOpen
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
    }`}
        >
          <NavLink to="/" className="text-gray-900 text-lg font-semibold">
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-gray-900 text-lg font-semibold"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="px-6 py-2 bg-primary-900 rounded-full text-white font-semibold"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
