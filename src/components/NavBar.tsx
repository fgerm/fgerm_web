

interface Props{ 
  visibility: boolean
}


import { Flex, Text, Link as ChakraLink,Box} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation} from "react-router-dom"; 



const NavBar = ({visibility}: Props) => {
  const navRoutes = [ 
    {id:1, name:"Home", to:"/"},
    {id:2, name:"About", to:"/about"},
    {id:3, name:"Contact", to:"/contact"},
    ]

    const location = useLocation();

    console.log(location)
  return (
       
   <Flex 

    alignItems="left"
    
    
    background= {{
    base:"hsl(195 57% 54% /0.5)",
     
    md:"hsl(195 57% 54% /0.1)"

    }}
    
    borderRadius={{
      xl: "25px 25px 25px 25px",
      lg: "25px 25px 25px 25px",
      md: "25px 25px 25px 25px",
      sm:"25px 0 0 25px", 
      base: "25px 0 0 25px", 

    }}

    backdropFilter="blur(0.4rem)" 

    transform= {{
      base: visibility ? "translateX(0%)" :  "translateX(100%)" , 
      sm: visibility ? "translateX(0%)" :  "translateX(100%)", 
      md: "inherit",
      lg:"inherit"
    }}


    transition=  "transform 350ms ease-out"
 
    position={{
      base:"fixed", 
      sm:"fixed",
      md:"relative", 
      lg:"relative" 
    }}

    inset= {{ 
      base:"0 0 0 30%",
      sm: "0 0 0 30%",
      md:"inherit", 
      lg: "inherit"

    }}
    direction={ {
      base:"column", 
      sm: "column", 
      md: "inherit", 
      lg:"inherit"

    }}
    gap={5}  
    >

  <Flex

  direction={{
  base:"column", 
  sm:"column", 
  md:"inherit",
  lg:"inherit"
  } }

  
  
  //  outline="2px solid red"
   alignItems={{
    base:"left",
    sm:"left",
    md:"center",
    lg:"center" }}

   
    


  padding= {{
    base:"min(10vh, 10rem)  3rem",
    sm:"min(10vh, 10rem)  3rem",
    md: "1.5rem  2.5rem",
    lg: "1.5rem  2.5rem"
  }}

   gap={ {
    base: 6, 
    sm: 2, 
    md: 8, 
    lg: 9,

   }}

   fontWeight="600"
   fontSize={ {
    base:"2rem", 
    sm: "2rem", 
    md: "1rem", 
    lg:"1rem"
  }}
   > 

  { 
  navRoutes.map( route => (
   <ChakraLink  as={ReactRouterLink}  
   key={route.id} 
   to={route.to}

   _hover={{ textDecoration: "none" }}
   > 
   <Box padding="15px" 
   borderRadius="25px"
    bg={ location.pathname===route.to ? "brand.500": "" }
   >
   <Text
   fontWeight="500" 
   color={location.pathname===route.to ? "white": "gray.400" }  
   > {route.name}
   </Text>
   </Box>
   </ChakraLink>
  ))
  }






    
   </Flex>
      
    


  
    </Flex>
    
    
  )
}

export default NavBar