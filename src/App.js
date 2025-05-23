import React, { useEffect, useState, useRef } from 'react';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.css';
import ContentList from './components/contentList';
import Menu from './components/menu';
import Footer from './components/footer';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import FullContent from './components/fullContent';
import { sluggify } from './functions';


function App() {
  const [items, setItems] = useState([]);
    const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch('https://tw2025.iamasq.works/api/content/items/Revival')
      .then(res => res.json())
      .then(data => {setItems(data)
// console.log(data)

      })
      .catch(err => console.error(err));
      
  }, []);

     const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            element={<FullContent content={item} />}
          />
        ))}
      </Routes>
        <Footer ref={footerRef} />
    </Router>
    
    </>
  );
}

export default App;