import React from "react";

function Pricing() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="flex items-center gap-8">
          {/* Left Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-6">Unbeatable pricing</h2>

            <p className="text-gray-600 mb-4 max-w-md">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a className="text-blue-500 inline-flex items-center gap-1">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Right Pricing Box */}
          <div className="w-1/2">
            <div className="grid grid-cols-2 border border-gray-300 rounded-md overflow-hidden">
              {/* Left */}
              <div className="p-8 text-center border-r border-gray-300">
                <h3 className="text-3xl font-semibold mb-4">₹0</h3>
                <p className="text-sm text-gray-600">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>

              {/* Right */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-semibold mb-4">₹20</h3>
                <p className="text-sm text-gray-600">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
