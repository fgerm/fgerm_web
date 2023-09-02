import React from 'react'
import { Flex, Text, useBreakpointValue, Stack, HStack, Button, Slide} from '@chakra-ui/react'
const NavBar = () => {

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
    gap={4}  
    >

    


   <Flex

  direction={{
  base:"column", 
  sm:"column", 
  md:"inherit",
  lg:"inherit"
  } }

  
  
   outline="2px solid red"
   alignItems={{
    base:"left",
    sm:"left",
    md:"center",
    lg:"center" }}

   



  padding= {{
    base:"min(10vh, 10rem)  2rem",
    sm:"min(10vh, 10rem)  2rem",
    md:"inherit", 
    lg:"inherit"
  }}

   gap={2}

   fontWeight="600"
   fontSize={ {
    base:"2rem", 
    sm: "2rem", 
    md: "1rem", 
    lg:"1rem"
  }}
   > 
    <Text> Home</Text>
    <Text > About</Text>
    <Button 
    w="auto"
    borderRadius="25px"
    colorScheme="cyan" color="white"> Contact
    </Button>
   </Flex>
      
    


  
    </Flex>
    
    
  )
}

export default NavBar