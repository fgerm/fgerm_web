import { Box } from "@chakra-ui/react"
import NavBar from "./NavBar";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const Layout = () => {
  return (
   <>

  <Header  /> 

  <Box w="100%" h="500px"> 
  {/* <HomePage />  */}
  <AboutPage /> 
  
  </Box>
     
    





    </>
  )
}

export default Layout; 