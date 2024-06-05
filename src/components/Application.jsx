import { Bs0CircleFill, BsCameraVideoFill, BsQuestionCircleFill } from "react-icons/bs";
import { VscNotebookTemplate } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Application = () => {
 return (
  <div className="flex flex-col-reverse md:flex-row justify-between items-center my-40 gap-8 ">
   <div className="md:w-1/2">
    <h1 className=" text-2xl font-bold text-[#101010] md:text-5xl uppercase">College Application Flagship Course </h1>
    <p >In this course Dipro (your College Application Guru) guides you through every possible steps you need to know about studying abroad by spending a bunch of sleepless nights. So that you don’t have to do it.</p>
    <div className="my-5 flex gap-8 items-center">
    <i className="flex items-center justify-center bg-black text-white rounded-full p-2 w-16 h-16  text-xl font-bold">
      <Bs0CircleFill />
    </i>
     <div>
      <h1 className="text-2xl font-semibold">Organized</h1>
      <p>Detailed Step-By-Step Guideline to fill out application to top colleges</p>
     </div>
    </div>
    <div className="my-5 flex gap-8 items-center">
    <i className="flex items-center justify-center bg-black text-white rounded-full p-2 w-16 h-16  text-xl font-bold">
    <BsCameraVideoFill />
    </i>
     <div>
      <h1 className="text-2xl font-semibold">Fully Online</h1>
      <p>40+ videos and reading materials!</p>
     </div>
    </div>
    <div className="my-5 flex gap-8 items-center">
    <i className="flex items-center justify-center bg-black text-white rounded-full p-2  w-20 h-16  text-xl font-bold">
    <VscNotebookTemplate  />
    </i>
     <div>
      <h1 className="text-2xl font-semibold">Templates</h1>
      <p>Includes Templates for Recommendation Letters, and additional reading materials from various sources.</p>
     </div>
    </div>
    <div className="my-5 flex gap-8 items-center">
    <i className="flex items-center justify-center bg-black text-white rounded-full p-2 w-16 h-16  text-xl font-bold">
    <BsQuestionCircleFill />
    </i>
     <div>
      <h1 className="text-2xl font-semibold">Questions?</h1>
      <p>Quizzes to test your knowledge!</p>
     </div>
    </div>
    <Link className="uppercase btn bg-[#f56416] rounded-2xl text-white">View Courses</Link>
   </div>
   <div className="md:w-1/2">
    <img className="w-full rounded-full" src="https://www.shutterstock.com/image-photo/online-elearning-courses-offer-students-600nw-2346969385.jpg" alt="" />
   </div>
  </div>
 );
};

export default Application;