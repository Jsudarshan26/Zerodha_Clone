import React from 'react';

function Hero() {
    return (
       <div className='container text-center mt-4 p-3  pb-5 border-bottom mb-5 '>
        <h2 className='mb-3  fw-normal'>Zerodha Products</h2>
        <h4 className='mb-3 text-muted  fw-normal'>Sleek, modern, and intuitive trading platforms</h4>
        <p>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings → </a>  </p>
       </div>
    );
}

export default Hero;