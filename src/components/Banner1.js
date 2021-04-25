import React from "react";

const Banner1 = () => {
  return (
    <div className="banner1">
      <div className="div1-banner1">
        <div className="div1-banner1-img">
          <img src="./images/computer.jfif" alt="computer" />
        </div>
        <div className="div2-banner1">
          <div className="test1-banner1">
            <h3>VIRTUALLY BUILD YOUR HOUSE IN FEW STEPS</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud.
          </p>
          <div className="div-button-banner1">
            <button className="button-build">BUILD NOW</button>
            <button className="button-build">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
