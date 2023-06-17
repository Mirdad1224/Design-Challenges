import "./newsletter.css";
import sendarrow from "../../assets/images/send.svg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h3 className="newsletter-title">Subscribe to get the Latest News</h3>
      <p className="newsletter-desc">
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </p>
      <form className="newsletter-form">
        <input type="text" placeholder="Enter your email addres" />
        <button>
          <img src={sendarrow} alt="send" />
          <span>Subscribe</span>
        </button>
      </form>
    </section>
  );
};
export default Newsletter;
