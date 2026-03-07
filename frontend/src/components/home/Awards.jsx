import React from "react";

function Awards() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1100px] px-6 py-20">

        <div className="flex items-center gap-26">

          {/* Left Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/Assets/largestBroker.svg"
              alt="Largest Broker"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Largest stock broker in India
            </h2>

            <p className="text-gray-600 text-base max-w-xl mb-8">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="flex text-gray-700 text-[15px] mb-8">
              <ul className="w-1/2 list-disc space-y-3 pl-5">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>

              <ul className="w-1/2 list-disc space-y-3 pl-5">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt securities</li>
              </ul>
            </div>

            <img
              src="/Assets/pressLogos.png"
              alt="Press logos"
              className="max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Awards;
