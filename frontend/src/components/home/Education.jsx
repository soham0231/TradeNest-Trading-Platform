import React from "react";

function Education() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="flex items-center gap-27">

          {/* Left Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/Assets/education.svg"
              alt="Education"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-900">
              Free and open market education
            </h2>

            <p className="mt-9 mb-3 text-gray-700 max-w-xl">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>

            <a className="text-blue-500 inline-flex items-center gap-1">
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>

            <p className="mt-11 mb-3 text-gray-700 max-w-xl">
              TradingQ&amp;A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a className="text-blue-500 inline-flex items-center gap-1">
              TradingQ&amp;A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
