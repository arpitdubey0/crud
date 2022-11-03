
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './component/Navbar';
import Table from './component/Table';
import Edit from './component/Edit';
import Register from './component/Register';
import Detail from './component/Detail';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
   <>
   <Navbar/>
   <Router>
      <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Edit/:id" element={< Edit />} />
          <Route path="/view/:id" element={< Detail />} />
      </Routes>
    </Router>
   </>
   
  );
}

export default App;
