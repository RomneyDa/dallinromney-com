import React from 'react'
import { Link } from "react-router-dom"

const BackFloat = () => {
  return (
    <Link to="/">
      <a href="www.google.com" class="float">
        <i className="fa fa-arrow-left"/>
      </a>
    </Link>
    
  )
}

export default BackFloat