import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage'; 
import AdminPage from './AdminPage';


function App() {
  return(
    <Router>
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/admin" element={<AdminPage />} />
    </Routes>
</Router>
  );
}

export default App;
