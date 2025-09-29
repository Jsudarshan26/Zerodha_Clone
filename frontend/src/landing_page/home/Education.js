import React from 'react';

function Education() {

    return (
         <div className='container mt-5'>
            <div className='row mt-5'>
               
                <div className='col-12 col-lg-6 mb-5 mb-lg-0 mt-5 '>

                  <img src="media/education.svg" style={{width:"70%"}}/>

                </div>

                <div className='col-12 col-lg-6 mt-5'>

                    <h1 className="fs-2">Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href="#" className="text-decoration-none me-3">
                      Varsity
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='mt-5'> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <a href="#" className="text-decoration-none me-3">
                      TeadingQ&A
                        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Education;