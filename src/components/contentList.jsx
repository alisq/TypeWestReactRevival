import React, { useState } from 'react';
import Teaser from './teaser';
import FullContent from './fullContent';
import LoadFonts from './loadFonts';
import { sluggify } from '../functions';

function ContentList({ items }) {
  const [activeId, setActiveId] = useState(null);

  const currentIndex = items.findIndex(item => item._id === activeId);

  const goToNext = () => {
     
    const idx = items.findIndex(item => item._id === activeId);
    if (idx < items.length - 1) {
      setActiveId(items[idx + 1]._id);
    }
  };

  const goToPrevious = () => {
    const idx = items.findIndex(item => item._id === activeId);
    if (idx > 0) {
      setActiveId(items[idx - 1]._id);
    }
  };

  return (
    <>
      <div className="content_list">
        {items.map(item => (
          <React.Fragment key={item._id}>
            <LoadFonts font={item['WOFF file']} author={sluggify(item['Student Name'])} />
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
          onNext={goToNext}
          onPrev={goToPrevious}
        />
      )}
    </>
  );
}

export default ContentList;