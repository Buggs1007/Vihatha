import React from 'react';
import './KeyFocusAreas.css';
import bgimg from '../KeyFocusAreas/camp.jpg';
import visionimg from '../KeyFocusAreas/vihatha1.png';
import missionimg from '../KeyFocusAreas/vihatha2.jpg';
import objectivesimg from '../KeyFocusAreas/vihatha3.jpg';
import NavBar from '../../NavbarComponents/Navbar';
import Footer from '../../Homepage/Footer';


const KeyFocusAreas = () => {
  return (
    <div>
      <NavBar/>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">KEY FOCUS AREAS OF VIHATHA</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>LEARNING :</h2>
        <ul>
          <li>To establish, maintain, preserve and support integral, holistic and experiential education related activities for schools, colleges, universities and any educational institutions.</li>
          <li>To design and conduct special experiential training programs for students from high schools, colleges and universities to provide relevant skills to become eligible for employment and good citizens.</li>
          <li>To promote cultural and spiritual tourism rooted in Indian tradition to develop appreciation and respect for diverse societies, institutions, people and nature in India and abroad. </li>
          <li>To establish philanthropic libraries and activity centers at community and school, college and universities.</li>
          <li>To provide financial assistance to cover tuition fees, books, boarding expenses of students of merit to pursue education after Secondary level from rural and need in the society. </li>
          <li>To establish, adopt, sponsor establishment of, manage and run any educational institutions (residential or otherwise) particularly for the benefit of poorer sections of the society.</li>
          <li>To develop unique bridge courses and events to promote interdisciplinary learning and 21st century skills in primary & secondary school children through special workshops and post workshop engagements.</li>
          <li>To professionally review ongoing engagements, research, write about integral, holistic and experiential education for schools, colleges and universities. </li>
        </ul>
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
        
        <h2>SUSTAINABILITY: </h2>
        <ul>
          <li>To build Kitchen Garden in educational institutions, homes, community and free open spaces. </li>
          <li>To conduct experiential workshops for all individuals in the society to happily adopt sustainable practices in life.</li>
          <li>Research and Documentation of Indigenous/Indian Knowledge Traditions with the help of Students & professionals.</li>
          <li>Spread indigenous/Indian Knowledge  Traditions through various media for the benefit of the society and country.</li>
          <li>To promote and involve in plantation activities for sustainability and to mitigate climate change.</li>
          <li>To promote sustainable livelihoods through making people aware about various schemes run by the government and other institutions in this domain.</li>
          <li>To take-up the projects of Rural and Urban Development, especially Agriculture and Watershed programs, to create strong public opinion for environmental protection and harmony between nature and man.</li>
          <li>To collaborate with like-minded NGOs for building greener and cleaner planet earth.</li>
        </ul>
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
        
        <h2>WELL-BEING :</h2>
        <ul>
          <li>To develop a simple, deep and shared understanding about childhood and teenage with teachers and parents. </li>
          <li>To promote the development of evolutionary culture in schools.</li>
          <li>To conduct workshops with teachers on self-awareness and academic leadership.</li>
          <li>To collaborate with like-minded experts and NGOs for research, workshops and informal engagement with students.</li>
          <li>To conduct workshops for self-awareness and self-reflection in schools.</li>
        </ul>
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


export default KeyFocusAreas;