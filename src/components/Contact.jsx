import React, { useState } from 'react'

function Contact() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = Array.from(form.querySelectorAll('input, textarea'))

    if (fields.some((field) => !field.value.trim())) {
      setFormMessage('Please complete each field before submitting.')
      return
    }

    setFormMessage('Thanks for reaching out. This demo form does not send messages yet.')
    form.reset()
  }

  return (
    <section className="contact section-wrap section-border" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow">Have something good in mind?</p>
        <h2 className="section-title" id="contact-title">
          Let’s make it <span>happen.</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-copy">
            <p>
              Tell me a little about what you’re working on. I’d love to hear
              about it and explore how we could make it happen.
            </p>
            <a className="button button-dark" href="mailto:hello@alexmorgan.design">
              Email Alex <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href="mailto:hello@alexmorgan.design">
              hello@alexmorgan.design
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                minLength="2"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">A little about your project</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="What are you looking to create?"
                minLength="12"
                required
              />
            </div>
            <button className="button button-dark form-submit" type="submit">
              Send an enquiry <span aria-hidden="true">↗</span>
            </button>
            <p className="form-note" aria-live="polite">
              {formMessage || 'This is a demo form. Messages are not sent.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
