import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import IndustrialGiants from './pages/FamousFor/IndustrialGiants';
import NotablePersonalities from './pages/FamousFor/NotablePersonalities';
import EducationalInstitutions from './pages/FamousFor/EducationalInstitutions';
import HillStations from './pages/Tourism/HillStations';
import MuseumsHeritage from './pages/Tourism/MuseumsHeritage';
import ParksRecreation from './pages/Tourism/ParksRecreation';
import Banks from './pages/PublicUtilities/Banks';
import Hospitals from './pages/PublicUtilities/Hospitals';
import Airport from './pages/PublicUtilities/Airport';
import BeautifulBeaches from './pages/Tourism/BeautifulBeaches';
import {Temples } from './pages/FamousFor/Famoustemples';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/famous-for/industrial-giants" element={<IndustrialGiants />} />
          <Route path="/famous-for/notable-personalities" element={<NotablePersonalities />} />
          <Route path="/famous-for/educational-institutions" element={<EducationalInstitutions />} />
          <Route path="/tourism/hill-stations" element={<HillStations />} />
          <Route path="/tourism/museums-heritage" element={<MuseumsHeritage />} />
          <Route path="/tourism/parks-recreation" element={<ParksRecreation />} />
          <Route path="/public-utilities/banks" element={<Banks />} />
          <Route path="/public-utilities/hospitals" element={<Hospitals />} />
          <Route path="/public-utilities/airport" element={<Airport />} />
          <Route path="/beaches" element={<BeautifulBeaches/>} />
          <Route path="/famous-for/famous-temples" element={<Temples/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
