import React from 'react';

import ExampleChart from '../../components/Chart/Chart';
import './About.css';

const About = () => {
    return (
        <div className='wrapper'>
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
        </div>
    );
}

export default About;
