import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import ExampleChart from '../Chart/Chart';
import App from '../../App'

import './About.css'

function About() {
    return (
      <div className='wrapper'>
        <nav className='nav_bar'>
             <a className='app-menu' href='/'><img src='https://icons.iconarchive.com/icons/icons8/windows-8/24/Very-Basic-Menu-icon.png' /></a>
             <div className='conteiner'>
                <h1 className='name_nav'>About</h1>
            </div>
        </nav>
        <section className='section'>
              <div className='about_section'>
                 <div className='sect_box'>    
                    <div className='box1'>Html       <span>40%</span></div>
                    <div className='box2'>Css        <span>50%</span></div>
                    <div className='box3'>Javascript <span>30%</span></div>
                    <div className='box4'>React      <span>30%</span></div>
                    <div className='box5'>Python     <span>10%</span></div>
                 </div>
                  <ExampleChart />
              </div>
        </section>

          <Router>
              <Switch>
                 <Route exact path="/" component={App} />
              </Switch>
          </Router>
      </div>
    )
}

export default About;