import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { sluggify } from '../functions';
import Image from './image';
import LoadFonts from './loadFonts';
import ControlPanel from './controlPanel';



function FullContent({ content }) {


 const [fontSize, setFontSize] = useState(window.innerWidth < 550 ? 24 : 78);
    const [leading, setLeading] = useState(12)
    const [activeOrientation, setActiveOrientation] = useState('center')

  const divRef = React.useRef(null);

  const handleClick = () => {
    
    const range = document.createRange();
    const selection = window.getSelection();

    if (divRef.current && selection) {
      range.selectNodeContents(divRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

 useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]); // Runs every time a new `content` is loaded

  
useEffect(()=>{
    document.title = content["Student Name"]+" | Type West 2025 Revivals"

        return () => {
      // Restore previous title on unmount
      document.title = "Type West 2025 Revivals";
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
                    </div>
                </div>
            </div>    

                                        
                <ControlPanel
                fontSize={fontSize}
                setFontSize={setFontSize}
                leading={leading}
                setLeading={setLeading}
                activeOrientation={activeOrientation}
                setActiveOrientation={setActiveOrientation}
                />
            
            <div className="tester_text">


                <div    className={"ttBig "+sluggify(content["Student Name"])} 
                                                contentEditable
                        style={{ fontSize: `${fontSize}px`, lineHeight: `${leading/10}`, textAlign: `${activeOrientation}` }}
                        onClick={handleClick}
                        suppressContentEditableWarning={true}>                                    
                        {content["Tester Text"]}
                </div>

                

                    {/* <br />
                <span    className={"ttMed "+sluggify(content["Student Name"])} 
                        contentEditable
                        suppressContentEditableWarning={true}>                                    
                        {content["Tester Text"]}
                </span>
<br />
                    
                <span    className={"ttSmall "+sluggify(content["Student Name"])} 
                        contentEditable
                        suppressContentEditableWarning={true}>                                    
                        {content["Tester Text"]}
                </span> */}
            </div>
            
            <div className="process-images">    
              {Array.isArray(content["Process Images"]) && content["Process Images"].length > 0 && (
  content["Process Images"].map((image, i) =>                 
    <Image image={image} key={i}/>              
  )
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
                              
                  {Array.isArray(content["Research Images"]) && content["Research Images"].length > 0 && (
  content["Research Images"].map((image, i) =>                 
    <Image image={image} key={i}/>              
  )
)}

              </div>


              {/* <div className="back_forth">
                  <div>
                      <button onClick={onPrev}>previous project</button>
                  </div>
                  <div className="right">
                      <button onClick={() => { console.log("Next clicked"); onNext(); }}>Next Project</button>
                  </div>
              </div> */}
           
     </section>
     </>
  );
}

export default FullContent;
