import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row  mt-4 p-5 text-center border-top">
        <div className="col-12 col-lg-8 mb-4 mb-lg-0">
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-3 mb-3 text-start m-3 ">Brokerage Calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-3 m-3">List Of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
