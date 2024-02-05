import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';

import Home from './component/Home';
import About from './component/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
