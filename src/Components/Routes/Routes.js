import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from '../Pages/Home/Home'
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/review',
                element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addservice',
                element:<PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path:'/update/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])