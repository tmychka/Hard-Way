import React from 'react';
import Calendar from '../../components/Calendar';
import Todo from '../../Todo/Todo'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../../App';

import './Style.css';

function Day() {

   return (
      <Router>
       <div>
          <div className='Day'>
             <a className='home' href='/'><i className='fas fa-home'></i></a>
             <div className="Day_conteiner">
                  <Calendar />
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