import React, { useState } from 'react';
import { sluggify } from '../functions';


function Menu({ items, onAboutClick }) {
  const [open, setOpen] = useState(false);
    


  return (
    <section className='header'>
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        
      </button>
      Revivals
      </div>
      <div className="center">
        <a href="#">TypeWest 2025 Online Cohort</a>
      </div>
      <div className='right'>
        <a>About</a>
      </div>

      {open && (
        <nav className="menu">
            <section className="header">
            <button className="hamburger-button close" onClick={() => setOpen(!open)}>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
            </button>
          <div className="center"><a href="#" onClick={() => setOpen(!open)}>Home</a></div>
          <div className="right">About</div>
          </section>
          {items.map(item =>(

            <div>
                <a href={"#"+sluggify(item["Student Name"])} onClick={() => setOpen(!open)}><h3 className={"center "+sluggify(item["Student Name"])}>{item["Revival Name"]}</h3>
                <p className='center' onClick={() => setOpen(!open)}>by {item["Student Name"]}</p>
                </a>
            </div>
          ))}
        </nav>
      )}
    
    </section>
  );
}

export default Menu;
