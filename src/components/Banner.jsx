import { Link } from "react-router-dom";

const Banner = () => {
 return (
  <div className="flex flex-col-reverse md:flex-row justify-between items-center  lg:my-20 lg:mt-56">
   <div className="md:w-1/2">
    <h1 className=" text-3xl font-bold text-[#101010] md:text-8xl">UNLOCK YOUR FUTURE</h1>
    <p className="my-4">Studying abroad extends far beyond academics, it’s a journey into <br /> diverse cultures and perspectives. We help you in selecting and <br /> applying to your dream universities, customized to match your interests <br /> and aspirations.</p>
    <div className="  md:space-x-4">
     <Link className="uppercase btn bg-[#101010]  text-white">View Courses</Link>
     <Link className="uppercase btn bg-[#f56416] text-white">Prep For Sat!</Link>
    </div>
   </div>
   <img className="md:w-[70%] rounded-xl" src="https://cdn.jostens.com/contentAsset/image/d1e208e0-3575-4ac8-8e50-2af45d0fe827/fileAsset/filter/Crop,Scale,Jpeg/crop_w/450/crop_h/225/crop_x/0/crop_y/0/scale_w/450/scale_h/225/jpeg_q/85/jpeg_p/1/3f100389-878b-49a7-9b6f-89f6dff14272.jpg" alt="" />
  </div>
 );
};

export default Banner;