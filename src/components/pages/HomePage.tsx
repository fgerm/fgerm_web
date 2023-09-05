import { Stack,Flex, Box, Button, Slide,  Card, CardHeader, CardBody,Text,Heading, CardFooter, useDisclosure, Fade, VStack } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {




  return (
  <Stack  > 

  <Flex 
    h={ 
      {
        base:"auto",
        sm:"auto", 
        md:" 70vh", 
        lg:"100vh"
      }
    }
    //////////////////////////////////////////// bg="pink"
    direction={{
      base:"column-reverse", 
      sm:"column-reverse",
      md:"row",
      lg:"row"
    }}
    justifyContent="center"
    alignItems="center"
    > 
    <Box 
      outline="2px solid red"
      w={{
        base:"90%",
        sm:"80%",
        md:"48%", 
        lg:"50%"
      }} 
      margin={{ 
        base: "1rem", 
        sm:"1rem", 
        md:"inherit",
        lg:"inherit"
      }}

      noOfLines={3} >
      <Heading as='h1' 
      size={ {
        base:"3xl",
        sm:"3xl",
        md:"2xl", 
        lg:"4xl" 
      }}


      color="#47a9cc">Precision Genome Engineering</Heading>  
      <Text 
      
      marginTop="1.5rem"
      w={{
        base:"50ch",
        sm: "60ch",
        md:"60ch",
        lg:"45ch"
      }} 
      noOfLines={3}
      > Welcome to a world where scientific rigor meets compassionate commitment,
      where each discovery is a step forward in understanding the intricacies of life</Text>
      <Button>more</Button>
      </Box>      
    
      <Box
      
      outline="2px solid green"
      w={{
        base:"60%",
        sm:"50%",
        md:"30%",
        lg:"30%"
      }} 
      aspectRatio="1/1" bg="blue"
      borderRadius="50%"
      // background="url(https://pixabay.com/photos/biology-research-laboratory-science-220005/)"
      ></Box>
  
    </Flex>
    

    {/* /////////////// section 2 ///////////////////*/}
    
    
    
    
    <Flex
    outline="2px solid green"
    position="relative"

    direction={ {
      base:"column-reverse",
      sm:"column-reverse",
      md:"row",
      lg:"row"
    }}

    alignItems="center"
    justifyContent="center"

    padding={{
      base:"5rem 0.5rem",
      sm:"5rem 0.5rem",
      md: "5rem 5rem",
      lg:"5rem 10rem"
    }}
    >
    <VStack w={{
      base:"50%",
      sm:"80%", 
      md: "50%",
      lg:"50%"
    }}  gap="10"> 
    <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 1</Heading>
        <Text w="50ch">Welcome to a world where scientific 
        rigor meets compassionate commitment,
        where each discovery is a step forward in 
        understanding the intricacies of life </Text>
      </Box>
      <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 2</Heading>
        <Text w="50ch">Welcome to a world where scientific 
        rigor meets compassionate commitment,
        where each discovery is a step forward in 
        understanding the intricacies of life </Text>
      </Box>
      <Box> 
        <Heading size="lg" color="#47a9cc"> Heading 3</Heading>
        <Text w="50ch">Welcome to a world where scientific 
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
    outline="2px solid red"
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




    <Stack h="100vh" bg="pink"> 

    </Stack>



  </Stack>
  )
}

export default HomePage