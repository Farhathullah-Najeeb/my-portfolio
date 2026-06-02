import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar glass">
        <a href="#home" className="brand">Farhath</a>
        <ul className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={activeSection === link.id ? 'active' : ''}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="hire-btn" href="#contact">Hire Me</a>
        <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen((p) => !p)} aria-label="Toggle menu" aria-expanded={isOpen}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>{link.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
