import MarketingLayout from "@/hoc/MarketingLayout";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Application from "./Application";

const ManagementConsultancyService = () => {
  return (
    <MarketingLayout>
      <Header />
      <HowItWorks />
      <Application />
    </MarketingLayout>
  );
};

export default ManagementConsultancyService;
