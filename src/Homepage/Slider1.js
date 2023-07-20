import logo1 from './sliderImages/1 A discussion on Gandhi _ Life Skills.jpeg'
import logo2 from './sliderImages/Awareness about Biodiversity _ Farming.jpg'
import logo3 from './sliderImages/Educational Conference - IIT Delhi.jpg'
import logo4 from './sliderImages/Interaction with Govt Schools.jpg'
import logo5 from './sliderImages/Farmers pride.png'
import Carousel from 'react-bootstrap/Carousel';



function Slider1() {

  return (
    <div className='slider'>
      <Carousel  className='slider1'>
        <Carousel.Item className='slider2'>
          <img
            className="d-block w-100"
            src={logo1}
            alt="First slide"
            
          />
          <Carousel.Caption className='caption'>
            <h3>Transformative experiential learning programs</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider2'>
          <img
            className="d-block w-100"
            src={logo2}
            alt="Second slide"
            
          />

          <Carousel.Caption className='caption'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider2'>
          <img
            className="d-block w-100"
            src={logo3}
            alt="Third slide"
            
          />

          <Carousel.Caption className='caption'>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider2'>
          <img
            className="d-block w-100"
            src={logo4}
            alt="Fourth slide"
            
          />

          <Carousel.Caption className='caption'>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider2'>
          <img
            className="d-block w-100"
            src={logo5}
            alt="Fifth slide"
            
          />

          <Carousel.Caption className='caption'>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Slider1;