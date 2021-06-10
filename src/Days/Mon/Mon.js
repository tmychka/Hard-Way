import React from 'react';

import Todo from '../../Todo/Todo'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../../App';

import './Style.css';

function Day() {

   return (
      <Router>
       <div>
          <div className='Day'>
             <a className='home' href='/'><i class="fas fa-home"></i></a>
             <div className="Day_conteiner">
                  <Todo /> 
             </div>
          </div>


            <Switch>
               <Route exact path="/" component={App} />
            </Switch>
       </div>
      </Router>
    )
 }


export default Day;