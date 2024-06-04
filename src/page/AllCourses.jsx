import { useEffect, useState } from "react";
import SingleDashboardCourse from "../components/SingleDashboardCourse";

const AllCourses = () => {
 const [courses,setCourses]=useState([]);
 useEffect(()=>{
  fetch('https://easy-education-server.vercel.app/courses')
  .then((res)=>res.json())
  .then((data)=>setCourses(data))
 },[])
 const handleDelete=(id)=>{
  setCourses(courses.filter(course=>course._id !== id))
 }
 return (
  <div className="my-10"> <h1 className="text-5xl font-semibold text-center mb-10">Our All Courses</h1>
  <div className="grid grid-cols-3  gap-y-5  gap-10 w-[95%] mx-auto ">
  {courses.map(course => (
  <SingleDashboardCourse key={course._id} course={course} onDelete={handleDelete} />
))}
  </div></div>
 );

};

export default AllCourses;