
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
        <div className=''>
          <footer className="footer  mt-16 p-10 bg-black  text-white">
  <aside>
    <img src={logo} alt="" />
    <p>Car-doctor Industries Ltd.<br/>Providing reliable tech since 2000</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link to='/' className="link link-hover">Branding</Link>
    <Link to='/' className="link link-hover">Marketing</Link>
    <Link to='/' className="link link-hover">Design</Link>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link to='/about' className="link link-hover">About us</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/' className="link link-hover">Jobs</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
        </footer>
        </div>
    );
};

export default Footer;