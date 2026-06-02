import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { contactData, heroData } from '../data/portfolioData';

function ContactSection() {
  const [status, setStatus] = useState('Send Message');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Message Sent ✓');
    event.target.reset();
    setTimeout(() => setStatus('Send Message'), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="05 — Connect" title="Get In" accent="Touch" />
        <div className="contact-layout">
          <div className="contact-details glass">
            <p>Have a project in mind or want to discuss an opportunity? I am always open to new challenges.</p>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            <p>{contactData.phone}</p>
            <SocialLinks links={heroData.socialLinks} />
          </div>

          <form className="glass contact-form" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Your Name" aria-label="Name" />
            <input type="email" required placeholder="Your Email" aria-label="Email" />
            <input type="text" required placeholder="Subject" aria-label="Subject" />
            <textarea rows="5" required placeholder="Your Message" aria-label="Message" />
            <button type="submit" className="btn btn-primary">{status}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
