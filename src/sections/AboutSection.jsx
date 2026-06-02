import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/portfolioData';

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about-layout">
        <motion.img
          className="about-image glass"
          src={aboutData.image}
          alt="Farhathullah"
          loading="lazy"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        />
        <div>
          <SectionHeading eyebrow="01 — Profile" title="About" accent="Me" />
          {aboutData.intro.map((line) => (
            <p key={line} className="muted">{line}</p>
          ))}
          <blockquote>{aboutData.quote}</blockquote>
          <div className="chip-row">
            {aboutData.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="inline-stats">
            {aboutData.stats.map((item) => (
              <div key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
