import React from "react";

import "./hero.css";

function Hero() {
  return (
    <div className="container ">
      <div className="row mt-5 p-5 text-center">
        <h1 className="fs-2 mb-3 ">Charges</h1>

        <h4 className="text-muted fw-normal fs-5">
          List of all charges and taxes
        </h4>
      </div>
      <div className="row mb-5 mt-5 p-5 text-center">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <img src="media/pricingEquity.svg" className="img-fluid hero-img"/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <img src="media/other-trades.svg" className="img-fluid hero-img" />
          <h1  className="fs-3" >Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <img src="media/pricingMF.svg" className="img-fluid hero-img" />
          <h1  className="fs-3" >Free direct MF</h1>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
