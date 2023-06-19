import Button from "./Button";
import chart1 from "../assets/chart1.png";
import chart2 from "../assets/chart2.png";
import chart3 from "../assets/chart3.png";
import chart4 from "../assets/chart4.png";
import chart5 from "../assets/chart5.png";
import chart6 from "../assets/chart6.png";
import chart7 from "../assets/chart7.png";
import chart8 from "../assets/chart8.png";
import chart9 from "../assets/chart9.png";
import shape1 from "../assets/header-shape-left.png";
import shape2 from "../assets/header-shape-right.png";

const Header = () => {
  return (
    <>
      <div className="bg-dark-blue relative clip-header pb-20 lg:pb-0">
        <img
          className="absolute top-0 left-0 hidden lg:block"
          src={shape1}
          alt="shape"
        />
        <img
          className="absolute top-0 right-0 hidden lg:block"
          src={shape2}
          alt="shape"
        />
        <header className="w-screen relative min-h-screen pt-4 pb-10 px-3 flex flex-col lg:justify-center lg:items-start gap-5 z-10">
          <div className="bg-white rounded-xl p-4 grid grid-cols-3 gap-2 lg:absolute lg:-right-[6%] left-[50%]">
            <img className="" src={chart1} alt="chart" />
            <img className="" src={chart2} alt="chart" />
            <img className="" src={chart3} alt="chart" />
            <img className="" src={chart4} alt="chart" />
            <img className="" src={chart5} alt="chart" />
            <img className="" src={chart6} alt="chart" />
            <img className="" src={chart7} alt="chart" />
            <img className="" src={chart8} alt="chart" />
            <img className="" src={chart9} alt="chart" />
          </div>
          <div className="hidden bg-white rounded-xl p-4 w-96 lg:block lg:absolute lg:left-[45%] top-[20%] shadow-lg">
            <img src={chart3} alt="chart" />
          </div>

          <div className="flex flex-col w-full lg:w-1/3 gap-8 lg:justify-center lg:ml-16">
            <h1 className="font-semibold text-3xl text-white lg:text-5xl">
              Monitor your business on real-time dashboard
            </h1>
            <p className="text-semidark-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est.
            </p>
            <Button>Try for free</Button>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
