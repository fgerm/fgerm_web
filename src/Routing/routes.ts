import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../components/pages/AboutPage";
import HomePage from "../components/pages/HomePage";


const router = createBrowserRouter([

    {
        path: '/', 
        element: <Layout /> , 
        children: [

            { path: '', element: <HomePage /> }, 
            
            {path: 'about', element: <AboutPage/> }, 
        

            {path: 'contact', element: <ContactPage/> }, 

            {path: '*', element: <NotFound /> }

        ] 
}









]) ;





export default router;