import { HStack,Show } from '@chakra-ui/react'
import {useState} from 'react'
import NavBar from './NavBar';
import Logo from './Logo';
import MenuIcon from './MenuIcon'; 

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false) 

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible); 
  }

  return (
    <HStack

    boxSize="bordex-box"
    position="fixed"
    
    w="100%"
    // boxShadow="2px 3px 10px rgba(0, 0, 0, 0.5)"

    alignItems="center"
    justifyContent="space-between"
    zIndex="200"
    padding={ { 
      base:"1rem 2rem",
      sm: "1rem 2rem", 
      md:"1rem 2rem", 
      lg:"1rem rem"
    }}

    > 
    
    <Logo /> 
 
     
    <MenuIcon visibility={isMenuVisible}   onClick={toggleMenu}/> 



    <NavBar visibility={isMenuVisible}/> 
    
    </HStack>
  )
}

export default Header