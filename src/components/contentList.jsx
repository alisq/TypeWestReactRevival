import React, { useState } from 'react';
import Teaser from './teaser';
import FullContent from './fullContent';

function ContentList({ items }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="content-list">
      {items.map((item, i) =>
      
      
        activeId === item._id ? (
          <FullContent key={item._id} content={item} onClose={() => setActiveId(null)} />
        ) : (
          <Teaser key={item._id} item={item} onExpand={() => setActiveId(item._id)} />
        )
      )}
    </div>
  );
}

export default ContentList;