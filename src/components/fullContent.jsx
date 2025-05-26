import parse from 'html-react-parser';
import { useEffect } from 'react';
import { sluggify } from '../functions';
import Image from './image';
import LoadFonts from './loadFonts';
function FullContent({ content, onClose }) {
  //  console.log(content)


 useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]); // Runs every time a new `content` is loaded

  
useEffect(()=>{
    document.title = content["Student Name"]+" | TypeWest 2025 Revivals"

        return () => {
      // Restore previous title on unmount
      document.title = "TypeWest 2025 Revivals";
    };
})


  return (

    <>
    
      <LoadFonts font={content['WOFF file']} author={sluggify(content['Student Name'])}/>
    <div id="contents"></div>
    <section className="font_full" id={sluggify(content["Student Name"])}>
            
        <div className="container">
                <h2 className={sluggify(content["Student Name"])}>
                    {content["Revival Name"]}
                </h2>
                
                 <div className="row">
                    <div className="one-half column">
                        <h4>About {content["Revival Name"]}</h4>
                        
                        {parse(content["Revival Description"])}
                        
                    </div>
    
                    <div className="one-half column">
                        <h4>About {content["Student Name"]}</h4>                        
                            {parse(content["Biography"])}
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
                      {parse(content["Source Info"])}   
                  </div>
                  <div className="one-half column">
                      <h4>About the process</h4>
                      {parse(content["Process Info"])}
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
     </>
  );
}

export default FullContent;
