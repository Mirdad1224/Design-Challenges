import service1 from "../assets/chart1.png";
import service2 from "../assets/chart2.png";
import service3 from "../assets/chart6.png";

const serviceData = [
  {
    id: 1,
    title: "Automated Reports & Widget Alerts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    img: service1,
  },
  {
    id: 2,
    title: "Fully customizable to address your needs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    img: service2,
  },
  {
    id: 3,
    title: "Pre-built Dashboard Templates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    img: service3,
  },
];

const Services = () => {
  return (
    <section className="container px-4 flex flex-col gap-8 lg:gap-20 mb-20">
      {serviceData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center lg:flex-row gap-4 lg:gap-16"
        >
          <div>
            <h3 className="text-dark font-bold text-3xl lg:text-4xl">
              {item.title}
            </h3>
            <p className="text-sm lg:text-lg text-semidark-blue">
              {item.description}
            </p>
          </div>
          <div
            className={`p-8 shadow-xl ${item.id === 2 ? "lg:-order-1" : ""}`}
          >
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </section>
  );
};
export default Services;
