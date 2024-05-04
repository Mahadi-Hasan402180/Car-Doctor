import { Link } from "react-router-dom";


const AppointmentsRow = ({appointments,handleDelete}) => {
    const{ name,phone,service,date,time,_id} = appointments;
  return (
    <tr className=" border-rose-200 border-2 border-y-2"  >

        <Link to = {`/update/${appointments._id}`} >

        <button>
        <td className="text-blue-500 font-semibold text-base">Update</td>
        </button>

        </Link>
     
      <td className="text-lime-500 font-semibold text-base">{name}</td>
      <td className="text-blue-500 font-semibold text-base">{service}</td>
      <td className="text-cyan-500 font-semibold text-base">{phone}</td>
      <td className="text-amber-500 font-semibold text-base">{date}</td>
      <td className="text-orange-500 font-semibold text-base">{time}</td>
      <button onClick={()=>handleDelete(_id)}>
        <td className="text-red-500 font-semibold text-base">Delete</td>
      </button>
    </tr>
  );
};

export default AppointmentsRow;
