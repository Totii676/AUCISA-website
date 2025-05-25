import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
function App() {
  return (
    <Router>
      <nav>
        <div className="left-links">
          <Link to="/">Home</Link>  
          <Link to="/events">Events</Link>
        </div>
        <Link to="/" className="title">
          <span className="nav-title">AUCISA</span>
          <span className="nav-title-description">Auckland University Cook Island Student Association</span>
        </Link>
        <Link className="meet-the-team" to="/team">Meet the Team</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;

