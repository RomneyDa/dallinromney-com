import React, { Fragment, useState, useEffect } from 'react'

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'

const Home = () => {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  return (
    <Fragment>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Resume data={resumeData.resume} />
      <Footer data={resumeData.main} />
    </Fragment>
  )
}

export default Home
