

const BookingRow = ({booking}) => {
    const{CustomerName,price,service,CustomerPhone,email,date,img} = booking;
    return (
        <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>   
                </div>
              </td>

              <td>{service}</td>
              <td>{CustomerPhone}</td>
              <td>${price}</td>
              <td>{date}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Pending</button>
              </th>
            </tr>
    );
};

export default BookingRow;