import { motion } from 'framer-motion';

function SkillCard({ item, index }) {
  return (
    <motion.article
      className="skill-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="skill-head">
        <p>{item.skill}</p>
        <span>{item.value}%</span>
      </div>
      <small>{item.category}</small>
      <div className="progress-bg">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.value}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.article>
  );
}

export default SkillCard;
