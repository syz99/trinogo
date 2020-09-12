import React from 'react';

import { Home } from 'pages';
import { Leaderboard } from 'components/leaderboard';
import { Plan } from 'components/plan';
import { Transport } from 'components/transport';
import { Passport } from 'components/passport';
import { Navbar } from 'components/navbar';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Switch>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/plan" component={Plan} />
        <Route path="/transport" component={Transport} />
        <Route path="/passport" component={Passport} />
      </div>
    </Switch>
  );
};

export default App;
