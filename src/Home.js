import React from 'react';
import{Link} from 'react-router-dom';
import './Index.css';
import './Home.css';
import homeImage from './img/laptop_online_resources_725x483.jpg';


const Home = () => {
  return (
    <div>
    <h1 className="home-title">Your Digital Library</h1>
    <img src={homeImage} alt="Home" className="home_img"/>
    <p className="home-desc">Your Digital Library is a website where a user has the ability to list and store books of their choice for 
      multiple reasons. Wether that be books they wish to read, have read, or own, they can be listed here in a 
      simple digital format.
    </p>
    <div className='buttons-container'>
    <Link to="/library" className="home-button">Get Started</Link>
    <Link to="/contact" className="home-button">Contact Us</Link>
    </div>
    </div>

  )
};

export default Home;