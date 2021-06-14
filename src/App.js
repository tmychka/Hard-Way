import React from 'react';
import Mon from './Days/Mon/Mon'
import About from './components/About/About'
import Boards from './components/Boards/Boards'
import Navibar from './components/Navibar'
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
     <>
      <Navibar />

      <Switch>
        <Route exact path="/boards/:id" component={Mon} />
        <Route exact path="/boards" component={Boards} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
