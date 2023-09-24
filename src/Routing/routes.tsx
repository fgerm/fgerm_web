import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from '../components/pages/HomePage';
import AboutPage from "../components/pages/AboutPage";
import ContactPage from "../components/pages/ContactPage";
import NotFound from "../components/pages/NotFound";

const router = createBrowserRouter([
   
    {
        path:'/', 
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> }, 
            {path: 'about', element: <AboutPage/> }, 
            {path: 'contact', element: <ContactPage/> }, 
            {path: '*', element: <NotFound /> }
            // {path: '*', element: <NotFound /> }

        ]

    }
    


])


export default router; 