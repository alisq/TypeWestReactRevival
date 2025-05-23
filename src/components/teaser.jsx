import { sluggify } from '../functions';
import { Link } from 'react-router-dom';

// Teaser.jsx
function Teaser({ item, onExpand }) {
  // console.log(item)
  return (
    

      <section className="font" id="{this.authorID}">
        <Link to={`${sluggify(item['Student Name'])}`}>
            <div className="metadata">                 
                <label className="font_name">{item["Revival Name"]}</label> by <label className="designer_name">{item["Student Name"]}</label>
            </div>
            </Link>
            

            <div className="contain-overflow">
            
        
                <div className={"text "+sluggify(item["Student Name"])} contentEditable >
                    {item["Homepage Tester Text"]}
                </div>
        
            </div>
            <Link to={`${sluggify(item['Student Name'])}`}>
            <button className="view_project">See full project</button>
            </Link>
        </section>
      
    
  );
}

export default Teaser;