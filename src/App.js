import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import MainHeader from './components/MainHeader';
import SectorsList from './components/Sectors/SectorsList';
import StocksList from './components/Stocks/StocksList';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
    <Routes>
      <Route
        exact path="/"
        element={(
          <>
            <SectorsList />
          </>
        )}
      />
      <Route
        path="/:sector"
        element={(
          <>
            <StocksList />
          </>
        )}
      />
    </Routes>
  </Router>
);

export default App;
