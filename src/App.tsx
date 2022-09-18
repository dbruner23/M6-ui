import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Overlook from './pages/Overlook/Overlook'
import DataAdd from './components/DataAdd/DataAdd'
import Error from './pages/Error/Error'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/property/:id" element={<Overlook />} />
          <Route path="/data" element={<DataAdd />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
