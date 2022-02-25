import React from "react";
import TypeWriter from "react-typewriter";
import Social from "./Social";

const Header = ({ data }) => {
  if (data) {
    var first_name = data.first_name;
    var occupation = data.occupation;
    // var description = data.description;
    var city = data.address.city;
    var socialIcons = <Social socials={data.socials}/>
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            Hi!<TypeWriter typing={0.5}>{first_name? ` I'm ${first_name}` : null}</TypeWriter>
          </h1>
          <h3>
            {/* <span>{occupation}.</span><br/>Based in {city}.<br/>{description}. */}
            <span>{occupation}</span><br/>Based in {city}
          </h3>
          <hr />
          {socialIcons}
          
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
