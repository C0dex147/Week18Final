import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Library from './Library';
import ContactUs from './ContactUs';



export default function App() {
  return (
    <Router>
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/library" component={Library}/>
      <Route path="/contact" component={ContactUs}/>
    </Switch>
    </div>
 </Router>
 );
}
