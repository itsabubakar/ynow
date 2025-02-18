import AboutUS from "@/pages/marketing/about-us";
import ContactUs from "@/pages/marketing/contact-us";
import Homepage from "@/pages/marketing/home-page";
import OurBusiness from "@/pages/marketing/our-business";
import BusinessAcquisition from "@/pages/marketing/what-we-do/business-acquisition-investment";
import FranchiseDevelopment from "@/pages/marketing/what-we-do/franchise-development";
import ManagementConsultancyService from "@/pages/marketing/what-we-do/management-consulting-services";
import { Routes, Route } from "react-router";

const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/our-business" element={<OurBusiness />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/what-we-do">
        <Route
          path="franchise-development-expansion"
          element={<FranchiseDevelopment />}
        />
        <Route
          path="business-acquisition-investment"
          element={<BusinessAcquisition />}
        />
        <Route
          path="management-consulting-services"
          element={<ManagementConsultancyService />}
        />
      </Route>
    </Routes>
  );
};

export default MarketingRoutes;
