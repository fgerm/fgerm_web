
import { Flex, Heading, VStack,  Text } from '@chakra-ui/react'
const AboutPage = () => {
  return (

    <VStack h="100vh"
    padding= {{
      base:"4rem 1rem",
      lg:"4rem 2rem"
      
    }}
    // paddingY={{
    //   base:"0rem", 
    //   lg:"6rem"}}
    >  

        


     
    <Flex 
   
    w="100%"



    direction= {{ 
      base:"column", 
      sm:"column", 
      md:"row", 
    }}
    justifyContent="space-evenly"
    > 
    
    
    
    <Heading 
    lineHeight="1.0"
    fontSize={{
    base:"3.5rem",
    lg:"8rem"}}
    textAlign="left"
    fontFamily="MuseoModerno"
    color="#47a9cc"
    >Embarking <br/>
    on the <br/>
    Genomic <br/>
    Quest


    </Heading>


    <Text 
     
     alignSelf="start"
     
     w={{
      
      base:"100%",
      lg:"50%"}}
     lineHeight="2.0"
     maxW={{
      md:"50ch", 
      lg:"60ch", 
      xl:"60ch"


     }}>
     
    Welcome to a world where scientific rigor meets compassionate commitment, where each discovery is a step forward in understanding the intricacies of lifeWelcome to a world where scientific rigor meets compassionate commitment,  where each discovery is a step forward in understanding the intricacies of lifeWelcome to a world where scientific rigor meets compassionate commitment, where each discovery is a step forward in understanding the intricacies of lifeWelcome to a world where scientific rigor meets compassionate commitment,  
    </Text>



    

  



    </Flex>


     

    </VStack>
  )
}

export default AboutPage