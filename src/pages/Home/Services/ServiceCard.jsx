import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const{_id,title,img,price} = service;
  return (
    <div className="card w-4/3   bg-base-100 shadow-xl">
      <figure>
        <div className="">
        <img
          src={img}
          alt="car"
        />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
       
          <div className="font-bold">{title}</div>
        </h2>
        <p className=" font-bold text-blue-600">Price: ${price}</p>
        <div className="card-actions">
            <Link to = {`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
            </Link>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceCard;
