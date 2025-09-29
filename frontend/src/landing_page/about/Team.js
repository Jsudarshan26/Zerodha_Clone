

import React from "react";

import "./About.css";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-4  border-top">
        <h1 className=" text-center ">People</h1>
      </div>

      <div
  className="row text-muted align-items-center"
  style={{ lineHeight: "1.5", fontSize: "1.2em", padding: "2rem 1rem" }} // reduced padding
>
  <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0"> {/* add margin-bottom on mobile */}
    <img
      src="media/nithinKamath.jpg"
      style={{
        borderRadius: "100%",
        width: "60%", // slightly bigger on mobile
        maxWidth: "250px",
        marginBottom: "1rem"
      }}
    />
    <h4>Nithin Kamath</h4>
    <p>Founder, CEO</p>
  </div>

  <div className="col-12 col-lg-6">
    <p>
      Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
      he faced during his decade long stint as a trader. Today, Zerodha has
      changed the landscape of the Indian broking industry.
    </p>

    <p>
      He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
      and the Market Data Advisory Committee (MDAC).
    </p>

    <p>Playing basketball is his zen.</p>

    <p>
      Connect on{" "}
      <a href="" style={{ textDecoration: "none" }}>
        Homepage
      </a>{" "}
      /{" "}
      <a href="" style={{ textDecoration: "none" }}>
        TradingQnA
      </a>{" "}
      /{" "}
      <a href="" style={{ textDecoration: "none" }}>
        Twitter
      </a>
    </p>
  </div>
</div>
    </div>
  );
}

export default Team;

