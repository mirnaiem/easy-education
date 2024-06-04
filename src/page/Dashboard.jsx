import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";



const Dashboard = () => {
 const {user}=useAuth()
 const [user,setUser]=useState([])

 return (
  <div className="shadow-2xl w-1/2 h-1/2  rounded-2xl ">
  <div className="flex flex-col justify-center items-center h-[80%] ">
  <img className="w-1/3 rounded-full" src={user?.photoURL} alt="" />
  <h1 className="text-2xl">Name: {user?.displayName}</h1>
  <p className="text-xl">Email: {user?.email}</p>
  </div>
  
   
   <div className=" flex justify-end pe-4">
    <Link className="btn bg-[#f56416] text-white text-bold " to='/dashboard/updateprofile'>Update Profile</Link></div>
   
   
  </div>
  
 );
};

export default Dashboard;