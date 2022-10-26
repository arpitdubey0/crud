
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './component/Navbar';
import Table from './component/Table';
import Register from './component/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
   <>
   <Navbar/>
   <Router>
      <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
   </>
   
  );
}

export default App;
