import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navibar from './components/Navibar/Navibar';
import Dashboard from './pages/Dashboard';
import Info from './pages/Info';
import About from './pages/About';
import Board from './pages/Board';
import Boards from './pages/Boards';
import Marathon from './pages/Marathon/Marathon';
import Marathons from './pages/Marathon/Marathons';

import './App.css';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Navibar />

      <main className="flex-grow-1">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/boards/:boardId" element={<Board />} />
          <Route exact path="/boards" element={<Boards />} />
          <Route exact path="/marathon/:marathonId" element={<Marathon />} />
          <Route exact path="/marathon" element={<Marathons />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
