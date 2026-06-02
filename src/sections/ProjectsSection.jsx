import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="03 — Portfolio" title="Featured" accent="Projects" />
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
