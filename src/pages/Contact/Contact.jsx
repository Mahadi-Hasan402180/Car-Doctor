

const Contact = () => {
    return (
        <div className="my-24">
         <h2 className="text-center border-blue-300 border-2 p-2 text-blue-700  text-6xl font-bold my-12">Contact Us</h2>

         <div className="">
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

    {/* meet us  */}
    <div className="text-center border-2 border-blue-100 p-4 ">
      <h1 className="text-3xl text-center border-y-blue-200 border-2 font-bold text-blue-700">Meet Us</h1>
      <p className="py-6 font-semibold">Phone: <br />01743531452</p>
      <p className="py-6 font-semibold">Email: <br /> mahadimhf@gmail.com</p>
      <p className="py-6 font-semibold">Address: <br /> kawla-1280,khilkhet,Dhaka,Bangladesh</p>
    </div>
           {/* contact  */}
    <div className="border-2 p-4 border-blue-100">
        <h2 className="text-3xl  font-bold text-center border-y-blue-200 border-2 text-blue-700">Contact</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

          {/* location */}
    <div className="border-2 p-4 border-blue-100">
        <h2 className="text-3xl text-center font-bold border-y-blue-200 border-2 text-blue-700 mb-8">Location</h2>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.1412052702985!2d90.42203067410387!3d23.84911908498167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c671012602eb%3A0x27761cc8da96b3b7!2sNorthern%20University%20Bangladesh%20(NUB)%2C%20Permanent%20Campus!5e0!3m2!1sen!2sbd!4v1713965309418!5m2!1sen!2sbd"
      //width="600"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    </div>

  </div>
</div>
         
        </div>
    );
};

export default Contact;