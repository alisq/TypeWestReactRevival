import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sluggify } from '../functions';

function Menu({ onAboutClick, items }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <section className='header'>
      <div className="hamburger-menu">
        <button className="hamburger-button" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <span className="revivals">Revivals</span>
      </div>

      <div className="center">
        <a href="#">Type West 2025 Online Cohort</a>
      </div>

      <div className='right'>
        <Link to="/about">About</Link>
      </div>

      <nav className={`menu ${open ? 'visible' : 'hidden'}`}>
        <section className="header">
          <button className="hamburger-button close" onClick={handleToggle}>
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
          </button>
          <div className="center">
            <a href="#" onClick={handleToggle}>Home</a>
          </div>
          <div className="right">
            <Link to="/about" onClick={handleToggle}>About</Link>
          </div>
        </section>

        <div className="menu_all_fonts">
          {items.map(item => (
            <div className="menu_font" key={item["Student Name"]}>
              <a href={`#/${sluggify(item["Student Name"])}`} onClick={handleToggle}>
                <h3 className={"center " + sluggify(item["Student Name"])}>{item["Revival Name"]}</h3>
                <p className='center'>by {item["Student Name"]}</p>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default Menu;
