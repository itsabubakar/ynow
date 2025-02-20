import { Footer, Navbar } from "@/components/ui/Marketing";

const MarketingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MarketingLayout;
