import Slider from './Slider';
import Slider1 from './Slider1';
import Cards from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home= () => {
    

    return (
        <div classsname="home">
            
            {/* <Slider /> */}
            <Slider1 />
            <Cards />
        </div>
    )
}

export default Home;