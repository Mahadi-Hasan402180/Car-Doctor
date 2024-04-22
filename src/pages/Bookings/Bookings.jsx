import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);


  const handleDelete = id =>{
    const proceed = confirm('are you sure want to delete');
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{console.log(data);
        if(data.deletedCount>0){
          alert('Deleted Successfully')
          const remaining = bookings.filter(booking=>booking._id !==id)
          setBookings(remaining);
        }

      
      })

      
    }
   }

  return (
    <div>
      <h2 className="text-3xl">Your Bookings:{bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Phone Number</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map(booking=><BookingRow

                key = {booking._id}
                booking = {booking}
                handleDelete ={handleDelete}
            ></BookingRow>)}
           
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
