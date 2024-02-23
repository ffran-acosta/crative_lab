import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AbautUs';
import { CinematicVideo, ContentCreation, HomeMenu, Streams, Photography } from './pages';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<HomeMenu />} />
            <Route path="/streams-lab" element={<Streams />} />
            <Route path="/content-creation-lab" element={<ContentCreation />} />
            <Route path="/cinematic-video-lab" element={<CinematicVideo />} />
            <Route path="/photography-lab" element={<Photography />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;