import Slider from './Slider';
import Slider1 from './Slider1';
import Cards from './cards';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
// import Testimonials from './Testimonials';
import './Homepage.css'
// import 'bootstrap/dist/js/bootstrap.bundle';

const Home= () => {
    

    return (
        <div classsname="home">
            
            {/* <Slider /> */}
            <Slider1 />
            <Cards />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    )
}

export default Home;