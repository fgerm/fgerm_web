import { Box,Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link as ReactRouterLink} from "react-router-dom"; 


const Logo = () => {
  return (
    <Box >
      
   <ChakraLink  as={ReactRouterLink}  to="/" _hover={{ textDecoration:"none" , }}>  
        <Text fontSize="2rem" fontWeight="bold" fontFamily="MuseoModerno" color="#47a9cc" _hover={{ color:"black"}}>  FGERM </Text>
    </ChakraLink>
    </Box>
    
  )
}

export default Logo; 