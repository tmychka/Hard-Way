import React from 'react';
import Mon from './Days/Mon/Mon'
import About from './components/About/About'
import Boards from './components/Boards/Boards'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
     <div>
        <div className="App">
        <nav>
          <div className='conteiner'>
              <div className='logo'><img src='https://icons.iconarchive.com/icons/arrioch/office-dock/128/Whack-MS-Access-icon.png' width='50%' height='50%'></img></div>
              <div className='name'><a>Hard way</a></div>
            <div className='list'>
              <button type="button" className="btn btn-dark boards"><a className='boards-name' href='/Boards'>Boards</a></button>
              <button type="button" className="btn btn-dark"><a className='about' href='/About'>About</a></button>
            </div>
          </div>
             <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="currentColor" fill-rule="nonzero"><g><g><path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z" transform="translate(-564 -480) translate(528 444) translate(36 36)"></path></g></g></g></g></svg></div>
             <span className='month'>0/3</span>     
        </nav>
        </div>

         <div className='App2'>
             <div className='conteiner'>
               
                  <h1>Hello Boss!
                  <br/>you need this box</h1>
                  
          </div>  
               <div className='box'>
                    <a href='/Mon'><img src='https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/></a> 
             </div>
        </div>
         <Router>
             <Switch>
                 <Route exact path="/Mon" component={Mon} />
                 <Route exact path="/Boards" component={Boards} />
                 <Route exact path="/About" component={About} />
             </Switch>
        </Router>

    </div>
  );
}

export default App;
