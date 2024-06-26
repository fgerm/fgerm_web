import { Flex, Box, Button, Image, Text,Heading, VStack, Link as ChakraLink } from '@chakra-ui/react'
import mainImage from "../../assets/images/homePage_main.webp"; 

import { Link as ReactRouterLink } from 'react-router-dom';





const HomePage = () => {

  
const contentData= [ 
  { id:1,
  heading:"The Path to New Possibilities", 
  text:` Our primary research initiative focuses on deriving human oocytes from induced pluripotent stem cells (iPSCs). This advanced research area is at the forefront of reproductive biology, representing a significant leap in our understanding of human reproductive development.` },

  { id:2, 
  heading:"Advancements in Genome Engineering ",
  text:`The ability to derive human oocytes from iPSCs also presents an invaluable tool for genetic research, particularly in understanding hereditary diseases and reproductive disorders. It allows us to study the effects of specific genetic mutations on oocyte development and early embryogenesis`},
  
  { id:3,
  heading:"Revolutionizing Biomedical Models",
  text:`Our work provides a unique platform for modeling human development and diseases in vitro, offering insights into complex genetic and epigenetic mechanisms that drive early human development` },
]


  return (

    //////// HomePage
  
  <VStack
   padding= {{
    xl:"0rem 4rem", 
    lg: "0 3rem", 
    md:"0 2rem",
    sm:"0 2rem",
    base:"0 1rem"
   }}
  
  >

  <Flex 
    h={{
      xl: '80vh',  
      lg: "80vh", 
      base:"inherit", 
    }}
    
    direction={{
    base:"column-reverse", 
    sm: "column-reverse", 
    md:"column-reverse", 
    lg:"row", 
    xl:"row"
    }}
    
  alignItems="center"
 
   > 
  


  <VStack 
    
    alignItems="left"
    
    
    >
    
    <Heading as='h1' 
    
      fontSize={{
        xl:"5rem",
        lg:"3.5rem", 
        md:"4rem", 
        sm:"3rem", 
        base:"3rem"
      }}
         
      fontFamily="heading"
      color="#47a9cc"
     
      
      >Precision Genome Engineering</Heading>  
      
      <Text 
     
      w= {{
        xl:"65ch",
        lg:"50ch",
        md:"50ch", 
        sm:"45ch",
        base:"35ch"
        }} 
        > Welcome to FGERM, the forefront of innovative research in human germ cell development from pluripotent stem cells. Our journey began in 2020, in partnership with NovoHelix, aiming to revolutionize reproductive medicine. We're dedicated to unlocking the mysteries of human development and offering new solutions for infertility.</Text> 
       
        <ChakraLink as={ReactRouterLink} to="/about"> 
      <Button bg="brand.500" color="white" w="100px">more</Button>

      </ChakraLink>
    </VStack>      
    
    <Box 
      overflow="hidden"
    
      borderRadius="25rem"
      
      w={{
        xl:"45rem",
        lg: "32rem",
        md: "35rem",
        sm: "25rem",
        base: "20rem"
      }}

 
      >

    <Image 
       src={mainImage} alt="Microscope" />
    
    </Box>
  
    </Flex>
    


    {/* /////////////// section 2 ///////////////////*/}
    
    
    <Flex 
     
   
    h= {{

    lg:"80vh", 
    base:"inherit" , 
    sm:"inherit",     
    }}

    position="relative"
    
    margin="1rem 0rem"
   

  

    direction= { {
      base:"column-reverse", 
      sm: "column-reverse", 
      md:"column-reverse", 
      lg:"row", 
      xl:"row"
     }}
    
     
  
   
    >

    <VStack
    alignItems="left"
    w={{
      base:"100%" , 
      sm:"70%", 
      md:"80%", 
      lg: "40%", 
    

    }}
   

    marginRight="3.5rem"

   
    marginTop={{
      base:"2.5rem", 
      sm:"2.5rem",
      md:"2.5rem", 
      lg:"inherit "
    }}
   
    gap="6"
    
    > 

{/* *************** List of Text Boxes  ****************** */}
      
     { contentData.map( (content) => ( 
     
     <Box key={content.id} 
     w={{base:"90%",
     md:"100%"
     }}>
      <Heading 
      
      size="lg" 
      color="#47a9cc"
      fontFamily="MuseoModerno"
      > {content.heading}</Heading>
      <Text 
      fontSize={{
        base:"1rem", 
        sm:"inherit", 
        lg:"inherit"
      }}
      w={{
        base:"100%",
        sm:"100%", 
        md:"26rem",
        lg:"26rem"

      }}  > {content.text} </Text>

      </Box>)
     )}  
{/* ***************End of  List of Text Boxes  ***************** */}
    </VStack>
    
    <Heading

      w="100%"

    fontSize={{
  base:"3rem",
  sm:"4rem",
  md:"4rem", 
  lg:"4.6rem", 
  xl:"6rem"

}}
  

    textAlign="right"
  
    lineHeight="1.1"
    color="#47a9cc"
    alignSelf="start"
    fontFamily="MuseoModerno"
    > 
    Unraveling <br/> The Complexities <br/>
    Of Human Infertility
    </Heading>
      
      
      
    </Flex>







  </VStack>
  )
}

export default HomePage;