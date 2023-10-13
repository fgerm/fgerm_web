import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './Routing/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider   theme={theme} > 
    <RouterProvider router={router} />

    </ChakraProvider>
   
  </React.StrictMode>,
)
