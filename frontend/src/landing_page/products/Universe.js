import React from "react";

function Universe() {
  return (
    <>
      <h4 className="text-center mt-5 mb-5 pb-5 fs-4 fw-normal">
        {" "}
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech{" "}
        </a>
        blog.
      </h4>
      <div className="container">
        <div className="row text-center ">
          <h1 className="mb-3 fs-4 fw-semibold">The Zerodha Universe</h1>

          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/ZerodhaFundhouse.png"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds.
            </p>
          </div>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/sensibullLogo.svg"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3">
              Options trading platform that lets you create strategies.
            </p>
          </div>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/streakLogo.png"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3">
              Systematic trading platform that allows you to create strategies
              without coding.
            </p>
          </div>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/smallcaseLogo.png"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3 ">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs
            </p>
          </div>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/tijori.svg"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights.
            </p>
          </div>

          <div className="col-6 col-lg-4 p-3 mt-5">
            <img
              src="./media/ditto-logo.png"
              style={{ width: "198px", height: "52px" }}
            />
            <p className="text-small text-muted mt-3">
              Personalized advice on life and health insurance.
            </p>
          </div>
          <button
            className="fs-lg-5  btn btn-primary mb-5 mt-5 px-1 hero-btn"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={() =>
              (window.location.href =
                "https://zerodha-clone-dashboard-krkg.onrender.com/")
            }
          >
            {" "}
            Signup Now{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
