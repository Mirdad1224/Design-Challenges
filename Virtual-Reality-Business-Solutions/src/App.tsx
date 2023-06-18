import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Service from "./components/service/Service";
import Team from "./components/team/Team";
import VRData from "./components/vr/VR";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <Service />
      <VRData />
      <Team />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
