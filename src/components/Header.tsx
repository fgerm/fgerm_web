import { HStack } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'

const Header = () => {
  return (
    <HStack
    position={ {
      base:"fixed",
      sm: "fixed", 
      md: "inherit",
      lg: "fixed" 


     }}
    w="100%"
    boxShadow="2px 3px 10px rgba(0, 0, 0, 0.5)"

    alignItems="center"
    justifyContent="space-between"
    zIndex="200"
    padding={ { 
      base:"1rem 2rem",
      sm: "1rem 2rem", 
      md:"1rem 2rem", 
      lg:"1rem 2rem"
    }}

    > 
    
    <Logo /> 
    <NavBar /> 

    </HStack>
  )
}

export default Header