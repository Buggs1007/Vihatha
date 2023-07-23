import React from 'react';
import './WellBeingProg.css';
import bgimg from '../WellBeingProg/well3.jpg';
import visionimg from '../WellBeingProg/well1.jpg';
import missionimg from '../WellBeingProg/well2.jpg';
import objectivesimg from '../WellBeingProg/well4.jpg';


const WellBeingProg = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">WELLBEING BOOT CAMPS PROGRAM</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>WELLBEING BOOT CAMPS PROGRAM :</h2>
        <p>
            Our well being camps are designed to develop the natural abilities of children and teenagers. We have studied 
            and interacted with life skills trainers, experienced psychologists, thinkers and spiritual organizations to develop a unique experiential curriculum for wellness. Even after interacting with so many experts, we have intentionally kept everything simple so that it can be practiced and experienced.
            <br></br>
            <br></br>
            This program contains interesting content, methods and tools to help students understand different dimensions of their personality. 
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
        
        <h2>THROUGH THIS PROGRAM CHILDREN : </h2>
        <ul>
          <li>Develop awareness about their attention.</li>
          <li>Practice mindful eating, listening, touching and seeing </li>
          <li>Become more sensitive to the senses and the body - aware of bodily sensations and associated feelings.  </li>
          <li>Learn to observe their thoughts and emotions.</li>
          <li>Make meaning of emotions. They also learn to articulate their feelings.</li>
          <li>Assess and regulate their moods and feelings.</li>
          <li>Learn to understand emotional patterns and go beyond it.</li>
          <li>Learn to see a situation from another's perspective. </li>
          <li>Acknowledge nurturing and sustainable emotions.</li>
          <li>Cultivate positivity and self motivation.</li>
          <li>Learn to manage time and resources.</li>
          <li>Develop a healthy and more fulfilling daily schedule</li>
          <li>Learn to assess and improve oneself</li>
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
        
        <h2>OBJECTIVES OF THE PROGRAM</h2>
        <p>
            We believe that a one time workshop gives useful experiences, insights and tools. But participants need 
            continuous self-assessment and inner work to keep improving their strengths and work on their limitations. For this, We have introduced a competency based self development framework in the program. It focuses on  - 
        <br /><br />
        <ul>
            <li>Self-Observation</li>
            <li>Sensitivity </li>
            <li>Reflection</li>
            <li>Self Regulation</li>
            <li>Motivation</li>
            <li>Rigor and Perseverance</li>
            <li>Empathy</li>
            <li>Confidence</li>
            <li>Communication</li>
            <li>Social Skills</li>

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


export default WellBeingProg;