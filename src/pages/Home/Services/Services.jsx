import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://car-doctor-server-one-flame.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="py-4 mt-4 border-2 mb-2 border-y-blue-300 text-5xl font-black text-blue-700">
          Top Service Area
        </h2>
        <p className="font-semibold">
        Experience unparalleled automobile services at Car-Doctor! From maintenance to repairs, our expert team ensures top-notch <br /> quality and customer satisfaction. Your vehicle deserves the best
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {
            services.map(service=><ServiceCard
           Key = {service._id}
           service = {service} 
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
