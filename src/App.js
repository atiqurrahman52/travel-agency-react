import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Destination from "./pages/Destination/Destination";
import About from "./pages/About/About";
import SingleDestination from "./pages/SingleDestination/SingleDestination";
import Layout from "./common/Layout";
import NotFound from "./shared/NotFound";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination/:id" element={<SingleDestination />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
