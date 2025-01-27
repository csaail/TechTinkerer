import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage/Homepage';
import PcbDesignPage from './components/Pages/PCBDesign/PcbDesignPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pcb-design" element={<PcbDesignPage />} />
      </Routes>
    </Router>
  );
}

export default App;
