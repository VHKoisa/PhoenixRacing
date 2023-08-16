import React from "react";
import './info.css';

const cars = [
    {
        name: 'Yuyutsu',
        image: '',
        year: 2009,
        description: '20th out of 59'
    },
    {
        name: 'Ashwamedh',
        image: '',
        year: 2007,
        description: 'Overall 7th out of 29(1st in hill climbing, 3rd in design and cost report'
    },
    {
        name: 'Pushpak',
        image: '',
        year: 2006,
        description: 'Won the chairman\'s award at BAJA\'06 Portland'
    },
    {
        name: 'Garuna',
        image: '',
        year: 2005,
        description: 'Given the status of SAE Indian vehicle by ARAI'
    },
]

function Info() {
    return (
        <div className="infoparent">
            {
                cars.map(({ description, name, year }) => {
                    return (
                        <div className="info1">
                            <div className="yearinfo">
                                <h3>
                                    {year}
                                </h3>
                            </div>
                            <div className="carinfo">
                                <h3>{name}</h3>
                                <h4>
                                    {description}
                                </h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Info;