// import React from "react";

// function Hero() {
//   //  p-lf-5 mt-lg-5 mb-lg-5
//   return (
//     <section className="container-fluid" id="supportHero">

//       <div className=" p-3" id="supportWrapper">

//         <h4>Support Portal</h4>

//         <a href="">Track Tickets</a>
//       </div>

//       <div className="row p-4 m-4 ">
//         <div className="col-6 p-5 ">
//           <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>

//           <input placeholder="Eg. how do I activate F&O" />
//           <br />

//           <a href="">Track account Opening</a>&nbsp;&nbsp;&nbsp;
//           <a href="">track segment activation</a>&nbsp;&nbsp;&nbsp;
//           <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
//           <a href="">kite user manual</a>&nbsp;&nbsp;

//         </div>

//         <div className="col-6 p-5 ">
//           <h1 className="fs-3">Featured</h1>

//           <ol>
//             <li>
//               <a href="">Current Takeovers and Delisting-January 2024
//               </a>
//             </li>

//             <li>  <a href="">Latest Inraday-MIS & CO</a></li>

//           </ol>

          

       
//         </div>

       
//       </div>
//     </section>
//   );
// }

// export default Hero;





// GPT MAIYYA 






import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Wrapper with responsive spacing */}
      <div className="p-3 px-md-5 d-flex flex-column flex-md-row justify-content-between align-items-start" id="supportWrapper">
        <h4 className="mb-2 mb-md-0">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row g-4 p-3 p-md-4 m-1 m-md-4">
        {/* Left Section */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-4 fs-md-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input placeholder="Eg. how do I activate F&O" className="mb-3" />

          <div className="d-flex flex-wrap gap-3 mt-2">
            <a href="">Track account Opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-4 fs-md-3">Featured</h1>

          <ol className="ps-3">
            <li>
              <a href="">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday – MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;


