import "./service.css";
import { serviceData } from "../../data/service-data";
import arrow from "../../assets/images/arrow-right.svg";

const Service = () => {
  return (
    <section className="service">
      <h2 className="title">Our Service </h2>
      <p className="desc">
        We turn information into actionable insights We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="service-card-wrapper">
        {serviceData.map((data) => (
          <div key={data.id} className="service-card">
            <img src={data.icon} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <a href="#">
              Learn more <img src={arrow} alt="arrow" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Service;
