import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Homepage/Homepage.js';
import VisionPage from './components/VisionPage/VisionPage.js';
import WellBeingProg from './components/WellBeingProg/WellBeingProg.js';
import Support from './components/Support/Support.js';
import SelpProgram from './components/SelpProgram/SelpProgram.js';
import OurTeam from './components/OurTeam/OurTeam.js';
import OurStory from './components/OurStory/OurStory.js';
import MedhaswiProg from './components/MedhaswiProg/MedhaswiProg.js';
import KeyFocusAreas from './components/KeyFocusAreas/KeyFocusAreas.js';
import BlogTwo from './components/BlogTwo/BlogTwo.js';
import BlogThree from './components/BlogThree/BlogThree.js';
import BlogOne from './components/BlogOne/BlogOne.js';
import BlogFour from './components/BlogFour/BlogFour.js';
import BlogFive from './components/BlogFive/BlogFive.js';
import BlogSix from './components/BlogSix/BlogSix.js';
import KitchenProgram from './components/KitchenProgram/KitchenProgram.js';
import NaniProgram from './components/NaniProgram/NaniProgram.js';
import BharatYatra from './components/BharatYatra/Bharatyatra.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VisionPage" element={<VisionPage/>} />
        <Route path="/WellBeingProg" element={<WellBeingProg/>} />
        <Route path="/Support" element={<Support/>} />
        <Route path="/SelpProgram" element={<SelpProgram/>} />
        <Route path="/OurTeam" element={<OurTeam/>} />
        <Route path="/OurStory" element={<OurStory/>} />
        <Route path="/MedhaswiProg" element={<MedhaswiProg/>} />
        <Route path="/KeyFocusAreas" element={<KeyFocusAreas/>} />
        <Route path="/BlogTwo" element={<BlogTwo/>} />
        <Route path="/BlogThree" element={<BlogThree/>} />
        <Route path="/BlogOne" element={<BlogOne/>} />
        <Route path="/BlogFive" element={<BlogFive/>} />
        <Route path="/BlogFour" element={<BlogFour/>} />
        <Route path="/BlogSix" element={<BlogSix/>} />
        <Route path="/KitchenProgram" element={<KitchenProgram/>} />
        <Route path="/NaniProgram" element={<NaniProgram/>} />
        <Route path="/BharatYatra" element={<BharatYatra/>} />
      </Routes>
    </div>
  );
}

export default App;