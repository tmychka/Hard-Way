import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Todo from '../../Todo/Todo';
import App from '../../App';

import './Style.css';

function Day() {

   return (
    
       <div>
          <div className='Day'>
               <a className='home' href='/'><i className="fas fa-home"></i></a>
             <div className="Day_conteiner">
                  <Todo /> 
             </div>
          </div>

          <Router>
             <Switch>
                <Route exact path="/" component={App} />
             </Switch>
          </Router>
       </div>

   )
}


export default Day;