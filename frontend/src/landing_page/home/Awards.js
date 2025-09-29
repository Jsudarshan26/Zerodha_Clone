import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>

            <div className='row d-flex align-items-stretch'>

                {/* mb-5 mb-lg-0  */}

                <div className=' p-4 col-12 col-lg-6     d-flex justify-content-center align-items-center '>

                    <img src='media/largestBroker.svg' className="img-fluid mx-auto d-block " style={{width:"70%"}} />

                </div>


                {/* // right  */}
                <div className='p-4 col-12 col-lg-6   d-flex flex-column justify-content-center '>
                    <h1 className='text-center text-lg-start'>Largest stock Broker in India</h1>

                    <p className='mb-xl-5 text-center text-lg-start '>2+ million Zerodha clients contribute to over 15% of all order volumes in india daily by trading and investing in:</p>

                    <div className='row '>

                        <div className='col-6'>

                            <ul>
                                <li>Futures and Options </li>

                                <li>Commodity derivatives </li>

                                <li>Currency derivatives </li>

                            </ul>

                        </div>

                        <div className='col-6'>

                            <ul>
                                <li>Stocks & IPOs </li>

                                <li>Direct mutual funds</li>

                                <li> Bonds and Securities </li>

                            </ul>

                        </div>

                    </div>

                    <img src='media/pressLogos.png' alt='press Img' className="img-fluid mx-auto d-block" />


                </div>

            </div>

        </div>
    );
}

// col-12 col-lg-6

export default Awards;












// import React from 'react';

// function Awards() {
//   return (
//     <div className="container mt-5">
//       {/* Row with full-height flex and aligned columns */}
//       <div className="row d-flex align-items-stretch">

//         {/* Left Column - Image */}
//         <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
//           <img
//             src="media/largestBroker.svg"
//             className="img-fluid"
//             style={{ maxHeight: '100%', objectFit: 'contain' }}
//             alt="Largest Broker"
//           />
//         </div>

//         {/* Right Column - Text & Lists */}
//         <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
//           <h1 className="text-center text-lg-start">Largest Stock Broker in India</h1>
//           <p>
//             2+ million Zerodha clients contribute to over 15% of all order volumes in India daily by trading and investing in:
//           </p>

//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>Futures and Options</li>
//                 <li>Commodity derivatives</li>
//                 <li>Currency derivatives</li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <ul>
//                 <li>Stocks & IPOs</li>
//                 <li>Direct mutual funds</li>
//                 <li>Bonds and Securities</li>
//               </ul>
//             </div>
//           </div>

//           <img src="media/pressLogos.png" className="img-fluid mx-auto d-block mt-3" alt="Press Logos" />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Awards;
