import { sluggify } from '../functions';
import Image from './image';

function FullContent({ content, onClose }) {
   console.log(content)

  

  return (
    <section className="font_full" id={sluggify(content["Student Name"])}>
            
        <div className="container">
                <h2 className={sluggify(content["Student Name"])}>
                    {content["Revival Name"]}
                </h2>
                
                 <div className="row">
                    <div className="one-half column">
                        <h4>About {content["Revival Name"]}</h4>
                        
                        {content["Revival Description"]}
                        
                    </div>
    
                    <div className="one-half column">
                        <h4>About {content["Student Name"]}</h4>                        
                            {content["Biography"]}
                            {content["External Website"]}                    
                    </div>
                </div>
            </div>    
            
                
            <div className={"tester_text "+sluggify(content["Student Name"])} contentEditable>
                {content["Tester Text"]}
            </div>
            
            <div className="process-images">    
                {content["Process Images"].map((image, i) =>                 
                    <Image image={image} key={i}/>              
                )}
            </div>
            <div className="container">
              <div className="row">
                  <div className="one-half column">
                      <h4>About the source</h4>
                      {content["Source Info"]}                        
                  </div>
                  <div className="one-half column">
                      <h4>About the process</h4>
                      {content["Process Info"]}
                  </div>                 
              </div>
          </div>

              <div className="process-images">    
                  {content["Research Images"].map((image, i) =>                 
                    <Image image={image} key={i}/>              
                )}
              </div>


              <div className="back_forth">
                  <div>
                      <a href="" id="prev_button" className="internal"><button>previous project</button></a>
                  </div>
                  <div className="right">
                      <a href="" id="next_button" className="internal"><button>next project</button></a>
                  </div>
              </div>
           
     </section>
  );
}

export default FullContent;
