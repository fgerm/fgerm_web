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
    xl:"0rem 4rem", 
    lg: "0 4rem", 
    md:"0 4rem",
    base:"0rem 1rem"
   }}
  >

  <Flex 
   bg="pink"
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
    
  alignItems="center"
  gap={{
    xl:"inherit", 
    lg:0,  
    md:1,
    base:3,   
  
  }}
   > 
  


  <VStack 
    bg="pink."
    alignItems="left"

    >
    
    <Heading as='h1' 
      fontSize={{
        xl:"5.5rem", 
        lg:"4rem", 
        md:"4rem", 
        sm:"4rem",
        base:"3rem",

      }}

      fontFamily="MuseoModerno"
      color="#47a9cc"
      bg="green"
      
      
      >Precision Genome Engineering</Heading>  
      
      <Text 
      bg="coral"
      w= {{
       
        lg:"26rem",
        sm:"20rem",
        md:"24rem", 
      
        base:"20rem"
        }} > 
      Welcome to a world where scientific rigor meets compassionate commitment,
      where each discovery is a step forward in understanding the intricacies of life...</Text>
      <Button bg="brand.500" color="white" w="100px">more</Button>
    </VStack>      
    
    <Box 
      overflow="hidden"
      bg="green"
      borderRadius="25rem"
      
      w={{
        xl:"45rem",
        lg: "40rem",
        md: "30rem",
        sm: "30rem",
        base: "25rem"


      }}

      minW={{
        xl:"40rem"
      }}
       
      maxW={ {
        xl:"55rem", 
        lg:"45rem",
        md:"35rem", 
        sm:"30rem",
        base:"20rem"
       }}
       
 
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
   
    gap="6"
    
    > 

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