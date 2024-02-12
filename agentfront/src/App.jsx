import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Business from "./Pages/Business";
import Profile from "./Pages/Profile";

//components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
