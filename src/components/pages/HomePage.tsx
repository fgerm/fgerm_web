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
    position="relative"
    padding={{
    base:  "6rem 1.5rem", 
    sm: "6rem 1.5rem", 
    md: "5rem 1rem" , 
    lg: "1rem 3rem", 
    xl:"0rem 8rem"
    }}>  

  <Flex 
    
    h={{
      base:"inherit", 
      lg: "80vh"
    }}
    w="100%"

    direction={{
    base:"column-reverse", 
    sm: "column-reverse", 
    md:"column-reverse", 
    lg:"row", 
    xl:"row"
    }}
    
    
  gap={{
    base: 10,   
    lg:"inherit"


  }}
    justifyContent={{
      base:"center",  
      sm: "center", 
      md: "center", 
      lg:"space-around"
    }}
    alignItems={{
      base:"left",
      sm:"center" ,
      md:"center",
      lg:"center"


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
        base:"2.5rem",
        sm:"3rem",
        md:"4rem", 
        lg:"4rem", 
        xl:"6rem"

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
     
      position="relative"
      right="5%" 
      aspectRatio="1/1" 
      w={{
        base:"25rem", 
        md:"30rem", 
        lg:"55rem"}}
      borderRadius="50%"
      overflow="hidden"
      // background="url(https://pixabay.com/photos/biology-research-laboratory-science-220005/)"
      >

      <Image 
      maxW="100%"
      
      
      src={mainImage} alt="Microscope" />
    
    </Box>
  
    </Flex>
    

    {/* /////////////// section 2 ///////////////////*/}
    
    
    
    <Flex 
   


    marginY="3rem"
      
    
    h= {{
      base:"inherit" , 
      sm:"inherit", 
      lg:"80vh", 
      
    }}
   

    position="relative"

   

  

    direction= { {
      base:"column-reverse", 
      sm: "column-reverse", 
      md:"column-reverse", 
      lg:"row", 
      xl:"row"
     }}
    
     
  
    padding={{
      base:"5rem 0.5rem",
      sm:"5rem 0.5rem",
      md: "3rem 2rem",
      lg:"3rem 2rem", 
      xl: "2rem 1rem"
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