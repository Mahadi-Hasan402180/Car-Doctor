
const ServiceCard = ({service}) => {
    const{title,img,price} = service;
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
        
      </div>
    </div>
  );
};

export default ServiceCard;
