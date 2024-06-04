import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";



const Dashboard = () => {
 const {user}=useAuth();
 const [userInfo,setUserInfo]=useState();
 useEffect(()=>{
  fetch(`https://easy-education-server.vercel.app/users/${user?.email}`)
  .then((res)=>res.json())
  .then((data)=>setUserInfo(data))
 },[user])
 console.log(userInfo);
 return (
  <div className="shadow-2xl w-1/2 h-1/2  rounded-2xl ">
  <div className="flex flex-col justify-center items-center h-[80%] ">
  <img className="w-1/3 rounded-full" src={user?.photoURL} alt="" />
  <h1 className="text-2xl">Name: {userInfo?.name}</h1>
  <p className="text-xl">Email: {userInfo?.email}</p>
  </div>
  
   
   <div className=" flex justify-end pe-4">
    <Link className="btn bg-[#f56416] text-white text-bold " to={`/dashboard/updateprofile/${userInfo?._id}`}>Update Profile</Link></div>
   
   
  </div>
  
 );
};

export default Dashboard;