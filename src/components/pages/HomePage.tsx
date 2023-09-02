import { Stack,Flex, Box,Slide,  Card, CardHeader, CardBody,Text,Heading, CardFooter, useDisclosure, Fade } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {

  const { isOpen, onToggle } = useDisclosure()


  return (
  <Stack  > 
  <Flex 
    h="100vh"
    //////////////////////////////////////////// bg="pink"
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
      <Box  w="50%"  noOfLines={3} bg="">
      <Heading as='h1' size="4xl" lineHeight="" color="#47a9cc">Precision Genome Engineering</Heading>  
      <Text w="60ch" noOfLines={3}> Welcome to a world where scientific rigor meets compassionate commitment,
where each discovery is a step forward in understanding the intricacies of life</Text>
      </Box>
    
  
      <Box w="25%" aspectRatio="1/1" bg="blue"
      borderRadius="50%"
      // background="url(https://pixabay.com/photos/biology-research-laboratory-science-220005/)"
      ></Box>
  
    </Flex>
    
    
    
    
    
    <Box h="100vh" bg="green"> </Box>



  </Stack>
  )
}

export default HomePage