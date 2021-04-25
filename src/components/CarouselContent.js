import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
const CarouselContent = () => {
  return (
    <div>
      <Carousel fade className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img1.jfif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>
              VIRTUALLY <h3>Building</h3> YOUR HOUSE
            </h1>
            <button className="button-build">BUILD NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img4.jfif"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>
              VIRTUALLY <h3>Building</h3> YOUR HOUSE
            </h1>
            <button className="button-build">BUILD NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img6.jfif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>
              VIRTUALLY <h3>Building</h3> YOUR HOUSE
            </h1>
            <button className="button-build">BUILD NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContent;
