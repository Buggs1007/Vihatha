import React,{Component} from 'react';  
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

//Initialize Plugin
// $(".owl-carousel").owlCarousel()
 

export class Testimonials extends Component {  
        render()  
        {  
          return (  
            <div className='testimonials'>  
          <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           <h2 className='testTitle'><strong>Testimonials</strong></h2>   
           </div>      
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={2}  autoplay = {true} 
          className="owl-theme"  
          loop  
          nav  
          margin= {8}>  
           <div className='test'>
            {/* <div className='img1'><img  className="img" src= {logo1}/></div> */}
            <p className='testContent'>I participated in an internship designed and facilitated by Rovin in Vrindavan. During my time in Vrindavan, I was involved in initiatives to promote an inspiring education for students in rural areas. Teaching science through fun experiments and connecting with the locals opened my eyes to the resilience, simplicity, and warmth of the people living in rural areas. The gratitude and smiles I received from the students and their parents were far more rewarding than anything I had experienced.  Vrindavan has a unique and vibrant energy that captivated me from the beginning. Whether working in schools, exploring bustling temples, or residing in ashram, the whole experience left an indelible mark on my heart and changed me for the better. <br /> <br /> -Tanya Nagpal, PHD Student, IIT Delhi </p>
           </div>  
           <div className='test'>
            {/* <img  className="img" src= {logo1}/> */}
            <p className='testContent'>Working with Rovin sir was one of the most valuable and amazing experiences. We worked with students from many villages. Going from school to school and teaching relentlessly, I learnt a lot from him in a short period of time. It was an immersive trip which taught me about pedagogy, the importance of creative thinking, storytelling and games in curriculum. <br /> <br />  -Pratishtha, PHD Student, IIT Delhi </p>
            </div>  
            <div className='test'>
            {/* <img  className="img" src= {logo1}/> */}
            <p className='testContent'>My interaction with Vihatha opened new dimension of Knowledge and experience for me. I enhanced my public speaking and critical thinking skills. I have gained much knowledge regarding the nutrition and how the traditional ancient Indians approached it. That time I spent with Vihatha exposed me to a lot of useful indegeninous ideas and practices as well. <br /><br /> -Chandra Piyush Bajpai, Student, Delhi University</p>
            </div>  
            <div className='test'>
            <p className='testContent'>I really love to interact with Vihatha’s team. The content and experience is really transformative and rewarding. I always feel welcome in their nurturing learning environment. Interactions with the facilitators helped me to understand the basics of critical thinking, public speaking and leadership. Career counseling sessions with them made me more aware of the undergraduate colleges in India. They always encourage you to apply the insights from discussions in real life scenarios- making the learning experience all the more relevant and impactful. <br /><br /> -Sahil Shamnani</p>
            </div>
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
export default Testimonials

