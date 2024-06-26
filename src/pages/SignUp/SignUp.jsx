
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const{createUser}=useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password)

        createUser(email,password)
         .then(result =>{
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2 lg:text-left">
            
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body"> 
            <h1 className="text-4xl text-center font-bold text-[#FF3811]">Sign Up</h1>

              {/* <form onSubmit={handleSignUp}> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Sign Up" />
              </div>
              {/* </form> */}
              <p className='text-center my-4 font-semibold'>Already Have An Account? <Link className='text-[#FF3811] font-bold' to="/login">Login</Link></p>
              </form> 
          </div>
        </div>
        </div>
    );
};

export default SignUp;