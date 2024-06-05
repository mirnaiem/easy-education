/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import SingleCourse from "../components/SingleCourse";


// eslint-disable-next-line react/prop-types
const Courses = () => {

 const [courses,setCourses]=useState([]);
 const [search,setSearch]=useState('')
 const searchRef=useRef(null);
 useEffect(()=>{
  fetch(`https://easy-education-server.vercel.app/courses?search=${search}`)
  .then((res)=>res.json())
  .then((data)=>setCourses(data))
 },[search])

const handleSearch=()=>{
  console.log(searchRef.current.value);
  setSearch(searchRef.current.value)
}


 return (
<div className="mt-24"> <h1 className="text-5xl font-semibold text-center mb-10">Our Courses</h1>
<div className="join mb-5 ml-5">
  <div>
    <div>
      <input className="input input-bordered join-item" type="text" ref={searchRef} placeholder="Search"/>
    </div>
  </div>
  <div className="indicator">
    <button onClick={handleSearch} className="btn join-item">Search</button>
  </div>
</div>
  <div className="flex  flex-wrap gap-y-5 text-center justify-center gap-10 ">
  {courses.slice(0,6).map(course => (
  <SingleCourse key={course.id} course={course} />
))}
  </div></div>
 );
};

export default Courses;