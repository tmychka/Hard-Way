import React from 'react';
import './About.css';

const About = () => {


    const v1 = '67'
    const v2 = '80'
    const v3 = '21'


    return (
        <div className="container">
            <h2>Marathon Progress   2022 - 2023</h2>
            <div className="skills">
                <span className="Name">Programiring</span>
                <div className="percent">
                    <div className="progresses" style={{width: `${v1}%`}}></div>
                </div>
                <span className="Value">{v1}%</span>
            </div>

            <div className="skills">
                <span className="Name">English</span>
                <div className="percent">
                    <div className="progresses" style={{width: `${v2}%`}}></div>
                </div>
                <span className="Value">{v2}%</span>
            </div>

            <div className="skills">
                <span className="Name">Sport</span>
                <div className="percent">
                    <div className="progresses" style={{width: `${v3}%`}}></div>
                </div>
                <span className="Value">{v3}%</span>
            </div>
        </div>
    );
}

export default About;
