import { Box } from "@chakra-ui/react"
import NavBar from "./NavBar";
import Header from "./Header";
import HomePage from "./pages/HomePage";

const Layout = () => {
  return (
   <>

  <Header  /> 

  <Box w="100%" h="500px"> 
  <HomePage /> 
  
  </Box>
     
    





    </>
  )
}

export default Layout; 