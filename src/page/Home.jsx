import Application from "../components/Application";
import Banner from "../components/Banner";
import Correction from "../components/Correction";
import Enroll from "../components/Enroll";
import JoinUS from "../components/JoinUS";
import Team from "../components/Team";

const Home = () => {
 return (
  <div >
  <div className="w-[85%] mx-auto"> <Banner/></div>
  <div className="w-[85%] mx-auto"><Application/></div> 
   <div className="w-[85%] mx-auto"><Enroll/></div>
   <JoinUS/>
   <div className="w-[85%] mx-auto"><Team/></div>
   <Correction/>
  </div>
 );
};

export default Home;