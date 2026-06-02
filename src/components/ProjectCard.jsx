import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card glass"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        {project.links.map((link) => (
          <a key={`${project.name}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
