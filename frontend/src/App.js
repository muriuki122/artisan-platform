import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<Login/>} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
