import { useEffect, useState } from "react";
import SingleUser from "../components/SingleUser";

const User = () => {
 const [users,setUsers]=useState([]);
 useEffect(()=>{
  fetch('https://easy-education-server.vercel.app/users')
  .then((res)=>res.json())
  .then((data)=>setUsers(data))
 },[])
 return (
  <div>
   <thead className="table">
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
   {users.map(user=><SingleUser key={user._id} user={user} />)}
  
  </div>
 );
};

export default User;