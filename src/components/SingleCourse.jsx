/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleCourse = ({course}) => {
  const {_id,title,description,photo,price}=course;
 return (
  <>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title font-bold">{title}</h2>
    <p><span className="xl font-bold">Price:</span> ${price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#01cf87] text-white"><Link to={`/details/${_id}`}>See Details</Link></button>
      <button className="btn bg-red-500 text-white">Buy Now</button>
    </div>
  </div>
</div></>
 );
};

export default SingleCourse;