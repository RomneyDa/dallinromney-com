import React from 'react'

const Social = ({ socials, gray}) => {
  if (!gray) gray = false;

  if(socials){
    var socialIcons = socials.map((social) => {
      return(
        <li key={social.name}>
          <a href={social.url}>
            <i className={social.className}></i>
          </a>
        </li>
      )
    });
  }

  return (
    <ul className={(gray ? "social-links" : "social")}>
        {socialIcons}
    </ul>
  )
}

export default Social