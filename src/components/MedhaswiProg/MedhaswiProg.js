
import React from 'react';
import './MedhaswiProg.css';
import bgimg from '../MedhaswiProg/medh3.jpg';
import visionimg from '../MedhaswiProg/medh4.jpg';
import missionimg from '../MedhaswiProg/medh2.jpg';
import objectivesimg from '../MedhaswiProg/medh1.jpg';


const MedhaswiProg = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimg} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">MEDHASWI - A SCHOLARSHIP PROGRAM</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>MEDHASWI - A SCHOLARSHIP PROGRAM :</h2>
        <p>
            Medhasvi is a scholarship program for children whose parents engage in biodiversity based organic farming. 
            We believe that this scholarship program will help the children from farming communities to become better citizens and if they choose, they can become better farmers too! 
            <br></br>
            <br></br>
            Highly qualitative and comprehensive Scholarship Program
            <br></br>
            <br></br>
            We ensure maximum utilization of the donation made by you. We give 100 % of this amount to the children. 60 % of your donations goes for tuition fees, books and stationery for the child. The remaining 40 % is spent on residential personality development and life skill programs conducted by highly experienced institutions, technical institutes and digital platforms. 
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
        
        <h2>Why a Scholarship Program for children of Marginal Organic Farmers? : </h2>
        <p>
          We feel that small and landless farmers are not able to sustain themselves in agriculture. 
          They lack land, capital, knowledge and skills to survive in the market. The major studies on farmers suggest poor per capita and family income, huge debts compared to income, high risks due to overdependence on Monsoon, dependence on MSP due to poor connection with consumers, poor digital access and knowledge, exposure to fertilizers and pesticides causing serious health problems, etc.
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
        
        <h2>EFFECTS ON ORGANIC FARMERS :</h2>
        <p>
          Organic farmers are saved from the ill effects of working in hazardous atmospheres. But, 
          the financial situation becomes worse for organic farmers - due to less yields and poor access to knowledge about food processing and marketing. There is a huge digital divide and literacy gap if we compare farming communities and the urban sector. They need extraordinary entrepreneurial and technical knowledge to survive in the sector.
        <br /><br />
        These farmers are doing noble work by engaging in organic farming - giving high quality pure organic food to the society and saving biodiversity. Let us make our contribution by supporting their children for better education.

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


export default MedhaswiProg;

