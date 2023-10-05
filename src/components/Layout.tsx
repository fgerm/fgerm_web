import { Box } from "@chakra-ui/react"

import Header from "./Header";

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (

  <>
  <Header />

  <Box
  paddingTop={{base:"4rem",
lg:"6rem"}}
  >

  <Outlet />

  </Box>


  <Footer />



  </>
  
  )
}

export default Layout;