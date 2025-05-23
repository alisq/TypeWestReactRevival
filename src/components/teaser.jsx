import { sluggify } from '../functions';
// Teaser.jsx
function Teaser({ item, onExpand }) {
  // console.log(item)
  return (
    

      <section className="font" id="{this.authorID}">
            <div className="metadata">                 
                <a className='internal' onClick={onExpand}><label className="font_name">{item["Revival Name"]}</label> by <label className="designer_name">{item["Student Name"]}</label></a>
            </div>

            

            <div className="contain-overflow">
            
        
                <div className={"text "+sluggify(item["Student Name"])} contentEditable >
                    {item["Tester Text"]}
                </div>
        
            </div>
            <button className="view_project" onClick={onExpand}>See full project</button>
        </section>
      
    
  );
}

export default Teaser;