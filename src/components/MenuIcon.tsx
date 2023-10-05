import { Icon } from "@chakra-ui/react"
import  {BiMenuAltRight} from "react-icons/bi"
import { IoCloseOutline} from "react-icons/io5"; 

interface Props { 
    visibility: boolean; 
    onClick: () => void
}

const MenuIcon = ({visibility, onClick}: Props) => {
  return (
   
    <Icon 
    display={{
      base:"inherit",
      sm:"inherit",
      md:"none",
      lg:"none"
    }}
    
    boxSize={9}  
    as={visibility ? IoCloseOutline : BiMenuAltRight} 
    onClick={onClick} 
    zIndex="9999" />
     
  
  )
}

export default MenuIcon