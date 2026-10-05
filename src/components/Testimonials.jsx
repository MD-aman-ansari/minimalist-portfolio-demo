import React from 'react'

const testimonials = [
  {
    quote:
      'Alex has that rare ability to understand what you mean, even when you’re still figuring out how to say it. The result felt unmistakably like us.',
    name: 'Jamie Rivera',
    role: 'Founder, Form & Field',
  },
  {
    quote:
      'The process was thoughtful from day one, and the finished site is both beautiful and incredibly easy for our team to use.',
    name: 'Morgan Lee',
    role: 'Creative Director, Stillwater',
  },
]

function Testimonials() {
  return (
    <section
      className="testimonials section-wrap section-border"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="testimonial-heading">
          <p className="eyebrow">Demo testimonials · fictional clients</p>
          <h2 className="section-title" id="testimonials-title">
            Better together.
          </h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-mark" aria-hidden="true">
                  {testimonial.name.split(' ').map((part) => part[0]).join('')}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
