
import React from 'react';
import './Support.css';
import bgimg from '../Support/support2.jpg'
import NavBar from '../../NavbarComponents/Navbar';
import Footer from '../../Homepage/Footer';


const Support = () => {
  return (
    
    <div className="collaborate-page">
      <NavBar/>
      <div className="background-image">
         <h1 className="Collab">SUPPORT US</h1>
      </div>
      <div className="quote-container">
        <p id = "linebelowtext">"Rising inequality and discrimination are depriving people of their basic needs Together,<br/>we can change this"</p>
      </div>

      <div className="newdiv">
  <div className="image-container">
    <img src={bgimg} alt="img1" />
  </div>
  <div className="text-container">
    <h2>HOW CAN YOU SUPPORT VIHATHA :</h2>
       <p>
        We believe in the experiential model of human and social change. We felt a sustainable change will come only if we take small steps towards our goals
        <br/> <br/>
        You can help in creating
        <br/> <br/>
        The amount mentioned below are for the expenses Vihatha doesn’t charge any amount from the following programs:


      </p>
  </div>
</div>
<div className="newdiv">
  {/* Your existing content */}
</div>

<section className="programs-section">
  <div className="cards-container">
    <div className="card">
      {/* Program content for card 1 */}
      <h1> Sponsor a child for one year - Tuition fees, books, stationary and 2 residential personality development programs- 21000</h1>
      <p>
          Medhasvi is a scholarship program for children whose parents engage in biodiversity based organic farming. 
          We believe that this scholarship program will help the children from farming communities to become better citizens and if they choose they can become better farmers too ! 
          <br/> <br/>
          Highly qualitative and comprehensive Scholarship Program
          <br/> <br/>
          We ensure maximum utilization of the donation made by you. We give 100 % of this 
          amount to the children. 60 % of your donations goes for tuition fees, books and stationery for the child. The remaining 40 % is spent on residential personality development and life skill programs conducted by highly experienced institutions, technical institutes and digital platforms. 
      </p>
    </div>
    <div className="card">
      {/* Program content for card 2 */}
      <h1> Establish a Kitchen garden in a School - includes all the cost of the design, development and maintenance - 20000</h1>
      <p>
           This program aims to connect children with nature and help them understand the significance of farming, health, nutrition and sustainability. 
           It is a highly practical program. The program includes both development of Kitchen Garden as well as providing academic experience.Students will get a living laboratory for environmental sciences. The kitchen garden will be safe for children as the space is nicely designed and no chemicals are used. 

      </p>
    </div>
    <div className="card">
      {/* Program content for card 3 */}
      <h1> Organize Nature Immersion Program - includes travel, food and payment to the local artists, storytellers and guides - 30000</h1>
      <p>
          NANI (Nature and Nutrition Immersion)
          Rediscovering Nature & Nutrition through an immersive experience
          <br/> <br/>
          It is unique program to develop self-awareness, natural awareness and experiential understanding about nutrition. 
          This workshop aims at providing an immersive experience in nature, know organic farming and nutrition. It will provide a robust framework to the learners to evaluate what, why and how about food.  Our facilitators have rich experience in research, training and organic farming. This program caters to diverse learning needs and provides rich experiences to the learners. We have unique sessions for Observation, Silence, Indigenous Games, Arts, Indigenous craft, Storytelling, Music, Theatre, Projects and Teamwork.
      </p>
    </div>
    <div className="card">
      {/* Program content for card 4 */}
      <h1> Support for a Bharat Anubhav Yatra for 10 children, includes travel, food and stay expenses. Also, payment to local teachers and guides - 50000</h1>
      <p>
          India offers diverse landscapes, impressive architecture, majestic temples, and abundant wildlife, alongside its vibrant culture and traditions. Traveling across India is a profound learning experience for all ages, teaching about shared history, nature, and sustainability.
          <br/> <br/>
          Vihatha's Bharat Anubhav Yatra immerses participants in India's rich culture, knowledge, and traditions. The program ensures inclusive, engaging, and immersive travel experiences, connecting with people and nature.
          <br/> <br/>
          By the end, participants gain self-awareness, empathy, and appreciation for India's diversity, arts, music, and spirituality, inspiring their future endeavors.
      </p>
    </div>
    <div className="card">
      {/* Program content for card 5 */}
      <h1>Support 1 SELP program for 20 children - includes 3 day food , travel, stay, industrial exposure, hands-on learning and soft skills training.</h1>
      <p>
          We felt that exposure, training and opportunities to work in real life situations is missing in most schools and colleges of the country. 
          Therefore, we have started the SELP for students. During this program, Vihatha provides transformative experiential learning programs for students. We collaborate with schools and colleges to join the self-learning and field-based learning as per their requirements. We are also planning to start SELP programs during summer and winter vacations. 

      </p>
    </div>
    <div className="card">
      {/* Program content for card 6 */}
      <h1>Support 3 day Wellbeing boot camp for 20 children  - includes food, stay, stationary, books and honorarium to facilitators. </h1>
      <p>
          Our well being camps are designed to develop the natural abilities of children and teenagers. 
          We have studied and interacted with life skills trainers, experienced psychologists, thinkers 
          and spiritual organizations to develop a unique experiential curriculum for wellness. Even after 
          interacting with so many experts, we have intentionally kept everything simple so that it can be practiced and experienced.
          <br/> <br/>
          This program contains interesting content, methods and tools to help students understand different dimensions of their personality.
      </p>
    </div>
  </div>
</section>
        <Footer/>
    </div>
  );
};

export default Support;