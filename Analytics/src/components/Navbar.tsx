import logo from "../assets/logo-header.png";
import menu from "../assets/menu-icon.svg";

interface BackDropProps {
  isSidebarOpen: boolean;
  onToggle: () => void;
}

const Navbar = ({ isSidebarOpen, onToggle }: BackDropProps) => {
  
  return (
    <nav className="bg-dark-blue">
      <div className="flex items-center container justify-between shadow-[#12214D] shadow-md py-5 px-3">
        <div className="flex items-center gap-10">
          <img className="h-7" src={logo} alt="Logo" />
          <ul
            className={`text-semidark-blue flex gap-9 justify-self-start ${
              isSidebarOpen
                ? "flex-col lg:flex-row absolute lg:relative bg-gray-800 right-0 top-0 bottom-0 w-60 lg:w-auto px-6 py-10 lg:p-0 z-20"
                : "hidden lg:flex"
            }`}
          >
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between gap-6">
          <a href="#" className="text-semidark-blue">
            Sign in
          </a>
          <a
            href="#"
            className="text-semidark-blue hidden lg:block border border-[#456b95] rounded-3xl px-10 py-2"
          >
            Sign Up
          </a>
          <img
            onClick={() => onToggle()}
            className={`cursor-pointer lg:hidden ${isSidebarOpen && 'hidden'}`}
            src={menu}
            alt="Menu Icon"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
