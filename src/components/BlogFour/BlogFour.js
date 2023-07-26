import React from 'react';
import './BlogFour.css';
import imgg1 from '../BlogFour/1st image.png'; 
import imgg2 from '../BlogFour/honey-image.jpg'; 
import NavBar from '../../NavbarComponents/Navbar';
import Footer from '../../Homepage/Footer';


const BlogFour = () => {
  return (
    <div>
      <NavBar/>
<section className="hero">
        <div className="container1">
          
          <img src={imgg2} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">HONEY</h1>

        </div>
      </section> 
 
<div className='artical'>

    <div className='articalcontent'>

    <section className='Intro'>
    <div className='Introdiv'>
        <h1>HONEY</h1>
        <h2>- Siddharth Gupta, Student, BITS Pilani </h2>
        

    </div>
</section>

<section className='IntroContent'>
    <div className='IntroContentDiv'>
        <h1>Introduction</h1>
        <p>
        Honey is very beneficial for health and contains various nutrients that have beneficial effects on our body. It plays a significant role in modulation of many diseases. It has many micronutrients like vitamins A, B1, B2, B6, C, D, calcium, phosphorus, zinc, iron, copper, magnesium, sodium, potassium, selenium and manganese. 
<br /> Please see the following chart for more details - 

        </p>

  
      <img src={imgg1} class = "imgg1" alt="Example" />
     

    </div>

</section>

<section  className='part2'>
    <div className='part2div'>

       
        <p>
        Due to the presence of so many nutrients in honey, it has various health benefits. Many studies have found out that honey exhibits a broad spectrum of therapeutic and healing properties. Some health benefits of honey include:        <br/> <br/>
        Historically, cows produced milk that contained only the A2 form of beta-casein. Today, most of the milk available from the grocery store contains mostly A1 proteins. 
        <br/> <br/>
        <ol>
            <li>Oral Health
                <ul>
                    <li>it is less cariogenic as compared to sugars.</li>
                    <li>It is observed that ten minutes after consumption of fruit juice tooth erosion was observed, while 30 minutes after honey ingestion the erosion was only very weak.</li>
                    <li>Few honey has antibacterial properties hence they prevent bacterial infection in teeth.</li>

                </ul>
            </li>
            <li>
            <ul>
                    <li>Honey is a potent inhibitor of the causing agent of peptic ulcers and gastritis, <strong>Helicobacter pylori.</strong></li>
                    <li>Many ancient books mention honey as an ingredient to treat gastro-intestinal disorders.</li>
          </ul>
            </li>
            <li>
            <ul>
                    <li>Compared to sugars, it's more beneficial for cardiovascular health.</li>
                    <li>It can contain nitric oxide. Increased levels of nitric oxides in honey might have a protecting function in cardiovascular diseases.</li>
                    <li>It stabilizes heart rate, increases LDL resistance, removes bad cholesterol, reduces inflammation and cardiometabolic risk. </li>
          </ul>
            </li>
            <li>It is used in face creams and shampoos as well</li>
            <li><strong>Controls premature aging</strong> - Honey is rich in antioxidants like phenolic acids and flavonoids. It helps to neutralize reactive oxygen species in your body which can build up in cells and cause damage. It also controls premature aging and helps the skin to glow.</li>
            <li> <strong>Anti- cancer </strong>- It supports antimutagenic and antitumor activity as well. </li>
            <li>It has anti-inflammatory effects:- The mean plasma concentration of thromboxane B(2) is reduced  that of PGE(2) after honey ingestion.</li>
            <li>Antimicrobial, antiviral and antiparasitic activity:- Honey inhibits the growth of microorganisms and fungi. </li>
            <li>Helps to cure cough and cold.</li>
        </ol>
        </p>
        <p>
        So, when you eat honey everyday -  It improves metabolism, detoxifies your body, controls obesity, fights stress on the body, heart and the brain, and makes your skin glow. 
<br />But, you can avail these benefits only from pure natural honey. So, it is important to know about real natural honey before you buy and consume it. There are many types of synthetic honey available in the market.
        </p>

    </div>

</section>

<section className='part3'>
    <div className='part3div'>
        <h1>How is authentic honey made ?</h1>
        <p>
        Honey is a sweet, viscous food substance made by honey bees and some related insects. Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Bees store honey in wax structures called honeycombs. Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture. There are about 320 different varieties of Honey in the world.
       <br />Hence honey is very beneficial for the body. It is full of various nutrients that keep the body healthy. The nutrients found in honey include :

        </p>

    </div>

</section>

<section className='part4'>
    <div className='part4div'>
       
       <p>
       Apart from these nutrients, the elements present in honey include: 
       </p>
       <img src={imgg1} class = "imgg1" alt="Example" />
       <p>
       It is a sweet medicine for us and is very nutritious. So, we all should consume it on a daily basis due to all the benefits it offers. Hope this article has briefed you about the nutritional information of honey and its various good effects on our body.
       </p>

    </div>

</section>


<section className='part7'>
    <div className='part7div'>
        <h1 className='textcolor'>References</h1>
        <ol>
            <li>1.https://www.researchgate.net/publication/23803275 Honey for Nutrition and Health: A Review Article  in  Journal of the American College of Nutrition · January 2009
</li>
            <li>https://www.hindawi.com/journals/omcl/2018/8367846/ </li>
            <li> https://en.wikipedia.org/wiki/Honey
</li>
        </ol>
        

    </div>
</section>
    
    </div>

</div>
<Footer/>
    </div>
  );
};


export default BlogFour;