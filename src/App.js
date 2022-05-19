import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import StocksContainer from './pages/StocksContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <header>
      <Navbar />
      <hr />
    </header>
    <Routes>
      <Route path="/" element={<StocksContainer />} />
    </Routes>
  </Router>
);

export default App;
