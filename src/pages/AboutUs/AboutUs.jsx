const AboutUs = () => {
  return (
    <div>
        <h2 className="text-center border-2 border-y-blue-200 text-blue-700  text-5xl font-bold my-8">Meet Our Team</h2>
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/6RTXCTX/438267546-797529415243255-7259249411915932051-n.jpg"
            alt="man"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-blue-700">Mahadi Hasan</h2>
          <p className="text-red-900 font-semibold">ID:41220100042</p>
          <h2 className="text-orange-700 font-semibold">Code Writer</h2>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/tPv9Pv2/437190466-1958811067897033-3973144970492304390-n.jpg"
            alt="man"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-blue-700 ">Md.Saddam Hossain</h2>
          <p className="text-red-900 font-semibold">ID:41220100035</p>
          <h2 className="text-orange-700 font-semibold">Code Writer</h2>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/hBBmYPh/437110863-988126179598382-1246928137702137829-n.jpg"
            alt="man"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-blue-700 ">Md.Rasel Talukder</h2>
          <p className="text-red-900 font-semibold">ID:41220100039</p>
          <h2 className="text-orange-700 font-semibold">Code Writer</h2>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/XkvGrBj4/siam.jpg"
            alt="man"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-blue-700 ">Sheike Shiam Sharif</h2>
          <p className="text-red-900 font-semibold">ID:41220100032</p>
           <h2 className="text-orange-700 font-semibold">UI/UX designer</h2>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/QDgGvJd/istockphoto-1218623873-1024x1024.jpg"
            alt="man"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-blue-700 ">Sanda Khatun</h2>
          <p className="text-red-900 font-semibold">ID:41220100050</p>
          <h2 className="text-orange-700 font-semibold">UI/UX designer</h2>
        </div>
      </div>

    </div>
    </div>
  );
};

export default AboutUs;
