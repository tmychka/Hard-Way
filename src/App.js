import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Mon from './Days/Mon';
import About from './pages/About';
import Boards from './pages/Boards'; 
import Navibar from './components/Navibar';
import Dashboard from './pages/Dashboard'; 

import './App.css';

function App() {
  return (
     <div className="d-flex flex-column h-100">

      <Navibar />

      <main className="flex-grow-1">
        <Switch>
           <Route exact path="/" component={Dashboard} /> 
           <Route exact path="/boards/:id" component={Mon} />
           <Route exact path="/boards" component={Boards} />
           <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
