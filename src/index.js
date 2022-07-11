import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom'


import './index.css';
import App from './App';
import About from "./pages/About";
import CodeChallenges from "./pages/Codechallenges";
import Rain from "./codechallanges/rain/Rain";
import Dragforce from "./codechallanges/dragforce/Dragforce";
import Radiusflow from "./codechallanges/radiusflow/Radiusflow";
import Circlingaround from "./codechallanges/circlingaround/Circlingaround";



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router baseline='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/codechallenges" element={<CodeChallenges />} />
      <Route path="/about" element={<About />} />
      <Route path="/codechallenges/rain" element={<Rain />} />
      <Route path="/codechallenges/dragforce" element={<Dragforce />} />
      <Route path="/codechallenges/radiusflow" element={<Radiusflow />} />
      <Route path="/codechallenges/circlingaround" element={<Circlingaround />} />
    </Routes>
  </Router>
)
