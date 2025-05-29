
import groupPic from '../groupPic2.jpg';

function About(){
  return (
     <section id="about">
       <div className="container">
        <div className="row">
<div className="one-half column">
    
        <h4>Term 1 Overview</h4>
        <p>
The revival projects showcased on this website were developed during the first trimester of the 2025 TypeWest Online Program. Over the course of ten weeks, students were tasked with selecting and researching a metal-cast text typeface to digitally revive, engaging with the history, structure, and personality of their chosen type.
</p>
<p>
This work would not have been possible without the generous guidance and insight of the educators, designers, and artists who make TypeWest such a supportive and inspiring community. Their thoughtful critiques, honest feedback, and encouragement were instrumental in helping shape and push our work forward.
</p>
<h4>2025 Online Cohort</h4>
<p>
The 2025 online cohort is made up of designers and educators from across the globe, including Brazil, Canada, Malaysia, Mexico, Poland, Turkey, Ukraine, United States, and Vietnam. We fully embrace the diverse perspectives and experiences each member brings.
Cheers to Term 1!</p>

<p>Burçin Canbay | Edgar Capula | Amy Copeland | Flora de Carvalho | Dominika Federowicz | Dallas Ford | Nick Giammarco | Alexis Gonzalez | Rush Jackson | Jesse M. Khan | Eugime Lee | Mickey (Kien Mai) | Amanda Piotrowski | Ali S. Qadeer | Arlyn Ramos | Sabrina Sommer | Uliana Tsoryk</p>

      </div>
      <div className="one-half column">
        <h4>Acknowledgements</h4>
        <p>The 2025 Online Cohort is beyond grateful to Sahar Afshar and Michele Patanè for generously sharing their deep expertise with us each week. We are also grateful to Ewan Clayton, Gen Ramirez, and Katie Leavens for the invaluable knowledge and perspective they brought to our sessions. Our learning was further enriched by the historical insights and typographic wisdom of Stephen Coles, Grendl Löfkvist, and Rob Saunders.</p>
        <p>A huge thank you to our dedicated TAs—Annie Szafranski, April Moralba, Dashaen Singh, and Kim-Kim Bui—whose behind-the-scenes support, from answering technical questions to coordinating Zoom calls and offering project feedback, kept everything running smoothly.</p>
        <p>Special thanks to Céline Hurka and Francesca Bolognini for their incisive critiques, to José Solé for guiding us through the intricacies of digitization and proofing, and to Tré Seals for his honest and inspiring perspective on running a type design studio.</p>
        <h4>Faculty</h4>
        <p>
        Lead Instructor: Sahar Afshar<br />
        Term 1 Co-Instructor: Michele Patanè<br />
        Type History Instructor: Ewan Clayton<br />
        Workshop Instructors: Gen Ramirez, Katie Leavens<br />
        Teaching Assistants: April Moralba, Annie Szafranski, Dashaen Singh, Kim-Kim Bui<br />
        </p>
      </div>
      </div>
      <img src={groupPic} alt="A screenshot from a Zoom meeting with all of the students from the 2025 TypeWest Online Cohort with faculty, T.A.s and guest critics"/>
      </div>
    </section>
  );
};

export default About;