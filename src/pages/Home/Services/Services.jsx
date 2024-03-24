import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="py-4 mt-4 text-5xl font-black text-blue-700">
          Our Service Area
        </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.
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
