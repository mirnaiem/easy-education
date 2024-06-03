import { BsCameraVideoFill } from "react-icons/bs";
import { FaGem, FaMedal, FaPeopleRoof } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JoinUS = () => {
  return (
    <div className="relative my-32">
      {/* Background Image with Fixed Attachment */}
      <div
        className="absolute inset-0 w-full h-[600px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://ssipjalgaon.org/public/amenities/ac-seminar-hall-2.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-600 opacity-40"></div>
      </div>

      {/* Text Elements */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white h-[600px]">
        <h2 className="orelegaOne text-8xl text-center">Join us in the ECA আড্ডা</h2>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <span className="inline-flex justify-center items-center gap-2">
            <FaPeopleRoof size="20px" />
            Join a community to build more ECAs
          </span>
          <span className="inline-flex justify-center items-center gap-2">
            <BsCameraVideoFill size="20px" />
            Meet weekly once for an ECA meeting
          </span>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <span className="inline-flex justify-center items-center gap-2">
            <FaMedal size="20px" />
            Find new competitions and prepare for a global win
          </span>
          <span className="inline-flex justify-center items-center gap-2">
            <FaGem size="20px" />
            Become a lifetime member for only BDT.750/-
          </span>
        </div>
        <Link className="bg-white btn rounded-xl text-orange-500 mt-8">Register Now</Link>
      </div>
    </div>
  );
};

export default JoinUS;
