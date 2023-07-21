import React from 'react';
import './BlogsPage.css';

const BlogsPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">HEALTH, IMMUNITY AND NUTRITION</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>HEALTH, IMMUNITY AND NUTRITION :</h2>
        <p>
            Our immunity is an integrated defense system which consists of organs, tissues, cells and enzymes working together to protect the body from microbes or any other foreign particle or any cells that are malfunctioned within our body like cancerous cells. 
            <br></br>
            <br></br>
            The immune system primarily consist of:-
            <br></br>
            <br></br>
            <ul>
              <li>Specific cells like lymphocytes, macrophages.</li>
              <li>Lymphatic organs- thymus, spleen, tonsils, lymph nodes</li>
              <li>Diffuse lymphatic tissue -collections of lymphocytes and other immune cells dispersed in the lining of the digestive and respiratory tracts and in the skin</li>
            </ul>
            <br/> <br/>
            <p>
            The immune system works with the help of innate immune response and acquired immune response. Innate immune response is basically the first response to foreign threats. This system recognizes a potential threat, rings the alarm and the inflammatory response begins. The acquired immune response is a specific attack on foreign threats. Key players in the acquired immune response include T cells, B Cells and antibodies. 
            </p>
        </p>
      </div>
      <div className="vision-image">
        <img
          src="https://images.unsplash.com/photo-1585849469222-fb9abe5404d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        T cells are immune cells with different responsibilities. For example, helper T cells interact with B cells as part of the antibody production process and activate cytotoxic T cells to target the identified pathogen.
        <br/> <br/>
        B cells are immune cells that can circulate throughout the body, interact with antigen-presenting cells, activate helper T cells, transform into plasma B cells, and mass produce antibodies.
        <br/> <br/>
        Antibodies are proteins produced by B cells designed specifically to recognize a unique foreign substance, called an antigen.
        </p>
        <h2>What is immunological memory?</h2>
        <p>
         T cells, B cells, and antibodies also play an important role in creating immunological memory: the ability of the immune system to store information about a specific pathogen in preparation for future attacks by the same pathogen. Immunological memory is an important concept for the creation of vaccines, which fundamentally works by triggering an initial immune response that creates immunological memory without creating disease. So when an individual encounters the “real” pathogen, the immune system is already equipped with the specific machinery to protect the body.

        </p>
      </div>
      <div className="mission-image">
        <img src="https://images.unsplash.com/photo-1626957341637-6d7122ce692e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        
        <h2>Primary and secondary immunity:- </h2>
        <ul>
          <li>Primary immunity:- when body first exposed to any antigen ,body takes longer time to identify response</li>
          <li>Secondary Immunity:- after production of memory cells ,the body responds quickly towards antigen.</li>
        </ul>

        <h3>Pathogen vs. Antigen</h3>
        <p>
          A pathogen is a microorganism that can cause disease, such as a bacterium, virus, protozoan, or fungus. An antigen is a piece of a pathogen that can be recognized by antigen-presenting cells of the immune system, an important step in mounting an immune response.
        </p> 
      </div>
      <div className="objectives-image">
        <img src=" https://images.unsplash.com/photo-1633338378476-710abb9a2083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" className="imgs" alt="Objectives" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="mission-content">
      <div className="mission-text">
        <h2>Artificial immunity : </h2>
        <p>
        Exposing the body to antigen after weakening it so that the body is able to produce memory cells and act accordingly during external attack.
        <h3>Intervention of food in immunity:-</h3>
        Proper amount of nourishment is required to work all function properly.for active immune system the demand for such nutrients increases that support the immune system like .proper nutrition also fasten the response of the immune system.
        <br/> <br/>
        <h3>Some healthy ways to boost immune system:-</h3>
        <ul>
          <li>Don’t smoke</li>
          <li>Diet helpful for immunity</li>
          <li>Exercise regularly</li>
          <li>Sanitation</li>
          <li>Minimize stress</li>
          <li>Maintain weight</li>
        </ul>
        
        </p>
      </div>
      <div className="mission-image">
        <img src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Mission" />
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


export default BlogsPage;