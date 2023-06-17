import "./footer.css";
import logo from "../../assets/images/logo.svg";
import location from "../../assets/images/Location.png";
import phone from "../../assets/images/Calling.png";
import message from "../../assets/images/Message.png";
import facebook from "../../assets/images/facebook-footer.png";
import twitter from "../../assets/images/twitter-footer.png";
import instagram from "../../assets/images/instagram.png";
import pinterest from "../../assets/images/pinterest.png";
import { footerData } from "../../data/footer-data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <img src={logo} alt="logo" />
            <span>Zone.</span>
          </div>
          <div className="footer-contact-item">
            <img src={location} alt="location" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="footer-contact-item">
            <img src={phone} alt="phone" />
            <span>0943833399</span>
          </div>
          <div className="footer-contact-item">
            <img src={message} alt="email" />
            <span>support@zone.com</span>
          </div>
          <div className="footer-social-item">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={pinterest} alt="pinterest" />
          </div>
        </div>
        <div className="footer-data">
          {footerData.map((columnData) => (
            <div className="footer-data-item">
              {columnData.map((title) => (
                <div>{title}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 Zone. - All rights reserved.</p>
        <div className="copyright-links">
          <span>Privacy</span>
          <span>Security</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
