import { Flex, Box, Button, Image, Text,Heading, ChakraProvider, CardFooter, useDisclosure, Fade, VStack } from '@chakra-ui/react'
import mainImage from "../../assets/images/homePage_main.webp"; 
import React from 'react'

const HomePage = () => {




  return (
    //////// HomePage
  <VStack  
    outline="2px solid green"
    
    position="relative"
    
    

    padding={{
    base:  "6rem 1.5rem", 
    sm: "6rem 1.5rem", 
    md: "6rem 1rem" , 
    lg: "6rem 3rem", 
    xl:"6rem 8rem"
    }}>  


  <Flex 

  
    h={{
      base:"inherit", 

    }}
    w="100%"
    //////////////////////////////////////////// bg="pink"
    //  flexWrap="wrap"

     direction= { {
      base:"column-reverse", 
      sm: "column-reverse", 
      md:"column-reverse", 
      lg:"row", 
      xl:"row"
     }}
    
    
    
    // direction={{
    //   base:"column-reverse", 
    //   sm:"column-reverse",
    //   md:"row-reverse",
    //   lg:"row"
    // }}

    justifyContent={{
      base:"center",  
      sm: "center", 
      md:"center", 
      lg:"space-around"

    }}
    alignItems="center"
    > 
  
  {/**************************************************************  intro Text */}
    <Box 
    marginTop={{
      base:"1.5rem", 
      lg:"inherit"

    }}

      w={{
        base:"100%",
        sm:"80%",
        md:"80%", 
        lg:"50%",
        xl: "50%"
      }} 
   
    >
      <Heading as='h1' 
      size={ {
        base:"3xl",
        sm:"4xl",
        md:"3xl", 
        lg:"4xl", 
        xl:"4xl" 
      }}

      color="#47a9cc">Precision Genome Engineering</Heading>  
      <Text 
      marginTop="1.5rem"
    
      // w={{
      //   base:"100%",
      //   sm: "50ch",
      //   md:"60ch",
      //   lg:"45ch"
      // }} 
      > 
      Welcome to a world where scientific rigor meets compassionate commitment,
      where each discovery is a step forward in understanding the intricacies of life</Text>
      <Button>more</Button>
      </Box>      
    
      <Box
     
      outline="2px solid green"
      w={{
        base:"20rem",
        sm:"25rem",
        md:"30rem",
        lg:"35rem"
      }} 
      aspectRatio="1/1" 
      
      borderRadius="50%"
      overflow="hidden"
      // background="url(https://pixabay.com/photos/biology-research-laboratory-science-220005/)"
      >

      <Image 
      h="100%" 
      
      src={mainImage} />
      </Box>
  
    </Flex>
    

    {/* /////////////// section 2 ///////////////////*/}
    
    
    
    
    <Flex
   
   
    position="relative"

    
    direction={ {
      base:"column-reverse",
      sm:"column-reverse",
      md:"row",
      lg:"row"
    }}

    alignItems="center"
    justifyContent="space-around"


    padding={{
      base:"5rem 0.5rem",
      sm:"5rem 0.5rem",
      md: "3rem 1rem",
      lg:"3rem 2rem"
    }}

    >

    <VStack 
    marginTop={{
      base:"2.5rem", 
      sm:"2.5rem",
      md:"2.5rem", 
      lg:"inherit "
    }}
   

    
    
    gap="10"> 

    {/* List of Text Boxes  */}
    <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 1</Heading>
        <Text w={{
          base:"100%", 
          sm:"100%", 
          md:"50%",
          lg:"50%"
        }}
        >Welcome to a world where scientific 
        rigor meets compassionate commitment,
        where each discovery is a step forward in 
        understanding the intricacies of life </Text>
      </Box>
      <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 2</Heading>
        <Text w="50%">Welcome to a world where scientific 
        rigor meets compassionate commitment,
        where each discovery is a step forward in 
        understanding the intricacies of life </Text>
      </Box>
      <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 3</Heading>
        <Text w="50%">Welcome to a world where scientific 
        rigor meets compassionate commitment,
        where each discovery is a step forward in 
        understanding the intricacies of life </Text>
      </Box>
    </VStack>
    
    <Heading
    
    size={{
      base:"2xl",
      sm:"3xl", 
      md:"2xl",
      lg:"4xl"
    }}

   
    lineHeight="1.3"
    
    alignSelf="flex-start"
    w={{
      base:"100%",
      sm:"100%",
      md:"50%", 
      lg:"50%"
    }}
    textAlign="right"
    color="#47a9cc"
    
    > 
    Unraveling <br/> The Complexities <br/>
    Of Human Infertility
    </Heading>
      
      
      
    </Flex>







  </VStack>
  )
}

export default HomePage;