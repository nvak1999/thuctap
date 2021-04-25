import React from "react";

const Header = () => {
  return (
    <div className="header-homepage">
      <div className="icon">
        <i class="fab fa-fort-awesome-alt fa-4x"></i>
      </div>

      <div className="menu">
        <div className="box">
          {" "}
          <a href="">HOME</a>
        </div>

        <div className="box">
          <a href="">ABOUT</a>
        </div>
        <div className="box">
          {" "}
          <a href="">SERVICES</a>
        </div>
        <div className="box">
          {" "}
          <a href="">BUILT IT YOURSELF</a>
        </div>
        <div className="box">
          <a href="">BLOG</a>
        </div>
        <div className="box">
          {" "}
          <a href="">CONTACT</a>
        </div>
      </div>

      <div className="login">
        <a href="">Login</a> <span>I</span> <a href="">Register</a>
      </div>
    </div>
  );
};

export default Header;
