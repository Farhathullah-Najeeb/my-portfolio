import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
    </>
  );
}

export default App;
