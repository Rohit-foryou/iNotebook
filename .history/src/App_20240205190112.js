import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './component/Navbar';

import Home from './component/Home';
import About from './component/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
