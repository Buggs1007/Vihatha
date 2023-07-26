import React from 'react';
import './KitchenProgram.css';
import imgg1 from './1st image.jpeg';

const KitchenProgram = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src="https://www.indiafoodnetwork.in/h-upload/2021/06/05/487153-kitchen-garden-1.webp" class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">KITCHEN GARDEN PROGRAM</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>KITCHEN GARDEN PROGRAM </h2>
        <p>
        This program aims to connect children with nature and help them understand the significance of farming, health, nutrition and sustainability. It is a highly practical program. The program includes both development of Kitchen Garden as well as providing academic experience.Students will get a living laboratory for environmental sciences. The kitchen garden will be safe for children as the space is nicely designed and no chemicals are used. 


          
        </p>
      </div>
      <div className="vision-image">
        <img
          src={imgg1}
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
        
        <h2>Let us try to understand 5 reasons to design and develop a rich kitchen garden in your school.   </h2>
        <ol>
          <li>Climate change and Sustainable living - The School kitchen garden is not just good for the school but also very beneficial for ecological balance. Scientists around the world are saying that it is the fastest and cheapest way to fight climate change. These tiny plants capture carbon and convert them into roots, stems, branches, leaves, flowers and fruits. That’s how the carbon cycle is balanced. Also, if children learn to grow vegetables and start doing it at home then they move towards self reliance for vegetables. They can also inspire others to grow their own vegetables.  </li>
          <hr />
          <li>Skills - It develops competencies like observation, sensitivity, critical thinking, planning, imagination, creativity and teamwork.  </li>
          <hr />
          <li>Technical awareness and innovation - It helps the students to learn about various tools, methods and material used in horticulture. They can also try news ideas in designing and maintaining the kitchen garden.  
 </li><hr />
      <li>Sensitivity - Students become more aware about harmful effects of dead food (especially junk food) and learn to appreciate foods good for vitality and nutrition.</li>      
        </ol>
      </div>
      <div className="mission-image">
        <img src="https://media.istockphoto.com/id/151521785/photo/african-gardener.jpg?s=612x612&w=0&k=20&c=xxI-y8b1mETYXKdPSxugo9g7oU-SXzxPRoShbHyjJRo=" alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        
        <h2>Topics Covered - 
        </h2>
    
            <ol>
            <li>Soil - micronutrients and microorganisms in the soil.</li>
            <li>Green waste, Variety of Compost and natural fertilizers.</li>
            <li>Designing a Kitchen garden   </li>
            <li> Introduction to Seeds</li>
            <li> Plants - Diverse varieties and different ways of developing them</li>
            <li>Stages of growth of different plants </li>
            <li>Nutritional aspects of vegetables and fruits  </li>
            <li>Values - Sensitivity towards plants and biodiversity, self reliance, respect for farmers.</li>  
        </ol>
       
      </div>
      <div className="objectives-image">
        <img src=" https://media.istockphoto.com/id/539823792/photo/market-for-sale-plants-many-plants-in-pots.jpg?s=612x612&w=0&k=20&c=PxHWUOLuw6JhatfoxptHRA8EFj0SmlpBlisRYJX5So8=" className="imgs" alt="Objectives" />
      </div>
    </div>
  </div>
</section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default KitchenProgram;
