import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';
import SocialLinks from '../components/SocialLinks';

function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="hero-bg" />
      <div className="container hero-layout">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="availability">Available for opportunities</p>
          <h1>{heroData.name}</h1>
          <p className="role">{heroData.role}</p>
          <p className="intro">{heroData.intro}</p>
          <div className="cta-row">
            {heroData.ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={cta.variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost'}>{cta.label}</a>
            ))}
          </div>
          <SocialLinks links={heroData.socialLinks} />
        </motion.div>

        <motion.div className="profile-card glass" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <img src="/my.jpg" alt="Farhathullah Najeeb" loading="eager" />
          <div className="stats-grid">
            {heroData.stats.map((stat) => (
              <div key={stat.label}>
                <p>{stat.value}</p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
