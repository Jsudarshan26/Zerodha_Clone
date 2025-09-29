// import React from 'react';

// function Stats() {
//     return (

//         <div className='container p-5'>
//             <div className='row '>
//                 <div className='col-6 '>

//                     <h1 className='fs-2 mb-4'>Trust with confidence</h1>

//                     <h2 className='fs-4'>Customer-first always</h2>

//                     <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

//                     <h2 className='fs-4'>No spam or gimmicks</h2>

//                     <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>

//                     <h2 className='fs-4'>The Zerodha universe</h2>

//                     <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

//                     <h2 className='fs-4'>Do better with money</h2>

//                     <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
 

//                 </div>

//                 <div className='col-6'>

//                     <img src='media/ecosystem.png' style={{ width: "90%" }} />

//                     <div className='text-center '>

//                         <a href='' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
//                         &nbsp; &nbsp; &nbsp;

//                         <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Stats;



// 2nd 


import React from 'react';

function Stats() {
  return (
    <div className="container py-5 mt-4 ">
      <div className="row d-flex align-items-stretch">

        {/* Left column: text (stacks to full width below lg) */}
        <div className="col-12 col-lg-6">
          <h1 className="fs-3 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
            investments, making us India’s largest broker; contributing to 15% of daily retail
            exchange volumes in India.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
            that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you
            tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
            actively help you do better with your money.
          </p>
        </div>

        {/* Right column: image with links below */}
        <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
          <img
            src="media/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-3"
            style={{ maxWidth: '90%', height: 'auto' }}
          />

          <div className="text-center">
            <a href="#" className="text-decoration-none me-3">
              Explore our products <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite demo <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;







// import React from 'react';

// function Stats() {
//   return (
//     <div className="container py-5">
//       {/* Use Bootstrap's md breakpoint (~768px) to switch at >800 */}
//       <div className="row d-flex align-items-stretch">

//         {/* Left column: text (stacks to full width below md) */}
//         <div className="col-12 col-md-6">
//           <h1 className="fs-2 mb-4">Trust with confidence</h1>

//           <h2 className="fs-4">Customer-first always</h2>
//           <p className="text-muted">
//             That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
//             investments, making us India’s largest broker; contributing to 15% of daily retail
//             exchange volumes in India.
//           </p>

//           <h2 className="fs-4">No spam or gimmicks</h2>
//           <p className="text-muted">
//             No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
//             that you use at your pace, the way you like.
//           </p>

//           <h2 className="fs-4">The Zerodha universe</h2>
//           <p className="text-muted">
//             Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you
//             tailored services specific to your needs.
//           </p>

//           <h2 className="fs-4">Do better with money</h2>
//           <p className="text-muted">
//             With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
//             actively help you do better with your money.
//           </p>
//         </div>

//         {/* Right column: image with links below */}
//         <div className="col-12 col-md-6 d-flex flex-column align-items-center">
//           <img
//             src="media/ecosystem.png"
//             alt="Zerodha ecosystem"
//             className="img-fluid mb-3"
//             style={{ maxWidth: '90%', height: 'auto' }}
//           />

//           <div className="text-center">
//             <a href="#" className="text-decoration-none me-3">
//               Explore our products <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
//             </a>
//             <a href="#" className="text-decoration-none">
//               Try Kite demo <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Stats;

