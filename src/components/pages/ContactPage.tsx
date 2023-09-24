import { VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react'

const ContactPage = () => {
  return (
    <VStack color="cyan.600" alignItems="center" justifyContent="center" h="100vh"> 

    <Heading size="4xl">Let's Chat</Heading>
    <Text fontSize={"2.5rem"}>fgerm@gmail.com</Text>
 
    </VStack>
  )
}

export default ContactPage;