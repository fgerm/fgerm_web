import { VStack, Text, Heading, Flex, Box,Link as ChakraLink} from '@chakra-ui/react';


const ContactPage = () => {
  return (
    <VStack color="cyan.600" alignItems="center" justifyContent="center" h="80vh"> 
    <Flex>  
      <Box>   
      <Heading size="4xl">Let's Chat</Heading>
      <ChakraLink href="mailto:bischoff@fgerm.org"> 
      <Text fontSize={"2.5rem"}>bischoff@fgerm.org</Text>
      </ChakraLink>
      </Box>



      
    </Flex>
    </VStack>
  )
}

export default ContactPage;