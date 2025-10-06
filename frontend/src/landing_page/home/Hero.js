import React from 'react';

import './Hero.css';

function Hero() {
    return (
        <div className='container p-5 mb-5 '>
            <div className='row text-center'>

                <img src='media/homeHero.png' alt='Hero Image' className='mb-5' />

                <h1 className='mt-5 mb-4 fs-2 '>Invest in everything</h1>

                <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <button className='fs-lg-5 btn btn-primary mb-5 px-1 hero-btn' style={{width:"30%" ,margin:"0 auto"}}> Signup Now  </button>

                {/* <button
                className="p-2 btn btn-primary fs-5 mb-5"
                style={{ width: "20%", margin: "0 auto" }}
                > Sign Up</button> */}

         

                  
            </div>
        </div>

    );
}

export default Hero;