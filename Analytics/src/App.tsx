import { useState } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`mx-auto ${isSidebarOpen && "h-screen overflow-y-hidden"}`}>
      <Backdrop isSidebarOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <Navbar isSidebarOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <Header />
      <Features />
      <Services />
      <Pricing />
    </div>
  );
}

export default App;
