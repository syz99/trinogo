import React from 'react';

import { Link } from 'react-router-dom';

// import couchplane from 'images/Couchplane.png';
import './style.css';

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="text-modal">
          <div>
            Hey,<br></br>where are you not off to next?
          </div>
          <div>
            <button className="btn-learnmore">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
