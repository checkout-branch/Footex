import MainComponent from "./routes/rout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AboutUsComponent from "./routes/aboutus"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/about" element={<AboutUsComponent />} />
      </Routes> 
    </Router>
  )
}

export default App
