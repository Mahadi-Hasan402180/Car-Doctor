import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        console.log(name, email, password, image);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log('Google user:', user);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-12 w-1/2 lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl text-center font-bold text-[#FF3811]">Sign Up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                        </div>

                        {/* Image URL input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Image URL</span>
                            </label>
                            <input 
                                type="text" 
                                name="image"
                                placeholder="Paste Image URL" 
                                className="input input-bordered" 
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>

                        <div className="form-control mt-4">
                            <input className="btn btn-error" type="submit" value="Sign Up" />
                        </div>

                        <p className='text-center my-4 font-semibold'>
                            Already Have An Account? <Link className='text-[#FF3811] font-bold' to="/login">Login</Link>
                        </p>

                        <div className="divider">OR</div>

                        <button
                            type="button"
                            onClick={handleGoogleSignUp}
                            className="btn btn-outline btn-error"
                        >
                            Sign Up with Google
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
