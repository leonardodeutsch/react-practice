import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import MovieLand from './MovieLand.jsx';

const App = () => {
  
  return (
    <div className="app">
      <NavBar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieland" element={<MovieLand />} />
        </Routes>
      </div>
    </div> 
  );
}
 
export default App;

