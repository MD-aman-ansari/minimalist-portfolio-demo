import React from 'react'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section className="projects section-wrap section-border" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work · 2024—25</p>
            <h2 className="section-title" id="work-title">A few things I’ve made.</h2>
          </div>
          <a className="text-link heading-link" href="#contact">
            Have a project in mind? <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <a
                className="project-image-link"
                href={project.link}
                aria-label={`Discuss the ${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width="1400"
                  height="1000"
                  loading="lazy"
                />
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="project-meta">
                <div>
                  <h3>
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-category">{project.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
