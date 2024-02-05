import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
