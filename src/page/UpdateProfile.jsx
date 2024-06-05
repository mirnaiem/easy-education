import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const token=localStorage.getItem('token')
 const info=useLoaderData();
 const email=info.email;
 const [name,setName]=useState(info?.name);
 const [age,setAge]=useState(info?.age);
 const [number,setNumber]=useState(info?.number);
 const [photo,setPhoto]=useState(info?.photo);
 const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const age = form.age.value;
  const number = form.number.value;
  const photo = form.photo.value;

  const userData = {  name,  age, number, photo, email:info?.email };
  console.log(userData);

  const result = await Swal.fire({
    title: "Do you want update this product?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Don't Update`
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`https://easy-education-server.vercel.app/users/${email}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log(data);

      Swal.fire("Updated!", "", "success");
      form.reset();
    } catch (error) {
      Swal.fire("Error!", "There was an error updating the product.", "error");
      console.error('Error:', error);
    }
  } else if (result.isDenied) {
    Swal.fire("Product is not updated", "", "info");
  }
};

 return (
  <div  className="p-5 bg-base-100 my-8">
  <h1 className="text-4xl font-semibold text-center mb-8">Update Your Profile </h1>
 <form onSubmit={handleSubmit} className="space-y-2 p-5 shadow-2xl bg-gray-400 rounded-xl">

  <label className="text-xl"> Name</label>
  <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" 
  value={name} 
  type="text" 
  name="name" 
  placeholder="name" 
  onChange={(e)=>setName(e.target.value)}/>

  <label className="text-xl"> Email</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="email" 
  defaultValue={info?.email} 
  name="email"
   placeholder="email"
  disabled
  />

  <label className="text-xl"> Age</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="text" 
  value={age} 
  name="age" 
  placeholder="age"
  onChange={(e)=>setAge(e.target.value)}/>
  <label className="text-xl"> Number</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="number" 
  value={number} 
  name="number" 
  placeholder="number"
  onChange={(e)=>setNumber(e.target.value)}/>

  <label className="text-xl"> Photo URl</label>
   <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
   type="text" 
   name="photo" 
   value={photo} 
   placeholder="photo url"
   onChange={(e)=>setPhoto(e.target.value)}/>

  <input className="btn w-full btn-primary" type="submit" value="Update Now" />
 </form>
 </div>
 );
};

export default UpdateProfile;