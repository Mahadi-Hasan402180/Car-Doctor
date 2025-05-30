import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext); // make sure googleSignIn is provided in context
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => console.log(error));
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state?.from?.pathname || '/');
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-12 w-1/2 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl text-center font-bold text-[#FF3811]">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>

                        <p className='text-center my-4 font-semibold'>
                            New To Car Doctor? <Link className='text-[#FF3811] font-bold' to="/signUp">Sign-Up</Link>
                        </p>

                        <div className="divider">OR</div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-error"
                        >
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
