import React from "react";
import Header from "./Header";
import CarouselContent from "./CarouselContent";
import Sercives from "./Sercives";
import Banner1 from "./Banner1";
import Portfolio from "./Portfolio";
import Banner2 from "./Banner2";
import Blog from "./Blog";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselContent />
      <Sercives />
      <Banner1 />
      <Portfolio />
      <Banner2 />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
