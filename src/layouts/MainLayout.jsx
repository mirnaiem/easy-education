import { Outlet } from "react-router-dom";
import NavBar from "../page/NavBar";
import Footer from "../page/Footer";

const MainLayout = () => {
 return (
  <div className="font-serif">
   <NavBar/>
   <Outlet/>
   <Footer/>
  </div>
 );
};

export default MainLayout;