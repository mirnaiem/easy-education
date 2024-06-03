import { Link } from "react-router-dom";


const Correction = () => {
 return (
  <div className="relative my-32">
      {/* Background Image with Fixed Attachment */}
      <div
        className="absolute inset-0 w-full h-[600px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBwZW58ZW58MHx8MHx8fDA%3D)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-600 opacity-40"></div>
      </div>

      {/* Text Elements */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white h-[600px]">
        <h2 className="orelegaOne text-8xl text-center">Deluxe Essay Correction <br /> Service </h2>
        <p className="text-center">What best way to impress admissions officers than write the best college essays possible?</p>
 
        
        <Link className="bg-white btn rounded-xl text-orange-500 mt-8 uppercase">Submit Your Eassy Now</Link>
      </div>
    </div>
 );
};

export default Correction;