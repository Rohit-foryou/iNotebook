import './App.css';

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';

import Home from './component/Home'; 


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  );
}

export default App;
