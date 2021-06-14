import React from 'react';
import Mon from './Days/Mon/Mon'
import About from './components/About/About'
import Boards from './components/Boards/Boards' // use single approach with import
import Navibar from './components/Navibar' // add semicolons at the end
import { Switch, Route } from 'react-router-dom';
// absolute and relative import
import './App.css';

function App() {
  return (
     <div className="d-flex flex-column h-100">
     {/* Rename to Navbar */}
      <Navibar />

      <main className="flex-grow-1">
        <Switch>
          {/* add one more componet something like Dashboard */}
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/boards/:id" component={Mon} />
          <Route exact path="/boards" component={Boards} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
