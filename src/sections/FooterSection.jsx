import { contactData } from '../data/portfolioData';

function FooterSection() {
  return (
    <footer className="footer">
      <p>© 2026 Farhathullah Najeeb · All rights reserved.</p>
      <div>
        {contactData.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
        ))}
      </div>
    </footer>
  );
}

export default FooterSection;
