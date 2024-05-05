import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateAppo = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);

    const handleUpdateAppointment = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const service = form.service.value;
        console.log(name,date,phone,email,service);

        const updateAppointmentUser = {name,date,phone,email,service};

        fetch(`https://car-doctor-server-dusky-theta.vercel.app/appointments/${loadedData._id}`,{
      method:'PUT',
      headers:{

        'content-type':'application/json'

      },

      body: JSON.stringify(updateAppointmentUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        toast.success('Updated Successfully!!',{position:'top-center',autoClose:2000,theme:"light"})
        
     
      }
      
    })

        
    }
    return (
        <div>
           <div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h2 className="text-center  border-2 border-y-blue-200 text-blue-700  text-5xl font-bold my-8  p-6">
          Update An Appointment
        </h2>
          
        {/* onSubmit={handleUpdateAppointment} */}
        <form  onSubmit={handleUpdateAppointment}  >
          <from></from>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={loadedData?.name}
                placeholder=" name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
              
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={loadedData?.date}
                placeholder="Service Date"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
              
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={loadedData?.email}
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
               defaultValue={loadedData?.phone}
                type="number"
                placeholder="Phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
              defaultValue={loadedData?.service}
                type="text"
                name="service"
                placeholder=" Service Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                placeholder="Service Charge"
                defaultValue={loadedData?.time}
                name="time"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="my-10">
            <textarea
              placeholder="Your massage"
              type ="text"
              name ="deals"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value=" Update Appointment"
            />
          </div>
        </form>

        <form className="card-body"></form>
      </div>
      <ToastContainer />
    </div>
        </div>
    );
};

export default UpdateAppo;