// import React from "react";

// function RightSection({
//   imageURL,
//   productName,
//   productDescription,
//   learnMore,
// }) {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 col-lg-5 p-lg-5 mt-lg-5 text-start text-lg-center">
//           <h2>{productName}</h2>
//           <p>{productDescription}</p>

//           <div>
//             <a
//               href={learnMore}
//               style={{textDecoration: "none" }}
//             >
//               Learn More →
//             </a>
//           </div>

//         </div>

//         <div className="col-12 col-lg-7 p-5">
//           <img src={imageURL} style={{ width: "100%" }} />
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default RightSection;

import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Text Column */}
        <div className="col-12 col-lg-5 p-lg-5 mt-lg-5 ">
          <h2 className="mb-1">{productName}</h2>
          <p className="mb-2">{productDescription}</p>

          <a
            href={learnMore}
            className="fw-semibold"
            style={{ textDecoration: "none" }}
          >
            Learn More →
          </a>
        </div>

        {/* Image Column */}
        <div className="col-12 col-lg-7 p-4 p-lg-5 d-flex justify-content-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default RightSection;
