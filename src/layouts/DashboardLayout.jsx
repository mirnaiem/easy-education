
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const DashboardLayout = () => {
  const {user}=useAuth()
 return (
  <div className="drawer lg:drawer-open font-serif">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    
    <Outlet/>
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#f56416] text-base-content">
      {/* Sidebar content here */}
      <div className="mx-auto my-14 ">
      <img className="rounded-full w-[150px] " src={user?.photoURL} alt="this is image" />
      <h1 className="text-3xl text-white mt-2 text-center">{user?.displayName}</h1>
      </div>

      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/dashboard'>Profile</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/'>Home</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/users'>All User</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/allcourses'>All Courses</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg "><Link  to='/addcourse'>Add Course</Link></li>
      <li className="text-center text-xl text-white hover:bg-slate-400 hover:rounded-lg  "><Link to='/addblog'>Add Blog</Link></li>
    </ul>
  
  </div>
</div>
 );
};

export default DashboardLayout;