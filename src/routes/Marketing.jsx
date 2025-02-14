import AboutUS from "@/pages/Marketing/AboutUs";
import ContactUs from "@/pages/Marketing/ContactUs";
import Homepage from "@/pages/Marketing/HomePage";
import OurBusiness from "@/pages/Marketing/OurBusiness";
import WhatWeDo from "@/pages/Marketing/WhatWeDo";
import { Routes, Route } from "react-router";

const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/our-business" element={<OurBusiness />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default MarketingRoutes;
