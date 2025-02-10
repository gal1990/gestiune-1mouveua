import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Sidebar from "../components/generic-components/Sidebar/Sidebar";
import Navbar from "../components/generic-components/Navbar/Navbar";
import LoadingOverlay from "../components/generic-components/LoadingOverlay/LoadingOverlay";
import useAdminRoutes from "../utils/admin-routes";
import useEmployerRoutes from "../utils/employer-routes";
import { PLATFORM_NAME } from "../assets/language/constants";
import appStyle from "../assets/css/dashboard_style";

const DashboardLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const loading = useSelector((state) => state.website.loading || false);
  const user = useSelector((state) => state.auth.user);
  
  // Choose routes based on user role
  const adminRoutes = useAdminRoutes();
  const employeeRoutes = useEmployerRoutes();
  const routes = user?.role === 'ADMIN' ? adminRoutes : employeeRoutes;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <LoadingOverlay active={loading}>
      <div style={appStyle.wrapper}>
        <Sidebar
          bgColor="blue"
          routes={routes}
          logoText={PLATFORM_NAME}
          logo="/vite.svg"
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
        />
        <div style={appStyle.mainPanel}>
          <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />
          <div style={appStyle.content}>
            {children}
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default DashboardLayout;