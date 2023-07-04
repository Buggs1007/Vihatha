import { Carousel } from 'antd';
import logo from './img1.jpeg'
const contentStyle = {
  margin: '150px 10px 200px 10px' , 
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={logo}  className='logo'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Slider;