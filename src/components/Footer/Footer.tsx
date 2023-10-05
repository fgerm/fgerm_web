import { Center,Text, HStack,Stack, Icon, VStack, Heading} from '@chakra-ui/react'; 
import {AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"; 

// import { IconType } from 'react-icons';


// interface platform { 
//   name: string,
//   url: string
//   icon: IconType 

// }



const socialLinks= [
  { id:1 ,   name: "twitter",  icon: AiFillTwitterCircle,  url:"twitter link"} , 
  { id:2,  name: "github",  icon: AiFillGithub,  url:"github link"} , 
  { id:3, name: "instagram",  icon: AiFillInstagram,  url:"instagram link"} , 
  { id:4,  name: "instagram",  icon: AiFillGithub,  url:"instagram link"} , 
]


const Footer = () => {
  return (
    <VStack  
    h="12rem"
    bg="brand.500" 
    
    position="relative"
    padding= {{ 
      base: "1rem 1rem", 
      sm: "1rem 3rem",
  
      lg: "1rem 7rem", 
    

    }}
    
    > 
    
    <Stack 

    direction={{
      base:"column", 
      sm:"row"

    }}
    w="100%" 
    // bg="pink.200"
    justifyContent="space-between" 
    
  >

  <Heading size="lg" color="white"> FGERM</Heading> 
   
  <VStack alignItems={{
    base:"start",
    sm:"end"
  }}><Text color="white"> NovoHelix | Miami, FL | Kent, OH</Text>
   
   <HStack  marginTop="1rem"> {socialLinks.map((platform) =>  ( 
   <Icon key={platform.id} 

   color="white"
   as={platform.icon} 
   boxSize={5} 
   marginLeft="5px"
   _hover= {{ color:"#76D7EA"}}
   
   /> ) )}  
   
   </HStack>
    
    </VStack> 
    </Stack>


    <Center position="absolute"  bottom="6px"> 
    <Text  color="white">© 2023 FGERM. All Rights Reserved. | Privacy Policy | Terms of Use </Text>
    </Center>

    </VStack>
  )
}

export default Footer