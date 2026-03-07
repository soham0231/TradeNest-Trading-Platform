import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <img
              src="/Assets/logo.svg"
              alt="Zerodha"
              className="h-6 mb-4 ml-5"
            />

            <p className="text-sm mb-7 text-left ml-5">
              © 2010–2024, Zerodha Broking Ltd. <br />
              &nbsp; All rights reserved.
            </p>

            <div className="flex space-x-4 text-lg ml-5">
              <i className="fa-brands fa-x-twitter cursor-pointer"></i>
              <i className="fa-brands fa-facebook cursor-pointer"></i>
              <i className="fa-brands fa-instagram cursor-pointer"></i>
              <i className="fa-brands fa-linkedin cursor-pointer"></i>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programme</li>
              <li>Careers</li>
              <li>Zerodha.tech</li>
              <li>Press & media</li>
              <li>Zerodha Cares (CSR)</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>Open an account</li>
              <li>Fund transfer</li>
              <li>60 day challenge</li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 text-xs text-gray-500 leading-relaxed">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="mt-2">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievance
          </p>

          <p className="mt-2">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="mt-2">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="mt-2">
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p className="mt-2">
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
      </div>
    </footer>
  );
}
