import React from 'react';

import { SquareBtn } from 'components/trinogo-ui/';
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
            <SquareBtn text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
