import Navbar from "./html/Com_Navbar.js";
import Home from "./html/com_Home.js";
import Destinations from "./html/com_Des.js";
import About from "./html/com_About.js";
import Footer from "./html/com_Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const all_Components = () => {
  return (
    <>
      <Navbar />
      <div className="space"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default all_Components;
