import React from "react";
import Navbar from "../components/navbar";
import MyCarousel from "../components/carousel";

const Home = () => {
  return (
    <div id="home" className="dark:text-gray-100 dark:bg-slate-900">
      <Navbar />
      <MyCarousel />
    </div>
  );
};

export default Home;
