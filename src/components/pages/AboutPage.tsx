
import { Flex, Heading, VStack,  Text } from '@chakra-ui/react'
const AboutPage = () => {
  return (

    <VStack
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

      <VStack maxW={{
      md:"50ch", 
      lg:"60ch", 
      xl:"60ch"
     }}>   
    <Text 
     
     alignSelf="start"
     
    
    
     >
     
    FGERM, established in 2020 in partnership with NovoHelix, marks a significant leap
in reproductive medicine. We embarked on this journey to decode the secrets of human germ cell
development. By focusing on the processes from primordial germ cells to mature gametes, we aim to
offer new perspectives and solutions to infertility and developmental biology.
    </Text>
    <Text> 
        Research Areas and Goals: "Our research ambitiously addresses the intricate journey of human germ cells, focusing on their development into oocytes or sperm. We delve into the realms of embryogenesis and gametogenesis, aiming to shed light on the complex processes involved in human development. Our ultimate goals include addressing infertility, advancing reproductive health therapies, and offering groundbreaking insights into early human development." 
        </Text> 
        <Text>
Recent Breakthroughs: "Our team is achieving significant milestones, including the successful derivation of mature human-like oocytes from induced pluripotent stem cells. This breakthrough not only paves the way for novel infertility treatments but also opens the door to the creation of bespoke animal models to study totipotency, which can significantly advance research in reproductive medicine."
        </Text>
    <Text
    
    
    > 
    Our multidisciplinary team includes world-renowned scientists, researchers, and ethicists.
Their expertise spans genome engineering, reproductive medicine, and biomedical ethics. United in
our mission, we leverage our diverse backgrounds to pioneer breakthroughs in reproductive
medicine.

    </Text>



    </VStack>



    

  



    </Flex>


     

    </VStack>
  )
}

export default AboutPage