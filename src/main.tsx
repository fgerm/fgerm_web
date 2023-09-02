import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'

import './index.css'
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from "./Routing/routes.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider   theme={theme} > 
    <App />
     {/* <RouterProvider router={router} />
    */}
    </ChakraProvider>
   
  </React.StrictMode>,
)
