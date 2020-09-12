import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

/**
 * landing page
 */
const App = () => {
  return (
    <Switch>
      <div className="App"></div>
    </Switch>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
