import React, { useState } from 'react';
import { sluggify } from '../functions';

function ItemList({ items }) {

  return (
    <ul>
      {items.map(item => (
        
        <section className="font" id={sluggify(item["Student Name"])}>
            <div className="metadata">                 
                <a className='internal' href={"#" + sluggify(item["Student Name"])}><label className="font_name">{item["Revival Name"]}</label> by <label className="designer_name">{item["Student Name"]}</label></a>
            </div>

            <a className='internal' href={"#" + sluggify(item["Student Name"])}><button className="view_project">See full project</button></a>

            <div className="contain-overflow" >
            
        
                <div className={"text "+sluggify(item["Student Name"])} contentEditable >
                    {item["Homepage Tester Text"]}
                </div>
        
            </div>
        </section>
      ))}
    </ul>
  );
}

export default ItemList;


       