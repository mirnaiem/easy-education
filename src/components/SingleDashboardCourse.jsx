
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleDashboardCourse = ({ course, onDelete }) => {
  const { _id, title,  description, photo, price } = course;

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        const response = await fetch(`https://easy-education-server.vercel.app/courses/${_id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete the item');
        }

        const data = await response.json();
        onDelete(id);
        console.log(data);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem deleting your file.",
        icon: "error"
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="w-full h-[300px]" src={photo} alt="Shoes" /></figure>
      <div className="card-body text-start">
        <h2 className="card-title font-bold">{title}</h2>
        <p><span className="xl font-bold">Price:</span> ${price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/updatecourse/${_id}`} className="btn bg-[#014dcf] text-white">Edit</Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
          <Link to={`/details/${_id}`} className="btn bg-[#01cf87] text-white">See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDashboardCourse;
