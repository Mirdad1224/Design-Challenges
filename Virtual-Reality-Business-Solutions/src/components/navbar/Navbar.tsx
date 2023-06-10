import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Zone</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>
          <Button>Contact Us</Button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
