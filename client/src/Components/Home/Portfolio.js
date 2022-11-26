import React from 'react'

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (project) {
      var projectImage = 'images/portfolio/' + project.image
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a
              rel="noreferrer"
              href={project.url}
              title={project.title}
              target={project.url.includes('https://') ? '_blank' : '_self'}
            >
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      )
    })
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my recent work.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-halves s-bgrid-halves cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
