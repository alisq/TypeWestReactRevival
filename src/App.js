// App.js
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.css';
import ContentList from './components/contentList';
import Menu from './components/menu';
import About from './components/about';
import Footer from './components/footer';
import FullContent from './components/fullContent';
import { shuffle, sluggify } from './functions';
import usePageTracking from './usePageTracking';
import LoadFonts from './components/loadFonts';
function App() {
  usePageTracking(); 

  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch('https://tw2025.iamasq.works/api/content/items/Revival')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        shuffle(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Menu items={items} />
      {items.map(item=>(
        <LoadFonts key={'font'+item._id} font={item['WOFF file']} author={sluggify(item['Student Name'])} />
      ))}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ContentList items={items} />} />
        {items.map(item => (
          <Route
            key={item._id}
            path={`/${sluggify(item['Student Name'])}`}
            element={
              <FullContent content={item} />
            }
          />
        ))}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
