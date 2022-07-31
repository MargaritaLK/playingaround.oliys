import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom'


import './index.css';
import App from './App';
import About from "./pages/About";
import CodeChallenges from "./pages/Codechallenges";
import Dragforce from "./codechallanges/dragforce/Dragforce";
import Radiusflow from "./codechallanges/radiusflow/Radiusflow";
import Circlingaround from "./codechallanges/circlingaround/Circlingaround";
import Perlinnoiseflow from './codechallanges/perlinnoiseflow/Perlinnoiseflow';
import Bezier from './codechallanges/bezier/Bezier';



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router baseline='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/codechallenges" element={<CodeChallenges />} />
      <Route path="/about" element={<About />} />
      <Route path="/codechallenges/dragforce" element={<Dragforce />} />
      <Route path="/codechallenges/radiusflow" element={<Radiusflow />} />
      <Route path="/codechallenges/circlingaround" element={<Circlingaround />} />
      <Route path="/codechallenges/perlinnoiseflow" element={<Perlinnoiseflow />} />
      <Route path="/codechallenges/bezier" element={<Bezier />} />
    </Routes>
  </Router>
)
