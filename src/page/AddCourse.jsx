import Swal from "sweetalert2";
const AddCourse = () => {

 const handleSubmit = async (e) => {
  const token=localStorage.getItem('token')
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const price = form.price.value;
  const description = form.description.value;
  const photo = form.photo.value;

  const product = {  title,  price, description, photo };

  const result = await Swal.fire({
    title: "Do you want add this product?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Add",
    denyButtonText: `Don't Add`
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch('https://easy-education-server.vercel.app/courses', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify(product)
      });

      const data = await response.json();
      console.log(data);

      Swal.fire("Added!", "", "success");
      form.reset();
    } catch (error) {
      Swal.fire("Error!", "There was an error adding the product.", "error");
      console.error('Error:', error);
    }
  } else if (result.isDenied) {
    Swal.fire("Product is not saved", "", "info");
  }
};
 return (
  <div className="p-5 bg-base-100 my-8">
   <h1 className="text-4xl font-semibold text-center mb-8">Add New Course </h1>
  <form onSubmit={handleSubmit} className="space-y-2 p-5 shadow-2xl bg-gray-400 rounded-xl">
   <label className="text-xl"> Title</label>
   <input className="p-4 border-0 border-none  w-full rounded-lg bg-slate-200" type="text" name="title" placeholder="title" />

   <label className="text-xl"> Price</label>
   <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="number" name="price" placeholder="price" />

   <label className="text-xl"> Description</label>
   <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="text" name="description" placeholder="description" />

   <label className="text-xl"> Photo URL</label>
   <input className="p-4 border-none border w-full rounded-lg bg-slate-200" type="text" name="photo" placeholder="phot url" />

   <input className="btn w-full btn-primary" type="submit" value="Add Course" />
  </form>
  </div>
 );
};

export default AddCourse;