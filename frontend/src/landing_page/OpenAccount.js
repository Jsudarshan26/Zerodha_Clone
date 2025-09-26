import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-2 ">
      <div className="row text-center">
        <h1 className="mt-5 mb-4 fs-2 ">Open a Zerodha account</h1>

        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

         <button className='fs-lg-5 btn btn-primary mb-5 px-1 hero-btn' style={{width:"30%" ,margin:"0 auto"}}> Signup Now  </button>

        {/* <button
                className="p-2 btn btn-primary fs-5 mb-5"
                style={{ width: "20%", margin: "0 auto" }}
                > Sign Up</button> */}
      </div>
    </div>
  );
}

export default OpenAccount;
