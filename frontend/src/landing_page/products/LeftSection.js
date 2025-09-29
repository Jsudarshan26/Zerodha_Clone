import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-start">

        <div className="col-12 col-lg-7 p-5 d-flex justify-content-center">
          <img src={imageURL} style={{ width: "100%" }} />
        </div>

        <div className="col-12 col-lg-5 p-lg-5 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemo} →{" "}
            </a>

            <a
              href={learnMore}
              style={{ marginLeft: "30px", textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" />
            </a>

            <a href={appStore} style={{ marginLeft: "30px" }}>
              <img src="media/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default LeftSection;
