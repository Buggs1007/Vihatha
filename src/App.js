import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import OurStory from './components/OurStory/OurStory';
// import AboutUs from './components/AboutUs/AboutUs';
// import VisionPage from './components/VisionPage/VisionPage';
// import KeyFocusAreas from './components/KeyFocusAreas/KeyFocusAreas';
// import Support from './components/Support/Support';
// import OurTeam from './components/OurTeam/OurTeam';
// import MedhaswiProg from './components/MedhaswiProg/MedhaswiProg';
// import SelpProgram from './components/SelpProgram/SelpProgram';
// import WellBeingProg from './components/WellBeingProg/WellBeingProg';
// import BlogsPage from './components/BlogsPage/BlogsPage';
import BlogTwo from './components/BlogTwo/BlogTwo';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <VisionPage /> */}
      {/* <Support /> */}
      {/* <OurStory /> */}
      {/* <OurTeam />  */}
      {/* <AboutUs />  */}
      {/* <KeyFocusAreas/> */}
      {/* <WellBeingProg/> */}
      {/* <SelpProgram /> */}
      <BlogTwo />
      {/* <MedhaswiProg /> */}
      {/* <BlogsPage /> */}
    </div>
  );
};

export default App;