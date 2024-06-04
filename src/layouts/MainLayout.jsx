import { Outlet } from "react-router-dom";
import NavBar from "../page/NavBar";
import Footer from "../page/Footer";

const MainLayout = () => {
 return (
  <div className="flex flex-col min-h-screen font-serif">
  <NavBar />
  <div className="flex-grow">
    <Outlet />
  </div>
  <Footer />
</div>
 );
};

export default MainLayout;