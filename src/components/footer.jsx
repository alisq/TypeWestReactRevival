import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
  return (
     <section id="footer" ref={ref}>
      <div className="container">
        <div className="row">
<div className="one-half column">
    
        <h4>About the project</h4>
        <p>
            The revival projects shown in this website were developed during the TypeWest Online Program in 2025. Students were tasked with selecting a text typeface originally cast in metal and creating a digital revival of it.
        </p>

        <p>
            This work would not have been possible without the generous guidance, talent, and insight from the educators, designers, and artists who make the program an inspiring and supportive community. Their thoughtful critiques, honest feedback, and unwavering encouragement were instrumental in shaping the work and moving it forward.
        </p>
      </div>
      <div className="one-half column">
        <h4>Acknowledgements</h4>
        <p>The 2025 Online Cohort is especially grateful to Sahar Afshar and Michele Patanè for generously sharing their deep expertise with us each week. Ewan Clayton, Gen Ramirez, and Katie Leavens brought invaluable knowledge and perspective, while Stephen Coles, Grendl Löfkvist, and Rob Saunders enriched our learning with their historical insight and typographic wisdom. A huge thanks to our TAs—Annie Szafranski, April Moralba, Dashaen Singh, and Kim-Kim Bui—whose behind-the-scenes support helped everything run smoothly throughout the semester.</p>
<p>Special thanks to Céline Hurka and Francesca Bolognini for their incisive critiques, to José Solé for guiding us through the intricacies of digitization and proofing, and to Tré Seals for his honest and inspiring perspective on what it’s like to run a type design studio.</p>
      </div>
      </div>
      <img src="./groupPic.jpg" />
      </div>
    </section>
  );
});

export default Footer;