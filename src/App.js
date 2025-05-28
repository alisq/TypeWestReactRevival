import React, { useEffect, useState, useRef } from 'react';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.css';
import ContentList from './components/contentList';
import Menu from './components/menu';
import Footer from './components/footer';
import { shuffle } from './functions';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


import FullContent from './components/fullContent';
import { sluggify } from './functions';


function App() {
  const [items, setItems] = useState([]);
    const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch('https://tw2025.iamasq.works/api/content/items/Revival')
      .then(res => res.json())
      .then(data => {setItems(data)
 shuffle(data)

      })
      .catch(err => console.error(err));
      
  }, []);

     const footerRef = useRef(null);

const scrollToFooter = () => {
  // if (!footerRef.current) return;

   const offset = window.innerWidth < 550 ? 0 : 78; 

  const y = footerRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};



  return (
    <>
    <Router>
      
     <Menu onAboutClick={scrollToFooter} items={items}/>
        
      <Routes>
        {/* List View */}
        <Route path="/" element={<ContentList items={items} />} />

        {/* Full Views */}
        {items.map(item => (
          <Route
  key={item._id}
  path={`/${sluggify(item['Student Name'])}`}
  element={
    <FullContent
      content={item}
      onClose={() => window.history.back()}
      onNext={() => {}}
      onPrev={() => {}}
    />
  }
/>
        ))}

         
      </Routes>
       <Footer ref={footerRef} />
    </Router>
    
    </>
  );
}

export default App;