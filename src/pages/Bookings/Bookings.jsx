import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-one-flame.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);


  const handleDelete = id =>{
    const proceed = confirm('are you sure want to delete');
    if(proceed){
      fetch(`https://car-doctor-server-one-flame.vercel.app/bookings/${id}`,{
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

   const handleBookingConfirm = id =>{
    fetch(`https://car-doctor-server-one-flame.vercel.app/bookings/${id}`,{
      method:'PATCH',
      headers:{

        'content-type':'application/json'

      },

      body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        //update state
        const remaining = bookings.filter(booking=>booking._id !==id);
        const updated = bookings.find(booking=>booking._id ===id);
        updated.status = 'confirm'
        const newBookings = [updated,...remaining];
        setBookings(newBookings);
        
      }
    })
   }

  return (
    <div>
      <h2 className="text-center  my-12 py-4 mt-4 border-2 mb-8 border-y-blue-300 text-4xl font-black text-blue-700 ">Your Bookings:{bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr className="text-xl text-green-600  border-rose-700 border-2 border-y-4">
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
                handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>)}
           
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
