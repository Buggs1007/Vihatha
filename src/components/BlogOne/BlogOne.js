import React from 'react';
import './BlogOne.css';
import imgg1 from '../BlogOne/blogone1.png'; 
import imgg2 from '../BlogOne/blogone3.png'; 
import bgimage from '../BlogOne/blogone2.jpg'; 


const BlogOne = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src={bgimage} class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">A1/A2 MILK</h1>

        </div>
      </section> 
 
<div className='artical'>

    <div className='articalcontent'>

    <section className='Intro'>
    <div className='Introdiv'>
        <h1>Is A1 milk A-one in terms of Quality ?</h1>
        <h2>- Siddharth Gupta, Student, BITS Pilani </h2>
        

    </div>
</section>

<section className='IntroContent'>
    <div className='IntroContentDiv'>
        <h1>Introduction</h1>
        <p>
        Generally we think that milk is a good source of nutrition and consume it for a wholesome nutrition. That’s how the entire country purchases milk - we consume more than 203 million metric tonnes of milk in a year. Now, different companies are selling a different type of milk - A2 milk which is expensive and a few companies also claim that their A2 milk is more authentic and pure. Let us try to explore the meaning, significance and sources of A2 milk and why it is preferred over A1 milk. 

        </p>
      <img src={imgg1} class = "imgg1" alt="Example" />
      <img src={imgg2} class = "imgg2"alt="Example" />

    </div>

</section>

<section  className='part2'>
    <div className='part2div'>

        <h1>What is A2 milk ? -</h1>
        <p>
        Milk is a rich source of protein - 80 % of this protein is casein. Around 30 % of this casein is beta casein. A1 and A2 are two variants of beta casein.  A1 milk contains A1 type of proteins and A2 milk contains the A2 proteins. These proteins differ in their breakdown in our body and have different structures that lead to different effects on our body. 
        <br/> <br/>
        Historically, cows produced milk that contained only the A2 form of beta-casein. Today, most of the milk available from the grocery store contains mostly A1 proteins. 
        <br/> <br/>
        A1 milk is milk obtained from cows of Western Origin like Holstein Friesian, Jersey, etc. On the other hand, A2 milk stands for the milk obtained from cows of Indian Origin like Gir, Sahiwal and Rathi.
        </p>

    </div>

</section>

<section className='part3'>
    <div className='part3div'>
        <h1>Disadvantages of the A1 milk:</h1>
        <p>
        A1 milk proteins are broken down to give BCM-7 (Beta casomorphin 7), which has morphine-like effects on our nervous system. This creates addiction towards milk and leads to neuro disorders like cognitive disorders and symptoms of autism. The morphine effect also causes constipation, hence people in the Western countries have constipation from milk. A1 milk protein has ‘Histidine’ which forms Histamine and causes allergic reactions in the body. So, kids consuming A1 milk suffer from allergic cough, running nose and asthma. Also, A1 milk affects lipid and carbohydrate metabolism in our body leading to increased risk of obesity and diabetes. 
        </p>

    </div>

</section>

<section className='part4'>
    <div className='part4div'>
       <h1>Advantages of A2 milk:</h1>
       <p>
       There are many advantages of A2 milk which outweigh the risks of using A1 milk. 
       </p>
       <br/>
       <ul>
          <li>A2 milk contains A2 Beta Casein, which makes it similar to mother’s milk. It has high levels of Omega 3 that helps in cleaning cholesterol deposits in the blood vessels. </li>
          <li>The cerebrosides of A2 milk boost brain power and strontium of A2 milk increases our immunity. </li>
          <li>A2 milk is easier to digest, doesn’t cause gas or bloating and cures irritable bowel syndrome. </li>
          <li>A2 milk protein has anti-cancer properties and has the ability to prevent and cure cancer.</li>
          <li>A2 milk is really good for nervous system. </li>
       </ul>

    </div>

</section>

<section className='part5'>
    <div className='part5div'>
        <h1>Some differences between A1 and A2 milk include: –</h1>
        <table className='meaningalign'>
            <tr>
                <td className="meaning">A1 milk</td>
                <td className="meaning">A2 milk</td>
            </tr>

            <tr>
                <td>
                    <ul>
                        <li>Obtained from foreign breeds like jersey and HF.</li>
                        <li>Contains histidine at 67 position of amino acid</li>
                        <li>Contains beta casino morphine(BCM) which has potential of causing type1 diabetes. </li>
                        <li>Most people are A1 intolerant</li>
                        <li>Less nutrition</li>
                        <li>Can cause stomach ulcer, bloating, gas.</li>
                        <li>Potential to cause high blood pressure</li>
                        <li>Reported several allergic side effects.</li>
                        <li>Sudden death syndrome in infants.</li>
                        <li>Metabolic degenerative diseases.</li>
                        <li>Also has the potential to cause cardiac arrest and heart attack.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Obtained from Indian breed like like  Gir, Sahiwal, kankrej, etc.</li>
                        <li>contains proline at 67 position of amino acid</li>
                        <li>No BCM so easily digestible.</li>
                        <li>Has anti-cancerous properties.</li>
                        <li>Contains omega3 that helps on clearance of cholesterol thus prevent risk of high blood pressure.</li>
                        <li>Has cerebrosides helps in increasing brain power.</li>
                        <li>It is good for kidney.</li>
                        <li>Regular consumption increases good(HDL) cholesterol.</li>
                        <li>No allergic effect has been reported.</li>
                        <li>Boost immune system</li>
                        <li>Safe for the consumption of children, helps in proper growth and development.</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>The potential cause for the use of A1 milk is growing need of milk. The foreign breed has more productivity of milk relative to the Indian breed i.e. 15 to 20 litres /day</td>
                <td>Natural breed produces only 8-10 litres/day but they are very resistive to diseases.</td>
            </tr>
                       
            
        </table>

    </div>
</section>

<section className='part6'>
    <div className='part6div'>
        <h1  className='textcenter'>Conclusion</h1>
        <p>
        The differences would be enough for you to get the reason why you should prefer A2 milk over A1 milk. Also, the nutritional content of A2 milk is greater than A1 milk. The below table and chart list the different nutritional information in both A1 and A2 milk.
        </p>

        <table  className='table2'>
            <tr>
                <td>Nutrients/100 ml</td>
                <td>A2 Milk</td>
                <td>A1 MIlk</td>
            </tr>
            <tr>
                <td>Energy</td>
                <td>278</td>
                <td>270</td>
            </tr>
            <tr>
                <td>protein</td>
                <td>3.3</td>
                <td>3.3</td>
            </tr>
            <tr>
                <td>fat</td>
                <td>3.7</td>
                <td>3.5</td>
            </tr>
            <tr>
                <td>Saturated fat</td>
                <td>2.4</td>
                <td>2.1</td>
            </tr>
            <tr>
                <td>carbohydrate</td>
                <td>5</td>
                <td>4.8</td>
            </tr>
            <tr>
                <td>sodium</td>
                <td>37</td>
                <td>45</td>
            </tr>
            <tr>
                <td>calcium</td>
                <td>117</td>
                <td>120</td>
            </tr>
            <tr>
                <td>lactose</td>
                <td>5</td>
                <td>4.8</td>
            </tr>
    
        </table>

        <br/> <br/> <br/>
        <p>
        Hope this article would have provided you with the different advantages of A2 milk over the A1	 milk and you would now prefer the A2 milk.
        </p>

    </div>

</section>

<section className='part7'>
    <div className='part7div'>
        <h1 className='textcolor'>References</h1>
        <ol>
            <li>A1 and A2 milk and its impact on health -  International journal of science and nature</li>
            <li>A2 milk: Benefits, vs. A1 milk, side effects, alternatives, and more (medicalnewstoday.com) </li>
        </ol>
        

    </div>
</section>
    
    </div>

</div>

    </div>
  );
};


export default BlogOne;