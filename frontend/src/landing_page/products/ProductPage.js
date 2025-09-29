import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import OpenAccount from "../OpenAccount";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/kite.png"
        productName="Kite by Zerodha"
        productDescription="Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really."
        tryDemo="Try Demo"
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
       imageURL="media/newConsole.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.  Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy."
        learnMore="" />

      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="" />



      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="try Demo "
        learnMore=""
        googlePlay=""
        appStore=""
      />
      
      <Universe />
      {/* <OpenAccount /> */}
    </>
  );
}

export default ProductPage;
