import React from 'react';
import './SelpProgram.css';
import visionimg from '../SelpProgram/selp1.jpg';
import missionimg from '../SelpProgram/selp2.png';
import objectivesimg from '../SelpProgram/selp3.jpg';
import bgimg from '../SelpProgram/selpbg.jpg';


const SelpProgram = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">SKILL, EXPERIENCE, & LEADERSHIP PROGRAM</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>SELP - SKILL, EXPERIENCE & LEADERSHIP PROGRAM</h2>
        <p>
            As per NASSCOM report, India is facing a talent shortage with a 
            demand-supply gap of 21.1 %. This report suggests serious skill gaps 
            and lack of preparedness in students for jobs. Many other studies also 
            suggest that the existing education system promotes convergent thinking 
            and does not provide space for exploration, authentic learning and 
            thinking which keeps the students limited to information and limited 
            analysis of concepts. As a consequence they are not able to make sense 
            about a lot of things that concern their life and career. 
          
        </p>
      </div>
      <div className="vision-image">
        <img
          src={visionimg}
          className="vision-image"
          alt="Vision"
        />
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="mission-content">
      <div className="mission-text">
        
        <p>
        The new education policy 2020 emphasizes a lot on making education practical, experiential and relevant for the students. It advocates for practical work exposure for high schools and colleges. Now, some educational institutions in India are also giving more importance to self-learning, internships and field exposure. 
        We also felt that exposure, training and opportunities to work in real life situations is missing in most schools and colleges of the country. Therefore, we have started the SELP for students. During this program, Vihatha provides transformative experiential learning programs for students. We collaborate with schools and colleges to join the self-learning and field-based learning as per their requirements. We are also planning to start SELP programs during summer and winter vacations. 

        </p>
        <h2>SELP BENEFITS : </h2>
        <ul>
          <li>Orientation programs</li>
          <li>Guided Tours </li>
          <li>Field Projects </li>
          <li>Mentorship</li>
          <li>Soft skill training</li>
        </ul>
      </div>
      <div className="mission-image">
        <img src= {missionimg} alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        
        <h2>SELP - FOR FOREIGNERS</h2>
        <p>
        They also participated in many seminars and workshops about various social 
        and environmental challenges. During these seminars, most of the discussions 
        zeroed down to required policy changes. Sometimes the discussion also shifted 
        to action as individuals and civil society - what we can do to tackle those 
        problems. Various solutions, methods and models of change were also discussed 
        in these meetings. ‘SEWA (service) as a method to work for building a 
        sustainable society appealed the most to them.
        <br /><br />
        That’s how Vihatha came into existence. It has picked three key focus 
        areas to bring the desired changes -
        <ul>
            <li>EDUCATION</li>
            <li>SUSTAINABILITY</li>
            <li>WELL-BEING</li>

        </ul>

        </p> 
      </div>
      <div className="objectives-image">
        <img src={objectivesimg} className="imgs" alt="Objectives" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};


export default SelpProgram;