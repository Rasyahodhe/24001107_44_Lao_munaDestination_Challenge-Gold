import Navbar from "./html/Com_Navbar.js";
import Home from "./html/com_Home.js";
import Destinations from "./html/com_Des.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const all_Components = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default all_Components;
