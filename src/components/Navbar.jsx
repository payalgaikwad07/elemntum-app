import { useState } from 'react';
import './Navbar.css';

const links = ['About', 'Project', 'Solution', 'Agency', 'FAQ'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Elementum</div>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <li key={l}><a href="#" className="navbar__link">{l}</a></li>
        ))}
      </ul>

      <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="menu">
        <span />
        <span />
      </button>
    </nav>
  );
}
