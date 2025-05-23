import React, { useEffect, useState } from 'react';
// import ItemList from './components/itemList';
// import Teaser from './components/teaser';
// import FullContent from './components/fullContent';
import ContentList from './components/contentList';



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

  return (
       <ContentList items={items} />
  );
}

export default App;