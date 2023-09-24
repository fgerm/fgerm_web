import {useState} from 'react'

interface Props{ 
  visibility: boolean
}


import { Flex, Text, useBreakpointValue, Link as ChakraLink,Stack, HStack, Button, Slide} from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation} from "react-router-dom"; 



const NavBar = ({visibility}: Props) => {
  

  const breakPoint = useBreakpointValue( { 
    base: "small", 
    sm : "medium",
    md: "large",
    lg: "veryLarge",
  
  })


  console.log(breakPoint); 

  return (
    
   <Flex 
    alignItems="left"
    background="hsl(195 57% 54% /0.1)"
    backdropFilter="blur(0.2rem)" 

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
    base:"min(10vh, 10rem)  2rem",
    sm:"min(10vh, 10rem)  2rem",
    md: "1rem  2rem",
    lg: "1rem  2rem"
  }}

   gap={ {
    base: 2, 
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
    <ChakraLink as={ReactRouterLink}  to="/">  <Text> Home</Text> </ChakraLink >
    <ChakraLink as={ReactRouterLink}  to="/about">  <Text> About</Text> </ChakraLink >
    
    
    <ChakraLink as={ReactRouterLink}  to="/contact">
    <Button 
    w="auto"
    borderRadius="25px"
    colorScheme="cyan" color="white"> Contact
    </Button>
    </ChakraLink >

    
   </Flex>
      
    


  
    </Flex>
    
    
  )
}

export default NavBar