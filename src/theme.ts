import { extendTheme, ThemeConfig } from '@chakra-ui/react'




const config :ThemeConfig = {

  initialColorMode:'light',
  useSystemColorMode:false,



}







const colors = {
  light : {
    primary: '#f5b042',
    secondary: '#8c8c8c',
    }, 
    dark: {
        // Customize dark mode colors here
        primary: '#6e8ab5',
        secondary: 'red',
        bg: "red",
        // ...other colors
    brand: {
            50: '#f5fafd',
            100: '#dbebfd',
            200: '#b3e1fa',
            300: '#8ac7f7',
            400: '#62adf3',
            500: '#4287f5',
            600: '#3366d6',
            700: '#2545aa',
            800: '#172e7d',
            900: '#09114f',
          }, 
    
    },
  }



const theme = extendTheme({
  config, 
  colors, 
  fonts: {
    body: "'Open Sans', sans-serif",

    heading: "'Open Sans', sans-serif",
    
  },
  fontWeights: {
    light: 300, // Use the desired font weight value
    regular:400, 
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold:800
  }

})










export default theme;