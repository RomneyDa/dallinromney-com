import React from "react";

const About = ({ data }) => {
  
  
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumedownload = data.resumedownload;
    // var resumeLinkButtons = data.resumelinks.map(function (resume) {
    //   return (
    //     <a key={resume.text} href={resume.link} className="button">
    //       <i className="fa fa-download"></i>{resume.text}
    //     </a>
    //   );
    // });
    var resumeLinkButtons = 
    <a href={resumedownload} className="button">
      <i className="fa fa-download"></i>Download a résumé 
    </a>
  }

  return (
    <section id="about">

      <img
          className="profile-pic flex-col"
          src={profilepic}
          alt="You good-looking thing, don't you ever die"
      />
      
      <div className="bio-col flex-col">
        <h2>About Me</h2>
        <p>{bio}</p>
      </div>

      <div className="download flex-col">
          {resumeLinkButtons}
      </div>
      
      
    </section>
  );
};

export default About;
