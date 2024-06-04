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
   element:<Dashboard/>
  },
    {
   path:'users',
   element:<User/>
  },
    {
   path:'allcourses',
   element:<AllCourses/>,
  },
    {
   path:'addcourse',
   element:<AddCourse/>,
  },
    {
   path:'addblog',
   element:<AddBlog/>,
  },
  ]
   },
]);

export default router