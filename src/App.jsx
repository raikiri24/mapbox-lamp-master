import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import ContextProviders from './context/ContextProviders';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ContextProviders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
