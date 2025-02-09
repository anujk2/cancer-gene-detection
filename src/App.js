import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GeneDetect from './pages/GeneDetect/GeneDetect';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';





import './App.css';
import NotFound from './pages/NotFound/NotFound';
import HomeOurTeam from './pages/Home/Home/HomeOurTeam/HomeOurTeam';
import Team from './pages/Team/Team';





function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
          
          <Route path="/genedetect" element={<GeneDetect />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
           
            <Route path="/about" element={<AboutUs />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
