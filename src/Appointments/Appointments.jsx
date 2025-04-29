import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import AppointmentsRow from "./AppointmentsRow";

const Appointments = () => {


  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('https://car-doctor-server-one-flame.vercel.app/appointment')
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);


  const handleDelete = id =>{
    const proceed = confirm('are you sure want to delete');
    if(proceed){
      fetch(`https://car-doctor-server-one-flame.vercel.app/appointment/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{console.log(data);
        if(data.deletedCount>0){
          
          toast.success('Deleted Successfully!!',{position:'top-center',autoClose:2000,theme:"light"})
          const remaining = appointments.filter(appointment=>appointment._id !==id)
          setAppointments(remaining);
        }

      
      })

      
    }
   }

   

  return (
    <div>
       <h2 className="text-center  my-12 py-4 mt-4 border-2 mb-8 border-y-blue-300 text-4xl font-black text-blue-700">Booking Appointment : {appointments.length} Peoples</h2>
       <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr className="text-xl text-green-600  border-rose-700 border-2 border-y-4">
        <th>Update Information</th> 
        <th>Name</th> 
        <th>Service</th> 
        <th>Phone</th> 
        <th>Date</th> 
        <th>Time</th> 
        <th>Delete</th>
      </tr>
    </thead> 

    <tbody>
    {
            appointments.map(appointments=><AppointmentsRow
           Key = {appointments._id}
           appointments = {appointments} 
           handleDelete = {handleDelete}
            ></AppointmentsRow>)
    }
    </tbody>

    </table>
    </div> 
    <ToastContainer />
    </div>
  );
};

export default Appointments;