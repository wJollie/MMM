import React from 'react';
import ex1 from '../assets/images/Ex1.jpeg';
import ex2 from '../assets/images/Ex2.jpeg';
import ex3 from '../assets/images/Ex3.jpeg';
import ex4 from '../assets/images/Ex4.jpg';
import ex5 from '../assets/images/Ex5.jpg';
import ex6 from '../assets/images/Ex6.jpg';
import ex7 from '../assets/images/Ex7.jpg';
import ex8 from '../assets/images/Ex8.jpg';
import ex9 from '../assets/images/Ex9.jpg';


import '../assets/css/HomeCss.css';


function Home() {
  return (
    <div className="HomeWrapper">
        <h1 className="HomeTitle">Scheduling</h1>
        <div className="HomeButtonWrapper">
        <button className="HomeButton">Detailing</button>
        <button className="HomeButton">Get a Quote</button>
        </div>
        <div className="HomePhotoWrapper">
            <img className="HomePhoto" src={ex1} alt="Ex1" />
            <img className="HomePhoto" src={ex2} alt="Ex2" />
            <img className="HomePhoto" src={ex3} alt="Ex3" />
            <img className="HomePhoto" src={ex4} alt="Ex4" />
            <img className="HomePhoto" src={ex5} alt="Ex5" />
            <img className="HomePhoto" src={ex6} alt="Ex6" />
            <img className="HomePhoto" src={ex7} alt="Ex7" />
            <img className="HomePhoto" src={ex8} alt="Ex8" />
            <img className="HomePhoto" src={ex9} alt="Ex9" />
        </div>
    </div>
  );
}


export default Home;