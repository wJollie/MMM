import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import engine from '../assets/images/Engine.png';
import battery from '../assets/images/Battery.png';
import oil from '../assets/images/Oil.png';

import '../assets/css/NavCss.css';


const Navbar = () => {


return (
    <div className="navWrapper">
        <header>
            <div className="navImageWrapper">
            <img className="navImages" src={engine} alt="Engine" />
            <img className="navImages" src={battery} alt="Car Battery" />
            <img className="navImages" src={oil} alt="Oil Can" />
            </div>
        <h1 className="title">Mobile Master Mechanic</h1>
        <h4 className="description">Independent Car Repairs at Fair and Friendly Costs</h4>
        </header>
    </div>
);

};



export default Navbar;