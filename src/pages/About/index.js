import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <h2>Css Skills Bar UI Design</h2>
            <div className="skills">
                <span className="Name">Html</span>
                <div className="percent">
                    <div className="progresses" style={{width: '67%'}}></div>
                </div>
                <span className="Value">67%</span>
            </div>

            <div className="skills">
                <span className="Name">Css</span>
                <div className="percent">
                    <div className="progresses" style={{width: '80%'}}></div>
                </div>
                <span className="Value">80%</span>
            </div>

            <div className="skills">
                <span className="Name">Javascript</span>
                <div className="percent">
                    <div className="progresses" style={{width: '21%'}}></div>
                </div>
                <span className="Value">21%</span>
            </div>

            <div className="skills">
                <span className="Name">React</span>
                <div className="percent">
                    <div className="progresses" style={{width: '17%'}}></div>
                </div>
                <span className="Value">17%</span>
            </div>

            <div className="skills">
                <span className="Name">Payton</span>
                <div className="percent">
                    <div className="progresses" style={{width: '1%'}}></div>
                </div>
                <span className="Value">1%</span>
            </div>

            <div className="skills">
                <span className="Name">YouTube</span>
                <div className="percent">
                    <div className="progresses" style={{width: '12%'}}></div>
                </div>
                <span className="Value">12%</span>
            </div>
        </div>
    );
}

export default About;
