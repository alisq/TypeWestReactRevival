import React, { useState } from 'react';


function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <section className='header'>
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        Revivals
      </button>

      {open && (
        <nav className="menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      )}
    </div>
    </section>
  );
}

export default Menu;
