import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <h1>this is iNotebook</h1>
    </>
  );
}

export default App;
