import { Card, Col, Row } from 'antd';
import Button from 'react-bootstrap/Button';
import logo1 from './sliderImages/Vihatha_stakeholeders.pptx-removebg.png'

// const rowStyle = {
//   margin: '200px 10px 200px 10px',
// };
const moreButton1= ()=>{
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
const moreButton2= ()=>{
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
const moreButton3= ()=>{
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const Cards = () => (
  <div className='cards'>
    {/* <hr className='break'></hr> */}
    <div className= "problem">
      <h2 className= "probTitle"><strong>The Problem</strong></h2>
      <p className='problemContent'>The ASER and NAS reports show widening learning gaps in schools. Even when some of the students are able to read and write - they aren’t able to comprehend and express their thoughts with confidence. Many other studies also suggest that the existing education system promotes convergent thinking and does not provide space for exploration, authentic learning and thinking which keeps the students limited to information and limited analysis of concepts. As a consequence they are not able to make sense about a lot of things that concern their life and career.</p>
      
      <p className='problemContent'>We must have come across news and research about the employability gap in India. Most of the youth are rendered ‘unemployable’ due to lack of critical thinking skills, social emotional intelligence, communication skills, teamwork, etc. When asked, employers clearly say that there are serious problems in the current education system. Also, we can clearly see a lack of clarity about interests, skills when we talk to students opting for specialization at 10+2, graduate, postgraduate and even PHD.</p>
      
      <p className='problemContent'>The National Mental Health Survey suggests that more than 15 % people need active intervention for one or more mental health problems being faced by them. A recent research conducted by UNICEF on mental health of teengagers in India suggests that 1 out of 7 teenagers often feel depressed. Experts say that most of these issues can be handled with adequate parenting and school systems. </p>

      <p className='problemContent'>To sum up, we can clearly say that in the current scenario, the totality of life is not being properly considered while designing educational environments and processes for children. It is mostly concerned with immediate responses to immediate challenges. We can clearly see that livelihood is such a tangible issue that other issues related to a person's life are mostly neglected. This negligence shapes the way our current educational and social system is running.
      </p>
    </div>
    {/* <hr className='break'></hr> */}
    <div className= "solution">
      <h2 className='titleCards'><strong>Our Solution</strong></h2>
      <p className='solutionContent'>We have developed an integrated approach to work with different stakeholders in education and society to promote integral and holistic education. We did extensive study by visiting the best alternative schools, NGOs and research institutions. We have zeroed down on 3 key focus areas for this purpose -  
     </p>
      <Row gutter={16} className='rowStyle'> 
        <Col span={8}>
          <Card title="Education" bordered={false} className='cards123'>
            <p className='cardsContent'>Vihatha acknowledges the need to establish, maintain, preserve and support integral, holistic and experiential education. Vihatha acts as a catalyst in education through interventions like SELP which provides transformative experiential learning to the students. They remember the exposure, activities and discussions for a long period of time and the impression or key learnings are utilized <span id="dots1">...</span><span id="more1">  by them in real life.  We also engage in research and teacher training to promote integral and holistic education in schools. Recently, we have conducted visits to the best alternative schools of the country to understand and document their vision, philosophy, management, curriculum, academic calendar, mentoring and feedback systems.
            </span></p>
            <Button variant="outline-light" onClick={moreButton1} id="myBtn1">Read more</Button>
          </Card>
        
        </Col>
        <Col span={8} >
          <Card title="Sustainability" bordered={false} className='cards123'>
            <p className='cardsContent'>We intend to revive and co-create ecological wisdom and knowledge in the community through our sustainability programs. We are beginning with designing and developing kitchen gardens in homes, schools and communities. We will also conduct experiential workshops for all individuals to adopt sustainable living practices in daily life. Later, we also intend to take-up the projects of Rural and
            <span id="dots2">...</span><span id="more2"> Urban Development, especially Agriculture, plantation and Watershed programs, to create strong public opinion for environmental protection and harmony between nature and man.
            We will also collaborate with like-minded NGOs for research, awareness programs and sustainable livelihoods.


            </span></p>
            <Button variant="outline-light" onClick={moreButton2} id="myBtn2">Read more</Button>
          </Card>
        </Col>
        <Col span={8} >
          <Card title="Well-Being" bordered={false} className='cards123'>
            <p className='cardsContent'>We have chosen to work in this domain after deep contemplation and discussion with experts. We feel that learning and sustainability can not be achieved if our community suffers emotionally. We intend to collaborate with experts, parents and teachers to evolve a shared understanding on this topic. We will be conducting small scale workshops with parents and teachers for this purpose.
 
            <span id="dots3">...</span><span id="more3"> For students - we have designed simple experiential learning programs for children, youth and teenagers to help them understand their moods, emotions, energies and thoughts in a better way.</span></p>
            <Button variant="outline-light" onClick={moreButton3} id="myBtn3">Read more</Button>
          </Card>
        
        </Col>
        
      </Row>
      <br></br>
      <div className= "fullgraph">
      <div className= "graphTitle">
        <h2><strong>Our Programs</strong> </h2>
      </div>
      <div className='graph'>
        <img src={logo1} className='vihathaimg'></img>
      </div>
    </div>
    </div>
    {/* <hr className='break'></hr> */}
  </div>
);

export default Cards;