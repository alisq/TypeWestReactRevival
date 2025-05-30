import React, { useState } from 'react';
import Teaser from './teaser';
import FullContent from './fullContent';

function ContentList({ items }) {
  const [activeId, setActiveId] = useState(null);
  const currentIndex = items.findIndex(item => item._id === activeId);

 

  return (
    <>
      <div className="content_list">
        {items.map(item => (
          <React.Fragment key={item._id}>
            
            {activeId !== item._id && (
              <Teaser item={item} onExpand={() => setActiveId(item._id)} />
            )}
          </React.Fragment>
        ))}
      </div>

      {activeId && (
        <FullContent
          content={items[currentIndex]}
          onClose={() => setActiveId(null)}
       
        />
      )}
    </>
  );
}

export default ContentList;