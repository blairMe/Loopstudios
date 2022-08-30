import React from "react";

import logo from "../images/logo.svg"

const Header = () => {
    return (
      <section>
        <div className="header__holder">
          <div className="header__titles">
            <img src={logo} alt="logo" className="loops__logo" />
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="header__text">
            <span>IMMERSIVE</span>
            <span>EXPERIENCES</span>
            <span>THAT DELIVERS</span>
          </div>
          <img
            src={require("../images/desktop/image-hero.jpg")}
            alt="img"
            className="header__background"
          />
        </div>
        <div className="person__holder">
          <img
            src={require("../images/desktop/image-interactive.jpg")}
            alt="person"
            className="person__img"
          />
          <div>
            <h3 className="person__title">THE LEADER IN INTERACTIVE VR</h3>
            <p className="person__info">Founded in 2011, Loopstudios has been producint world-class virtual reality projecs for some of the best companies aroung the globe. 
            Our award-winning creations have transformed businesses through digital experiences that bind to their brands.</p>
          </div>
        </div>
      </section>
    );
}

export default Header;