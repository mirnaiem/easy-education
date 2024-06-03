import { Link } from "react-router-dom";

const NavBar = () => {
 return (
  <div className="navbar w-[90%] mx-auto bg-base-100 fixed z-10 top-0 left-16">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className="text-xl" to='/about'>About Us</Link></li>
        <li><Link className="text-xl" to='/course'>Courses</Link></li>
        <li>
        <Link className="text-xl" to='/service'>Services</Link>
          <ul className="p-2">
            <li><Link>Sat</Link></li>
            <li><Link>Essay Correction</Link></li>
          </ul>
        </li>
        <li><Link className="text-xl" to="/blog">BLog</Link></li>
        <li><Link className="text-xl" to="/event">Event</Link></li>
      </ul>
    </div>
    <img className="w-20 h-20 border-blue-500 border rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSTmn83W_oZhFASeT09nGKYDQeljZZI3V4A&s" alt="" />
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal  px-1">
    <li><Link className="text-xl" to='/about'>About Us</Link></li>
        <li><Link className="text-xl" to='/course'>Courses</Link></li>
        <li>
        <Link className="text-xl" to='/service'>Services</Link>
    
        </li>
        <li><Link className="text-xl" to="/blog">BLog</Link></li>
        <li><Link className="text-xl" to="/event">Event</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <Link to='/consultation' className="btn bg-[#101010]  text-white ">Free Consultation</Link>
    <Link to='/login' className="btn bg-[#f56416]  text-white">Login</Link>
  </div>
</div>
 );
};

export default NavBar;