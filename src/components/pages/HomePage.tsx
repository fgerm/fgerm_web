import { Flex, Box, Button, Image, Text,Heading, VStack } from '@chakra-ui/react'
import mainImage from "../../assets/images/homePage_main.webp"; 




  




const HomePage = () => {

  
const contentData= [ 
  { id:1,
  heading:"The Path to New Possibilities", 
  text:`Welcome to a world where scientific rigor meets compassionate commitment,
  where each discovery is a step forward in understanding the intricacies of life` },

  { id:2, 
  heading:"Advancements in Genome Engineering ",
  text:`Welcome to a world where scientific rigor meets compassionate commitment,
  where each discovery is a step forward in understanding the intricacies of life` },
  
  { id:3,
  heading:"Revolutionizing Biomedical Models",
  text:`Welcome to a world where scientific rigor meets compassionate commitment,
  where each discovery is a step forward in understanding the intricacies of life` },
]


  return (

    //////// HomePage
  
  <VStack
   padding= {{
    base:"0rem 1rem"
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
    
    
  gap={{
    xl:"inherit", 
    lg:"inherit",  
    base: 3,   
  
  }}
   > 
  


  <VStack 
    bg="pink."
    alignItems="left"
    w={{
      md:"80%",
      lg:"100%",
      xl:"100%"
    }}
    >
    
    <Heading as='h1' 
      fontSize={{
        lg:"4rem", 
        xl:"6rem", 
        sm:"3rem",
        md:"4rem", 

        base:"3rem",

      }}

      fontFamily="MuseoModerno"
      color="#47a9cc">Precision Genome Engineering</Heading>  
      <Text w= {{
        base:"20rem", 
        sm:"20rem",
        md:"24rem", 
        lg:"26rem"}} > 
      Welcome to a world where scientific rigor meets compassionate commitment,
      where each discovery is a step forward in understanding the intricacies of life...</Text>
      <Button bg="brand.500" color="white" w="100px">more</Button>
    </VStack>      
    
    <Box 
      overflow="hidden"
      borderRadius="50%"

      boxSize={ {
          xl:"50rem"

        } }
     
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
    // bg="blue.200"

    marginRight="3.5rem"

   
    marginTop={{
      base:"2.5rem", 
      sm:"2.5rem",
      md:"2.5rem", 
      lg:"inherit "
    }}
   
    gap="6"> 

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