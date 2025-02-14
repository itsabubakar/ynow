import { BrowserRouter as Router } from "react-router";
import MarketingRoutes from "./Marketing";
// import JobPortalRoutes from "./JobPortalRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <MarketingRoutes />
      {/* <JobPortalRoutes /> */}
    </Router>
  );
};

export default AppRoutes;
