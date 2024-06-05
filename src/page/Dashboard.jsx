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
<div className="w-full md:w-[90%] h-full md:h-[90%] flex flex-col items-center justify-center p-4"> 
  <h1 className="text-xl md:text-2xl mb-3 font-bold">Profile Information</h1> 
  <div className="shadow-2xl w-full md:w-1/2 h-auto md:h-1/2 rounded-2xl p-4"> 
    <div className="flex flex-col justify-center items-center h-auto md:h-[80%]"> 
      <img className="w-24 md:w-1/3 rounded-full mb-4" src={user?.photoURL} alt="" /> 
      <h1 className="text-lg md:text-2xl">Name: {userInfo?.name}</h1> 
      <p className="text-base md:text-xl">Email: {userInfo?.email}</p> 
    </div>
    <div className="flex justify-end pe-4 mt-4 md:mt-0"> 
      <Link className="btn bg-[#f56416] text-white font-bold" to={`/dashboard/updateprofile/${userInfo?._id}`}>Update Profile</Link>
    </div>
  </div>
</div>

  
 );
};

export default Dashboard;