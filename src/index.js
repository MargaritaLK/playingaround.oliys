import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CodeChallenges from "./pages/Codechallenges";
import About from "./pages/About";

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
    </Routes>
  </BrowserRouter>
)
