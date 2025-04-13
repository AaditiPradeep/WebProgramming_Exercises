import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage'; 
import Lab13 from './MainLab13'; 
import Lab14 from './MainLab14'; 
import Lab15 from './MainLab15';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage - KEEP THIS */}
        <Route path="/" element={<HomePage />} /> 

        {/* Routes for labs - Use simple divs as placeholders */}
        <Route path="/lab13" element={<Lab13 />} /> 
        <Route path="/lab14" element={<Lab14 />} /> 
        <Route path="/lab15" element={<Lab15 />} /> 
        {/* Add placeholder for Lab 15 if you plan to route it */}
        {/* <Route path="/lab15" element={<div>Lab 15 Placeholder</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;