import React from 'react';
import './OurTeam.css';
import visionimg from '../OurTeam/rovinimg.jpg';
import missionimg from '../OurTeam/shraddhaimg.jpg';
import objectivesimg from '../OurTeam/vihatha3.jpg';
import bgimg from '../OurTeam/camp.jpg';

const OurTeam = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">OUR TEAM</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>COFOUNDER - ROVIN PUSHP</h2>
        <p>
           Rovin is a Rashtram Fellow. He has donned many hats; teaching, research, curriculum
           development, training, and teacher education for leading organizations of India. He has
           conducted research on the best alternative schools of India. He has published articles
           on teacher training, design thinking, and best practices in schools, etc. He has also
           facilitated internship programs for students of IIT Delhi, Azim Premji University and
           BITS Pilani. He has designed programs for rural learning centers, educational tours, fore
           At Vihatha, he intends to build excellent and humane educational models and programs
           which can strengthen the ‘Sahajta’ (self-reliance, authenticity and sustainability) of the
           Society.
          
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
        <h2>COFOUNDER - SHRADDHA YAMKAR</h2>
        
        <p>
            Shraddha is an alumnus of Nirmala Niketan and Gandhi Fellowship Program. She
            started teaching and social work at the age of 11. Her life and education has been
            inspired a lot by experiential learning programs. She realized a lot about 
            herself while volunteering regularly for Door Step Foundation in her teenage years. She also
            volunteered for Pratham for various programs. She has worked with 
            Piramal Foundation and Navdhanya in Program management. She
            is the co-owner & founding member of Farmers Pride. She has built a wonderful
            platform for connecting organic farmers and consumers. She brings in her rich 
            insights from her work in education, organic farming and experiential learning 
            to us. She leads the organizational development and welness programs in Vihatha. 

        </p>
      </div>
      <div className="mission-image">
        <img src={missionimg} alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        
        <h2>MEETING THOUGHT LEADERS AND PRACTITIONERS BRINGING CHANGE </h2>
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


export default OurTeam;