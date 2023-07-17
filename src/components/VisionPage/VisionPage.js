import React from 'react';
import './VisionPage.css';

const VisionPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container1">
          
          <img src="https://img.freepik.com/premium-photo/group-indian-children-running_73899-1291.jpg?w=1060" class = "Topblockimg"alt="alternative-text"></img>
          <h1 className="about-us-text">ABOUT US</h1>

        </div>
      </section> 
 

<section className="section">
  <div className="container">
    <div className="vision-content">
      
      <div className="vision-text">
        <h2>OUR VISION</h2>
        <p>
          Vihatha is a catalyst for the creation of a society firmly rooted in the principles of excellence, mutual respect,
          harmony, and sustainability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi consequatur
          blanditiis voluptatem, et amet harum est architecto unde excepturi, dolorum reprehenderit, delectus ipsam aut
          obcaecati distinctio. Quos, neque perferendis!
        </p>
      </div>
      <div className="vision-image">
        <img
          src="https://images.unsplash.com/photo-1623122617524-18ca7a791c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
        <h2>OUR MISSION</h2>
        <p>
          The mission of Vihatha is to significantly improve the quality of school education, empower sustainable livelihoods and conserve nature through research, training, and collective.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis delectus doloribus molestias ex beatae et, cupiditate repellendus, numquam corrupti nemo aliquid deserunt assumenda enim? Pariatur, nemo necessitatibus, accusamus eos eum quo rerum, dignissimos culpa voluptates incidunt voluptatem ex assumenda.
        </p>
      </div>
      <div className="mission-image">
        <img src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" alt="Mission" />
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="objectives-content">
      <div className="objectives-text">
        <h2>OUR OBJECTIVES</h2>
        <ul>
          <li>To promote holistic and integral education in schools through school engagement programs.</li>
          <li>To develop teachers as efficient facilitators of holistic and integral education through teacher development programs.</li>
          <li>To support poor and disadvantaged children in overall development through scholarship programs and setting up of learning centers in slums and rural areas.</li>
          <li>To connect children and youth with organic farming and nature through experiential learning programs.</li>
          <li>To help children and teenagers explore health, nutrition, yoga and sports through wellness boot camps.</li>
          <li>To strengthen educational and social organizations through research, documentation, and training.</li>
          <li>To build collective consciousness in society on matters concerned with nature and sustainability - to build a cleaner and greener earth.</li>
        </ul>
      </div>
      <div className="objectives-image">
        <img src=" https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" className="imgs" alt="Objectives" />
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


export default VisionPage;