import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { HomeMenu, NotFound, Stream } from './pages';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-full">
        <Header />
        <main className="flex justify-center flex-grow items-center w-full">
          <Routes>
            <Route path="/" element={<HomeMenu />} />
            <Route path='stream' element={<Stream />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;