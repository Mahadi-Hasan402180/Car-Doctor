import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
  const services = useLoaderData();
  const { title, _id, price, img } = services;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      CustomerName: name,
      date,
      email,
      img,
      price,
      service: title,
      serviceId: _id,
      CustomerPhone: phone,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          toast.success('Order Successfully Done!!',{position:'top-center',autoClose:2000,theme:"light"})
          form.reset();
       
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold my-6">
        Order Services Name -- {title}
      </h2>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>

      <form className="card-body"></form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
