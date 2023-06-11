import Button from "../button/Button";
import "./header.css";
import playButton from "../../assets/images/play.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="cta">
        <h1 className="header-title">Virtual Reality Business Solutions</h1>
        <p className="header-description">
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </p>
        <div className="cta-buttons">
          <Button>Join Us</Button>
          <div className="play-button">
            <img src={playButton} alt="Play Button" />
            <span>Watch video</span>
          </div>
        </div>
      </div>
      <div className="header-image"></div>
    </header>
  );
};
export default Header;
