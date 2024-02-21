import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AbautUs';
import { CinematicVideo, ContentCreation, HomeMenu, Streams, Photography } from './pages';


function App() {
  return (

    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/streams-lab" element={<Streams />} />
          <Route path="/content-creation-lab" element={<ContentCreation />} />
          <Route path="/cinematic-video-lab" element={<CinematicVideo />} />
          <Route path="/photography-lab" element={<Photography />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </Router>

  );
}

export default App;