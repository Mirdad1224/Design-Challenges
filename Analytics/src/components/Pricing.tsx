import footerShape from "../assets/pricing-shape.png";
import footerLogo from "../assets/logo-footer.png";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import instagram from "../assets/Instagram.svg";
import Button from "./Button";

const cardsData = [
  { id: 1, title: "Starter", description: "up to 3 users", price: "29" },
  { id: 2, title: "Standard", description: "up to 20 users", price: "99" },
  { id: 3, title: "Premium", description: "up to 200 users", price: "299" },
];

const Pricing = () => {
  return (
    <footer className="bg-dark p-5 relative overflow-hidden clip-footer pt-24">
      <div className="container">
        <img
          className="hidden object-cover absolute bottom-0 right-0 lg:block"
          src={footerShape}
          alt="shape"
        />
        <h4 className="text-white text-center font-bold text-3xl lg:text-4xl mb-4">
          Pricing Plans
        </h4>
        <p className="text-semidark-blue text-center text-sm lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.{" "}
        </p>
        <div className="flex items-center justify-center flex-col lg:flex-row w-full lg:w-3/5 mx-auto gap-10 my-12">
          {cardsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl shadow-lg w-4/5 z-10 py-12 px-20 flex flex-col gap-4 items-center ${
                item.id === 2 ? "bg-white text-dark" : "bg-[#0F1F4B] text-white"
              }`}
            >
              <div>
                <h6 className="font-bold text-2xl lg:text-3xl">{item.title}</h6>
                <p className="text-semidark-blue text-sm lg:text-lg">
                  {item.description}
                </p>
              </div>

              <div className="bg-[#2A407C] h-[2px] w-full"></div>
              <div>
                <h6 className="font-bold text-3xl">
                  <span className="font-normal text-base">$</span>
                  {item.price}
                </h6>
                <p className="text-semidark-blue text-sm lg:text-lg">
                  per month
                </p>
              </div>
              <Button
                classes={`lg:w-full ${
                  item.id === 2 ? "" : "bg-transparent border border-gray-700"
                }`}
              >
                Order
              </Button>
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] bg-[#2A407C] my-8"></div>
        <div className="flex items-center justify-between">
          <img className="w-32" src={footerLogo} alt="logo" />
          <ul className="hidden lg:flex items-center gap-9 text-semidark-blue text-sm">
            <li>Product</li>
            <li>Pricing Plans</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <div className="flex items-center gap-6">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Pricing;
