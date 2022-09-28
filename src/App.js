import './App.css';
import Navbar from './shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Destination from './pages/Destination/Destination';
import About from './pages/About/About';
import Footer from './shared/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/about' element={<About/>}  />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
