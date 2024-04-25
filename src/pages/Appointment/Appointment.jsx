


const Appointment = () => {

    const handleAppointment = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const service = form.service.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
    
        const booking = {
         name,
          date,
          email,
          phone,
          service,
          price
          
        }
        console.log(booking);
        fetch('http://localhost:5000/appointment', {

      method:"POST",

      headers:{

        'content-type':'application/json'

      },

      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
       if(data.insertedId){
         alert('Data Inserted Successfully')
       }

    })

    }

  return (
    <div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h2 className="text-center  border-2 border-y-blue-200 text-blue-700  text-5xl font-bold my-8  p-6">
          Book an Car Appointment
        </h2>

        <form onSubmit={handleAppointment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                //defaultValue={user?.email}
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
                type="text"
                name="service"
                placeholder=" Service Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Charge</span>
              </label>
              <input
                type="price"
                placeholder="Service Charge"
                name="price"
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
              value=" Confirm Appointment"
            />
          </div>
        </form>

        <form className="card-body"></form>
      </div>
    </div>
  );
};

export default Appointment;
