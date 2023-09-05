import { Stack,Flex, Box,Slide,  Card, CardHeader, CardBody,Text,Heading, CardFooter, useDisclosure, Fade } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {

  const { isOpen, onToggle } = useDisclosure()


  return (
  <Stack  > 

  <Flex 
    h={ 
      {
        base:"100vh",
        sm:"80vh", 
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

    {/* <Card h="">  
      <CardHeader>
      <Heading size='md'>Client Report</Heading>
      </CardHeader>
      <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>

    </Card> */}
      <Box 
      outline="2px solid red"
      w={{
        base:"50%",
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

      noOfLines={3} bg="">
      <Heading as='h1' 
      size={ {
        base:"2xl",
        sm:"3xl",
        md:"2xl", 
        lg:"4xl" 
      }}


      color="#47a9cc">Precision Genome Engineering</Heading>  
      <Text w={{

      }} 
      noOfLines={3}
      > Welcome to a world where scientific rigor meets compassionate commitment,
      where each discovery is a step forward in understanding the intricacies of life</Text>
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
    
    
    
    
    
    <Box h="100vh" bg="green"> </Box>



  </Stack>
  )
}

export default HomePage