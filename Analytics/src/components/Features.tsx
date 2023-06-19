import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const Features = () => {
  return (
    <section className="container px-4 mt-10 flex flex-col gap-5 lg:gap-10">
      <h2 className="text-4xl font-bold text-dark lg:text-center">
        Main Features
      </h2>
      <p className="text-semidark-blue lg:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet. Id vel in nam malesuada.
      </p>
      <div className="flex flex-col gap-10 lg:flex-row mb-10">
        <div className="flex gap-4 items-start">
          <img src={feature1} alt="feature" />
          <div>
            <h6 className="text-base font-bold text-dark">Monitoring 24/7</h6>
            <p className="text-sm text-semidark-blue">
              Lorem ipsum dolor sit amet, conse ctetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <img src={feature2} alt="feature" />
          <div className="">
            <h6 className="text-base font-bold text-dark">Widget System</h6>
            <p className="text-sm text-semidark-blue">
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
              et, tortor pulvinar risus pulvinar.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <img src={feature3} alt="feature" />
          <div className="">
            <h6 className="text-base font-bold text-dark">Best Performance</h6>
            <p className="text-sm text-semidark-blue">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
