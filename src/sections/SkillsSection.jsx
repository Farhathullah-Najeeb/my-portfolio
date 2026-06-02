import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { achievements, skillsData, techCloud } from '../data/portfolioData';

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="02 — Expertise" title="Technical" accent="Skills" />
        <div className="skills-layout">
          <div className="skills-grid">
            {skillsData.map((item, index) => (
              <SkillCard key={item.skill} item={item} index={index} />
            ))}
          </div>
          <div className="achievements">
            {achievements.map((item) => (
              <article key={item.label} className="glass">
                <h4>{item.value}</h4>
                <p>{item.label}</p>
              </article>
            ))}
            <div className="tech-cloud">
              {techCloud.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
