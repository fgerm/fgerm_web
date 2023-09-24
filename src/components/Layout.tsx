import { Box, Stack } from "@chakra-ui/react"
import NavBar from "./NavBar";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (

  <>
  <Header />

  <Box>

  <Outlet />

  </Box>


  <Footer />



  </>
  )
}

export default Layout;