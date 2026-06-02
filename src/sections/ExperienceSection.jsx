import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/portfolioData';

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="04 — Career" title="Work" accent="Experience" />
        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.company}`}
              className="timeline-item glass"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="timeline-header">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.current ? `Current · ${item.period}` : item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
