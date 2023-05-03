import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [

            {
                path:'/',
                element: <Home></Home>

            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                
            }
            
        ]
    }
])

export default router;