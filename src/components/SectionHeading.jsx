import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="section-heading"
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </motion.div>
  );
}

export default SectionHeading;
