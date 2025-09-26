import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row  mb-5'>
                <div className='col-12 col-lg-4 mb-4 mb-lg-0'>

                    <h1 className="fs-2">unbeatable pricing</h1>

                    <p> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href="#" className="text-decoration-none me-3">
                      Explore our products 
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>

                </div>
                                    
                <div className='col-2'></div>

                <div className='col-12 col-lg-6'>

                    <div className='row text-center'>

                        <div className='col border p-2'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign fs-2"></i>0</h1>

                            <p>Free equity delivery and<br></br> direct mutual funds</p>
                        </div>

                        <div className='col border p-2'>
                            <h1 className='mb-3  '><i class="fa-solid fa-indian-rupee-sign fs-2 "></i>0</h1>

                            <p>Intraday and F&O</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;