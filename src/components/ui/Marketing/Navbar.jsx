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
    <nav className="relative flex items-center justify-center border-b border-gray-300 bg-white">
      <div className="relative flex h-20 w-full max-w-[1440px] items-center justify-between px-6 py-[18px] md:px-20">
        <NavLink to="/" className="relative">
          <RedLogo />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-start gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center border-b px-1 py-1.5 transition duration-200 ${
                isActive ? "border-gray-900" : "border-transparent"
              }`
            }
          >
            <span className="text-base leading-normal font-semibold text-gray-900">
              Home
            </span>
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `flex items-center border-b px-1 py-1.5 transition duration-200 ${
                isActive ? "border-gray-900" : "border-transparent"
              }`
            }
          >
            <span className="text-base leading-normal font-semibold text-gray-900">
              About Us
            </span>
          </NavLink>

          {/* What We Do Dropdown */}
          <Popover className="group relative">
            <PopoverButton className="flex items-center text-base leading-normal font-semibold text-gray-900">
              What We Do{" "}
              <ChevronDown className="ml-1 transition-transform duration-200 group-data-[open]:rotate-180" />
            </PopoverButton>
            <PopoverPanel
              anchor="top start"
              transition
              className="flex w-[605px] origin-top flex-col gap-2 rounded-xl border border-gray-300 bg-white px-5 py-6 shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] transition duration-200 ease-out [--anchor-gap:12px] [--anchor-offset:-40%] data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/what-we-do/franchise-development-expansion"
              >
                <StallSmall />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Franchise Development & Expansion
                  </span>
                  <span className="block text-sm text-gray-600">
                    Expanding franchise brands across London and major cities.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/what-we-do/business-acquisition-investment"
              >
                <MoneyBagSmall />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Business Acquisitions & Investments
                  </span>
                  <span className="block text-sm text-gray-600">
                    Investing in businesses with strong growth potential.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/what-we-do/management-consulting-services"
              >
                <Consultancy />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Management Consulting & Support
                  </span>
                  <span className="block text-sm text-gray-600">
                    Providing expert consulting for sustainable business growth.
                  </span>
                </div>
              </NavLink>
            </PopoverPanel>
          </Popover>

          {/* Connect & Grow Dropdown */}
          <Popover className="group relative">
            <PopoverButton className="flex items-center text-base leading-normal font-semibold text-gray-900">
              Connect & Grow{" "}
              <ChevronDown className="ml-1 transition-transform duration-200 group-data-[open]:rotate-180" />
            </PopoverButton>
            <PopoverPanel
              anchor="top start"
              transition
              className="flex w-[605px] origin-top flex-col gap-2 rounded-xl border border-gray-300 bg-white px-5 py-6 shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814] transition duration-200 ease-out [--anchor-gap:12px] [--anchor-offset:-40%] data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/apply-job"
              >
                <Suitcase />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Apply for a Job
                  </span>
                  <span className="block text-sm text-gray-600">
                    Explore career opportunities with us.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/apply-franchise"
              >
                <StallSmall />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Apply for Franchise Expansion
                  </span>
                  <span className="block text-sm text-gray-600">
                    Grow your franchise with expert support.
                  </span>
                </div>
              </NavLink>
              <NavLink
                className="flex gap-4 rounded-lg p-3 hover:bg-gray-100"
                to="/apply-investment"
              >
                <MoneyBagSmall />
                <div>
                  <span className="text-base font-semibold text-gray-900">
                    Apply for Investment Opportunities
                  </span>
                  <span className="block text-sm text-gray-600">
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
          className="bg-primary-900 hidden rounded-full px-6 py-2.5 font-semibold text-white md:flex"
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
          className={`absolute top-0 left-0 z-50 flex h-screen w-full transform flex-col items-center gap-6 border-b border-gray-300 bg-white py-6 shadow-md transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }`}
        >
          <NavLink to="/" className="text-lg font-semibold text-gray-900">
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-lg font-semibold text-gray-900"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="bg-primary-900 rounded-full px-6 py-2 font-semibold text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
