import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const naveItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/appointments">Bookings Appointments</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      

      {user?.email ? (
        <>
          <li><Link to="/bookings">Order Service</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/damage">Damage Body</Link></li>
          
          <li><button onClick={handleLogOut}>Log out</button></li>
        </>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </>
  );

  return (
    <div className="navbar text-blue-600 font-semibold bg-base-100 h-20 mb-12 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naveItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg justify-items-center menu-horizontal px-1">
          {naveItems}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <Link to="/appointment" className="btn btn-outline btn-primary">Appointment</Link>

        {/* User Image */}
        {user?.photoURL && (
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-full h-full object-cover"
              title={user.displayName || "User"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
