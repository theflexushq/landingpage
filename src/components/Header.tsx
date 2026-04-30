import { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <img src="/logo.png" alt="Flexus Logo" />
          <span className="logo-name">flexus</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#roadmap" onClick={() => setIsOpen(false)}>Roadmap</a>
          <a href="#waitlist" className="btn-nav" onClick={() => setIsOpen(false)}>Contact us</a>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
