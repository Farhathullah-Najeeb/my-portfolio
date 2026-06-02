import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: FaEnvelope,
};

function SocialLinks({ links, className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {links.map((item) => {
        const Icon = ICONS[item.label] ?? FaGithub;
        return (
          <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={item.label}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
