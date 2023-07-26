import React from 'react';
import './Bharatyatra.css';
import imgg1 from './bharatyatra.png';
import NavBar from '../../NavbarComponents/Navbar';
import Footer from '../../Homepage/Footer';

const BharatYatra = () => {
  return (
    <div>
      <NavBar/>
      <section className="hero">
        <div className="container1">
          
          <img src="https://wallpapercave.com/wp/wp6612913.jpg" class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">BHARAT ANUBHAV YATRA</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>BHARAT ANUBHAV YATRA </h2>
        <p>
        India has every conceivable geographical terrain, spectacular architecture, magnificent temples, rich and diverse flora and fauna, culture and tradition. In our experience, traveling across India is one of the purest forms of education for all age groups. It provides an awe inspiring experience and teaches a lot about us, shared culture, history, principles of nature and sustainability. 

Vihatha’s Anubhav Bharat Yatra provides an immersive experience in the rich culture, knowledge and traditions of India. We make your travel meaningful, purposeful and surprising. 

          
        </p>
      </div>
      <div className="vision-image">
        <img
          src="https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI="
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
        
        <h2>Why you should register your institution or group for Anubhav Bharat Yatra -  </h2>
        <ol>
          <li>The 3 I experience - Our program is Intuitive, immersive & inclusive. We offer sustainable right brain travel experience to the participants. We give them time and space to relax, unfold and engage themselves in a rich natural and cultural atmosphere. </li>
          <hr />
          <li>Multilayered -  Participants get to experience an amazing natural and serene environment, ancient architecture, local customs, rituals, natural and delicious cuisine, engagement with folk art and tradition, indigenous games, trekking etc. They learn about local history, customs, rituals and traditions from veteran storytellers during the program. </li>
          <hr />
          <li>Customized - The program is nicely curated and well thought of. Also, we do not take individual bookings for this program. This gives you a chance to customize the places and set of experiences for your group.
 </li><hr />
          <li>Safe and exciting - We have done extensive research and background work to make sure one gets rich experiences and insights during the program. We have selected places of cultural and spiritual significance for the yatra. We have visited these places and have a good understanding and relationship with the host. We will be there to live with you, guide you, ensure your safety and engagement with nature and people. </li>
          <hr />
          <li>Social and environmentally conscious - We live in a sustainable manner and eat natural food during the yatra. We do not go as tourists and override the places. We establish relationships with nature and society from the first day itself. We learn to live with nature and society as they are. For example - you get to work in the garden and pluck your own fruits and vegetables. In many ways, we live with people, work with them, and interact with them. And we meet a variety of people in this program - villagers, farmers, artisans, musicians, yoga teachers, etc. </li>
          <hr />
          <li>Benefits the local community - We involve local people and their homestays for food, stay and transport. More than 80 percent of your fees goes directly to the local community. </li>
          <hr />
          <li>Well Being - Experience Yoga, Meditation and traditional practices from experienced Sadhakas. We have also kept space for silent living in nature and Ashrams during the program. Some of our excursions are also designed in a way that you walk in silence and connect with Nature. It is said that such experiences help our parasympathetic nervous system and provide meditative experiences.</li>
          <hr />
          <li>Eclectic food - Last but not the least, the experience of India is incomplete without the experience of rich Indian cuisine. We offer vegetarian food during the program. Each full meal will have Shad Rasas (6 different tastes) in it. According to Ayurveda, it is important that the food taken with all the 6 rasas provide the right blend of vitality and nutrients for the body. From a nutritional point of view it has got most of the necessary ingredients - proteins, carbohydrates, vitamins, minerals and fiber.</li>
          <hr />
        </ol>

        <p>Towards the end of the program, you will feel that you have got deep connection and awareness about self, become more empathetic and humbler, and develop a better understanding of diversity, aesthetics, art, music and spirituality of India. You will have plenty of experiences and life lessons for further inspiration and use in life. </p>
      </div>
      <div className="mission-image">
        <img src= {imgg1} alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        
        <h2>We offer this program for 7 days only for group bookings. First phase of this program will be conducted in Uttarakhand, India. The program includes -
        </h2>
    
            <ol>
            <li>Living in a natural atmosphere - Time for relax and organically connect with the environment</li>
            <li>Visiting 3 Temples and participating in rituals</li>
            <li>Yoga and Meditation Sessions  </li>
            <li> Participate in morning and evening aarti</li>
            <li> Immersive experience in a local farm - Introduction to the farmers who give fruits, vegetables and milk during stay</li>
            <li>Working in a local farm for a day</li>
            <li>Visiting a Kitchen Garden and an Apple orchard </li>
            <li>Visiting local artisans and craftsmen</li>
            <li>Indigenous Games</li>
            <li>Local Cuisine serving varieties of Sattvic vegetarian food</li>
            <li>Excursions and trekking to nearby villages.</li>
            <li> Visiting a local waterfall </li>
            <li>Camping & Wildlife Safary </li>
            <li>Travel to nearby cities for visits and shopping </li>
            <li> Experience Vibrant Indigenous music</li>
        </ol>
<hr />
       
      </div>
      <div className="objectives-image">
        <img src=" https://gos3.ibcdn.com/india-uttarakhand-149361554819o.jpeg" className="imgs" alt="Objectives" />
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};


export default BharatYatra;
