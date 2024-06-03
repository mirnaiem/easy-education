import { Link } from "react-router-dom";

const Enroll = () => {
 return (
  <div className="flex justify-between gap-20 items-center my-28">
   <div className="w-1/2">
    <img className='w-full rounded-xl' src="https://opportunitydesk.org/wp-content/uploads/2024/02/Global-Health-Corps-U.S.-Fellowship-2024-2025.jpg" alt="" />
   </div>
   <div className="w-1/2">
    <h1 className=" text-2xl font-bold text-[#101010] md:text-5xl uppercase">Fall 2025
     Cohort</h1>
     <p>Last year we celebrated with our students who have received acceptances from over 100+ colleges. It’s time for you to stand out in the crowd.</p>
     <Link className="uppercase mt-5 btn bg-[#f56416] rounded-2xl text-white">Sign Up</Link>
   </div>
  </div>
 );
};

export default Enroll;