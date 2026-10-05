import React from 'react'

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">Independent designer &amp; developer</p>
          <h1 className="reveal reveal-delay-one" id="hero-title">
            Thoughtful digital
            <br />
            work, <span>made to matter.</span>
          </h1>
          <p className="hero-intro reveal reveal-delay-two">
            I partner with good people to turn ambitious ideas into clear, useful
            and memorable online experiences.
          </p>
          <div className="hero-actions reveal reveal-delay-two">
            <a className="button button-dark" href="#work">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-light" href="#contact">
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note reveal reveal-delay-three">
            <span className="status-dot" aria-hidden="true" />
            Available for select projects
          </div>
        </div>

        <figure className="hero-portrait reveal reveal-delay-one">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1100&q=85"
            alt="Portrait of Alex Morgan, independent designer and developer"
            width="1100"
            height="1400"
            fetchPriority="high"
          />
          <figcaption>
            <span>Alex Morgan</span>
            <span>Designing with intention, since 2016</span>
          </figcaption>
          <span className="portrait-index" aria-hidden="true">01 / 05</span>
        </figure>
      </div>
      <div className="hero-bottom container" aria-hidden="true">
        <span>Based in Brooklyn, NY</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  )
}

export default Hero
