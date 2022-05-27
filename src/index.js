import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CodeChallenges from "./pages/Codechallenges";
import About from "./pages/About";
import Rain from "./codechallanges/rain/Rain";
import Dragforce from "./codechallanges/dragforce/Dragforce";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/codechallenges" element={<CodeChallenges />} />
      <Route path="/about" element={<About />} />
      <Route path="/rain" element={<Rain />} />
      <Route path="/dragforce" element={<Dragforce />} />
    </Routes>
  </BrowserRouter>
)
