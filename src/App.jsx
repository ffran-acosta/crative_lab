import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AbautUs';

function App() {
  return (

    <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/creative-lab" element={<CreativeLab />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </Router>

  );
}

export default App;