import { Carousel } from 'antd';
import logo1 from './sliderImages/1 A discussion on Gandhi _ Life Skills.jpeg'
import logo2 from './sliderImages/Awareness about Biodiversity _ Farming.jpg'
import logo3 from './sliderImages/Educational Conference - IIT Delhi.jpg'
import logo4 from './sliderImages/Interaction with Govt Schools.jpg'
import logo5 from './sliderImages/Interaction with Kids.jpg'


const contentStyle = {
  margin: '150px 10px 100px 10px' , 
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const imageStyle = {
  margin: '150px 10px 100px 550px' , 
  height: '400px',
  
};
const Slider = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={logo1}  className='logo' style={imageStyle}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={logo2}  className='logo' style={imageStyle}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={logo3}  className='logo' style={imageStyle}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={logo4}  className='logo' style={imageStyle}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={logo5}  className='logo' style={imageStyle}/></h3>
    </div>
  </Carousel>
);
export default Slider;