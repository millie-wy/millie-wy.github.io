import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
