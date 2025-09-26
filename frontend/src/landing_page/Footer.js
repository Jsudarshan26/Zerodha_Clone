


import React from "react";

import "./Footer.css";

function Footer() {
  return (
    // px-md-2
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container  border-top mt-2 px-2">
        <div className="row mt-5">
          <div className="col-12 col-lg-3 mb-4">
            <img
              src="media/logo.svg"
              className=" w-25 w-lg-100"
              alt="Zerodha Logo"
            />

            <p className="text-muted mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Account */}
          <div className="col-12 col-lg-2 mb-5 ">
            <p className="fw-semibold fs-5">Account</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-link">
                Open demat account
              </a>
              <a href="" className="footer-link">
                Minor demat account
              </a>
              <a href="" className="footer-link">
                NRI demat account
              </a>
              <a href="" className="footer-link">
                Commodity
              </a>
              <a href="" className="footer-link">
                Dematerialisation
              </a>
              <a href="" className="footer-link">
                Fund transfer
              </a>
              <a href="" className="footer-link">
                MTF
              </a>
              <a href="" className="footer-link">
                Referral program
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-lg-2 mb-5">
            <p className="fw-semibold fs-5">Support</p>

            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-link">
                Contact us
              </a>
              <a href="" className="footer-link">
                Support portal
              </a>
              <a href="" className="footer-link">
                File complaint?
              </a>
              <a href="" className="footer-link">
                Status of your complaints
              </a>
              <a href="" className="footer-link">
                Bulletin
              </a>
              <a href="" className="footer-link">
                Circular
              </a>
              <a href="" className="footer-link">
                Z-Connect blog
              </a>
              <a href="" className="footer-link">
                Downloads
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-12 col-lg-2 mb-5">
            <p className="fw-semibold fs-5">Company</p>

            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-link">
                About
              </a>
              <a href="" className="footer-link">
                Philosophy
              </a>
              <a href="" className="footer-link">
                Press & media
              </a>
              <a href="" className="footer-link">
                Careers
              </a>
              <a href="" className="footer-link">
                Zerodha Cares (CSR)
              </a>
              <a href="" className="footer-link">
                Zerodha.tech
              </a>
              <a href="" className="footer-link">
                MTF
              </a>
              <a href="" className="footer-link">
                Open source
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-lg-2 mb-4">
            <p className="fw-semibold fs-5">Quick links</p>

            <div className="d-flex flex-column gap-2">
              <a href="" className="footer-link">
                Upcoming IPOs
              </a>
              <a href="" className="footer-link">
                Brokerage charges
              </a>
              <a href="" className="footer-link">
                Market holidays
              </a>
              <a href="" className="footer-link">
                Economic calendar
              </a>
              <a href="" className="footer-link">
                Calculators
              </a>
              <a href="" className="footer-link">
                Markets
              </a>
              <a href="" className=" footer-link">
                Sectors
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="pt-4 pb-4 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India...
          </p>
          {/* You can keep rest of the disclaimer as is */}

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        <div className="row ">
          {/* d-flex flex-row flex-wrap gap-3 */}
          <div
            className="col d-flex flex-row flex-wrap justify-content-center  gap-5 "
            style={{ fontSize: "14px" }}
          >
            <a href="" className="footer-link">
              NSE
            </a>

            <a href="" className="footer-link">
              BSE
            </a>

            <a href="" className="footer-link">
              MCX
            </a>

            <a href="" className="footer-link ">
              Terms & conditions
            </a>

            <a href="" className="footer-link">
              Policies & procedures
            </a>

            <a href="" className="footer-link">
              Privacy policy
            </a>

            <a href="" className="footer-link ">
              Disclosure
            </a>

            <a href="" className="footer-link">
              For investor's attention
            </a>

            <a href="" className="footer-link ">
              Investor charter
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;







// Deepseek 





