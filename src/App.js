import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import MainHeader from './components/MainHeader';
import SectorsList from './components/SectorsList';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <>
            {/* <MainHeader /> */}
            <SectorsList />
          </>
        )}
      />
    </Routes>
  </Router>
);

export default App;
