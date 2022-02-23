import React from "react";
import Social from "./Social";

const Footer = ({ data }) => {

  if(data) {
    var socialIcons = <Social gray={true} socials={data.socials}/>
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          {socialIcons}
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
