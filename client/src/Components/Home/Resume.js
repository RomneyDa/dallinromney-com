import React from 'react'
import { TagCloud } from 'react-tagcloud'

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      )
    })
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      )
    })

    var resumedownload = data.resumedownload
    var tagCloudData = data.tagCloud

    var resumeLinkButtons = (
      <a
        href={resumedownload}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <i className="fa fa-download"></i>Resume
      </a>
    )
  }

  return (
    <section id="resume">
      <div className="download">{resumeLinkButtons}</div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {tagCloudData && (
            <TagCloud
              randomSeed={Math.random()}
              minSize={25}
              maxSize={50}
              tags={tagCloudData}
              // onClick={(tag) => alert(`'${tag.value}' was selected!`)}
              shuffle
            // renderer={(tag, size, color) => {
            //   return (
            //     <span key={tag.value} style={{ color, fontSize: size }}>
            //       {tag.value}
            //     </span>
            //   )
            // }}
            />
          )}
        </div>
      </div>

      {/* <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
          <p>{other_skills}</p>
        </div>
      </div> */}

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
