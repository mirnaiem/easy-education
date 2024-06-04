/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleCourse from "../components/SingleCourse";


// eslint-disable-next-line react/prop-types
const Courses = ({data}) => {

 const [courses,setCourses]=useState([]);
 useEffect(()=>{
  fetch('https://easy-education-server.vercel.app/courses')
  .then((res)=>res.json())
  .then((data)=>setCourses(data))
 },[])



console.log(data);
 return (
<div className="my-10"> <h1 className="text-5xl font-semibold text-center mb-10">our products</h1>
  <div className="flex  flex-wrap gap-y-5 text-center justify-center gap-10 ">
  {courses.slice(0,6).map(course => (
  <SingleCourse key={course.id} course={course} />
))}
  </div></div>
 );
};

export default Courses;