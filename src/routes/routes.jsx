import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import About from "../page/About";
import Courses from "../page/Courses";
import Service from "../page/Service";
import Event from "../page/Event";
import BLog from "../page/BLog";
import Login from "../page/Login";
import Register from "../page/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../page/Dashboard";
import User from "../page/User";
import AddCourse from "../page/AddCourse";
import AllCourses from "../page/AllCourses";
import AddBlog from "../page/AddBlog";
import SeeDetails from "../page/SeeDetails";
import UpdateCourse from "../page/UpdateCourse";
import UpdateProfile from "../page/UpdateProfile";
import Private from "./Private";

const router = createBrowserRouter([
 {
   path: "/",
   element: <MainLayout/>,
   children:[
    {
     path:'/',
     element:<Home/>
    },
    {
     path:'about',
     element:<About/>
    },
    {
     path:'course',
     element:<Courses/>
    },
    {
     path:'service',
     element:<Service/>
    },
    {
     path:'blog',
     element:<BLog/>
    },
    {
     path:'event',
     element:<Event/>
    },
    {
      path:'/details/:_id',
      element:<SeeDetails/>,
      loader:({params})=>fetch(`https://easy-education-server.vercel.app/courses/${params._id}`)
     },
    {
      path:'/updatecourse/:_id',
      element:<UpdateCourse/>,
      loader:({params})=>fetch(`https://easy-education-server.vercel.app/courses/${params._id}`)
     },
    {
     path:'login',
     element:<Login/>
    },
    {
     path:'register',
     element:<Register/>
    },
   ]
 },
 {
  path:'',
  element:<DashboardLayout/>,
  children:[
    {
   path:'dashboard',
   element:<Private><Dashboard/></Private>
  },
    {
   path:'dashboard/users',
   element:<Private><User/></Private>
  },
    {
   path:'dashboard/allcourses',
   element:<Private><AllCourses/></Private>,
  },
    {
   path:'dashboard/addcourse',
   element:<Private><AddCourse/></Private>,
  },
    {
   path:'dashboard/addblog',
   element:<Private><AddBlog/></Private>,
  },
    {
   path:'dashboard/updateprofile/:id',
   element:<Private><UpdateProfile/></Private>,
   loader:({params})=>fetch(`https://easy-education-server.vercel.app/users/get/${params.id}`)
  
  },
  ]
   },
]);

export default router