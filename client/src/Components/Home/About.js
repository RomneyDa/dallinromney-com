import React from 'react'

const About = ({ data }) => {
  if (data) {
    // var name = data.name;
    // var profilepic = 'images/' + data.image
    var bio = data.bio
    var bioTitle = data.bioTitle
    // var street = data.address.street;
    // var city = data.address.city;
    // var state = data.address.state;
    // var zip = data.address.zip;
    // var phone = data.phone;
    // var email = data.email;
  }

  return (
    <section id="about">
      {/* <img
        className="profile-pic flex-col"
        src={profilepic}
        alt="You good-looking thing, don't you ever die"
      /> */}

      <div className="bio-col flex-col">
        <h2>{bioTitle}</h2>
        {bio &&
          bio.map((text, index) => {
            return <p key={index}>{text}</p>
          })}

        {/* <p></p> */}
      </div>
    </section>
  )
}

export default About
