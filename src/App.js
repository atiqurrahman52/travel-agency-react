import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Destination from "./pages/Destination/Destination";
import About from "./pages/About/About";
import SingleDestination from "./pages/SingleDestination/SingleDestination";
import NavBar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Test from "./pages/Home/Test";
import Test2 from "./pages/Home/Test2";



function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
      {/* <Route path='/test2' element={<Test2 />} /> */}

      <Route path="/gallery" element={<Gallery/>} />
    
      <Route path='/destination' element={<Destination/>} />
      <Route path='/about' element={<About/>}  />
      <Route path='/single-destination' element={<SingleDestination />}/>
    </Routes>
    <Footer />
  </>
  );
}

export default App;
