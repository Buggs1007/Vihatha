

import React from 'react';
import './OurStory.css';
import visionimg from '../OurStory/story1.jpg';
import missionimg from '../OurStory/story2.jpg';
import objectivesimg from '../OurStory/story3.jpg';
import bgimg from '../OurStory/backgrnd.png';
import NavBar from '../../NavbarComponents/Navbar';
import Footer from '../../Homepage/Footer';

const OurStory = () => {
  return (
    <div>
      <NavBar/>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">OUR STORY</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2 className='storyheading'>OUR STORY</h2>
        <p>
          The Co-founders of Vihatha - Shraddha Yamkar and Rovin Pushp have worked
          with NGOs and educational institutions in management roles. Shraddha has
          been groomed by the Gandhi fellowship program while Rovin is Rashtram
          fellow. Their fellowship experience taught them very important lessons
          and the significance of experiential learning in life. They saw this
          gap in schools and intended to bring changes at both thought and practice
          level to make education more relevant, contextual and interesting. 
          They also felt that self-reliance and sustainable living needs to be
          integrated with the curriculum. Informally they have been doing many
          workshops with both private and government schools for life skills,
          creativity, food processing and nutrition, etc. But they felt that there
          is something more that needs to be done for providing rich academic and
          living experiences in Schools and Colleges.
          
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
           This quest led them to visit the best alternative schools and NGOs of 
           India. This research has given proper Vision, Knowledge and ideas to 
           start working on promoting holistic, integral and experiential education
           in Chhattisgarh. They have worked on designing wellness bootcamps, 
           nature immersion programs, rural STEAM projects to make learning 
           integral and useful.And, in addition to the above-mentioned issues, 
           the founders also intend to work for the education of marginalized 
           sections (which they have been doing in personal capacity since the 
           last 12 years). The founders are concerned about nature and sustainability.
           With all these experiences and inspiration, the Founders intend to bring 
           positive and sustainable changes in the society. They wanted more people to 
           join their initiatives and felt the need to institutionalize their efforts 
           for curricular and community level changes.  
           

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

      <Footer/>
    </div>
  );
};


export default OurStory;

