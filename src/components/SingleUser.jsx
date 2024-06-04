/* eslint-disable react/prop-types */

const SingleUser = ({user}) => {
 const {name,email}=user;
 console.log(user);
 return (
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
      
      <tr>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
            <div>
              <div className="font-bold"></div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
        </td>
        <td>Purple</td>
      </tr>
      
     
    </tbody>
  
  
    
  </table>
</div>
 );
};

export default SingleUser;