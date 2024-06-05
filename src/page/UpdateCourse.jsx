import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCourse = () => {
  const token=localStorage.getItem('token')
 const data=useLoaderData();
 const id=data._id
 const [title,setTitle]=useState(data.title);
 const [price,setPrice]=useState(data.price);
 const [description,setDescription]=useState(data.description);
 const [photo,setPhoto]=useState(data.photo);
 const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const price = form.price.value;
  const description = form.description.value;
  const photo = form.photo.value;

  const course = {  title,  price, description, photo };

  const result = await Swal.fire({
    title: "Do you want update this product?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Don't Update`
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`https://easy-education-server.vercel.app/courses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify(course)
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
  <h1 className="text-4xl font-semibold text-center mb-8">Update Product </h1>
 <form onSubmit={handleSubmit} className="space-y-2 p-5 shadow-2xl bg-gray-400 rounded-xl">

  <label className="text-xl"> Title</label>
  <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" 
  value={title} 
  type="text" 
  name="title" 
  placeholder="title" 
  onChange={(e)=>setTitle(e.target.value)}/>

  <label className="text-xl"> Price</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="number" 
  value={price} 
  name="price"
  placeholder="price" 
  onChange={(e)=>setPrice(e.target.value)}/>

  <label className="text-xl"> Description</label>
  <input className="p-4 border-none border w-full rounded-lg bg-slate-200" 
  type="text" 
  value={description} 
  name="description" 
  placeholder="description"
  onChange={(e)=>setDescription(e.target.value)}/>

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

export default UpdateCourse;