import React from 'react'

function About() {
  return (
    <section className="about section-wrap section-border" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title" id="about-title">
            Good work starts with <span>good questions.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Alex, a multidisciplinary designer and front-end developer who
            believes the best digital experiences feel effortless. For nearly a
            decade, I’ve helped independent brands and growing teams find
            clarity, tell their story and make a meaningful impression.
          </p>
          <p>
            From the first sketch to the final line of code, I bring care,
            curiosity and a practical point of view to every collaboration.
          </p>
          <a className="text-link" href="#contact">
            More about working together <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
