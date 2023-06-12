import "./vr.css";
import man1 from "../../assets/images/man1.png";
import man2 from "../../assets/images/man2.png";
import Button from "../button/Button";

const VRData = () => {
  return (
    <section className="vr-wrapper">
      <div className="vr-data">
        <img src={man1} className="vr-image" alt="vr description" />
        <div className="vr-desc">
          <h2>We complete every projects extra care as customer need</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.{" "}
          </p>
          <Button>Read more</Button>
        </div>
      </div>
      <div className="vr-data">
        <div className="vr-desc">
          <h2>We complete every projects extra care as customer need</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.{" "}
          </p>
          <Button>Read more</Button>
        </div>
        <img className="vr-image" src={man2} alt="vr description" />
      </div>
    </section>
  );
};
export default VRData;
