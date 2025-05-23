import React, { useState } from 'react';
import Teaser from './teaser';
import FullContent from './fullContent';
import LoadFonts from './loadFonts';
import { sluggify } from '../functions';

function ContentList({ items }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
    
    <div className="content-list">
      {items.map((item, i) => 
      
      
            <React.Fragment key={item._id}>
    <LoadFonts font={item['WOFF file']} author={sluggify(item['Student Name'])}/>
    {activeId === item._id ? (
      <FullContent content={item} onClose={() => setActiveId(null)} />
    ) : (
      <Teaser item={item} onExpand={() => setActiveId(item._id)} />
    )}
  </React.Fragment>
      )}
    
    </div>
    </>
  );
}

export default ContentList;