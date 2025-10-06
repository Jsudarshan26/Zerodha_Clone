

// GPT 

// import React from "react";

// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       {/* p */}
//       <div className="container p-2 px-lg-5">
//         <a className="navbar-brand" href="#">
//           <img src="media/logo.svg" style={{ width: "25%" }} alt="logo" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
//             {" "}
//              <li class="nav-item">

//                 <Link class="nav-link " aria-current="page" to="/signup">
//                   signup
//                 </Link>

//               </li>

//               <li class="nav-item">

//                 <Link class="nav-link" to="/about">
//                   About
//                 </Link>

//               </li>

//               <li class="nav-item">

//                 <Link class="nav-link" to="/product">
//                   Products
//                 </Link>

//               </li>

//               <li class="nav-item">

//                 <Link class="nav-link" to="/pricing">
//                   Pricing
//                 </Link>

//               </li>

//               <li class="nav-item">

//                 <Link class="nav-link" to="/support">

//                   Support
//                 </Link>
                
//               </li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;














// DeepSeek 

// import React from "react";

// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div className="container p-2 px-lg-5">
//         {/* Logo and Toggler in the same row */}
//         <div className="d-flex justify-content-between w-100 align-items-center">
//           <a className="navbar-brand" href="#">
//             <img src="media/logo.svg" style={{ width: "25%" }} alt="logo" />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" aria-current="page" to="/signup">
//                 signup
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/product">
//                 Products
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/pricing">
//                 Pricing
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/support">
//                 Support
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;





import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 px-lg-5">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" style={{ width: "25%" }} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2"> {/* Added mx-2 for horizontal margin */}
              <Link className="nav-link" aria-current="page" to="/signup">
                signup
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;





